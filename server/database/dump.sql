--
-- PostgreSQL database dump
--

\restrict bTrkLoLdKCnjvfGgQnMOfACUTipAgOkHbOUfl4QHtnLiEJ20tCCdx0MYPCOoK2a

-- Dumped from database version 18.1 (Homebrew)
-- Dumped by pg_dump version 18.1 (Homebrew)

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

--
-- Name: bridal_prep; Type: SCHEMA; Schema: -; Owner: redu
--

CREATE SCHEMA bridal_prep;


ALTER SCHEMA bridal_prep OWNER TO redu;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: budgets; Type: TABLE; Schema: bridal_prep; Owner: redu
--

CREATE TABLE bridal_prep.budgets (
    id integer NOT NULL,
    user_id integer,
    ideal_budget integer NOT NULL,
    max_budget integer NOT NULL,
    hidden_costs_total integer NOT NULL,
    final_estimate integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.budgets OWNER TO redu;

--
-- Name: budgets_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: redu
--

CREATE SEQUENCE bridal_prep.budgets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.budgets_id_seq OWNER TO redu;

--
-- Name: budgets_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: redu
--

ALTER SEQUENCE bridal_prep.budgets_id_seq OWNED BY bridal_prep.budgets.id;


--
-- Name: checklist_items; Type: TABLE; Schema: bridal_prep; Owner: redu
--

CREATE TABLE bridal_prep.checklist_items (
    id integer NOT NULL,
    user_id integer,
    item_text text NOT NULL,
    is_completed boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.checklist_items OWNER TO redu;

--
-- Name: checklist_items_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: redu
--

CREATE SEQUENCE bridal_prep.checklist_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.checklist_items_id_seq OWNER TO redu;

--
-- Name: checklist_items_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: redu
--

ALTER SEQUENCE bridal_prep.checklist_items_id_seq OWNED BY bridal_prep.checklist_items.id;


--
-- Name: quiz_results; Type: TABLE; Schema: bridal_prep; Owner: redu
--

CREATE TABLE bridal_prep.quiz_results (
    id integer NOT NULL,
    user_id integer,
    style_profile text NOT NULL,
    image_urls text[],
    quiz_version integer DEFAULT 1 NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.quiz_results OWNER TO redu;

--
-- Name: quiz_results_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: redu
--

CREATE SEQUENCE bridal_prep.quiz_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.quiz_results_id_seq OWNER TO redu;

--
-- Name: quiz_results_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: redu
--

ALTER SEQUENCE bridal_prep.quiz_results_id_seq OWNED BY bridal_prep.quiz_results.id;


--
-- Name: users; Type: TABLE; Schema: bridal_prep; Owner: redu
--

CREATE TABLE bridal_prep.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.users OWNER TO redu;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: redu
--

CREATE SEQUENCE bridal_prep.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.users_id_seq OWNER TO redu;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: redu
--

ALTER SEQUENCE bridal_prep.users_id_seq OWNED BY bridal_prep.users.id;


--
-- Name: budgets id; Type: DEFAULT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.budgets ALTER COLUMN id SET DEFAULT nextval('bridal_prep.budgets_id_seq'::regclass);


--
-- Name: checklist_items id; Type: DEFAULT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.checklist_items ALTER COLUMN id SET DEFAULT nextval('bridal_prep.checklist_items_id_seq'::regclass);


--
-- Name: quiz_results id; Type: DEFAULT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.quiz_results ALTER COLUMN id SET DEFAULT nextval('bridal_prep.quiz_results_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.users ALTER COLUMN id SET DEFAULT nextval('bridal_prep.users_id_seq'::regclass);


--
-- Data for Name: budgets; Type: TABLE DATA; Schema: bridal_prep; Owner: redu
--

COPY bridal_prep.budgets (id, user_id, ideal_budget, max_budget, hidden_costs_total, final_estimate, created_at) FROM stdin;
\.


--
-- Data for Name: checklist_items; Type: TABLE DATA; Schema: bridal_prep; Owner: redu
--

COPY bridal_prep.checklist_items (id, user_id, item_text, is_completed, created_at) FROM stdin;
\.


--
-- Data for Name: quiz_results; Type: TABLE DATA; Schema: bridal_prep; Owner: redu
--

COPY bridal_prep.quiz_results (id, user_id, style_profile, image_urls, quiz_version, created_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: bridal_prep; Owner: redu
--

COPY bridal_prep.users (id, email, password_hash, created_at) FROM stdin;
\.


--
-- Name: budgets_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: redu
--

SELECT pg_catalog.setval('bridal_prep.budgets_id_seq', 1, false);


--
-- Name: checklist_items_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: redu
--

SELECT pg_catalog.setval('bridal_prep.checklist_items_id_seq', 1, false);


--
-- Name: quiz_results_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: redu
--

SELECT pg_catalog.setval('bridal_prep.quiz_results_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: redu
--

SELECT pg_catalog.setval('bridal_prep.users_id_seq', 1, false);


--
-- Name: budgets budgets_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.budgets
    ADD CONSTRAINT budgets_pkey PRIMARY KEY (id);


--
-- Name: checklist_items checklist_items_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.checklist_items
    ADD CONSTRAINT checklist_items_pkey PRIMARY KEY (id);


--
-- Name: quiz_results quiz_results_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.quiz_results
    ADD CONSTRAINT quiz_results_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: budgets budgets_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.budgets
    ADD CONSTRAINT budgets_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE CASCADE;


--
-- Name: checklist_items checklist_items_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.checklist_items
    ADD CONSTRAINT checklist_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE CASCADE;


--
-- Name: quiz_results quiz_results_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: redu
--

ALTER TABLE ONLY bridal_prep.quiz_results
    ADD CONSTRAINT quiz_results_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict bTrkLoLdKCnjvfGgQnMOfACUTipAgOkHbOUfl4QHtnLiEJ20tCCdx0MYPCOoK2a

