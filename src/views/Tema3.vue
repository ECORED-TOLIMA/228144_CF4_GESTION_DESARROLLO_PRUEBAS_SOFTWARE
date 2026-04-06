<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas de documentación
    p.mb-4(data-aos="fade-down") La documentación de requisitos no es solo sobre qué documentar, sino cómo hacerlo de manera profesional, consistente y clara. Esto es donde entran en juego los estándares y las mejores prácticas. En Colombia, el estándar NTC-1486 del ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación) establece directrices para la presentación de trabajos escritos. Aunque originalmente fue diseñado para tesis académicas, muchas de sus recomendaciones —estructura clara, márgenes consistentes, tipografía legible— son perfectamente aplicables a documentos técnicos de requisitos.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por su parte, el estándar APA (American Psychological Association) es ampliamente utilizado para citas y referencias. Cuando se documenta un requisito, es importante indicar su origen: ¿proviene de una regulación gubernamental específica?, ¿de una solicitud particular del cliente?, ¿de un estándar de industria?, ¿de un análisis interno? Las citas correctas permiten rastreabilidad y facilitan argumentación si surge una disputa sobre por qué se incluyó un requisito particular.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Los estándares y formatos son solo la estructura, lo verdaderamente importante es la calidad de cómo se escriben los requisitos individuales. Aquí hay siete principios fundamentales para escribir requisitos de calidad:
    .tarjeta.tarjeta--BG07.p-md-5.p-4.mb-4(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Claridad
              p Un requisito debe ser expresado en lenguaje claro, preciso y sin ambigüedades. Considere la diferencia entre: "el sistema debe ser eficiente" (ambiguo, no verificable) versus "el sistema debe procesar un lote de 1000 órdenes de compra en menos de 5 minutos cuando se ejecuta en un servidor con procesador Intel Xeon E5-2690 y 32GB de RAM" (específico, verificable, cuantificable). La claridad también significa evitar jerga innecesaria. Si está documentando un requisito para ser leído por <em>stakeholders</em> no técnicos, no se debe asumir que se entiendan términos como "API REST" o "microservicios" sin explicación.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img02.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Completitud
              p Un requisito debe contener toda la información necesaria para ser comprendido e implementado sin requerir información adicional de otras fuentes. Si se dice "el sistema debe generar reportes mensuales", se ha dejado muchas preguntas sin responder: ¿qué información contienen los reportes?, ¿qué formato tienen (PDF, Excel, HTML)?, ¿a quién se envían?, ¿cuándo se generan exactamente el primer día del mes, el último día, la última semana?, ¿se incluyen gráficos? Un requisito completo respondería todas estas preguntas o las dejaría claramente para ser discutidas después.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img03.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Consistencia
              p La terminología utilizada debe ser uniforme en todo el documento. Si se hace referencia a un "usuario" en un lugar, "cliente" en otro y "persona" en un tercero, se está creando confusión innecesaria. Aunque el significado puede ser evidente en contexto, la inconsistencia aumenta la posibilidad de malentendidos. Las organizaciones profesionales frecuentemente mantienen un glosario de términos como parte de su especificación de requisitos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img04.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Trazabilidad
              p Cada requisito debe tener un identificador único, como REQ-001, REQ-002, etc. Este identificador permite referenciar el requisito en otras partes del documento, en planes de prueba, en cambios solicitados, en discusiones con el cliente. Sin trazabilidad, es fácil perder referencias, olvidar validar un requisito o implementar una funcionalidad sin haberse dado cuenta que fue solicitada.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img05.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Viabilidad
              p Los requisitos deben ser realistas y alcanzables con la tecnología y los recursos disponibles. Un requisito imposible de implementar genera frustración, aumenta costos y puede llevar a fallos de proyectos. Si el presupuesto es de $100.000 y alguien requiere que el sistema use inteligencia artificial de última generación que costaría $500.000, no es un requisito viable. Es responsabilidad del ingeniero de requisitos ayudar al cliente a entender las limitaciones y a hacer compensaciones inteligentes.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img06.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Verificabilidad
              p Debe ser posible verificar de manera objetiva que un requisito ha sido implementado correctamente. Requisitos como “debe ser fácil de usar” no son verificables, ya que el término “fácil” es ambiguo. En cambio, un requisito como “el 90 % de los usuarios sin capacitación debe poder completar la tarea de registrar una nueva orden en menos de tres minutos” sí es verificable. Para ello, pueden evaluarse usuarios reales, cronometrar la tarea y medir objetivamente si el requisito se cumple.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img07.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              h4 Independencia
              p Los requisitos deben ser tan independientes como sea posible. No debe ser necesario entender un requisito para comprender otro. Si el requisito A se define como "implementar la funcionalidad descrita en el requisito B", entonces A no es realmente independiente. Requisitos interdependientes son más difíciles de priorizar, de cambiar y de asignar a diferentes desarrolladores.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img08.png', alt='Imagen decorativa')
    p.text-center.mb-4(data-aos="fade-down") Ahora, se relacionan algunos ejemplos de requisitos mal escritos versus bien escritos:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Ejemplo 1")
            .col-12.mb-0.mb-md-0
              p <b>Mal escrito:</b> "el sistema debe tener una buena interfaz de usuario".
              p Por qué está mal: ¿qué significa "buena"? No es verificable, no es específico.
              p.mb-0 <b>Bien escrito:</b> "la interfaz de usuario debe usar colores de alto contraste (diferencia de luminancia de al menos 4.5:1 según estándar WCAG 2.1 AA) para legibilidad en condiciones de iluminación variable. Todos los botones de acción principal deben ser de al menos 44x44 píxeles para accesibilidad táctil. Los tiempos de respuesta de la interfaz a acciones del usuario no deben exceder 200 milisegundos para mantener la sensación de reactividad inmediata".
          .row(titulo="Ejemplo 2")
            .col-12.mb-0.mb-md-0
              p <b>Mal escrito:</b> "el sistema debe procesar transacciones rápidamente".
              p Por qué está mal: ¿qué tan rápido es "rápidamente"?, ¿en relación a qué <em>baseline</em>?
              p “Un <em>baseline</em> es un valor o estándar con el que se comparan los resultados”.
              p <b>Bien escrito:</b> "el sistema debe procesar transacciones estándar de compra en menos de 2 segundos para el 95 % de los casos bajo carga normal (hasta 1000 transacciones por minuto) y en menos de 5 segundos para el 100 % de los casos incluso bajo carga pico (hasta 5000 transacciones por minuto)".
              p “El sistema debe procesar transacciones rápidamente”
              p.mb-0 El problema es que “rápidamente” no tiene un <em>baseline</em>; es decir, no hay un punto de referencia claro para medir qué tan rápido es.
          .row(titulo="Ejemplo 3")
            .col-12.mb-0.mb-md-0
              p <b>Mal escrito:</b>
              p Por qué está mal: "seguro" es demasiado ambiguo. ¿Seguro contra qué?
              p <b>Bien escrito:</b> "el sistema debe encriptar todos los datos en tránsito usando TLS 1.3 o superior. Las contraseñas de usuario deben almacenarse usando el algoritmo bcrypt con un factor de costo de al menos 12. El acceso a datos sensibles debe requerir autenticación multifactor (contraseña más código de autenticación temporal). Los intentos de acceso fallidos deben ser limitados a máximo 5 intentos antes de bloquear la cuenta temporalmente por 15 minutos."
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img09.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") Estas son las bases de una documentación de requisitos de calidad. Sin embargo, existe un nivel adicional, que consiste en comprender el porqué de los requisitos. El cliente rara vez expresa directamente: “se requiere un sistema que maneje 1.000 transacciones por minuto”. Por lo general, lo que manifiesta es un problema o una necesidad, como: “se busca mejorar la experiencia de los clientes en línea durante las épocas de ventas”.
        p.mb-4(data-aos="fade-down") Por ello, el ingeniero de requisitos debe ser capaz de traducir esa necesidad en requisitos específicos y formular preguntas ejemplo como:
      .col.col-lg-10.col-12
        .row.justify-content-center
          .col.col-lg-11.col-12.order-lg-1.order-2
            .row.justify-content-center
              .col.col-lg-4.col-12.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Por qué 1000 transacciones? 
              .col.col-lg-4.col-12.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Por qué ese es el pico esperado durante Black Friday? 
              .col.col-lg-4.col-12.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Cuál es la consecuencia si no se alcanza?
              .col.col-lg-4.col-12.mb-lg-0.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Hay clientes frustrados?
              .col.col-lg-4.col-12.mb-lg-0.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Existe pérdida de ventas?
              .col.col-lg-4.col-12.mb-lg-0.mb-3
                .tarjeta.tarjeta--C06.p-4.h-100
                  p.mb-0.text-center(data-aos="fade-down") ¿Hay daño a la marca?
          .col.col-lg-1.col-3.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img10.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Entender el por qué detrás de cada requisito permite tomar compensaciones inteligentes si es necesario, priorizar correctamente y comunicar la importancia relativa de diferentes requisitos a los desarrolladores.

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
