# Turborepo Design System Starter with Changesets

A React design system monorepo powered by [Bun](https://bun.sh/), [Turborepo](https://turborepo.com/), and [Changesets](https://github.com/changesets/changesets).

## Requirements

- [Bun 1.3.14](https://bun.sh/)
- [typos](https://github.com/crate-ci/typos) and [gitleaks](https://github.com/gitleaks/gitleaks) for local Git hooks:

  ```sh
  brew install typos-cli gitleaks
  ```

## Workspaces

Bun installs the `apps/*` and `packages/*` workspaces declared in the root `package.json`:

- `apps/docs`: Next.js documentation site
- `packages/core`: published React components
- `packages/utils`: published React utilities
- `packages/tailwind-config`: shared Tailwind CSS configuration
- `packages/tsconfig`: shared TypeScript configuration

Install the exact dependency versions from `bun.lock`:

```sh
bun install --frozen-lockfile
```

## Commands

Run commands from the repository root:

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start all development tasks |
| `bun run build` | Build every workspace |
| `bun run check` | Check formatting and lint rules with Ultracite |
| `bun run fix` | Apply Ultracite fixes |
| `bun run knip` | Find unused files, exports, and dependencies |
| `bun run typecheck` | Type-check TypeScript workspaces |
| `bun run test` | Build test dependencies and run Bun Test |
| `bun run test:watch` | Run Bun Test in watch mode |
| `bun run changeset` | Record a package release changeset |

## Quality Gates

[Husky](https://typicode.github.io/husky/) runs:

- **pre-commit:** Ultracite on staged files and gitleaks on the staged diff
- **commit-msg:** conventional commit validation
- **pre-push:** full Ultracite check, type-check, tests, unused code/dependency detection, typos, and gitleaks on `origin/main..HEAD`

Use `git commit --no-verify` or `git push --no-verify` only when intentionally bypassing the corresponding local hook. CI still enforces the repository gates.

The shared [`howard86/actions`](https://github.com/howard86/actions) workflow installs from the frozen Bun lockfile and runs Ultracite, type-checking, Bun Test, builds, unused file/export/dependency detection, typos, gitleaks, and workflow validation for pushes and pull requests targeting `main`.

[Dependabot](https://docs.github.com/en/code-security/dependabot) checks Bun dependencies and GitHub Actions weekly. Updates are grouped; major Next.js, React, and TypeScript upgrades remain manual.

## Package Versioning and Publishing

[Changesets](https://github.com/changesets/changesets) manages versions for the publishable `@org/core` and `@org/utils` packages.

1. Run `bun run changeset` with a package change and commit the generated file.
2. After changes reach `main`, the release workflow opens or updates the Changesets version PR.
3. Merging that PR publishes the packages to npm.

Configure `NPM_TOKEN` as a repository secret for publishing. The workflow uses GitHub's provided `GITHUB_TOKEN` to manage the version PR.

Packages publish publicly by default. To use a private npm organization scope, remove `"access": "public"` from each published package's `publishConfig`.

To change the `@org` scope, rename the affected packages, replace `@org` references, and run `bun install`.
