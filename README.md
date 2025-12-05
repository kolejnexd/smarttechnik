# smaRTtechnik Website (Next.js)

Strona została przeniesiona na Next.js z kompletnym SEO pod stronę główną.

## Wymagania
- Node.js 18+
- npm

## Instalacja i start
1) `npm install`
2) `npm run dev`
3) Otwórz `http://localhost:3000`

## Struktura
- `app/page.tsx` – strona główna z treściami SEO, JSON-LD i sekcjami.
- `app/layout.tsx` – wspólna nawigacja i stopka.
- `public/` – statyczne assety (logo, hero itp.).

3. Deploy & zbieranie danych

Po dodaniu komponentu:

git add .
git commit -m "Add Vercel Speed Insights"
git push

Po aktualizacji zależności uruchom `npm install`, aby odświeżyć `package-lock.json`.
