
# 🧠 My Dashboard App

A modern, fully type-safe **React + TypeScript dashboard app** built with:

- 🚀 **Vite** for blazing-fast dev experience
- 🎨 **Tailwind CSS** for sleek, responsive UI
- 🔥 **React Query** for smart data fetching & caching
- 🌙 **Dark mode toggle** (persisted with localStorage)
- 🌍 **i18n toggle (English / French)** with `react-i18next`
- 📊 **Pluggable widgets system** (like Netlify cards)
- 🐶 **Husky + lint-staged** for pre-commit checks
- ✅ **ESLint + Prettier** for consistent code style

---

## ✨ Features

- ⚡ **React 18 + Vite + TypeScript**  
- 🧩 **Modular widgets system**: add metrics, charts, or even custom React components via config
- 🌘 **Theme toggle (light / dark)** with Tailwind `dark:` classes + smooth transitions
- 🌐 **i18n toggle (EN/FR)** with persistent language choice
- 🔥 **React Query** for async data, caching, retries & devtools
- 💎 **Beautiful UI** with large rounded cards, smooth shadows, color accents, responsive grid
- 🧪 **ESLint + Prettier + Husky** enforce quality on every commit
- 📝 **Fully type-safe with custom TypeScript types**

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/manjari188/multi-tenant-analytics-dashboard.git
cd multi-tenant-analytics-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the app

```bash
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

---

## ⚙️ Scripts

| Command              | Description                             |
|-----------------------|----------------------------------------|
| `npm run dev`         | Start local dev server (Vite)          |
| `npm run build`       | Build for production                  |
| `npm run preview`     | Preview built app                     |
| `npm run lint`        | Run ESLint checks                     |
| `npm run format`      | Format code with Prettier             |

---

## 📂 Project structure

```
src/
├── app/              # React Query client, store setup
├── components/       # Navbar, Sidebar, MetricCard, Chart, WidgetRenderer
├── hooks/            # Custom hooks (useDashboardData)
├── pages/            # DashboardPage, SettingsPage
├── services/         # API functions
├── types/            # TypeScript type definitions
├── i18n.ts           # i18n config
└── main.tsx          # App bootstrap
```

---

## 🛠️ Tech stack

| Tech                  | Purpose                                 |
|------------------------|---------------------------------------|
| **React + Vite + TS**   | Fast, modern SPA foundation           |
| **Tailwind CSS**        | Utility-first, responsive styling     |
| **React Query**         | Data fetching, caching, retries       |
| **i18next**             | i18n (English / French toggle)        |
| **Recharts**            | For data visualizations               |
| **Framer Motion**       | Smooth UI animations                 |
| **Husky + lint-staged** | Git hooks for quality enforcement    |
| **ESLint + Prettier**   | Linting & formatting                  |

---

## 🌍 Features roadmap

✅ Pluggable dashboard widgets (charts, metrics, custom)  
✅ Theme toggle (light/dark)  
✅ i18n toggle (EN/FR)  
✅ React Query devtools  
🚀 Coming: drag & drop widget reordering, saved layouts.

---

## ✨ Screenshots

---

## 📜 License

MIT — use it for your personal & commercial projects 🚀.
