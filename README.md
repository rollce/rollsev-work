# rollsev.work

Dark portfolio website for Denis Mitrofanov.

## Features

- Large animated landing sections
- Projects catalog (8 deployed products)
- Stack and capabilities pages
- Social links (Telegram, GitHub)
- Total hits counter persisted in Railway Redis

## Routes

- `/` Home
- `/projects` Live projects
- `/stack` Skills and stack
- `/api/hits` Hit counter endpoint

## Local run

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set Redis credentials if needed.
