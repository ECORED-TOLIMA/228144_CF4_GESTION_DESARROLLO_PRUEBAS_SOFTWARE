<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") Imagine que a un profesional se le encarga dirigir un proyecto para desarrollar un sistema de información para una empresa de distribución de alimentos. El gerente expresa una visión general: “mejorar los procesos y aumentar la competitividad”. Sin embargo, durante las reuniones iniciales surgen múltiples expectativas: automatización de inventarios, fortalecimiento de la relación con los clientes, localización de productos en tiempo real y generación de reportes precisos para auditoría. Ante este panorama, se hace evidente la necesidad de identificar con claridad los verdaderos requisitos del sistema, su propósito fundamental y la prioridad de sus funcionalidades.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Este escenario es frecuente en el desarrollo de <em>software</em>. Diversos estudios industriales indican que entre el 70 % y el 80 % de los defectos en los sistemas se originan en errores o deficiencias durante la captura y documentación de requisitos. El problema no radica en la falta de habilidades de programación, sino en la construcción de soluciones basadas en requisitos mal entendidos o incompletos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") La ingeniería de requisitos aborda precisamente esta problemática. Se trata de un proceso sistemático y disciplinado para desarrollar, analizar, comunicar y mantener los requisitos a lo largo del ciclo de vida del proyecto. Esta disciplina integra técnicas de análisis, comunicación efectiva, conocimiento técnico y pensamiento crítico, y va más allá de la simple redacción de especificaciones.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En el contexto del desarrollo de <em>software</em>, un requisito es una declaración clara de lo que el sistema debe hacer. Para que sea correcto, debe ser específico, verificable, realizable y trazable. Por ejemplo, afirmar que un sistema debe ser “rápido” no constituye un requisito verificable; en cambio, establecer que debe responder a consultas de inventario en menos de dos segundos en el 95 % de los casos permite su medición, prueba y validación.
    p.mb-4.text-center(data-aos="fade-down") Partiendo de lo anterior, se invita a acceder al siguiente video, el cual contextualiza y articula la temática que se abordará durante este componente formativo:
    .row.justify-content-center.align-items-center.mb-0       
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ntMEAqfDKhM?si=zq3gs9GnhWSYZTsf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
