# ORION! 🌉

![npm version](https://img.shields.io/npm/v/frontend-event-bus)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![GitHub qb1ty](https://img.shields.io/badge/GitHub-qb1ty-181717?logo=github)](https://github.com/qb1ty)
[![GitHub fukashigiNo](https://img.shields.io/badge/GitHub-fukashigiNo-181717?logo=github)](https://github.com/fukashigiNo)

[🇷🇺 Читать на русском](README.ru.md)

A lightweight, strictly typed, and framework-agnostic state bridge for micro-frontends and isolated web components. 

Seamlessly synchronize state and exchange events across **React, Vue, Angular, and Svelte** instances residing on the same page—without polluting the global `window` object or relying on heavy state management libraries.

## 🚀 Motivation

If you work with micro-frontends, you know the architectural pain: *How do you make widgets written in different frameworks communicate with each other safely?*

- Native `CustomEvent`s quickly turn into an untyped chaos.
- Dragging Redux, Zustand, or Vuex to the top global level creates version conflicts, memory leaks, and ecosystem lock-in.

**`Orion`** solves this by providing a lightweight, isolated Event Bus that bridges the gap between frameworks natively.

## ✨ Features

- **Framework-Agnostic Core**: Written in pure TypeScript. Works anywhere.
- **Out-of-the-box Wrappers**: Native hooks/composables for React, Vue, Svelte, and Angular.
- **Strictly Typed**: Full TypeScript support for event names and payloads.
- **Zero Dependencies**: Weighs practically nothing. Does not bloat your bundle.
- **Isolated Contexts**: No `window` object pollution. Safe for complex enterprise environments.

## 📦 Installation

npm install Orion/bus

yarn add Orion/bus

pnpm add Orion/bus

## 🗺 Roadmap

- [ ] Core Event Bus architecture
- [ ] React Hooks support
- [ ] Vue Composables support
- [ ] Svelte Stores / Angular Injectables support
- [ ] Cross-tab synchronization (BroadcastChannel API)
- [ ] SSR Support (Next.js, Nuxt) for v2.0+

## 🤝 Contributing

Contributions are welcome! If you'd like to help improve the bridge:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 👨‍💻 Authors

Built by:
* **Arsen Saparbek** - [GitHub (@qb1ty)](https://github.com/qb1ty)
* **Bekarys Barys** - [GitHub (@fukashigiNo)](https://github.com/fukashigiNo)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
