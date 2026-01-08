# Instrucciones de SEO para SatApp Oficial - OAGRD

## 📋 Resumen de Cambios Implementados

Se han implementado mejoras completas de SEO para cumplir con los requisitos de Google Play y mejorar la indexación en Google.

## ✅ Archivos Creados/Modificados

### 1. **Archivos SEO Principales**
- ✅ `public/robots.txt` - Permite el rastreo de Google
- ✅ `public/sitemap.xml` - Mapa del sitio para indexación
- ✅ `src/app/layout.tsx` - Metadatos globales mejorados
- ✅ `src/app/(user)/delete_account/page.tsx` - Página optimizada con JSON-LD

### 2. **Metadatos Implementados**

#### Metadatos Globales (layout.tsx):
- Title template con marca
- Description optimizada
- Keywords relevantes
- Open Graph tags
- Twitter Cards
- Robots meta tags
- Canonical URLs
- Información de la aplicación (org.oagrd.satapp)
- Email del desarrollador (gestionriesgo2023@unicartagena.edu.co)

#### Metadatos de Página de Eliminación de Cuenta:
- Title específico con keywords
- Description detallada
- JSON-LD Schema.org (WebPage + SoftwareApplication)
- Open Graph optimizado
- Información visible de la app y desarrollador

## 🚀 Pasos para Indexación en Google

### Paso 1: Verificar el Sitio en Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega la propiedad: `https://www.satcartagena.oagrd.org`
3. Verifica la propiedad usando uno de estos métodos:
   - **Archivo HTML**: Descarga el archivo de verificación y súbelo a `public/`
   - **Meta tag**: Agrega el meta tag en `src/app/layout.tsx` (línea 82)
   - **Google Analytics**: Si ya tienes GA instalado
   - **Google Tag Manager**: Si ya tienes GTM instalado

### Paso 2: Enviar el Sitemap

1. En Google Search Console, ve a **Sitemaps**
2. Agrega la URL del sitemap: `https://www.satcartagena.oagrd.org/sitemap.xml`
3. Haz clic en **Enviar**

### Paso 3: Solicitar Indexación de la Página de Eliminación de Cuenta

1. En Google Search Console, ve a **Inspección de URLs**
2. Ingresa: `https://www.satcartagena.oagrd.org/delete_account`
3. Haz clic en **Solicitar indexación**
4. Espera 24-48 horas para que Google indexe la página

### Paso 4: Verificar la Indexación

Después de 24-48 horas, verifica en Google:
```
site:satcartagena.oagrd.org delete_account
```

O busca directamente:
```
"SatApp Oficial" "org.oagrd.satapp" "eliminar cuenta"
```

## 📊 Monitoreo y Mantenimiento

### Verificaciones Regulares:

1. **Semanalmente**:
   - Revisa Google Search Console para errores de rastreo
   - Verifica que el sitemap esté actualizado
   - Revisa las páginas indexadas

2. **Mensualmente**:
   - Actualiza la fecha `<lastmod>` en sitemap.xml
   - Revisa el rendimiento de búsqueda
   - Verifica los enlaces rotos

3. **Cuando agregues nuevas páginas**:
   - Actualiza `sitemap.xml` con la nueva URL
   - Solicita indexación manual en Google Search Console

## 🔍 Validación de Datos Estructurados

Para verificar que los datos estructurados JSON-LD están correctos:

1. Ve a [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Ingresa la URL: `https://www.satcartagena.oagrd.org/delete_account`
3. Verifica que no haya errores

O usa [Schema.org Validator](https://validator.schema.org/):
1. Ingresa la URL de la página
2. Verifica que el schema sea válido

## 📱 Para Google Play Store

### Información que Google Play Puede Validar:

La página de eliminación de cuenta ahora incluye:

✅ **Nombre de la app**: "SatApp Oficial"
✅ **ID de la app**: "org.oagrd.satapp"
✅ **Desarrollador**: "OAGRD - Oficina Asesora para la Gestión del Riesgo de Desastres"
✅ **Organización**: "Universidad de Cartagena"
✅ **Email del desarrollador**: "gestionriesgo2023@unicartagena.edu.co"
✅ **Email de contacto**: "contacto@oagrd.org"

### Metadatos HTML Visibles:
```html
<meta name="application-name" content="SatApp Oficial">
<meta name="app-id" content="org.oagrd.satapp">
<meta name="developer" content="OAGRD - Oficina Asesora para la Gestión del Riesgo de Desastres">
<meta name="developer-email" content="gestionriesgo2023@unicartagena.edu.co">
```

### Datos Estructurados JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SatApp Oficial",
  "identifier": "org.oagrd.satapp",
  "author": {
    "@type": "Organization",
    "name": "Universidad de Cartagena - OAGRD",
    "email": "gestionriesgo2023@unicartagena.edu.co"
  }
}
```

## 🎯 Próximos Pasos Recomendados

1. **Inmediato**:
   - [ ] Verificar el sitio en Google Search Console
   - [ ] Enviar el sitemap
   - [ ] Solicitar indexación de `/delete_account`

2. **Esta Semana**:
   - [ ] Configurar Google Analytics (opcional)
   - [ ] Verificar que robots.txt sea accesible
   - [ ] Probar la página en diferentes dispositivos

3. **Este Mes**:
   - [ ] Monitorear el rendimiento en Search Console
   - [ ] Revisar y optimizar meta descriptions
   - [ ] Considerar agregar más contenido relevante

## 📞 Soporte

Si tienes dudas sobre la implementación SEO:
- Email: gestionriesgo2023@unicartagena.edu.co
- Contacto: contacto@oagrd.org

## 🔗 Enlaces Útiles

- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Play Console](https://play.google.com/console)
- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

**Última actualización**: 2026-01-08
**Versión**: 1.0
**Responsable**: OAGRD - Universidad de Cartagena
