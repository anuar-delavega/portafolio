---
title: EdoFinInvex
tagline: Portal multi-usuario de finanzas personales que convierte estados de cuenta en PDF o foto en un dashboard con recordatorios de pago multicanal.
category: product
status: production
period: May – Oct 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [Python 3.13, FastAPI, PostgreSQL / Supabase, SQLite, Vanilla JS, Chart.js, Tesseract OCR, APScheduler, Twilio, Resend, Telegram, Railway]
highlights:
  - Extracción de estados de cuenta desde PDF (pdfplumber) y desde fotos (Tesseract), con re-ejecución idempotente.
  - Categorización automática por catálogo de cada usuario, importable desde CSV.
  - Dashboard con KPIs, gasto por categoría, tendencia acumulada y treemap.
  - Calendario de pagos con recordatorios independientes por Telegram, WhatsApp y correo, programados en hora de México.
  - Login sin contraseña (OTP por correo), roles admin/usuario y sesiones HttpOnly.
  - Auditoría de seguridad propia — aislamiento de datos por usuario y RLS en todas las tablas.
metrics:
  - { value: "100", label: commits }
  - { value: "3", label: canales de notificación }
  - { value: "2", label: motores de base de datos }
  - { value: "5", label: paletas de color }
featured: true
order: 1
---

## El problema

Revisar en qué se va el dinero de una tarjeta implica descargar PDFs, copiarlos a mano a una hoja de cálculo y acordarse de cada fecha límite de pago. Es tedioso y es fácil equivocarse.

## La solución

Un portal que lee el estado de cuenta (PDF o foto del celular), clasifica cada movimiento y lo muestra en un dashboard. Un scheduler revisa cada minuto los pagos pendientes y avisa por el canal que elija cada usuario.

## Decisiones técnicas

- **Una sola capa de datos para SQLite y PostgreSQL.** En local corre con SQLite; en producción, con Supabase. Así el desarrollo es rápido y el despliegue no requiere otro código.
- **Canales sin fallback.** Telegram, WhatsApp y correo se activan por separado en cada pago, para que nunca llegue un aviso por un canal que el usuario no pidió.
- **Zona horaria explícita.** Railway corre en UTC; todas las horas se calculan en `America/Mexico_City` para evitar avisos con 6 horas de desfase.
- **Seguridad como trabajo continuo.** Una auditoría interna documentó los pendientes, y todas las consultas por id filtran por usuario.
