# Web-menu

Página sencilla que lista y enlaza mis aplicaciones (repositorio + descarga o web desplegada).

Hecha con [Astro](https://astro.build), salida 100 % estática. Se despliega en Vercel sin configuración.

## Añadir o editar una app

Edita `src/data/apps.ts`. Cada entrada tiene nombre, descripción, plataformas, tecnología, repositorio y un enlace principal opcional (`primary`: descarga o web).

Imágenes en `src/assets/apps/`: `icon` (icono) y `screenshot` (captura, se muestra arriba de la tarjeta). Si no hay captura se muestra el icono en grande; si no hay icono, la inicial. Astro las optimiza a WebP al compilar.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```
