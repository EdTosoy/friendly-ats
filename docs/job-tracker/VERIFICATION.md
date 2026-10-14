# Tracker verification scope

Run the tracker commands in [its README](../../apps/web/README.md) from the repository root. Executed results and revision-bound desktop/mobile screenshots accompany the PR preparation; this file describes the checks rather than claiming they passed.

- Typecheck and lint all three tracker projects.
- Unit tests cover creation, all seven statuses, validation, filtering/statistics, persistence, corrupt storage, and write/read failures.
- Playwright exercises real forms and browser storage, reloads, combined filters, detail edits, navigation, keyboard focus, empty states, failed writes, and corrupt storage at desktop/mobile widths.
- Build the production application and verify browser journeys against that fresh build.
- Check formatting for scoped files, inspect the full PR diff, and compare all three moodboard SHA-256 hashes with the original source commit.
- Check Nx still discovers the pre-existing projects and that their source/configuration files are unchanged. Review root lockfile importer stability.

The existing API, Angular admin, legacy client, infrastructure, and CI checks are preserved; installation is updated to pnpm for the additive workspace packages. New tracker checks do not establish backend integration, database behavior, hosted CI success, native iOS Safari support, or full accessibility conformance. No production services are required for this browser-local slice.
