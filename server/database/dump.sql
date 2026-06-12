--
-- PostgreSQL database dump
--

\restrict bqWpoYsoYcBCNxjrs1CVfafcJlCKAH83drFY4ZQmfOrgnTpbvS0O2wLcb9OeZZM

-- Dumped from database version 18.3 (Debian 18.3-1.pgdg12+1)
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

--
-- Name: bridal_prep; Type: SCHEMA; Schema: -; Owner: bridal_prep_user
--

CREATE SCHEMA bridal_prep;


ALTER SCHEMA bridal_prep OWNER TO bridal_prep_user;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: bridal_prep_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO bridal_prep_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: budgets; Type: TABLE; Schema: bridal_prep; Owner: bridal_prep_user
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


ALTER TABLE bridal_prep.budgets OWNER TO bridal_prep_user;

--
-- Name: budgets_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE SEQUENCE bridal_prep.budgets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.budgets_id_seq OWNER TO bridal_prep_user;

--
-- Name: budgets_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER SEQUENCE bridal_prep.budgets_id_seq OWNED BY bridal_prep.budgets.id;


--
-- Name: checklist_items; Type: TABLE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE TABLE bridal_prep.checklist_items (
    id integer NOT NULL,
    user_id integer,
    item_text text NOT NULL,
    is_completed boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.checklist_items OWNER TO bridal_prep_user;

--
-- Name: checklist_items_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE SEQUENCE bridal_prep.checklist_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.checklist_items_id_seq OWNER TO bridal_prep_user;

--
-- Name: checklist_items_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER SEQUENCE bridal_prep.checklist_items_id_seq OWNED BY bridal_prep.checklist_items.id;


--
-- Name: quiz_results; Type: TABLE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE TABLE bridal_prep.quiz_results (
    id integer NOT NULL,
    user_id integer,
    style_profile text NOT NULL,
    image_urls text[],
    quiz_version integer DEFAULT 1 NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE bridal_prep.quiz_results OWNER TO bridal_prep_user;

--
-- Name: quiz_results_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE SEQUENCE bridal_prep.quiz_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.quiz_results_id_seq OWNER TO bridal_prep_user;

--
-- Name: quiz_results_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER SEQUENCE bridal_prep.quiz_results_id_seq OWNED BY bridal_prep.quiz_results.id;


--
-- Name: users; Type: TABLE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE TABLE bridal_prep.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    name character varying(100),
    role text DEFAULT 'bride'::text NOT NULL
);


ALTER TABLE bridal_prep.users OWNER TO bridal_prep_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: bridal_prep; Owner: bridal_prep_user
--

CREATE SEQUENCE bridal_prep.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE bridal_prep.users_id_seq OWNER TO bridal_prep_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER SEQUENCE bridal_prep.users_id_seq OWNED BY bridal_prep.users.id;


--
-- Name: budgets id; Type: DEFAULT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.budgets ALTER COLUMN id SET DEFAULT nextval('bridal_prep.budgets_id_seq'::regclass);


--
-- Name: checklist_items id; Type: DEFAULT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.checklist_items ALTER COLUMN id SET DEFAULT nextval('bridal_prep.checklist_items_id_seq'::regclass);


--
-- Name: quiz_results id; Type: DEFAULT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.quiz_results ALTER COLUMN id SET DEFAULT nextval('bridal_prep.quiz_results_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.users ALTER COLUMN id SET DEFAULT nextval('bridal_prep.users_id_seq'::regclass);


--
-- Data for Name: budgets; Type: TABLE DATA; Schema: bridal_prep; Owner: bridal_prep_user
--

COPY bridal_prep.budgets (id, user_id, ideal_budget, max_budget, hidden_costs_total, final_estimate, created_at) FROM stdin;
\.


--
-- Data for Name: checklist_items; Type: TABLE DATA; Schema: bridal_prep; Owner: bridal_prep_user
--

COPY bridal_prep.checklist_items (id, user_id, item_text, is_completed, created_at) FROM stdin;
\.


--
-- Data for Name: quiz_results; Type: TABLE DATA; Schema: bridal_prep; Owner: bridal_prep_user
--

COPY bridal_prep.quiz_results (id, user_id, style_profile, image_urls, quiz_version, created_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: bridal_prep; Owner: bridal_prep_user
--

COPY bridal_prep.users (id, email, password_hash, created_at, name, role) FROM stdin;
\.


--
-- Name: budgets_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: bridal_prep_user
--

SELECT pg_catalog.setval('bridal_prep.budgets_id_seq', 75, true);


--
-- Name: checklist_items_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: bridal_prep_user
--

SELECT pg_catalog.setval('bridal_prep.checklist_items_id_seq', 1369, true);


--
-- Name: quiz_results_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: bridal_prep_user
--

SELECT pg_catalog.setval('bridal_prep.quiz_results_id_seq', 168, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: bridal_prep; Owner: bridal_prep_user
--

SELECT pg_catalog.setval('bridal_prep.users_id_seq', 2, true);


--
-- Name: budgets budgets_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.budgets
    ADD CONSTRAINT budgets_pkey PRIMARY KEY (id);


--
-- Name: checklist_items checklist_items_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.checklist_items
    ADD CONSTRAINT checklist_items_pkey PRIMARY KEY (id);


--
-- Name: quiz_results quiz_results_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.quiz_results
    ADD CONSTRAINT quiz_results_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: budgets budgets_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.budgets
    ADD CONSTRAINT budgets_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE CASCADE;


--
-- Name: checklist_items checklist_items_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.checklist_items
    ADD CONSTRAINT checklist_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE CASCADE;


--
-- Name: quiz_results quiz_results_user_id_fkey; Type: FK CONSTRAINT; Schema: bridal_prep; Owner: bridal_prep_user
--

ALTER TABLE ONLY bridal_prep.quiz_results
    ADD CONSTRAINT quiz_results_user_id_fkey FOREIGN KEY (user_id) REFERENCES bridal_prep.users(id) ON DELETE SET NULL;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO bridal_prep_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO bridal_prep_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO bridal_prep_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO bridal_prep_user;


--
-- PostgreSQL database dump complete
--

\unrestrict bqWpoYsoYcBCNxjrs1CVfafcJlCKAH83drFY4ZQmfOrgnTpbvS0O2wLcb9OeZZM

