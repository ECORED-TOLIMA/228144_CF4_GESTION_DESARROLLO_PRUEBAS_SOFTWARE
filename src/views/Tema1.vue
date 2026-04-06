<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos fundamentales de la ingeniería de requisitos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      P.mb-4.text-center(data-aos="fade-down") Para entender adecuadamente la ingeniería de requisitos, se necesita empezar por los conceptos más fundamentales. La pregunta más básica es: 
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p(data-aos="fade-down") #[B ¿Qué es un requisito?] Un requisito es una condición o capacidad que un usuario necesita para resolver un problema o alcanzar un objetivo. 
          p(data-aos="fade-down") En el contexto del desarrollo de <em>software</em>, es una declaración de lo que el sistema de <em>software</em> debe hacer o una restricción sobre cómo debe hacerlo.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='Imagen decorativa')
    P.mb-4.text-center(data-aos="fade-down") Es importante distinguir entre necesidades, requisitos y características:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img02.svg", alt="alt").img80.m-auto
          h5.text-center Necesidad
          p Es un problema o una carencia que alguien experimenta. Por ejemplo, un banco tiene la necesidad de procesar transacciones más rápidamente para mejorar la satisfacción del cliente.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img03.svg", alt="alt").img80.m-auto
          h5.text-center Requisito
          p Es la traducción de esa necesidad en términos que pueden ser implementados. Por ejemplo, el sistema debe procesar transacciones bancarias estándar en menos de 3 segundos.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema1/img04.svg", alt="alt").img80.m-auto
          h5.text-center Característica
          p Es la implementación específica de ese requisito en el <em>software</em>. Por ejemplo, la arquitectura del sistema utiliza bases de datos distribuidas y mecanismos de caché para lograr esa velocidad.
    P.mb-4.text-center(data-aos="fade-down") Ahora bien, ¿por qué es tan crítica la ingeniería de requisitos? Considere el costo de corregir un defecto en diferentes fases del proyecto:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
        h4.text-center Captura de requisitos
        p.text-center(data-aos="fade-down") Un defecto identificado durante esta fase puede ser corregido simplemente modificando un documento, quizás con un costo de unos cientos de pesos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
        h4.text-center Fase de diseño
        p.text-center(data-aos="fade-down") El mismo defecto, si no es identificado hasta esta fase, puede costar miles de pesos en rediseño.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
        h4.text-center Fase de implementación
        p.text-center(data-aos="fade-down") Si persiste hasta la implementación, el costo es aún mayor.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
        h4.text-center Fase de pruebas
        p.text-center(data-aos="fade-down") Y si permanece hasta esta fase o peor aún, hasta que el sistema está en producción, el costo puede ser de millones de pesos, más los costos de reputación y satisfacción del cliente.
    .row.justify-content-center(data-aos="flip-down")
      .col-lg-10.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema1/img09.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.align-items-center
            p.mb-0 Estudios de la Universidad de Michigan han mostrado que corregir un error en requisitos durante la fase de desarrollo cuesta en promedio 10 veces más que corregirlo durante la fase de especificación. Y si el error se descubre después de que el <em>software</em> está en producción, puede costar 100 veces más. Esta es la razón por la cual invertir tiempo y cuidado en la ingeniería de requisitos no es un lujo, es una necesidad económica.
    P(data-aos="fade-down") La ingeniería de requisitos no es simplemente "hablar con el cliente"; es un proceso riguroso que involucra múltiples actividades: elicitación (descubrimiento de requisitos), análisis (comprensión profunda), especificación (documentación formal), validación (verificación de que los requisitos son correctos) y gestión (manejo de cambios). Cada una de estas actividades requiere habilidades específicas y herramientas apropiadas.
    P.mb-4(data-aos="fade-down") Un aspecto importante a entender es que hay diferentes tipos de requisitos:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Requisitos funcionales
              p.text-center Describen qué debe hacer el sistema. Por ejemplo: "el sistema debe permitir que los usuarios registren nuevas órdenes de compra". 
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Requisitos no funcionales
              p.text-center Describen cómo debe funcionar el sistema o qué limitaciones debe respetar. Por ejemplo: "el sistema debe estar disponible 99.9 % del tiempo" o "el sistema debe procesar hasta 10.000 transacciones por hora".
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Requisitos de restricción
              p.text-center Describen límites físicos o normativas. Por ejemplo: "el sistema debe cumplir con la ley de protección de datos GDPR" o "el sistema debe funcionar en dispositivos móviles con conectividad 4G lenta".
    .row.justify-content-center
      .col.col-lg-10.col-12
        P.mb-0(data-aos="fade-down") Finalmente, es crucial entender que los requisitos no son descubiertos, son elicitados. El cliente frecuentemente no sabe exactamente qué necesita. Tiene una intuición, una sensación de que algo debe mejorar, pero no tiene una especificación clara. Es el trabajo del ingeniero de requisitos ayudar al cliente a articular esa intuición en requisitos concretos. Esto requiere escucha activa, preguntas profundas, así como la capacidad de ver patrones y conexiones que el cliente mismo no ve. En esencia, el ingeniero de requisitos es un traductor cultural que convierte las visiones y necesidades del negocio en especificaciones técnicas que los desarrolladores pueden implementar.

</template>

<script>
export default {
  name: 'Tema1',
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
