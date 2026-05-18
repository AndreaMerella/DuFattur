create table if not exists public.invoices (
  id            text          primary key,
  public_token  uuid          not null default gen_random_uuid(),
  user_id       uuid          not null references auth.users(id) on delete cascade,
  client        text          not null,
  client_email  text,
  issue_date    date,
  due_date      date,
  notes         text,
  items         jsonb         not null default '[]',
  total         numeric(12,2) not null default 0,
  status        text          not null default 'pending' check (status in ('pending','approved','paid')),
  created_at    timestamptz   not null default now()
);

create table if not exists public.settings (
  user_id       uuid          primary key references auth.users(id) on delete cascade,
  name          text,
  email         text,
  vat           text,
  address       text,
  default_rate  numeric(10,2) default 50,
  tax_rate      numeric(5,2)  default 15,
  currency      text          default 'EUR',
  terms         text,
  due_days      integer       default 30,
  lang          text          default 'it',
  updated_at    timestamptz   default now()
);

alter table public.invoices enable row level security;
alter table public.settings  enable row level security;

-- Authenticated owner: full CRUD on invoices
create policy "owner_invoices" on public.invoices for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Anon: read any invoice by public_token (UUID = unguessable)
create policy "anon_read" on public.invoices for select to anon using (true);

-- Anon: approve a pending invoice
create policy "anon_approve" on public.invoices for update to anon
  using (status = 'pending') with check (status = 'approved');

-- Authenticated owner: full CRUD on settings
create policy "owner_settings" on public.settings for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── MIGRATION v3.1: International Compliance ──────────────────────────
-- Run this in Supabase SQL Editor if you already have the tables above.

alter table public.settings
  add column if not exists country          text          default 'IT',
  add column if not exists vat2             text,
  add column if not exists iban             text,
  add column if not exists vat_on_invoice   numeric(5,2)  default 22,
  add column if not exists vat_enabled      boolean       default true,
  add column if not exists ritenuta         boolean       default false,
  add column if not exists kleinunternehmer boolean       default false,
  add column if not exists autoentrepreneur boolean       default false;

alter table public.invoices
  add column if not exists subtotal          numeric(12,2) default 0,
  add column if not exists vat_amount        numeric(12,2) default 0,
  add column if not exists vat_rate          numeric(5,2)  default 0,
  add column if not exists ritenuta_amount   numeric(12,2) default 0,
  add column if not exists tax_name          text;
