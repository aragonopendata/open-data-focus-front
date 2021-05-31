# Open Data Focus - Front

## Modificaciones para despliegue
### Entorno Preproducción
Modificar el fichero `src/assets/scss/_open-sans.scss` para que el dominio de las URLs sea `preopendata.aragon.es`
Modificar el fichero `src/styles.scss` para que el dominio de las URLs sea `preopendata.aragon.es`

### Entorno Producción
Modificar el fichero `src/assets/scss/_open-sans.scss` para que el dominio de las URLs sea `opendata.aragon.es`
Modificar el fichero `src/styles.scss` para que el dominio de las URLs sea `opendata.aragon.es`

## Orden de compilado
`ng build -prod -bh="/servicios/focus/"`
