<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Listas de chequeo para validación de información
    p.mb-4(data-aos="fade-down") A lo largo de este componente se ha aprendido qué caracteriza a un buen requisito: claridad, completitud, trazabilidad, verificabilidad, entre otros criterios. Sin embargo, surge una pregunta clave: ¿cómo puede una organización asegurarse de que todos los requisitos cumplan de manera consistente con estos estándares? Una herramienta sencilla pero muy efectiva para lograrlo es la lista de chequeo.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C05.p-4.h-100.w-100
          p Una lista de chequeo de requisitos consiste en un conjunto de preguntas que se aplican a cada requisito para verificar su calidad frente a criterios previamente definidos. Su principal fortaleza es la simplicidad, ya que no requiere herramientas sofisticadas ni procesos complejos. El revisor recorre cada pregunta, marca “sí” o “no” y cuando identifica un “no”, sabe que el requisito necesita ser ajustado o refinado.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img01.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") Las organizaciones con mayor madurez en ingeniería de requisitos suelen desarrollar listas de chequeo propias, construidas a partir de su experiencia. Estas pueden variar según el tipo de proyecto; por ejemplo, un sistema de <em>software</em> médico exige criterios distintos a los de una aplicación de entretenimiento, debido a los diferentes niveles de riesgo y calidad esperados. Aun así, existen principios generales que son comunes y aplicables a cualquier lista de chequeo de requisitos.
        p.mb-0(data-aos="fade-down") La siguiente es una lista de chequeo genérica que puede ser usada para revisar requisitos individuales de calidad de <em>software</em>:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Lista de chequeo sobre requisitos de calidad de <em>software</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Pregunta de evaluación
                th(data-aos="fade-down")(style= "width: 30%") Respuesta (Sí/No)
                th(data-aos="fade-down")(style= "width: 30%") Observaciones
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 1. ¿El requisito tiene un identificador único (REQ-001, etc.)?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 2. ¿El lenguaje es claro y específico, sin términos vagos o ambiguos?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 3. ¿El requisito contiene toda la información necesaria para implementarse?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 4. ¿Se puede verificar objetivamente que el requisito fue implementado?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 5. ¿Es viable implementarlo con la tecnología y recursos disponibles?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 6. ¿Puede trazarse a casos de prueba, diseño o historias de usuario?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 7. ¿Es consistente con otros requisitos del sistema?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 8. ¿Se conoce el origen del requisito (cliente, regulación, estándar)?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 9. ¿Tiene una prioridad definida (crítico, alto, medio, bajo)?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 10. ¿No duplica otro requisito existente?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 11. ¿Es realmente necesario para el sistema o negocio?
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 12. ¿Aporta valor claro al usuario o al negocio?
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") 
                td(data-aos="fade-down")  
                td(data-aos="fade-down") 
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Puntaje de calidad del requisito
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 0
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td(data-aos="fade-down") Porcentaje de cumplimiento
                td(data-aos="fade-down") 0
                td(data-aos="fade-down") 
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C09.px-3.py-2.order-lg-2.order-2
          p.mb-0.text-center.text-white(data-aos="fade-down") Cada punto de la anterior lista de chequeo tiene una representación y significado específico que es:
    .row.justify-content-center.mb-2
      .col.col-lg-4.col-12.order-lg-2.order-2
        .row
          .col.col-lg-6.col-6
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Identificación única
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Claridad
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Completitud 
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Verificabilidad
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Viabilidad
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 6
                | Trazabilidad
          .col.col-lg-6.col-6
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 7
                | Consistencia
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 8
                | Origen
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 9
                | Prioridad
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 10
                | No redundancia
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 11
                | Necesidad
            ol.lista-ol--cuadro.lista-ol--separador.mb-0(data-aos="fade-down")
              li
                .lista-ol--cuadro__vineta
                  span.text-bold 12
                | Valor
      .col.col-lg-4.col-12.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img02.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        .cajon.cajon.C02.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-2.order-2
              p(data-aos="fade-down") Recuerde: si un requisito falla en cualquiera de estos puntos, debería ser devuelto al remitente para refinamiento antes de ser aceptado en la especificación.
            .col.col-lg-2.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema6/img03.svg', alt='Imagen decorativa')
    p.mb-4.text-center(data-aos="fade-down") Ahora, más allá de revisiones individuales, también hay listas de chequeo para la especificación completa de requisitos con los siguientes ítems:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG06(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema6/img14.png", alt="Imagen decorativa")
            .col-lg-8.px-5.py-0
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.px-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img04.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se ha completado la sección de introducción con propósito, alcance, e información general?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se ha incluido una descripción clara de los usuarios finales y sus necesidades?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se han identificado todos los <em>stakeholders</em> relevantes?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se han documentado todas las restricciones y limitaciones?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Hay una distinción clara entre requisitos funcionales y no funcionales?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se incluye una matriz de trazabilidad completa?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Hay apéndices con diagramas que clarifiquen interacciones complejas?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿Se ha revisado la especificación por lo menos dos personas independientes?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img12.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿El cliente ha revisado y aprobado la especificación?
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img13.svg", alt="Imagen decorativa").img100.m-auto
                  p ¿La especificación es editable y versionable en un sistema de control de cambios?
    p.mb-0(data-aos="fade-down") Estas listas de chequeo pueden parecer simples, pero aplicarlas consistentemente mejora significativamente la calidad de los requisitos y reduce problemas más adelante en el ciclo de vida del proyecto.
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
