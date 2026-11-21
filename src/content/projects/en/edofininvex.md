---
title: EdoFinInvex
tagline: Multi-user personal finance portal that turns PDF or photographed card statements into a dashboard with multichannel payment reminders.
category: product
status: production
period: May – Oct 2026
role: Product, architecture and development (with Claude Code)
stack: [Python 3.13, FastAPI, PostgreSQL / Supabase, SQLite, Vanilla JS, Chart.js, Tesseract OCR, APScheduler, Twilio, Resend, Telegram, Railway]
highlights:
  - Statement extraction from PDF (pdfplumber) and phone photos (Tesseract), with idempotent re-runs.
  - Automatic categorization against each user's own catalog, importable from CSV.
  - Dashboard with KPIs, spend by category, cumulative trend and treemap.
  - Payment calendar with independent reminders via Telegram, WhatsApp and email, scheduled in Mexico City time.
  - Passwordless login (email OTP), admin/user roles and HttpOnly sessions.
  - In-house security audit — per-user data isolation and RLS on every table.
metrics:
  - { value: "100", label: commits }
  - { value: "3", label: notification channels }
  - { value: "2", label: database engines }
  - { value: "5", label: color palettes }
featured: true
order: 1
---

## The problem

Understanding where a credit card's money goes means downloading PDFs, retyping them into a spreadsheet and remembering every due date. It is tedious and error-prone.

## The solution

A portal that reads the statement (PDF or a phone photo), classifies every transaction and shows it on a dashboard. A scheduler checks pending payments every minute and notifies each user on the channels they chose.

## Technical decisions

- **One data layer for SQLite and PostgreSQL.** SQLite locally, Supabase in production: fast development, no separate code path for deployment.
- **No channel fallback.** Telegram, WhatsApp and email are enabled per payment, so users never get a reminder on a channel they didn't ask for.
- **Explicit time zone.** Railway runs in UTC; every time is computed in `America/Mexico_City` to avoid reminders six hours off.
- **Security as ongoing work.** An internal audit tracks open items, and every lookup by id is scoped to the current user.
