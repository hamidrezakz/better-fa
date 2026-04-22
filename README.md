# better-fa Monorepo

> A collection of open-source TypeScript packages for modern web development

This is a monorepo containing multiple npm packages maintained by [@hamidrezakz](https://github.com/hamidrezakz).

## 📦 Packages

### [@better-fa/utils](./packages/utils)

Simple Persian (Farsi) date and number formatting helpers using built-in JavaScript Intl APIs.

```bash
pnpm add @better-fa/utils
```

## 🛠 Development

This monorepo uses:

- **[pnpm](https://pnpm.io)** for package management
- **[Turborepo](https://turbo.build/repo)** for efficient builds
- **TypeScript** for type safety

### Setup

```bash
pnpm install
```

### Build all packages

```bash
pnpm build
```

### Build specific package

```bash
pnpm --filter @better-fa/utils build
```

## 📖 Publishing

See [RELEASING.md](./RELEASING.md) for detailed instructions on publishing packages to npm.

## 🤝 Open-source process

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- [SECURITY.md](./SECURITY.md)
- [RELEASING.md](./RELEASING.md)

## 📄 License

MIT © [Hamidreza](https://github.com/hamidrezakz)
