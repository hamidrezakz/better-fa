# better-fa

> TypeScript packages for Persian-first web development on npm.

`better-fa` is an open-source monorepo focused on practical utilities that developers in the Persian (Farsi) ecosystem need in real projects.

The goal is simple: provide lightweight, well-typed, production-ready packages for common Persian localization needs such as formatting, normalization, and data consistency.

## Vision

- Build small and focused npm packages for Persian use cases.
- Keep APIs simple, predictable, and framework-agnostic.
- Prefer native platform features (like `Intl`) whenever possible.
- Maintain high quality through clear structure, typing, and release workflow.

## Packages

### [@better-fa/utils](./packages/utils)

Utility helpers for Persian apps, including:

- Persian date formatting
- Persian number and currency formatting
- Digit conversion (English <-> Persian)
- Iran mobile phone normalization

Install:

```bash
pnpm add @better-fa/utils
```

More details and examples: [packages/utils/README.md](./packages/utils/README.md)

## Monorepo Setup

This repository uses:

- [pnpm](https://pnpm.io) for package management
- [Turborepo](https://turbo.build/repo) for build orchestration
- TypeScript for type safety

Install dependencies:

```bash
pnpm install
```

Build all packages:

```bash
pnpm build
```

Build a single package:

```bash
pnpm --filter @better-fa/utils build
```

## Release & Governance

- Publishing guide: [RELEASING.md](./RELEASING.md)
- Contribution guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Code of conduct: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- Security policy: [SECURITY.md](./SECURITY.md)

## License

MIT © [Hamidreza](https://github.com/hamidrezakz)
