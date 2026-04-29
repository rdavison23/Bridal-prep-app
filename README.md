# Bridal-prep-app

Bridal Prep is a PERN‑stack web app designed to reduce overwhelm for brides by offering a guided style quiz, budget clarity, and appointment preparation tools. The goal is to turn “I don’t know where to start” into “I’m ready.”

## Features MVP

- Style Discovery Quiz
- Style Profile (placeholder logic implemented)
- Bridal image recommendations via Pexels API
- Budget Guide + Hidden Cost Calculator
- Appointment Prep Checklist
- Confidence Boost section (static content)

## Wireframes

- Landing
- Dashboard
- Quiz
- Results
- Budget
- Checklist
- Confidence

## Tech Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express
- Database: PostgreSQL
- External API: Pexels API
- Deployment: Render (FE + BE)

## Backend Progress

<b>Quiz API</b>—` POST /api/quiz`<br>
The quiz feature is fully implemented end‑to‑end:

<b>What it does:</b>

- Receives quiz answers
- Generates style profile (placeholder logic)
- Fetches bridal images from Pexels (API‑compliant)
- Inserts quiz result into PostgreSQL
- Returns JSON for frontend display

<b>Additional backend work:</b>

- Added Pexels API client (`pexelsClient.js`)
- Added database test route
- Configured PostgreSQL Pool with `search_path=bridal_prep`
- Added `dump.sql `for schema versioning

## Frontend Progress

<b>Quiz Flow</b>

- QuizPage wired into the router
- QuizQuestion component with option‑selection UI
- Local state for:
  - Current question
  - Selected answers
  - Navigation between questions
- Sends `answers` + `quiz_version` to the backend
- QuizResults component receives backend data via React Router state

## Database Schema

Tables:

- users
- quiz_results
- budgets
- checklist_items

## Deployment

- Backend deployed on Render
- Frontend deployed on Render
- FE ↔ BE connection tested
- CORS configured
- Pexels API key tested with sample calls
