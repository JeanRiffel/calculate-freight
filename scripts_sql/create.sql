-- Table: public.customers

-- DROP TABLE IF EXISTS public.customers;

CREATE TABLE IF NOT EXISTS public.customers
(
    id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    postal_code numeric,
    CONSTRAINT customers_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.customers
    OWNER to john;


-- Table: public.products

-- DROP TABLE IF EXISTS public.products;

CREATE TABLE IF NOT EXISTS public.products
(
    id text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    weight numeric,
    height numeric,
    length numeric,
    width numeric,
    price numeric,
    CONSTRAINT products_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.products
    OWNER to john;