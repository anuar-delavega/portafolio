---
title: StorageLink
tagline: App local para macOS que libera espacio o respalda carpetas en una memoria externa, verificando cada copia y sin borrar nada sin confirmación.
category: tool
status: local
period: Oct – Nov 2026
role: Producto, arquitectura y desarrollo (con Claude Code)
stack: [Python 3.9+ (solo stdlib), Vanilla JS, HTML/CSS, macOS launchd, diskutil, APFS]
highlights:
  - Dos modos — mover y enlazar (symlink) para liberar espacio, o respaldar dejando el original intacto.
  - Verificación por checksum después de copiar; si algo no coincide, se detiene y la carpeta queda intacta.
  - Bloquea carpetas del sistema, ~/Library, Fotos y carpetas sincronizadas con iCloud.
  - Formateo protegido con doble confirmación y cifrado APFS sin guardar la contraseña.
  - Respaldos automáticos programados, bitácora por carpeta con exportación CSV y progreso en tiempo real.
  - Instalador de doble clic que genera una .app; la configuración se puede restaurar desde la memoria en otra Mac.
metrics:
  - { value: "0", label: dependencias externas }
  - { value: "13", label: archivos de pruebas }
  - { value: "18", label: commits }
featured: true
order: 3
---

## El problema

Las Mac con poco disco obligan a elegir qué borrar. Mover carpetas a una USB a mano rompe rutas, no verifica nada y es fácil perder archivos.

## La solución

Una app que se usa desde el navegador, en la propia Mac (`127.0.0.1`, sin llamadas a internet). Copia, verifica y deja un enlace en el lugar original, así las apps siguen encontrando sus archivos.

## Principios de diseño

- **Nada se borra solo.** La copia original se elimina únicamente con confirmación explícita y después de volver a compararla con la memoria.
- **Sin dependencias.** Solo la biblioteca estándar de Python, para que la instalación no falle en ninguna Mac.
- **Especificación como fuente de verdad.** Cada cambio parte de un documento de propuesta versionado y de un historial cronológico.
