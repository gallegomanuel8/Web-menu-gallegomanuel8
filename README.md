# Web-menu

Página sencilla que lista y enlaza mis aplicaciones: abrir la web / jugar, o descargar la última versión, y el código fuente.

Hecha con [Astro](https://astro.build), salida 100 % estática. Se despliega en Vercel sin configuración.

## Añadir o editar una app

Edita `src/data/apps.ts` (el orden del array es el orden en la página). Cada entrada tiene:

- `kind`: `web` (botón «Abrir web»), `game` («Jugar ahora») o `desktop` («Descargar»).
- `url`: dirección desplegada (web y game).
- `assets` (desktop): qué ficheros de la release ofrecer, con una regex sobre el nombre. El que lleva `os` es el que se descarga directamente al visitante de ese sistema; el resto aparecen en «Todas las descargas».
- `icon` y `screenshot`: imágenes en `src/assets/apps/`. Astro las optimiza a WebP al compilar.

## Última versión siempre

Los enlaces de descarga se construyen con la release más reciente de GitHub:

1. Al compilar se consulta `releases/latest` de cada repo (opcional: variable `GITHUB_TOKEN` para evitar el límite de la API).
2. Al abrir la página, el navegador vuelve a consultarla (caché de 10 min por sesión), así que una release nueva aparece sin redesplegar.
3. Si la API falla, el botón lleva a `github.com/<repo>/releases/latest`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```
