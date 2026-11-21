---
title: AI meeting-notes workspace
tagline: Local Notion-style workspace that records video calls, transcribes them on-device in Spanish and English, and writes meeting minutes with Claude.
category: tool
status: local
period: Nov 2026
role: Product, architecture and development (with Claude Code)
stack: [FastAPI, SQLite, React, TypeScript, Vite, BlockNote, faster-whisper, Claude API, EventKit, iCloud Drive]
highlights:
  - Nested pages, block editor, mentions and callouts, version history and templates.
  - Databases with five views — table, board, list, gallery and calendar — with filters saved per view.
  - Records Meet/Zoom/Teams with mic and call on separate channels to tell "Me" from "Participants".
  - On-device transcription (audio never leaves the Mac) with per-segment language detection for bilingual calls.
  - Claude-written minutes — summary, decisions, action items with owner and date — and one-click task creation.
  - Import of pages and databases from Notion via API.
metrics:
  - { value: "5", label: database views }
  - { value: "2", label: languages per call }
featured: true
credit: Personal project inspired by the Notion user experience. Original code, not affiliated with Notion Labs.
order: 4
---

## The problem

As a delivery manager I spend my day in calls. AI note-takers upload audio to the cloud, struggle with calls that mix Spanish and English, and leave action items outside the system I work in.

## The solution

My own workspace where the meeting, transcript, minutes and tasks live together. Audio is processed on the Mac; only text goes to Claude for the summary.

## Technical details

- **Truly bilingual.** Whisper supports one language per 30 s window, so each voice segment is classified by language and transcribed separately.
- **Memory under control.** The model is unloaded after 5 minutes idle.
- **Files where they belong.** The SQLite database stays local; recordings, transcripts and minutes sync to iCloud Drive.
