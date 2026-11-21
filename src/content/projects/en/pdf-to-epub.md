---
title: PDF → EPUB
tagline: Converts text-based PDFs into structured EPUBs with automatic chapter detection and a navigable table of contents.
category: tool
status: local
period: Apr 2026
role: Product, architecture and development (with Claude Code)
stack: [Python, PyMuPDF, EbookLib, Regex]
highlights:
  - Page-by-page text extraction with PyMuPDF.
  - Chapter detection via configurable patterns (Arabic and Roman numbering, CHAPTER, PART).
  - EPUB with CSS, metadata and a table of contents that works on any e-reader.
order: 8
---

## Why

Reading PDFs on an e-reader is painful: text doesn't reflow. This script produces a clean EPUB in seconds and adapts to each book by editing the chapter patterns.
