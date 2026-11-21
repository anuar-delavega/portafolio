---
title: PDF → EPUB
tagline: Conversor de PDFs con texto a EPUB estructurado, con detección automática de capítulos y tabla de contenidos navegable.
category: tool
status: local
period: Abr 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [Python, PyMuPDF, EbookLib, Regex]
highlights:
  - Extracción de texto página por página con PyMuPDF.
  - Detección de capítulos por patrones configurables (numeración arábiga y romana, CAPÍTULO, PARTE).
  - EPUB con CSS, metadatos y tabla de contenidos navegable en cualquier e-reader.
order: 8
---

## Por qué

Leer PDFs en un e-reader es incómodo: el texto no se ajusta a la pantalla. Este script genera un EPUB limpio en segundos y se adapta a cada libro editando los patrones de capítulo.
