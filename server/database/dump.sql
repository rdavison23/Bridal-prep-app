--
-- PostgreSQL database dump
--

\restrict kIW3zqcWTcoNw4f75cyYrAgM2sM7Knn6cf9nefVfXfoJXm3lfIQffvqZrfurWgo

-- Dumped from database version 18.3 (Homebrew)
-- Dumped by pg_dump version 18.3 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: redu
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title text NOT NULL,
    author text NOT NULL,
    year integer
);


ALTER TABLE public.books OWNER TO redu;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: redu
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.books_id_seq OWNER TO redu;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: redu
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: redu
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title text NOT NULL,
    date date NOT NULL,
    description text,
    is_favorite boolean DEFAULT false
);


ALTER TABLE public.events OWNER TO redu;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: redu
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.events_id_seq OWNER TO redu;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: redu
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: redu
--

COPY public.books (id, title, author, year) FROM stdin;
1	Maki	Redu 	1994
2	Redu 	Wolde 	2013
3	Pam 	Noah 	2000
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: redu
--

COPY public.events (id, title, date, description, is_favorite) FROM stdin;
1	Birthday	2026-07-23	Birthday celebration!	t
2	Easter	2026-05-05	sun, Apr 5th Easter!	f
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: redu
--

SELECT pg_catalog.setval('public.books_id_seq', 3, true);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: redu
--

SELECT pg_catalog.setval('public.events_id_seq', 2, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: redu
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict kIW3zqcWTcoNw4f75cyYrAgM2sM7Knn6cf9nefVfXfoJXm3lfIQffvqZrfurWgo

