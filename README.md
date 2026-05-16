# Bridal Prep App 💍

Bridal Prep is a PERN‑stack web app designed to reduce overwhelm for brides by offering a guided style quiz, budget clarity, and appointment preparation tools. The goal is to turn "I don't know where to start" into "I'm ready."

## Features (MVP)

- Style Discovery Quiz
- Style Profile (placeholder logic implemented)
- Bridal image recommendations via Pexels API
- Budget Guide + Hidden Cost Calculator
- Appointment Prep Checklist
- Confidence Boost section (static content)

## Tech Stack

| Layer        | Technology                |
| ------------ | ------------------------- |
| Frontend     | React, Vite, React Router |
| Backend      | Node.js, Express          |
| Database     | PostgreSQL                |
| External API | Pexels API                |
| Deployment   | Render (FE + BE)          |

## Environment Variables

### Server (`server/.env`)

| Variable       | Description                  |
| -------------- | ---------------------------- |
| `DATABASE_URL` | PostgreSQL connection string |
| `NODE_ENV`     | App environment (see below)  |

### `NODE_ENV` Modes

| Value         | Description                                          |
| ------------- | ---------------------------------------------------- |
| `production`  | SSL enabled for database connection. Used on Render. |
| `development` | SSL disabled. Uses real PostgreSQL locally.          |
| `test`        | Uses a mock database pool. No real DB connection.    |

### Client (`client/.env`)

| Variable            | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL for all API requests (e.g. `http://localhost:3001/api`) |

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- A Pexels API key

### Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd server
npm install
```

### Set Up Environment Variables

Create a `.env` file in `server/` and add:

```env
DATABASE_URL=your_postgres_connection_string
PEXELS_API_KEY=your_pexels_api_key
```

### Run the App

```bash
# Start the backend (from /server)
npm start

# Start the frontend (from /client, in a separate terminal)
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

## Running Tests

```bash
# Frontend tests (from /client)
npm test

# Backend tests (from /server)
npm test
```

## Backend Overview

### Quiz API — `POST /api/quiz`

- Receives quiz answers
- Generates a style profile (placeholder logic)
- Fetches bridal images from Pexels (API-compliant)
- Inserts quiz result into PostgreSQL
- Returns JSON for frontend display

### Checklist API

- `GET /api/checklist/:userId` — fetch all items for a user
- `POST /api/checklist/:userId` — add a new item
- `PUT /api/checklist/:userId/:id` — toggle item completion
- `POST /api/checklist/:userId/reset` — reset checklist to defaults

### Budget API

- `GET /api/budget/:userId` — fetch latest budget
- `POST /api/budget` — preview and create a budget

### Additional Backend Work

- Added Pexels API client (`pexelsClient.js`)
- Added database test route
- Configured PostgreSQL pool with `search_path=bridal_prep`
- Added `dump.sql` for schema versioning

## Frontend Overview

### Pages

| Route         | Page       |
| ------------- | ---------- |
| `/`           | Landing    |
| `/dashboard`  | Dashboard  |
| `/quiz`       | Quiz       |
| `/results`    | Results    |
| `/budget`     | Budget     |
| `/checklist`  | Checklist  |
| `/confidence` | Confidence |

### Quiz Flow

- `QuizPage` wired into the router
- `QuizQuestion` component with option-selection UI
- Local state for current question, selected answers, and navigation
- Sends `answers` + `quiz_version` to the backend
- `QuizResults` component receives backend data via React Router state

### Checklist Feature

- `Checklist.jsx` + `ChecklistItem.jsx` — UI components
- `ChecklistPage.jsx` — page wrapper and routing entry
- `useChecklist.js` — data fetching, optimistic toggle, and item creation
- `checklistApi.js` — API integration layer

### Budget Feature

- `BudgetGuide.jsx` + `BudgetBreakdown.jsx` — display components
- `BudgetPage.jsx` — page wrapper and routing entry
- `budgetApi.js` — API integration layer

## Database Schema

| Table             | Description                                    |
| ----------------- | ---------------------------------------------- |
| `users`           | User accounts                                  |
| `quiz_results`    | Stored quiz answers and style profiles         |
| `budgets`         | User budget entries and allocations            |
| `checklist_items` | Per-user checklist items with completion state |

## Design System

**Colors**

| Name         | Hex       |
| ------------ | --------- |
| Mist White   | `#F6F6F8` |
| Ivory Cream  | `#FFF7F1` |
| Clay Rose    | `#C57A7A` |
| Charcoal Ink | `#2C2C2C` |
| Golden Beige | `#DCC7A1` |

**Typography**

- Headings: Fraunces
- Body: Inter

## Deployment

- Backend deployed on Render
- Frontend deployed on Render
- FE ↔ BE connection tested
- CORS configured
- Pexels API key tested with sample calls

## Open the Style Quiz

Navigate to:http://localhost:5173/quiz

![alt text](<Screenshot 2026-05-15 at 17.01.14.png>)
![alt text](<Screenshot 2026-05-15 at 17.02.36.png>)

## Open the create budget

Navigate to:http://localhost:5173/create-budget

![alt text](<Screenshot 2026-05-15 at 17.04.16.png>)
![alt text](<Screenshot 2026-05-15 at 17.04.51.png>)

## Open the checklist

Navigate to: http://localhost:5173/checklist

![alt text](<Screenshot 2026-05-15 at 17.06.16.png>)
