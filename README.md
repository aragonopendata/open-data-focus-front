# Open Data Focus - Front

## Despliegue con docker

### Modificaciones

#### Global
**Variables de entorno:**
```bash
cp docker-compose-template.yml docker-compose.yml
```
Abrimos el archivo `docker-compose.yml` con un editor de texto y hacemos las modificaciones necesarias.

#### Entorno Producción
``` bash
cp .deployment_conf_files/_open-sans-pro.scss src/assets/scss/_open-sans.scss
cp .deployment_conf_files/app.constants-pro.ts src/app/app.constants.ts
cp .deployment_conf_files/histories.service-pro.ts src/app/services/histories.service.ts
cp .deployment_conf_files/styles-pro.scss src/styles.scss
```

#### Entorno Preproducción
``` bash
cp .deployment_conf_files/_open-sans-pre.scss src/assets/scss/_open-sans.scss
cp .deployment_conf_files/app.constants-pre.ts src/app/app.constants.ts
cp .deployment_conf_files/histories.service-pre.ts src/app/services/histories.service.ts
cp .deployment_conf_files/styles-pre.scss src/styles.scss
```

#### Entorno Desarrollo
``` bash
cp .deployment_conf_files/_open-sans-des.scss src/assets/scss/_open-sans.scss
cp .deployment_conf_files/app.constants-des.ts src/app/app.constants.ts
cp .deployment_conf_files/styles-des.scss src/styles.scss
```

### Comandos para despliegue
```bash
docker compose build
docker compose up -d
```

## Despliegue manual
### Orden de compilado
`ng build -prod -bh="/servicios/focus/"`