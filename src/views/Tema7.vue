<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Técnicas para validar requisitos
    p.mb-4(data-aos="fade-down") Hay una distinción importante en ingeniería de requisitos entre verificación y validación, aunque los términos a menudo se confunden:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema7/img01.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Verificación
            p.mb-0(data-aos="fade-down") Responde a la pregunta: "¿se construye el producto correctamente?" Es decir, ¿se implementan los requisitos especificados?
          .col-xl.col-lg-6.tarjeta.tarjeta--C08.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema7/img02.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Validación
            p.mb-0(data-aos="fade-down") Responde a la pregunta: "¿se construye el producto correcto?" Es decir, ¿son los requisitos que especifican realmente lo que el cliente necesita?
    p.mb-4(data-aos="fade-down") Ambas son críticas, pero validación es donde frecuentemente se hace menos énfasis y es donde más sorpresas negativas ocurren. Un equipo puede construir perfectamente lo que fue especificado, cumplir 100 % de los requisitos y, aun así, entregar un producto que no satisface al cliente porque los requisitos mismos fueron incorrectos, incompletos o no alineados con las necesidades reales.
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta--C09.px-3.py-2.order-lg-2.order-2
          p.mb-0.text-center.text-white(data-aos="fade-down") ¿Cómo valida un equipo que los requisitos son correctos?
    p.text-center.mb-4(data-aos="fade-down") Existen múltiples técnicas, cada una con fortalezas y limitaciones:
    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Inspección formal")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema7/img03.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Una inspección formal es una revisión estructurada donde un equipo multidisciplinario examina los requisitos bajo criterios predefinidos. El equipo típicamente incluye: un inspector (moderador), un lector (presenta los requisitos), un escriba (documenta defectos), un cliente o representante del usuario (verifica contra necesidades), un desarrollador (evalúa implementabilidad), y posiblemente otros roles.
            p El proceso es sistemático y se desarrolla de la siguiente manera: el lector presenta un requisito o un pequeño grupo de requisitos. El equipo lo examina contra una lista de chequeo predefinida, buscando defectos: ¿es ambiguo?, ¿es incompleto?, ¿contradice otro requisito?, ¿es irrealista? Los defectos se documentan sin juzgar. No es un evento de culpa—es un evento de mejora de calidad. Una inspección formal bien ejecutada puede identificar entre el 70 % y el 80 % de los defectos en los requisitos, y hacerlo en etapas tempranas del proyecto, cuando las correcciones resultan considerablemente menos costosas.
      .py-3.py-md-4(titulo="Revisión guiada")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema7/img04.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Una revisión guiada es menos formal que una inspección. En ella un facilitador guía al grupo a través de los requisitos, típicamente usando escenarios o casos de prueba como guía. Por ejemplo, se podría decir: "imaginen que es un viernes a las 5 PM, hay 5000 usuarios conectados al sistema y ocurre un pico de transacciones: ¿qué dice el requisito de rendimiento sobre esto?, ¿qué pasaría en realidad?". Este tipo de pensamiento de escenarios frecuentemente revela defectos que no serían evidentes leyendo el texto puro.
            p Las revisiones guiadas son menos costosas en tiempo que las inspecciones formales, pero también menos sistemáticas. Pueden saltarse temas si el facilitador no es diligente, pero el componente de escenarios las hace particularmente efectivas para descubrir requisitos faltantes o requisitos que conflictúan bajo circunstancias particulares.
      .py-3.py-md-4(titulo="Opinión de expertos")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema7/img05.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p Un experto en el dominio o en la tecnología relevante revisa los requisitos y proporciona retroalimentación. Por ejemplo, si los requisitos especifican que el sistema debe usar inteligencia artificial para predicción, un experto en <em>machine learning</em> podría revisar y decir: "los datos disponibles no son suficientes para entrenar un modelo con la precisión requerida" o "el algoritmo especificado no es el más apropiado para este uso".
            p La opinión de expertos es rápida y puede identificar problemas fundamentales de viabilidad; pero es subjetiva y dependiente de la disponibilidad y la disposición del experto. También está sujeta a sesgos personales.
      .py-3.py-md-4(titulo="Prototipado y demostraciones")
        .row.justify-content-center.p-4
          .col-lg-4.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema7/img06.jpg', alt='Imagen decorativa')
          .col-lg-8.order-lg-2.order-2
            p En lugar de simplemente leerse los requisitos, los usuarios finales ven o interactúan con prototipos del sistema; esto genera retroalimentación práctica. Un usuario puede ver un prototipo de interfaz de usuario y darse cuenta inmediatamente de lo siguiente: "espere, no necesito poder hacer eso, pero necesito poder hacer esto otro que no está aquí". La validación a través de prototipos es especialmente efectiva para requisitos de interfaz de usuario y requisitos sobre flujos de trabajo complejos.
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta--C10.px-3.py-2.order-lg-2.order-2
          p.mb-0.text-center.text-white(data-aos="fade-down") ¿Cuál técnica debe una organización usar? 
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Las mejores prácticas involucran combinar múltiples técnicas, comenzando con una lista de chequeo inicial, continuando con una revisión guiada, utilizando prototipos para la validación de la interfaz de usuario y buscando la opinión de expertos en áreas de riesgo o tecnologías nuevas; esta combinación crea múltiples capas de validación que aumentan la probabilidad de que los requisitos representen realmente las necesidades del cliente.
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
