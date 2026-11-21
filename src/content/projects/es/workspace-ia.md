---
title: Workspace con notas de reunión IA
tagline: Espacio de trabajo local estilo Notion que graba videollamadas, las transcribe en el propio Mac en español e inglés y genera minutas con Claude.
category: tool
status: local
period: Nov 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [FastAPI, SQLite, React, TypeScript, Vite, BlockNote, faster-whisper, Claude API, EventKit, iCloud Drive]
highlights:
  - Páginas anidadas, editor por bloques, menciones y callouts, historial de versiones y plantillas.
  - Bases de datos con cinco vistas — tabla, tablero, lista, galería y calendario — con filtros guardados por vista.
  - Grabación de Meet/Zoom/Teams con micrófono y llamada en canales separados para distinguir "Yo" de "Participantes".
  - Transcripción local (el audio no sale del Mac) con detección de idioma por tramo, para llamadas bilingües.
  - Minutas con Claude — resumen, decisiones, acciones con responsable y fecha — y creación de tareas en un clic.
  - Importación de páginas y bases de datos desde Notion vía API.
metrics:
  - { value: "5", label: vistas de base de datos }
  - { value: "2", label: idiomas por llamada }
featured: true
credit: Proyecto personal inspirado en la experiencia de uso de Notion. Código propio, sin afiliación con Notion Labs.
order: 4
---

## El problema

Como delivery manager paso el día en llamadas. Las herramientas de notas con IA suben el audio a la nube, no manejan bien las llamadas que mezclan español e inglés y dejan las acciones fuera del sistema donde trabajo.

## La solución

Un workspace propio donde la reunión, la transcripción, la minuta y las tareas quedan en el mismo lugar. El audio se procesa en el Mac y solo el texto se envía a Claude para el resumen.

## Detalles técnicos

- **Bilingüe de verdad.** Whisper admite un solo idioma por ventana de 30 s, así que cada tramo de voz se clasifica por idioma y se transcribe por separado.
- **Memoria bajo control.** El modelo se descarga de la memoria tras 5 minutos sin uso.
- **Archivos donde deben estar.** La base SQLite queda en local y las grabaciones, transcripciones y minutas se sincronizan con iCloud Drive.
