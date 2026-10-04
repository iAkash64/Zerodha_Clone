# Zerodha Clone (educational project)

This is an educational full-stack trading-dashboard clone. It is not affiliated
with Zerodha and must not be used to place real trades or handle real financial
accounts.

🚀 Live Demo(frontend) : https://zerodha-clone-akash-4d83.vercel.app
🚀 Live Demo(frontend-dashboard) : https://zerodha-clone-w8hn.vercel.app

## Applications

- `frontend/` — public marketing and signup pages (React)
- `dashboard/` — portfolio/dashboard interface (React)
- `backend/` — Express API and MongoDB persistence

## Local setup

1. In `backend/`, copy `.env.example` to `.env`, then provide a MongoDB URI.
2. In `dashboard/`, copy `.env.example` to `.env` if the API is not running at
   `http://localhost:3002`.
3. Run `npm install` in each application folder.
4. Start the backend, frontend, and dashboard in separate terminals with
   `npm start`.

## Deployment

Deploy the React applications as static sites and the backend as a Node web
service. Configure these variables on the hosting provider rather than
committing them:

| Service | Required variables |
| --- | --- |
| Backend | `MONGO_URL`, `CORS_ORIGINS`, optional `PORT` |
| Dashboard | `REACT_APP_API_URL` |

Set `REACT_APP_API_URL` to the public backend URL and set `CORS_ORIGINS` to the
exact public dashboard URL. The backend exposes `GET /health` for deployment
health checks.

## Important security note

Never commit `.env` files. If a database password has ever been committed or
shared publicly, rotate it in MongoDB Atlas before deployment.

## Current scope

This project is intended as a portfolio/demo application. Before handling real
users or financial data, add authentication, authorization, account ownership,
rate limiting, audit logging, and a real OTP/signup flow.
