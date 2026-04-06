<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A lo largo de este componente formativo se analizó la ingeniería de requisitos como una disciplina esencial para el éxito de los proyectos de <em>software</em>. Se comprendió que los requisitos actúan como el puente entre la visión del negocio y la solución técnica y que su correcta definición permite transformar necesidades poco claras en especificaciones implementables y verificables. Se estudiaron distintas formas de documentarlos, desde lenguaje natural hasta modelos y enfoques híbridos, así como los principios de calidad, estándares internacionales y el uso de historias de usuario. Todo ello orientado a reducir errores, facilitar la validación y asegurar que el producto final responda realmente a las necesidades del cliente.
    p Asimismo, se abordaron prácticas clave como la validación de requisitos, la gestión de cambios y el apoyo de herramientas especializadas que facilitan la trazabilidad y el control del proyecto. Más allá de técnicas o tecnologías, se destacó la importancia de desarrollar una mentalidad crítica y comunicativa, capaz de identificar ambigüedades y alinear a los distintos actores involucrados. Aunque la ingeniería de requisitos continúa evolucionando con nuevas metodologías y tecnologías, sus principios fundamentales permanecen vigentes y constituyen una base indispensable para la construcción de <em>software</em> de calidad y el desarrollo profesional a largo plazo.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Requisitos de <em>software</em>: documentación, validación y versionamiento, aborda los conceptos fundamentales de la disciplina, las formas de documentar requisitos y las buenas prácticas apoyadas en estándares, continuando con la elaboración de informes de requisitos y el uso de historias de usuario como enfoque ágil. Posteriormente, se estudian las listas de chequeo y las técnicas de validación para asegurar la calidad de la información, finalizando con la gestión de cambios y el uso de herramientas y tecnologías que permiten el versionamiento, la trazabilidad y el control efectivo de los requisitos a lo largo del ciclo de vida del <em>software</em>.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
