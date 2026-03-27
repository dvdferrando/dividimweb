# Dividim Web

Web oficial de Dividim, feta amb Next.js i desplegada a Firebase Hosting.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase Hosting (mode estatic)

## Requisits

- Node.js 24 recomanat
- npm
- Firebase CLI (`firebase-tools`)

## Desenvolupament local

```bash
npm install
npm run dev
```

Obre `http://localhost:3000`.

## Build

```bash
npm run build
```

Aquest projecte esta configurat amb `output: "export"` i genera la sortida estatica a `out/`.

## Desplegament a Firebase

Projecte Firebase per defecte: `dividimweb`.

```bash
npm run firebase:deploy -- --only hosting --project dividimweb
```

URL de produccio actual: [https://dividimweb.web.app](https://dividimweb.web.app)

## Notes d'idioma

- Idioma per defecte: catala (`/ca`)
- Idiomes disponibles: `ca`, `en`, `es`
- El canvi d'idioma es manual des del selector de la capcalera
