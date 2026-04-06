<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Herramientas y tecnologías para la gestión de requisitos
    .row.BG08.justify-content-center.align-items-center.px-3.mb-0
      .col.col-lg-11.col-12
        p(data-aos="fade-down") En los primeros años de la ingeniería de requisitos, estos se documentaban principalmente en archivos de texto como Word o PDF. El control de versiones se realizaba de forma manual mediante múltiples copias del mismo archivo ("Especificación_v1.0.docx", "Especificación_v1.1_FINAL.docx", "Especificación_v1.1_FINAL_REVISADO.docx", "Especificación_v1.1_FINAL_REVISADO_2.docx") y la trazabilidad se gestionaba con tablas o referencias cruzadas. Los cambios solían registrarse a través de comentarios de revisión, lo que funcionaba únicamente en proyectos muy pequeños.
        p.mb-4(data-aos="fade-down") Este enfoque se vuelve rápidamente insostenible en proyectos de mayor complejidad. La edición simultánea de documentos, la pérdida de comentarios, la falta de un control real de versiones y la desactualización de matrices de trazabilidad o casos de prueba generan errores, retrabajo y una pérdida progresiva del control sobre los requisitos.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para superar estas limitaciones surgieron herramientas especializadas de gestión de requisitos. Una de las soluciones pioneras fue IBM Rational DOORS, desarrollada por IBM, que introdujo el concepto de un repositorio centralizado de requisitos. En DOORS, cada requisito cuenta con un identificador único, metadatos como origen, prioridad y estado, y vínculos con otros requisitos, casos de prueba y componentes de diseño. La trazabilidad se mantiene de forma automática, de modo que cualquier cambio en un requisito se refleja en los artefactos relacionados.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") No obstante, DOORS suele implicar altos costos de licenciamiento, que pueden alcanzar cifras elevadas para una organización. Por esta razón, muchas empresas optan por alternativas más accesibles, incluidas herramientas de código abierto y plataformas modernas ampliamente adoptadas en la industria.
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta--C05.px-3.py-2.order-lg-2.order-2
          p.mb-0.text-center(data-aos="fade-down") Entre estas alternativas se encuentran:
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C02(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img03.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Jira (Atlassian)
                p.mb-0 Originalmente un sistema de seguimiento de defectos, Jira evolucionó para también manejar requisitos. Muchos equipos usan Jira issues para requisitos/historias de usuario y vinculan a casos de prueba en herramientas de prueba.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C02(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img04.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Azure DevOps (Microsoft)
                p.mb-0 Suite integrada que incluye gestión de requisitos (epics, características, user stories), gestión de cambios, seguimiento de defectos y análisis.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C02(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img05.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Traceability Matrix Tools
                p.mb-0 Herramientas especializadas enfocadas específicamente en matrices de trazabilidad y control de cambios.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta--C02(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img06.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Specification by Example Tools
                p.mb-0 Herramientas que soportan documentación de requisitos en lenguaje que es simultáneamente legible para humanos y ejecutable para pruebas automatizadas (BDD - Behavior-Driven Development).
    .movil
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10.col-12
          .tarjeta.tarjeta--C02.p-4
            figure.mb-3
              img(src='@/assets/curso/tema9/img07.png', alt='Imagen decorativa')
            h4 Jira (Atlassian)
            p.mb-0 Originalmente un sistema de seguimiento de defectos, Jira evolucionó para también manejar requisitos. Muchos equipos usan Jira issues para requisitos/historias de usuario y vinculan a casos de prueba en herramientas de prueba.
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10.col-12
          .tarjeta.tarjeta--C02.p-4
            figure.mb-3
              img(src='@/assets/curso/tema9/img08.png', alt='Imagen decorativa')
            h4 Azure DevOps (Microsoft)
            p.mb-0 Suite integrada que incluye gestión de requisitos (epics, características, user stories), gestión de cambios, seguimiento de defectos y análisis.
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10.col-12
          .tarjeta.tarjeta--C02.p-4
            figure.mb-3
              img(src='@/assets/curso/tema9/img09.png', alt='Imagen decorativa')
            h4 Traceability Matrix Tools
            p.mb-0 Herramientas especializadas enfocadas específicamente en matrices de trazabilidad y control de cambios.
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10.col-12
          .tarjeta.tarjeta--C02.p-4
            figure.mb-3
              img(src='@/assets/curso/tema9/img10.png', alt='Imagen decorativa')
            h4 Specification by Example Tools
            p.mb-0 Herramientas que soportan documentación de requisitos en lenguaje que es simultáneamente legible para humanos y ejecutable para pruebas automatizadas (BDD - Behavior-Driven Development).
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") Una tendencia creciente es la integración directa entre herramientas de gestión de requisitos y herramientas de pruebas. Cuando un requisito está documentado, los casos de prueba pueden vincularse de forma inmediata, permitiendo generar reportes en tiempo real sobre qué requisitos han sido verificados y cuáles aún presentan brechas de cobertura.
        p.mb-0(data-aos="fade-down") Otra tendencia relevante es el enfoque conocido como requirements as code. En lugar de mantener los requisitos en documentos separados o en sistemas especializados, estos se documentan directamente en el repositorio de código, frecuentemente mediante archivos en formatos como Gherkin. Esto acerca los requisitos a su implementación, facilita su actualización y reduce el riesgo de desalineación entre lo que se define y lo que se desarrolla.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C03.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-2.order-2
              p(data-aos="fade-down") Independientemente de la herramienta utilizada, los principios fundamentales permanecen constantes: centralización de la información, control de versiones, trazabilidad y gestión formal de cambios. Las herramientas no reemplazan estos principios, sino que los automatizan, reduciendo errores, mejorando la visibilidad del proyecto y aumentando la eficiencia del proceso de ingeniería de requisitos.
            .col.col-lg-2.col-7.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema9/img02.svg', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
