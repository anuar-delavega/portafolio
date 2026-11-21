---
title: SkillVault
tagline: Visual explorer for skills, plugins and automation workflows that reads the filesystem in real time.
category: tool
status: local
period: "2026"
role: Product, architecture and development (with Claude Code)
stack: [Node.js, Express, Vanilla JS, HTML/CSS]
highlights:
  - Recursive folder scanning to detect skills (SKILL.md), plugins (plugin.json) and scripts.
  - Classification by type with configurable keywords.
  - Collection import from git repositories.
  - No database — everything is read live from disk.
order: 7
---

## The problem

With dozens of Claude skills, N8N workflows and plugins spread across folders, it was hard to know what I had and where.

## The solution

Starting from an HTML prototype, I turned it into a full-stack app: an Express backend replaces the mock data with real disk reads and serves the UI on a single port.
