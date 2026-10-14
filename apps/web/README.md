# FATS local job tracker

This additive application keeps the existing client, Angular admin, Nest API, shared libraries, Docker configuration, and CI workflow in place. It does not connect to those services yet. The tracker uses browser-local storage; saving a job does not apply for it. Maria Santos is a labeled sample profile, and application data starts empty.

Use Node 24 LTS and pnpm 11.27.0. From the repository root:

```sh
pnpm install --frozen-lockfile
NX_NO_CLOUD=true pnpm tracker:dev
```

Open http://localhost:3100. Stop other apps on port 3100 first. Keep the same hostname and port to use the same browser-local workspace.

```sh
NX_NO_CLOUD=true pnpm tracker:typecheck
NX_NO_CLOUD=true pnpm tracker:lint
NX_NO_CLOUD=true pnpm tracker:test
pnpm tracker:format:check
NX_NO_CLOUD=true pnpm tracker:build
NX_NO_CLOUD=true pnpm tracker:start
NX_NO_CLOUD=true pnpm tracker:e2e
```

Nx orchestrates the three new projects: `job-tracker-web`, `job-tracker-domain`, and `tracker-quality`. Their pinned toolchains are package-local so the existing projects retain their dependency declarations and configuration. The repository's existing Nx plugins and CI checks remain in place; CI installs pnpm workspace packages so it can discover the additive tracker projects. Tracker commands disable Nx Cloud in the examples; restricted agents may also need `NX_DAEMON=false NX_ISOLATE_PLUGINS=false` and scoped local-socket permission.

Playwright uses installed system Chromium or `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` and keeps its sandbox enabled. It creates isolated contexts and synthetic jobs. Tests start a local dev server or reuse an explicitly started server on port 3100. Screenshots and traces stay in ignored `tools/job-tracker/test-results/`.

The tracker supports save, list, combined search/status filtering, detail edits, all seven manual statuses, reload persistence, and derived statistics. Corrupt storage stays untouched; failed writes preserve the form draft and previous data. Interview status does not schedule a meeting.

Accounts, device sync, resume upload, and scheduling are not part of this slice. Browser storage can be cleared and simultaneous tab writes are not transactional. Existing backend and authentication scaffolding are preserved as separate projects, not presented as working tracker integration.

See [product](../../docs/job-tracker/PRODUCT.md), [architecture](../../docs/job-tracker/ARCHITECTURE.md), [design system](../../docs/job-tracker/DESIGN_SYSTEM.md), and [verification](../../docs/job-tracker/VERIFICATION.md).
