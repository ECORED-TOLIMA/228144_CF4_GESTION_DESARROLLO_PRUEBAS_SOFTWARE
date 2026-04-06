<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Versionamiento de requisitos: gestión de cambios
    p(data-aos="fade-down") Uno de los aspectos más complejos de la ingeniería de requisitos es que estos no son estáticos. Un requisito que fue cuidadosamente redactado, revisado, validado y aprobado en una fase inicial puede recibir solicitudes de cambio pocas semanas después. Esto no representa un fallo del proceso, sino una característica natural del desarrollo de <em>software</em>. A medida que el cliente observa el producto en construcción, adquiere mayor comprensión de sus necesidades; adicionalmente, los cambios del mercado, la aparición de nueva información y el descubrimiento de limitaciones técnicas hacen necesario ajustar lo definido inicialmente.
    p.mb-4(data-aos="fade-down") Por esta razón, el desafío no consiste en evitar los cambios de requisitos —lo cual no es posible—, sino en gestionarlos de manera controlada para que el proyecto no pierda estabilidad.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de cambios de requisitos se apoya en un proceso formal que regula cómo estos evolucionan a lo largo del proyecto. Dicho proceso suele incluir el registro de una solicitud de cambio (Change Request – CR), el análisis de su impacto, la decisión de aprobarla, rechazarla o aplazarla, su implementación en caso de aprobación y el cierre formal de la solicitud.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") Cuando se presenta una solicitud de cambio, esta debe documentar claramente qué se solicita, por qué se requiere, quién la propone y en qué plazo se necesita. Idealmente, esta información debe registrarse por escrito y no limitarse a acuerdos verbales, ya que la informalidad suele generar malentendidos y confusión.
        .row.justify-content-center.align-items-stretch.mb-4.g-0
          .col-lg-7.col-12.order-lg-1.order-2
            .cajon.C05.p-4.h-100.w-100
              p Una vez documentada, la solicitud es evaluada por un equipo responsable, que analiza qué requisitos se ven afectados, qué componentes de diseño o código deben modificarse, cuál es el esfuerzo estimado, el impacto en el cronograma y los riesgos asociados.
              p.mb-0 Con base en este análisis, se toma una decisión debidamente documentada. La solicitud puede aprobarse, rechazarse o postergarse para una fase posterior. En algunos casos, por ejemplo, un cambio puede implicar un incremento significativo del presupuesto con un beneficio limitado, lo que justifica aplazarlo hasta que el cliente confirme su disposición a asumir el costo adicional.
          .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema8/img02.svg', alt='Imagen decorativa')
        .row.justify-content-center.align-items-stretch
          .col-lg-10.col-12.order-lg-2.order-2
            p.mb-0 Si la solicitud es aprobada, los requisitos se actualizan en la especificación correspondiente. Cuando el cambio es relevante, se incrementa la versión del documento y se registra un historial que indique qué se modificó, cuándo ocurrió y quién autorizó el cambio. Esta información se comunica a todos los interesados del proyecto —desarrolladores, arquitectos y personal de pruebas— para asegurar la correcta alineación del trabajo.
          .col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema8/img03.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Finalmente, mantener un registro completo de todas las solicitudes de cambio, tanto aprobadas como rechazadas, es una buena práctica. Este historial proporciona trazabilidad sobre la evolución del sistema y permite entender, incluso años después, las decisiones técnicas y funcionales tomadas durante el desarrollo.
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
