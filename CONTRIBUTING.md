# Contributing to Orion

First off, thank you for considering contributing! We aim to build the most resilient and developer-friendly library for micro frontend.

## 🌿 Git Workflow & Branching Strategy

We strictly follow a simplified GitFlow structure:
- `main` — Production/Release branch. **Direct pushes are disabled.**
- `develop` — Active development and integration branch.
- `feature/*` — For developing new features (e.g., `feature/add-someone`).
- `fix/*` — For bug fixes (e.g., `fix/example`).

### How to contribute:
1. Fork the repository and clone it locally.
2. Create a new branch from `develop`: `git checkout -b feature/my-cool-feature develop`
3. Write your code **with clear, descriptive comments** explaining the logic.
4. Run tests and type checks: `npm run test` and `npm run typecheck`.
5. Submit a Pull Request targeting the `develop` branch.

---

## 💬 Conventional Commits Rule.

We enforce strict Conventional Commits to automatically generate changelogs:

Format: `<type>(<scope>): <short description>`

### Allowed Types:
- `feat`: A new feature (e.g., `feat(toggle): add feature`)
- `fix`: A bug fix (e.g., `fix(list): resolve array mutation bug on rollback`)
- `docs`: Documentation changes (e.g., `docs: update README with Next.js example`)
- `test`: Adding or updating tests
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `chore`: Maintenance tasks (build config, dependencies)

---

## 📋 Pull Request Requirements
- Must target the `develop` branch.
- Must include tests covering the new functionality or bug fix.
- Code must be cleanly commented (explain *why*, not just *what*).
- No TypeScript or Linter errors.
