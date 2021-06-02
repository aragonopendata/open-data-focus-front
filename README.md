# Open Data Focus - Front

## Modificaciones para despliegue
### Entorno Preproducción

Modificar el fichero `src/assets/scss/_open-sans.scss` para que el dominio de las URLs sea `preopendata.aragon.es`

Modificar el fichero `src/styles.scss` para que el dominio de las URLs sea `preopendata.aragon.es`

Modificar las siguientes constantes del fichero `app.constants.ts` para que el dominio de las URLs sea `preopendata.aragon.es`:
* FOCUS_URL
* AOD_BASE_URL
* AOD_ASSETS_BASE_URL
* AOD_API_WEB_BASE_URL
* AOD_API_ADMIN_BASE_URL
* AOD_API_SECURITY_BASE_URL

Modificar las siguientes constantes del fichero `app.constants.ts` para que el dominio de las URLs sea `mev-aodfront-01.aragon.local`:
* AOD_API_CKAN_BASE_URL

### Entorno Producción

Modificar el fichero `src/assets/scss/_open-sans.scss` para que el dominio de las URLs sea `opendata.aragon.es`

Modificar el fichero `src/styles.scss` para que el dominio de las URLs sea `opendata.aragon.es`

Modificar las siguientes constantes del fichero `app.constants.ts` para que el dominio de las URLs sea `opendata.aragon.es`:
* FOCUS_URL
* AOD_BASE_URL
* AOD_ASSETS_BASE_URL
* AOD_API_WEB_BASE_URL
* AOD_API_ADMIN_BASE_URL
* AOD_API_SECURITY_BASE_URL

Modificar las siguientes constantes del fichero `app.constants.ts` para que el dominio de las URLs sea `mov-aodfront-01.aragon.local`:
* AOD_API_CKAN_BASE_URL

## Orden de compilado

`ng build -prod -bh="/servicios/focus/"`
