---
title: StorageLink
tagline: Local macOS app that frees up space or backs up folders to an external drive, verifying every copy and never deleting without confirmation.
category: tool
status: local
period: Oct – Nov 2026
role: Product, architecture and development (with Claude Code)
stack: [Python 3.9+ (stdlib only), Vanilla JS, HTML/CSS, macOS launchd, diskutil, APFS]
highlights:
  - Two modes — move and link (symlink) to free space, or back up and leave the original untouched.
  - Checksum verification after copying; on any mismatch it stops and the folder stays intact.
  - Blocks system folders, ~/Library, Photos and iCloud-synced folders.
  - Guarded formatting with double confirmation, and APFS encryption without storing the password.
  - Scheduled automatic backups, per-folder activity log with CSV export and live progress.
  - Double-click installer that builds a .app; settings can be restored from the drive on another Mac.
metrics:
  - { value: "0", label: external dependencies }
  - { value: "13", label: test files }
  - { value: "18", label: commits }
featured: true
order: 3
---

## The problem

Macs with small disks force you to choose what to delete. Moving folders to a USB drive by hand breaks paths, verifies nothing and makes it easy to lose files.

## The solution

An app used from the browser, on the Mac itself (`127.0.0.1`, no internet calls). It copies, verifies and leaves a link in the original location, so apps still find their files.

## Design principles

- **Nothing deletes itself.** The original copy is removed only on explicit confirmation, after comparing it again against the drive.
- **Zero dependencies.** Python standard library only, so installation works on any Mac.
- **Spec as the source of truth.** Every change starts from a versioned proposal document and a chronological history.
