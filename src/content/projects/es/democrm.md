---
title: DemoCRM
tagline: CRM web multi-tenant para empresas automotrices y de flotillas en México — pipeline B2B, inventario de vehículos, facturación y reportes.
category: product
status: production
period: Abr 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [React 18, TypeScript strict, Vite, Tailwind CSS, TanStack Query, React Router, react-hook-form + zod, Supabase Auth + RLS, PostgreSQL 15, Netlify]
highlights:
  - Arquitectura multi-tenant con Row Level Security en Supabase — cada empresa ve solo sus datos.
  - Pipeline de deals en kanban, contactos, empresas, actividades e inventario de vehículos.
  - Facturación con KPIs financieros y reportes de embudo y leaderboard.
  - Datasets de demostración (pequeño y grande) y seis usuarios de prueba generados por script.
  - Despliegue continuo en Netlify con CSP endurecida.
metrics:
  - { value: "21", label: commits }
  - { value: "9", label: módulos }
featured: true
demo: https://democrm-mx.netlify.app
repo: https://github.com/AmashPit/democrm
order: 2
---

## El problema

Las distribuidoras y empresas de flotillas suelen gestionar sus ventas B2B en hojas de cálculo y correos. Sin un pipeline compartido no hay visibilidad ni forma de medir la conversión.

## La solución

Un CRM especializado en el sector: el inventario de vehículos y la facturación están ligados a los deals, y hay reportes listos para el gerente comercial.

## Cómo se construyó

El proyecto arrancó con un `CLAUDE.md` que define contexto, convenciones y *guardrails*, y un plan de ejecución por fases con aprobación en cada una. El modelo de datos y las decisiones de arquitectura quedan documentados en `DATA_MODEL.md` y `DECISIONS.md`.
