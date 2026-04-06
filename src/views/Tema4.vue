<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Informe de requisitos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      P.mb-4.text-center(data-aos="fade-down") 
      .col.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Cuando una organización decide construir un nuevo sistema de <em>software</em> de cierta complejidad, es fundamental elaborar una especificación de requisitos (SRS – <em>software</em> Requirements Specification), también conocida como informe de requisitos. Este artefacto va mucho más allá de un registro administrativo: funciona como un contrato entre el cliente, que financia el proyecto y el equipo de desarrollo, que lo construye. Además, sirve como referencia para la arquitectura, el diseño y las decisiones de implementación, y constituye la base sobre la cual se evaluará la aceptación del producto final.
      .col.col-12.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img01.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Estándar IEEE 
        p(data-aos="fade-down") El estándar IEEE 830, actualmente reemplazado por IEEE 29148, proporciona una estructura de referencia para la elaboración de especificaciones de requisitos. Este estándar ha evolucionado a partir de décadas de experiencia en la industria del <em>software</em> y refleja el consenso de expertos sobre los elementos esenciales que debe contener una especificación de requisitos profesional. Aunque no es obligatorio seguir el estándar de manera estricta, muchas organizaciones adaptan su estructura a necesidades específicas; sin embargo, resulta fundamental comprender los principios que lo sustentan.
        p.mb-0(data-aos="fade-down") La siguiente imagen clarifica un poco esta actualización:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Evolución del estándar de requisitos de <em>software</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema4/img02.svg', alt='Figura 3 que relaciona la evolución del estándar de requisitos de <em>software</em>, desde el IEEE 830, enfocado en requisitos funcionales y no funcionales, hasta el IEEE 29148, que amplía el alcance a la ingeniería de requisitos, <em>stakeholders</em>, diagramas de sistemas, validación y verificación.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema4/img03.svg', alt='Figura 3 que relaciona la evolución del estándar de requisitos de <em>software</em>, desde el IEEE 830, enfocado en requisitos funcionales y no funcionales, hasta el IEEE 29148, que amplía el alcance a la ingeniería de requisitos, <em>stakeholders</em>, diagramas de sistemas, validación y verificación.')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 IREB
        p(data-aos="fade-down") El International Requirements Engineering Board (IREB) es una organización profesional dedicada a la certificación de ingenieros de requisitos. Para obtener una certificación IREB, el profesional debe demostrar un conocimiento sólido de los principios de la ingeniería de requisitos. Entre las áreas evaluadas se incluye el dominio de estándares como IEEE 830 y las buenas prácticas en documentación. IREB define un <em>body of knowledge</em> que establece las competencias esenciales de un especialista en requisitos.
        p.mb-0(data-aos="fade-down") Una especificación de requisitos típicamente tiene estas secciones principales: 
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Introductoria
            p.mb-0(data-aos="fade-down") Establece el contexto, describe el propósito del documento, define el alcance del proyecto y proporciona referencias a documentos relacionados.
          .col-xl.col-lg-6.tarjeta.tarjeta--C07.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img05.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Descripción general del producto
            p.mb-0(data-aos="fade-down") Explica desde una perspectiva de alto nivel qué va a hacer el sistema, quiénes son los usuarios y cuáles son las restricciones principales.
          .col-xl.col-lg-6.tarjeta.tarjeta--C08.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img06.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Requisitos específicos
            p.mb-0(data-aos="fade-down") Detalla cada requisito funcional, no funcional, de interfaz y de restricción.
    p.mb-4(data-aos="fade-down") Cada requisito de <em>software</em> debe contar con una identificación única, una descripción clara y verificable, indicar su origen, establecer su prioridad y registrar cualquier observación relevante. Esta información permite comprender no solo qué debe hacer el sistema, sino también por qué se requiere y qué tan crítico resulta para el negocio. Para asegurar que estos requisitos no se pierdan a lo largo del proyecto, se emplea la matriz de trazabilidad, la cual vincula cada requisito con otros artefactos clave, como los casos de prueba, los componentes de diseño y, cuando aplica, los requisitos de nivel superior. Como complemento, la especificación puede incluir apéndices con diagramas (casos de uso, flujos de datos o estados), prototipos, modelos de datos, un glosario de términos y análisis de riesgos, los cuales amplían y refuerzan la comprensión del sistema.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C05.p-4.h-100.w-100
          p En este contexto, un documento de especificación de requisitos para un sistema de mediana complejidad suele tener entre 50 y 200 páginas, ya que debe cubrir de forma detallada las necesidades del sistema y sus restricciones. En proyectos de mayor envergadura, este volumen puede aumentar considerablemente. Sin embargo, este documento no está diseñado para ser leído de principio a fin por todos los interesados, sino para ser consultado según el rol que cada actor desempeña. Un directivo, por ejemplo, suele enfocarse en la introducción y la visión general; un desarrollador revisa los requisitos asociados al módulo que implementa; y el equipo de aseguramiento de la calidad se concentra en los requisitos y en la matriz de trazabilidad para verificar que todas las funcionalidades sean correctamente probadas.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img07.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-7.col-12
        p Precisamente, uno de los elementos más críticos —y con frecuencia subestimado— dentro de la especificación de requisitos es la matriz de trazabilidad. Esta se presenta como una tabla que muestra cómo cada requisito se relaciona con los diferentes artefactos del proyecto. En ella, cada fila corresponde a un requisito y las columnas indican qué caso de prueba lo valida, qué componente de diseño lo implementa o qué historia de usuario lo describe. Gracias a esta relación explícita, si durante la fase de pruebas se detecta que un requisito no está siendo validado, la matriz lo evidencia de inmediato. De igual forma, si en el desarrollo se identifica que un requisito no fue implementado, la trazabilidad permite detectarlo oportunamente.
      .col.col-lg-3.col-12
        figure
          img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En consecuencia, una matriz de trazabilidad bien construida se convierte en un mecanismo de control de calidad fundamental, ya que previene la omisión, implementación parcial o validación incompleta de los requisitos. Más allá de ser un simple registro, actúa como un enlace permanente entre requisitos, diseño, desarrollo y pruebas, fortaleciendo la calidad del <em>software</em> y reduciendo riesgos a lo largo de todo el ciclo de vida del proyecto.
    p.mb-4.text-center(data-aos="fade-down") Complementando lo anterior, se relaciona un ejemplo de cómo podría verse una matriz de trazabilidad simplificada:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Ejemplo matriz de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Requisito ID
                th(data-aos="fade-down")(style= "width: 25%") Descripción breve
                th(data-aos="fade-down")(style= "width: 25%") Casos de prueba
                th(data-aos="fade-down")(style= "width: 25%") Componentes de diseño
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") REQ-001
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Usuario puede registrarse con <em>email</em> y contraseña.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") TC-001, TC-002.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Módulos: Autenticación, Usuario.
              tr
                td(data-aos="fade-down") REQ-002
                td(data-aos="fade-down") Sistema valida fortaleza de contraseña (mínimo 12 caracteres).
                td(data-aos="fade-down") TC-003, TC-004.
                td(data-aos="fade-down") Módulos: Validación, Módulo Seguridad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") REQ-003
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sistema envía <em>email</em> de confirmación en menos de 30 segundos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") TC-005.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Módulos: <em>email</em>, Cola de Tareas.
              tr
                td(data-aos="fade-down") REQ-004
                td(data-aos="fade-down") Usuario puede recuperar contraseña olvidada.
                td(data-aos="fade-down") TC-006, TC-007, TC-008.
                td(data-aos="fade-down") Módulos: Recuperación, <em>email</em>.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C03.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-9.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Esta matriz, aunque simplificada, muestra inmediatamente qué se está probando y qué módulos están involucrados en cada requisito. Cuando un requisito cambia, la matriz ayuda a identificar qué casos de prueba necesitan actualizarse y qué módulos necesitarán cambios de diseño.
            .col.col-lg-2.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')
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
