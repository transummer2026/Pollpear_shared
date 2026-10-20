# Pollpear_shared

`@pollpear/shared` — the validation schemas and types every Pollpear service agrees on.
Most of it is **generated from the Prisma schema**, so the backend that persists a
record, the gateway that forwards it and the form that submits it all validate against
the same definition instead of three hand-maintained copies that drift.

Part of **[Pollpear](https://github.com/transummer2026/Pollpear)**, a real-time collaborative polling platform.

## Layout

| Path | Role |
| :--- | :--- |
| `src/prisma/` | Zod schemas generated from the Prisma schema by `prisma-zod-generator` — do not edit by hand |
| `src/schemas/` | Hand-written schemas for what the database does not describe: `auth`, `api-key`, `formats`, `messages`, `notification`, `friendship`, `block`, `invitations`, `hashtag`, … |
| `src/types/` | Shared TypeScript types |
| `src/constants/` | Values both ends need to agree on |

## How it is consumed

This repository is a **nested submodule** of both
[`Pollpear_backend`](https://github.com/transummer2026/Pollpear_backend) and
[`Pollpear_frontend`](https://github.com/transummer2026/Pollpear_frontend) — which is
why a recursive clone matters:

```sh
git clone --recursive https://github.com/transummer2026/Pollpear.git
```

When the Prisma schema changes, the generated schemas are regenerated here and merged
first; the two consumers are then repointed at the new commit. Doing it in the other
order leaves them pointing at a SHA that does not exist yet.

## Checks

`npm run check` runs formatting, types and lint together; `npm run checktype`,
`npm run format` and `npm run lint` run them individually.

Full setup instructions live in the [superproject README](https://github.com/transummer2026/Pollpear#readme).
