# terraproject5
Ez a egy weboldal Reactkódban itt látható hog ymiket gyakoroltam az elején inkább gyakorltam a useState utána pedig elkezdtem css-el művészkedni.

## Kipróbálás online

**Élő weboldal:** [https://janigitjanika.github.io/terraproject5/](https://janigitjanika.github.io/terraproject5/)

Ha a link még nem nyílik meg, ellenőrizd a repository **Settings → Pages** oldalán, hogy a közzététel forrása **GitHub Actions** legyen, majd az **Actions** fülön várd meg a `Deploy to GitHub Pages` munkafolyamat sikeres befejezését.

## Futtatás a saját gépeden

### Szükséges programok

- [Node.js](https://nodejs.org/) 20.19 vagy újabb 22.12-es (vagy újabb) verzió
- Az npm, amely a Node.js telepítésével együtt érkezik
- Git, ha a projektet a GitHubról szeretnéd letölteni

### Letöltés és telepítés

Klónozd a repositoryt, majd lépj az alkalmazást tartalmazó `project` mappába:

```bash
git clone https://github.com/JaniGITJANIKA/terraproject5.git
cd terraproject5/project
npm ci
```

Ha a projekt mappája már megvan a gépeden, a klónozás helyett annak termináljában futtasd:

```bash
cd project
npm ci
```

### Fejlesztői szerver

```bash
npm run dev
```

Nyisd meg a terminálban megjelenő címet; alapértelmezés szerint ez `http://localhost:5173/`. A szerver leállításához nyomd meg a `Ctrl+C` billentyűkombinációt.

## A `dist` build elkészítése és kipróbálása

A `dist` mappa nem a forráskód, hanem a böngészőben futtatható, optimalizált weboldal. A parancsokat a `project` mappában futtasd:

```bash
npm run build
```

Ezzel létrejön a `project/dist` könyvtár. A kész build helyi megtekintéséhez indítsd el az előnézeti szervert:

```bash
npm run preview
```

Ez alapértelmezés szerint a `http://localhost:4173/` címen teszi elérhetővé a buildet. A `preview` csak akkor működik, ha előtte sikeresen lefutott a `build`. Ne a `dist/index.html` fájlt nyisd meg dupla kattintással (`file://` címmel); a Vite preview szerverrel vagy más statikus webszerverrel szolgáld ki, hogy az eszközfájlok megfelelően betöltődjenek.

## Közzététel GitHub Pages segítségével

A repositoryban lévő `.github/workflows/deploy-pages.yml` minden `master` ágra feltöltött változtatás után telepíti a weboldalt. A munkafolyamat a `project` mappában telepíti a függőségeket, elkészíti a buildet, majd a `project/dist` tartalmát publikálja.

Első alkalommal a GitHubon:

1. Nyisd meg a repository **Settings → Pages** oldalát.
2. A **Build and deployment → Source** beállításnál válaszd a **GitHub Actions** lehetőséget.
3. Nyisd meg az **Actions** fület, és ellenőrizd, hogy a `Deploy to GitHub Pages` futás sikeres-e.
4. A publikált oldal címe: [https://janigitjanika.github.io/terraproject5/](https://janigitjanika.github.io/terraproject5/).

Később töltsd fel a forráskód módosításait és az új `dist` buildet is a `master` ágra. A `dist` feltöltése frissíti a repositoryban lévő kész weboldalt; a GitHub Actions ettől függetlenül minden módosítás után újraépíti és telepíti az oldalt.

Új build készítése és feltöltése:

```bash
npm run build
cd ..
git add index.html project/.gitignore project/README.md
git add -f project/dist
git commit -m "Update website build"
git push origin master
```

Az `index.html` itt a repository gyökérmappájának indítóoldala; a webalkalmazás kész változata a `project/dist` könyvtárban van.

## Hasznos parancsok

| Parancs | Mire való? |
| --- | --- |
| `npm ci` | Függőségek telepítése a lockfájl alapján |
| `npm run dev` | Fejlesztői szerver indítása |
| `npm run build` | Éles build készítése a `dist` mappába |
| `npm run preview` | A build helyi előnézete a `dist` mappából |
| `npm run lint` | ESLint ellenőrzés futtatása |

## Mappaszerkezet

```text
project/
├── public/                 # Statikus fájlok és ikonok
├── src/
│   ├── App.jsx             # Az oldal és az effektoldalak
│   ├── App.css             # Az effektek stílusai
│   ├── index.css           # Alapstílusok
│   └── main.jsx            # React belépési pont
├── dist/                   # A build kimenete (feltöltve a GitHubra)
├── index.html              # HTML belépési pont
├── package.json            # Parancsok és függőségek
└── vite.config.js          # Vite és relatív útvonalak beállításai
```