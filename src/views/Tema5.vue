<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Historias de usuario
    p.mb-4(data-aos="fade-down") Para conocer un poco de historia, se sugiere revisar la siguiente línea de tiempo:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema5/img01.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 Décadas de 1980–1990.
            p.mb-0 Predominio de metodologías tradicionales como Waterfall, con especificaciones extensas y detalladas.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema5/img02.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 Finales de los años 1990. 
            p.mb-0 Surgen cuestionamientos sobre la rigidez de las metodologías tradicionales y el alto costo de la documentación extensa, lo que da origen a Extreme Programming (XP), con un enfoque iterativo y centrado en el cliente.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema5/img03.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 Inicios de los 2000. 
            p.mb-0 Se consolidan Scrum y otras metodologías ágiles.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/tema5/img04.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h5 Enfoque ágil. 
            p.mb-0 Aparecen las historias de usuario como una forma simple y centrada en el usuario para expresar requisitos.
    p.mb-4(data-aos="fade-down") Como resultado del surgimiento de las metodologías ágiles a finales de los años noventa, se consolidó una forma más simple y centrada en el usuario para expresar los requisitos: las historias de usuario. Estas se redactan en lenguaje natural y describen necesidades reales desde la perspectiva de quien utiliza el sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0.text-center(data-aos="fade-down") El formato más utilizado se estructura así: 
          p.mb-0.text-center.text-bold(data-aos="fade-down") “Como [tipo de usuario], se requiere [funcionalidad], con el fin de [beneficio o valor]”.
    p.mb-4.text-center(data-aos="fade-down") Algunos ejemplos prácticos son:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img05.svg", alt="alt").img80.m-auto
          p Como cliente de comercio electrónico, se requiere visualizar recomendaciones personalizadas en la página de inicio, con el fin de facilitar la identificación rápida de productos de interés.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img06.svg", alt="alt").img80.m-auto
          p Como administrador del sistema, se requiere la capacidad de deshabilitar cuentas de usuario sin eliminar datos históricos, con el fin de conservar registros completos de usuarios inactivos.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img07.svg", alt="alt").img80.m-auto
          p Como usuario de una aplicación móvil, se requiere que el sistema funcione adecuadamente con conexiones lentas, con el fin de permitir el acceso en condiciones de señal limitada.
    .row.justify-content-center.mb-4
      .col.col-auto
        .tarjeta.tarjeta--C09.px-3.py-2.order-lg-2.order-2
          p.mb-0.text-center.text-white(data-aos="fade-down") ¿Qué hace que las historias de usuario sean poderosas? 
    LineaTiempoE.color-acento-contenido.mb-4
      .row(titulo="Primero")
        .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
          h4(data-aos="fade-down") El foco en el usuario
          p.mb-0(data-aos="fade-down") No es una lista de características técnicas, es una expresión de valor desde la perspectiva de quien va a usar el sistema. El beneficio final es claro.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img08.svg', alt='Imagen decorativa')
      .row(titulo="Segundo")
        .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
          h4(data-aos="fade-down") El tamaño pequeño
          p.mb-0(data-aos="fade-down") Una historia de usuario típicamente representa una cantidad de trabajo que puede ser completada en una semana de desarrollo por un pequeño equipo. Esto hace que sean manejables, estimables y reducen el riesgo de estimaciones incorrectas.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img09.svg', alt='Imagen decorativa')
      .row(titulo="Tercero")
        .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
          h4(data-aos="fade-down") Las historias de usuario enfatizan la conversación
          p.mb-0(data-aos="fade-down") El texto escrito es deliberadamente incompleto. Es un recordatorio para que los desarrolladores y el cliente tengan una conversación. "Como usuario desea buscar productos" es incompleto. ¿Por qué campos?, ¿búsqueda de texto libre o búsqueda facetada?, ¿autocompletación?, ¿corrección de errores tipográficos? Esas conversaciones surgen durante el desarrollo, lo que permite que el cliente refine y aclare sus necesidades exactas basado en la retroalimentación visual.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img10.svg', alt='Imagen decorativa')
      .row(titulo="Cuarto")
        .col-lg-8.mb-4.mb-lg-0.order-lg-2.order-2
          h4(data-aos="fade-down") Las historias de usuario son ideales para trabajo iterativo
          p.mb-0.mb-0(data-aos="fade-down") En un proyecto ágil, no se debe intentar completar todo el sistema, pues cada iteración (típicamente de 1-4 semanas) entrega un conjunto de historias de usuario completadas. El cliente ve progreso constantemente, las historias completadas se cierran y se hacen más historias y finalmente, el proyecto avanza gradualmente, con ajustes basados en lo que se aprende.
        .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
      .cajon.cajon.C01.p-4
        p.mb-0(data-aos="fade-down") Pero aquí está lo crítico: las historias de usuario 
          span.etiqueta(style="background-color: #19538D") no
          | reemplazan las especificaciones formales. Esto es un error común en organizaciones que adoptan ágil por primera vez. Si se está construyendo un sistema crítico para una institución financiera o para un dispositivo médico regulado, todavía se necesitan especificaciones formales. Las historias de usuario pueden ser excelentes para gestionar el trabajo del desarrollo iterativo, pero necesita documentación formal para auditoría, cumplimiento regulatorio y referencia futura.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La mejor práctica es combinar ambos enfoques: historias de usuario para gestionar el trabajo iterativo y comunicación con el cliente durante el desarrollo, y una especificación formal que se produce gradualmente a medida que se refinan las historias. Cuando una historia se entiende completamente, se documenta formalmente en la especificación de requisitos de <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") Ahora, dentro de cada historia de usuario, están los criterios de aceptación. Estos son las condiciones específicas que deben cumplirse para que la historia se considere completa; son el puente entre la narrativa de la historia ("como cliente desea buscar productos") y los detalles técnicos específicos ("debe soportar búsqueda por texto libre, debe manejar hasta 10,000 productos, debe retornar resultados en menos de 1 segundo").
        p.mb-0(data-aos="fade-down") A continuación, se relaciona un ejemplo de historia de usuario con criterios de aceptación, partiendo de lo siguiente: 
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0.text-center(data-aos="fade-down") “Como gerente de ventas, desea generar reportes de ventas por región, para que pueda identificar dónde está el desempeño más fuerte”.
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Criterios de aceptación")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0(data-aos="fade-down") 
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El gerente puede seleccionar un rango de fechas (mes/año) de un calendario visual.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El gerente puede seleccionar una o múltiples regiones de una lista desplegable.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El sistema genera un reporte con las siguientes columnas: Región, Ventas Totales, Número de Transacciones, Promedio de Venta, Variación Respecto al Mes Anterior.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Los números se pueden exportar a formato Excel.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El reporte se genera en menos de 5 segundos, incluso si cubre 12 meses de datos.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El reporte incluye un gráfico de barras mostrando comparación entre regiones.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 El gerente puede guardar sus configuraciones de reporte favoritas y acceder a ellas rápidamente.
          .row(titulo="Notas técnicas")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-4(data-aos="fade-down") 
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Datos extraídos del almacén de datos, no de base de datos operacional (para no afectar desempeño).
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Requiere agregación pre-calculada <em>nightly</em>.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Acceso requiere rol "Gerente" o superior.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Una historia bien escrita tiene la característica INVEST, un acrónimo que significa:
              .cajon.cajon.C04.px-3.py-2
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p Independent (independiente): no depende de otras historias para ser comprendida.
                  li.mb-0
                    i.lista-ul__vineta
                    p Negotiable (negociable): los detalles no están completamente definidos, hay espacio para conversación.
                  li.mb-0
                    i.lista-ul__vineta
                    p Valuable (valiosa): proporciona valor claro a los usuarios finales.
                  li.mb-0
                    i.lista-ul__vineta
                    p Estimable (estimable): el equipo puede estimar razonablemente el esfuerzo requerido.
                  li.mb-0
                    i.lista-ul__vineta
                    p Small (pequeña): puede ser completada en una iteración (típicamente 1-4 semanas).
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Testable (testeable): hay criterios claros para verificar que se completó.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img13.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-8.col-12
        .cajon.cajon.C02.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Si una historia no cumple con estos criterios, probablemente necesita ser refinada o dividida en historias más pequeñas.
            .col.col-lg-2.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema5/img14.svg', alt='Imagen decorativa')
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
