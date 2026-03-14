# rollsev.work (Lite)

Portfolio site migrated from Next.js to `Lit + Vite` to reduce runtime overhead.

## Stack

- Lit 3
- Vite 7
- TypeScript 5
- Docker (BusyBox static runtime)

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Notes

- Main page is now a lightweight client-rendered Lit component.
- Public visitor counter uses `countapi.xyz` and increments once per browser via localStorage.
- If the counter provider is unavailable, the UI falls back to `N/A` without breaking.
