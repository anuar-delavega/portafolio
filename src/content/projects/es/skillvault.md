---
title: SkillVault
tagline: Explorador visual de skills, plugins y flujos de automatización que lee el sistema de archivos en tiempo real.
category: tool
status: local
period: "2026"
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [Node.js, Express, Vanilla JS, HTML/CSS]
highlights:
  - Escaneo recursivo de carpetas para detectar skills (SKILL.md), plugins (plugin.json) y scripts.
  - Clasificación por tipo y palabras clave configurables.
  - Importación de colecciones desde repositorios git.
  - Sin base de datos — todo se lee del sistema de archivos al momento.
order: 7
---

## El problema

Con decenas de skills de Claude, workflows de N8N y plugins repartidos en carpetas, era difícil saber qué tenía y dónde estaba.

## La solución

Partí de un prototipo HTML y lo convertí en una app full-stack: un backend Express sustituye los datos de ejemplo por la lectura real del disco y sirve la interfaz en un solo puerto.
