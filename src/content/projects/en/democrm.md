---
title: DemoCRM
tagline: Multi-tenant web CRM for automotive and fleet companies in Mexico — B2B pipeline, vehicle inventory, invoicing and reports.
category: product
status: production
period: Apr 2026
role: Product, architecture and development (with Claude Code)
stack: [React 18, TypeScript strict, Vite, Tailwind CSS, TanStack Query, React Router, react-hook-form + zod, Supabase Auth + RLS, PostgreSQL 15, Netlify]
highlights:
  - Multi-tenant architecture with Supabase Row Level Security — each company only sees its own data.
  - Kanban deal pipeline, contacts, companies, activities and vehicle inventory.
  - Invoicing with financial KPIs, plus funnel and leaderboard reports.
  - Small and large demo datasets and six scripted demo users.
  - Continuous deployment on Netlify with a hardened CSP.
metrics:
  - { value: "21", label: commits }
  - { value: "9", label: modules }
featured: true
demo: https://democrm-mx.netlify.app
repo: https://github.com/AmashPit/democrm
order: 2
---

## The problem

Dealerships and fleet companies often run B2B sales on spreadsheets and email. Without a shared pipeline there is no visibility and no way to measure conversion.

## The solution

A CRM built for the sector: vehicle inventory and invoicing are tied to deals, and the reports are ready for the sales manager.

## How it was built

The project started from a `CLAUDE.md` defining context, conventions and guardrails, with a phased execution plan approved step by step. The data model and architecture decisions are documented in `DATA_MODEL.md` and `DECISIONS.md`.
