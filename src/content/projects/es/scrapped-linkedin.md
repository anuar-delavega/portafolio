---
title: Scrapped LinkedIn
tagline: App para macOS que escanea búsquedas públicas de empleo, filtra y deduplica vacantes y avisa por Telegram, correo o WhatsApp.
category: automation
status: local
period: Nov 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [Python, FastAPI, httpx, selectolax, pydantic, keyring, uv, PyInstaller, Twilio, Telegram]
highlights:
  - Perfiles de búsqueda configurables, filtros, deduplicación e historial de vacantes.
  - Ejecución programada y notificaciones por Telegram, correo y WhatsApp.
  - Interfaz web local con API documentada y CLI equivalente.
  - Escucha solo en 127.0.0.1, rechaza Host/Origin externos y guarda credenciales en el llavero de macOS.
  - Instaladores .app y .dmg para Apple Silicon e Intel, con versionado semántico y changelog.
metrics:
  - { value: "v0.12", label: versión }
  - { value: "26", label: commits }
  - { value: "19", label: archivos de pruebas }
order: 5
---

## El problema

Buscar empleo en LinkedIn implica repetir las mismas búsquedas a diario y revisar vacantes duplicadas o que no encajan.

## La solución

Una app que corre las búsquedas en un horario, aplica los filtros de cada perfil y entrega un CSV limpio con las vacantes a las que vale la pena aplicar, más un aviso en el canal preferido.

## Ingeniería de release

La versión vive en un solo lugar y de ahí la toman el bundle de la app, la interfaz, el endpoint de salud y los nombres de los `.dmg`. Cada build corre las pruebas antes de empaquetar.
