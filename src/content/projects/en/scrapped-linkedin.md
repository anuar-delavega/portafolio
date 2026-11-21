---
title: Scrapped LinkedIn
tagline: macOS app that scans public job searches, filters and deduplicates postings, and notifies via Telegram, email or WhatsApp.
category: automation
status: local
period: Nov 2026
role: Product, architecture and development (with Claude Code)
stack: [Python, FastAPI, httpx, selectolax, pydantic, keyring, uv, PyInstaller, Twilio, Telegram]
highlights:
  - Configurable search profiles, filters, deduplication and job history.
  - Scheduled runs and notifications via Telegram, email and WhatsApp.
  - Local web UI with documented API and an equivalent CLI.
  - Listens on 127.0.0.1 only, rejects external Host/Origin and stores credentials in the macOS keychain.
  - .app and .dmg installers for Apple Silicon and Intel, with semantic versioning and a changelog.
metrics:
  - { value: "v0.12", label: version }
  - { value: "26", label: commits }
  - { value: "19", label: test files }
order: 5
---

## The problem

Job hunting on LinkedIn means repeating the same searches every day and wading through duplicate or irrelevant postings.

## The solution

An app that runs searches on a schedule, applies each profile's filters and delivers a clean CSV of postings worth applying to, plus a notification on the preferred channel.

## Release engineering

The version lives in a single place and feeds the app bundle, the UI, the health endpoint and the `.dmg` file names. Every build runs the test suite before packaging.
