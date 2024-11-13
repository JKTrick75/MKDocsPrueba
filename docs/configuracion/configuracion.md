# Configuración de MkDocs

El archivo `mkdocs.yml` contiene configuraciones clave para el sitio de documentación **Mi Proyecto**.

## Contenido del fichero

```yaml
site_name: 'Mi Proyecto'
site_url: 'https://midominio.com'
site_author: 'Javi Ibáñez'
site_description: 'Documentación oficial de Mi Proyecto'

theme:
  features:
    - content.action.edit
    - content.action.view
#    - navigation.tabs
#    - navigation.tabs.sticky
  name: 'material'
  palette:
    primary: 'indigo'
    accent: 'blue'
  font:
    text: 'Roboto'
  google_analytics:
    property: 'UA-12345678-9'
    auto: true

nav:
  - Home: index.md
  - Guía de Instalación: guias/instalacion.md
  - Nuevo proyecto: guias/nuevo_proyecto.md
  - Configuración: configuracion/configuracion.md
  - Personalización: personalizacion/estilos.md
  - Extensiones: extensiones/admonitions.md

plugins:
  - search
  - macros

extra_css:
  - 'styles/extra.css'
extra_javascript:
  - 'js/custom.js'

markdown_extensions:
  - admonition
  - toc:
      permalink: true
  - codehilite:
      guess_lang: false

repo_url: 'https://github.com/jibanezmico/MkDocs'
repo_name: 'GitHub'
edit_uri: 'edit/main/docs/'

use_directory_urls: true
strict: true
```

## Información del sitio

- **site_name**: 'Mi Proyecto' – Nombre del sitio que se mostrará en la barra de navegación.
- **site_url**: 'https://midominio.com' – URL del sitio web.
- **site_author**: 'Javi Ibáñez' – Nombre del autor del sitio.
- **site_description**: 'Documentación oficial de Mi Proyecto' – Breve descripción del proyecto.

## Tema

- **name**: 'material' – Se utiliza el tema "Material" para MkDocs, que proporciona una interfaz moderna y limpia.
- **palette**: Se definen los colores principales del sitio:
    - **primary**: 'indigo' – Color primario del tema.
    - **accent**: 'blue' – Color de acento.
- **font**: Se utiliza la fuente **Roboto** para el texto.
- **google_analytics**: Se añade soporte para Google Analytics con la propiedad 'UA-12345678-9'.

### Características del tema
- **features**:
    - **content.action.edit**: Añade la opción de editar el contenido desde el sitio.
    - **content.action.view**: Añade la opción de ver el contenido directamente en GitHub.

## Navegación (nav)

Se define la estructura de navegación del sitio, que incluye:
- **Home**: Página de inicio (index.md).
- **Guía de Instalación**: Guía para instalar el proyecto.
- **Nuevo proyecto**: Instrucciones para crear un nuevo proyecto.
- **Configuración**: Detalles sobre la configuración del proyecto.
- **Personalización**: Explicaciones sobre cómo personalizar el sitio.
- **Extensiones**: Uso de extensiones en Markdown.

## Plugins

- **search**: Habilita la búsqueda dentro del sitio.
- **macros**: Permite la inserción de macros dentro de la documentación.

## Personalización adicional

- **extra_css**: Añade el archivo `extra.css` para personalizar el estilo del sitio.
- **extra_javascript**: Añade el archivo `custom.js` para incluir funcionalidades JavaScript.

## Extensiones de Markdown

- **admonition**: Permite el uso de cuadros de información especiales.
- **toc**: Añade una tabla de contenidos con enlaces permanentes.
- **codehilite**: Habilita el resaltado de código, desactivando la detección automática de lenguajes.

## Repositorio

- **repo_url**: URL del repositorio en GitHub.
- **repo_name**: Nombre del repositorio (GitHub).
- **edit_uri**: Ruta para editar los archivos directamente en GitHub.

## Otras configuraciones

- **use_directory_urls**: Habilita el uso de URLs amigables sin el sufijo `.html`.
- **strict**: Activa el modo estricto, que marca errores si hay problemas de configuración o enlaces rotos.
