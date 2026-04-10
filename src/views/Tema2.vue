<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de documentación de requisitos
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      P.mb-4.text-center(data-aos="fade-down") 
      .col.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") Una de las primeras decisiones que debe tomar un equipo de ingeniería de requisitos es cómo documentarlos. Esta es una decisión fundamental porque la forma en que se documentan los requisitos afecta profundamente cómo se comunican, se entienden y se implementan. Existen múltiples opciones, cada una con sus ventajas y limitaciones. La clave es entender el contexto y elegir sabiamente.
      .col.col-12.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img01.png', alt='Imagen decorativa')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Lenguaje natural
    .row.BG03.justify-content-center.align-items-center.px-3.mb-0
      .col.col-lg-11.col-12
        p(data-aos="fade-down") Es la forma de comunicación humana cotidiana: español, inglés, francés, entre otros idiomas. En contraste con los lenguajes formales o de programación, el lenguaje natural no está regido por una gramática completamente rígida ni por símbolos matemáticos estrictos.
        p.mb-4(data-aos="fade-down") A continuación, se presenta un pódcast que explora el uso del lenguaje natural en la documentación de requisitos, explicando cómo esta forma de comunicación conecta a usuarios y desarrolladores, y los desafíos que plantea para asegurar claridad y precisión en los proyectos de <em>software</em>:
      .row.justify-content-center.mb-4
        .col.col-lg-8.col-12
          .row.justify-content-center.align-items-center.g-0
            .col-lg-12.col-12.order-lg-2.order-2
              .cajon.cajon.C02.p-4
                .col-lg-12.col-12
                  .tarjeta.clr--pink.p-4.rounded-0.h-100
                    .tarjeta.bg-white.p-4
                      #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                        h2 Pódcast. Lenguaje natural.
                      TarjetaAudio.color-acento-botones.mb-3(
                      texto="Pódcast"
                      :audio="require('@/assets/curso/audio/Podcast_CF02_33110233.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-12.col-12.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p(data-aos="fade-down") El lenguaje natural, cuando se usa correctamente, puede ser poderoso. Por ejemplo, si especifica "el sistema debe procesar solicitudes de reembolso en menos de 30 segundos para el 95 % de los casos y en menos de 2 minutos para el 100 % de los casos", eso es específico, verificable y orientado a resultados. El lenguaje natural es excelente para narrativa, contexto y para comunicar a personas sin formación técnica.
        p.mb-0(data-aos="fade-down") Por lo anterior, antes de crear diagramas UML, modelos conceptuales o cualquier artefacto técnico, la mayoría de los proyectos de <em>software</em> comienzan con conversaciones, entrevistas y documentos escritos en lenguaje natural. Esto ocurre porque:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema2/img03.svg", alt="alt").img80.m-auto
          p Los clientes y usuarios no conocen notaciones técnicas como UML o fórmulas matemáticas.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema2/img04.svg", alt="alt").img80.m-auto
          p El lenguaje natural es accesible para todos los involucrados en el proyecto (<em>stakeholders</em>).
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema2/img05.svg", alt="alt").img80.m-auto
          p Permite capturar el contexto, las intenciones y las expectativas de forma rápida.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-4
            figure
              img(src="@/assets/curso/tema2/img06.svg", alt="alt").img80.m-auto
          p Es flexible y puede describir situaciones complejas sin restricciones de formato.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4
          .row
            .col.col-auto.mb-3
              .tarjeta.tarjeta--blanca.px-3.py-2
                p.mb-0.text-bold(data-aos="fade-down") Ejemplo practico
            .col.col-12.mb-3
              p.mb-0(data-aos="fade-down") Un cliente le dice al ingeniero de requisitos:
            .col.col-12.mb-3
              .cajon.cajon.C01.p-4
                p.text-bold(data-aos="fade-down") "Necesito que el sistema me permita registrar los pedidos de mis clientes, ver cuales están pendientes de entrega y enviarles un correo cuando el pedido haya sido despachado."
            .col.col-12.mb-0
              p.mb-0(data-aos="fade-down") Esta frase en lenguaje natural ya contiene tres requisitos funcionales que el ingeniero debe capturar, analizar y documentar formalmente.
    p.mb-4(data-aos="fade-down") El lenguaje natural es una herramienta en la documentación de requisitos es el proceso de registrar formalmente lo que el sistema debe hacer (requisitos funcionales) y como debe hacerlo (requisitos no funcionales). El lenguaje natural es el medio más común para este proceso. La siguiente tabla explica un poco estos procesos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Tipo de requisitos que se documentan con lenguaje natural
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de requisito
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo en lenguaje natural
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Funcional
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Describe qué debe hacer el sistema: sus funciones y comportamientos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El sistema debe permitir al usuario registrarse con correo y contraseña.
              tr
                td(data-aos="fade-down") No funcional
                td(data-aos="fade-down") Describe cómo debe comportarse el sistema: rendimiento, seguridad, usabilidad.
                td(data-aos="fade-down") El sistema debe cargar la página principal en menos de 2 segundos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") De negocio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define los objetivos y reglas del negocio que el sistema debe soportar.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Solo los usuarios mayores de 18 años pueden realizar compras en línea.
              tr
                td(data-aos="fade-down") De restricción
                td(data-aos="fade-down") Impone limitaciones técnicas, legales o de presupuesto.
                td(data-aos="fade-down") El sistema debe ser desarrollado usando tecnologías de código abierto.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") De usuario
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Captura las necesidades desde la perspectiva del usuario final.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Como comprador, desea guardar los productos favoritos para revisarlos después.
    p.mb-4.text-center(data-aos="fade-down") Un buen requisito documentado en lenguaje natural debe seguir una estructura clara que evite ambigüedades. La fórmula más utilizada es:
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.p-4
          .row
            .col.col-auto.mb-3
              .tarjeta.tarjeta--blanca.px-3.py-2
                p.mb-0.text-bold(data-aos="fade-down") Fórmula estándar para escribir un requisito
            .col.col-12.mb-3
              p.mb-0(data-aos="fade-down") El sistema DEBE / DEBERÍA / PODRÍA + [acción] + [objeto/entidad] + [condición o restricción opcional]
            .col.col-12.mb-3
              .cajon.cajon.C03.p-4
                p.text-bold(data-aos="fade-down") Ejemplos:
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p El sistema DEBE permitir al usuario iniciar sesión con usuario y contraseña.
                  li.mb-0
                    i.lista-ul__vineta
                    p El sistema DEBERÍA enviar un correo de confirmación cuando se complete una compra.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 El sistema PODRÍA mostrar sugerencias de búsqueda mientras el usuario escribe.
            .col.col-12.mb-0
              p.mb-0(data-aos="fade-down") La palabra clave (DEBE, DEBERÍA, PODRÍA) indica el nivel de obligatoriedad del requisito.
    p.mb-0.text-center(data-aos="fade-down") Las ventajas del lenguaje natural son las siguientes:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG06(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img07.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img08.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Accesibilidad
                  p Cualquier persona puede leer y escribir requisitos sin formación técnica especial.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img09.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Expresividad
                  p Permite capturar matices, contexto y casos excepcionales con facilidad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img10.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Flexibilidad
                  p Se adapta a cualquier dominio de negocio sin restricciones de sintaxis.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img11.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Comunicación directa
                  p Facilita la comunicación entre clientes e ingenieros.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img12.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Velocidad
                  p Permite documentar requisitos rápidamente en entrevistas o talleres.
    p.mb-4.text-center(data-aos="fade-down") También existen algunas limitaciones:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Limitaciones del lenguaje natural
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Limitación
                th(data-aos="fade-down")(style= "width: 40%") Descripción del problema
                th(data-aos="fade-down")(style= "width: 40%") Cómo superarla
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ambigüedad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una misma frase puede interpretarse de distintas formas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Usar términos precisos y definir un glosario del proyecto.
              tr
                td(data-aos="fade-down") Inconsistencia
                td(data-aos="fade-down") Dos requisitos pueden contradecirse entre sí.
                td(data-aos="fade-down") Realizar revisiones cruzadas y usar matrices de trazabilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Incompletitud
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se omiten casos bordes o escenarios excepcionales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hacer preguntas de validación y usar listas de verificación.
              tr
                td(data-aos="fade-down") Verbosidad
                td(data-aos="fade-down") Textos muy largos dificultan la lectura y el mantenimiento.
                td(data-aos="fade-down") Usar plantillas y formatos estandarizados (IEEE 830).
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Subjetividad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Términos como “rápido”, “fácil” o “seguro” son ambiguos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reemplazar con métricas concretas y criterios de aceptación.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4
          .row
            .col.col-auto.mb-3
              .tarjeta.tarjeta--blanca.px-3.py-2
                p.mb-0.text-bold(data-aos="fade-down") Importante - El peligro de la ambigüedad
            .col.col-12.mb-3
              h5 Ejemplo del requisito AMBIGUO:
              p.mb-0(data-aos="fade-down") "El sistema debe ser rápido".
            .col.col-12.mb-3
              h5 Problemas:
              p.mb-0(data-aos="fade-down") ¿Qué tan rápido? ¿Rápido para quién? ¿En qué condiciones?
            .col.col-12.mb-3
              .cajon.cajon.C01.p-4
                h5 Ejemplo de requisito CORRECTO (sin ambigüedad):
                p.text-bold.mb-0(data-aos="fade-down") "El sistema debe procesar y mostrar los resultados de búsqueda en menos de 1 segundo para un mínimo de 500 usuarios concurrentes".
            .col.col-12.mb-0
              p.mb-0(data-aos="fade-down") La versión correcta es medible, verificable y no da lugar a interpretaciones.
    p.mb-4.text-center(data-aos="fade-down") Existen dos grandes enfoques para usar el lenguaje natural en la documentación de requisitos:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C04" data-aos="zoom-in")
      .row.justify-content-center(titulo="Lenguaje natural no estructurado")
        .col-12.order-lg-1.order-2
          p Es el texto libre, sin un formato predefinido. Se usa en las primeras fases de captura de requisitos, como en entrevistas o actas de reunión. Su ventaja es la rapidez; su desventaja es que puede resultar difícil de analizar y verificar.
          .row.justify-content-center.mb-4
            .col.col-lg-10.col-12
              .tarjeta.tarjeta--C03.p-4
                .row
                  .col.col-auto.mb-3
                    .tarjeta.tarjeta--blanca.px-3.py-2
                      p.mb-0.text-bold(data-aos="fade-down") Ejemplo de lenguaje natural no estructurado
                  .col.col-12.mb-3
                    p.mb-0(data-aos="fade-down") Extracto de acta de reunión con el cliente:
                  .col.col-12.mb-3
                    .cajon.cajon.C03.p-4
                      p.mb-0 "El cliente mencionó que necesita que los vendedores puedan ver sus comisiones en tiempo real. También comentó que le gustaría tener alertas cuando un cliente lleva más de 30 días sin comprar. La gerencia quiere reportes mensuales que se puedan exportar a Excel".
                p.mb-0(data-aos="fade-down") Este tipo de texto necesita ser procesado y formalizado por el ingeniero de requisitos.
      .row.justify-content-center(titulo="Lenguaje natural estructurado")
        .col.col-12.order-lg-1.order-2
          p Usa plantillas y formatos predefinidos para garantizar uniformidad, trazabilidad y facilidad de revisión. Es la forma recomendada para documentar requisitos formalmente.
          .row.justify-content-center.mb-0(data-aos="flip-up")
            .col.col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Tabla 3.
                span Plantilla típica de requisito estructurado
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(data-aos="fade-down")(style= "width: 20%") Campo
                      th(data-aos="fade-down")(style= "width: 40%") Descripción
                      th(data-aos="fade-down")(style= "width: 40%") Ejemplo
                  tbody
                    tr
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") ID del Requisito.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificador único del requisito.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") REQ-FUN-001.
                    tr
                      td(data-aos="fade-down")(style="background-color: #FFF") Nombre.
                      td(data-aos="fade-down")(style="background-color: #FFF") Título corto y descriptivo.
                      td(data-aos="fade-down")(style="background-color: #FFF") Inicio de sesión de usuario.
                    tr
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Descripción.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Enunciado completo del requisito.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") El sistema debe permitir al usuario autenticarse con correo electrónico y contraseña.
                    tr
                      td(data-aos="fade-down")(style="background-color: #FFF") Prioridad.
                      td(data-aos="fade-down")(style="background-color: #FFF") Nivel de importancia del requisito.
                      td(data-aos="fade-down")(style="background-color: #FFF") Alta.
                    tr
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Criterio de aceptación.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Cómo se verifica que el requisito esta cumplido.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") El usuario puede ingresar al sistema en menos de 3 intentos.
                    tr
                      td(data-aos="fade-down")(style="background-color: #FFF") Stakeholder.
                      td(data-aos="fade-down")(style="background-color: #FFF") Quién solicitó o se ve afectado por el requisito.
                      td(data-aos="fade-down")(style="background-color: #FFF") Usuarios registrados, equipo de seguridad.
                    tr
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Fuente.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") De dónde surgió el requisito.
                      td(data-aos="fade-down")(style="background-color: #F6F6F6") Entrevista con el cliente - Acta 001.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") El ingeniero de requisitos usa diversas técnicas para obtener información de los <em>stakeholders</em> y transformarla en requisitos bien documentados, entre las que se encuentran:
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Entrevistas
        p.mb-0(data-aos="fade-down") Consisten en conversaciones directas con usuarios, clientes y expertos del dominio. Son la técnica más utilizada y en ella, el ingeniero debe preparar preguntas abiertas y de cierre que guíen la conversación hacia los requisitos del sistema. Se encuentran:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Preguntas abiertas
              p.mb-0.text-center ¿Que funciones debe tener el sistema? 
              p.text-center ¿Qué problemas resuelve?
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Preguntas de profundización
              p.mb-0.text-center ¿Puede dar un ejemplo?
              p.text-center ¿Qué pasa si...?
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C01(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Preguntas de confirmación
              p.text-center  Se entiendo que el sistema debe... ¿Es correcto?
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Talleres Joint Application Development (JAD)
        p.mb-4(data-aos="fade-down") Reúnen a todos los <em>stakeholders</em> en sesiones facilitadas para identificar, discutir y priorizar requisitos. Son muy efectivos para resolver conflictos y lograr consenso rápido.
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Análisis de documentos
        p.mb-4(data-aos="fade-down") Revisión de documentos existentes como manuales, formularios, reportes y flujos de proceso del negocio actual. Permite entender el contexto y descubrir requisitos implícitos.
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Observación directa (etnografía)
        p.mb-4(data-aos="fade-down") El ingeniero observa a los usuarios realizando su trabajo cotidiano para identificar necesidades que ellos mismos no saben expresar verbalmente. Es especialmente útil para descubrir requisitos implícitos.
      .col.col-lg-4.col-12
        figure
          img(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-auto.mb-3
        .tarjeta.tarjeta--C01.p-3
          p.mb-0.text-center(data-aos="fade-down") Para concluir, un requisito de calidad debe cumplir los siguientes principios y criterios de verificación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-12.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            TabsA.color-acento-botones(data-aos="zoom-in")
              .tarjeta.tarjeta--C05.p-4(titulo="Claridad")
                .row.justify-content-center
                  p El requisito debe ser comprensible para cualquier lector sin necesidad de interpretación adicional. Pregunta clave:
                  .col.col-12
                    .cajon.cajon.C04.px-3.py-2
                      h5.text-center.mb-0 ¿Puede cualquier persona del equipo entenderlo de la misma forma?
              .tarjeta.tarjeta--C05.p-4(titulo="Completitud")
                .row.justify-content-center
                  p El requisito debe incluir toda la información necesaria: qué hace el sistema, en qué condiciones y con que restricciones. Pregunta clave:
                  .col.col-12
                    .cajon.cajon.C04.px-3.py-2
                      h5.text-center.mb-0 ¿Hay información que falta o que se da por supuesta?
              .tarjeta.tarjeta--C05.p-4(titulo="Consistencia")
                .row.justify-content-center
                  p El requisito no debe contradecir a ningún otro requisito del mismo documento. Pregunta clave:
                  .col.col-12
                    .cajon.cajon.C04.px-3.py-2
                      h5.text-center.mb-0 ¿Existe algún otro requisito que entre en conflicto con este?
              .tarjeta.tarjeta--C05.p-4(titulo="Verificabilidad")
                .row.justify-content-center
                  p Debe ser posible demostrar mediante pruebas que el requisito ha sido implementado correctamente. Pregunta clave:
                  .col.col-12
                    .cajon.cajon.C04.px-3.py-2
                      h5.text-center.mb-0 ¿Como saber que el sistema cumple este requisito?
              .tarjeta.tarjeta--C05.p-4(titulo="Trazabilidad")
                .row.justify-content-center
                  p Debe poderse rastrear el origen del requisito (a quién lo solicitó y por qué) y su implementación en el código. Pregunta clave:
                  .col.col-12
                    .cajon.cajon.C04.px-3.py-2
                      h5.text-center.mb-0 ¿De dónde vino este requisito y como se implementó?
          .col-lg-4.col-sm-4.col-10.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img18.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col.col-12.order-lg-1.order-2
        .row.justify-content-center
          .cajon.cajon.C02.p-4
            .row.mb-0
              .col.col-lg-8.col-12.mb-3.order-lg-1.order-2.p-4
                .row
                  .col.col-auto.mb-4
                    .tarjeta.tarjeta--blanca.px-3.py-2
                      p.mb-0.text-bold.text-center(data-aos="fade-down") ¿Cuál es la ventaja de modelar requisitos gráficamente?
                h5.mb-4 La precisión
                p.mb-0(data-aos="fade-down") Un diagrama de casos de uso reduce significativamente la ambigüedad, ya que define con claridad si un actor participa o no en una interacción y si un caso de uso está o no incluido en otro. Además, estos modelos pueden analizarse de manera formal mediante herramientas automáticas que permiten detectar inconsistencias. De este modo, un requisito representado en un diagrama de clases no puede describirse de forma contradictoria en otro diagrama, garantizando la coherencia y uniformidad del modelo.
              .col.col-lg-4.col-10.order-lg-2.order-1.p-4
                figure
                  img(src='@/assets/curso/tema2/img19.svg', alt='Imagen decorativa')
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Modelos conceptuales
    p(data-aos="fade-down") Son representaciones graficas o formales que permiten describir, analizar y comunicar los requisitos de un sistema de <em>software</em> de forma visual y estructurada. A diferencia del lenguaje natural, que usa texto libre, los modelos conceptuales utilizan notaciones estandarizadas con símbolos, formas y conectores que tienen significados precisos y acordados por la industria. Su propósito principal es eliminar la ambigüedad del lenguaje natural, facilitar la comunicación técnica entre equipos y servir como base para el diseño e implementación del sistema.
    p.mb-4(data-aos="fade-down") Las características de un buen modelo conceptual son:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
        h4.text-center Claridad visual
        p.text-center(data-aos="fade-down") Fácil de leer e interpretar por cualquier miembro del equipo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
        h4.text-center Notación estándar
        p.text-center(data-aos="fade-down") Usa símbolos reconocidos (UML, BPMN, etc.) para garantizar comprensión universal.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop')
        h4.text-center Trazabilidad
        p.text-center(data-aos="fade-down") Cada elemento del modelo debe poder vincularse a uno o más requisitos escritos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
        h4.text-center Completitud
        p.text-center(data-aos="fade-down") Representa todos los actores, procesos y relaciones relevantes del sistema.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
        h4.text-center Precisión
        p.text-center(data-aos="fade-down") No deja lugar a interpretaciones múltiples como puede ocurrir con el texto libre.
    p.mb-0.text-center(data-aos="fade-down") Los modelos conceptuales no reemplazan al lenguaje natural, lo complementan. En la práctica, el proceso de documentación sigue esta secuencia:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG06(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img25.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img26.svg", alt="Imagen decorativa").img100.m-auto
                  h4 a) Captura en lenguaje natural
                  p Se recopilan los requisitos a través de entrevistas y talleres usando lenguaje natural.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img27.svg", alt="Imagen decorativa").img100.m-auto
                  h4 b) Análisis de texto
                  p El ingeniero identifica actores, acciones, entidades y relaciones en el texto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img28.svg", alt="Imagen decorativa").img100.m-auto
                  h4 c) Modelado
                  p Se crean los diagramas correspondientes a partir del análisis del texto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img29.svg", alt="Imagen decorativa").img100.m-auto
                  h4 d) Validación
                  p Se revisa con el cliente que los diagramas representan correctamente sus necesidades.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img30.svg", alt="Imagen decorativa").img100.m-auto
                  h4 e) Actualización
                  p Si el modelo cambia, el texto de requisitos también se actualiza (trazabilidad bidireccional).
    p.mb-4.text-center(data-aos="fade-down") Los modelos utilizan notaciones gráficas o formales para representar requisitos por medio de los siguientes diagramas:
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 A. Diagramas de casos de uso
    p.mb-4.text-center(data-aos="fade-down") Los diagramas de casos de uso son parte del estándar UML (Unified Modeling Language) y son uno de los artefactos más importantes en la ingeniería de requisitos. Muestran las interacciones entre actores externos (usuarios, sistemas externos) y el sistema que se va a desarrollar.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Elementos principales de los diagramas de casos de uso
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 40%") Símbolo / notación
                th(data-aos="fade-down")(style= "width: 40%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actor
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Figura de palito (<em>stickman</em>)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Persona, rol o sistema externo que interactúa con el sistema. Puede ser usuario, administrador, sistema de pagos, etc.
              tr
                td(data-aos="fade-down") Caso de uso
                td(data-aos="fade-down") Elipse con nombre
                td(data-aos="fade-down") Acción o funcionalidad que el sistema ofrece a un actor. Describe el “qué hace el sistema”, no el “cómo lo hace”.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asociación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Línea solida
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conecta un actor con el caso de uso que el inicia o en el que participa.
              tr
                td(data-aos="fade-down") Relación &lt;&lt;include&gt;&gt;
                td(data-aos="fade-down") Flecha punteada con &lt;&lt;include&gt;&gt;
                td(data-aos="fade-down") Indica que un caso de uso siempre incluye el comportamiento de otro. Es obligatorio.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Relación &lt;&lt;extend&gt;&gt;
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flecha punteada con &lt;&lt;extend&gt;&gt;
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indica que un caso de uso puede extender opcionalmente el comportamiento de otro. Es condicional.
              tr
                td(data-aos="fade-down") Frontera del sistema
                td(data-aos="fade-down") Rectángulo que encierra los casos de uso
                td(data-aos="fade-down") Delimita los límites del sistema. Los actores quedan fuera; los casos de uso, dentro.
    p.mb-4.text-center(data-aos="fade-down") A continuación, se relaciona un ejemplo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Diagrama de casos de uso - Sistema de biblioteca
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img31.svg', alt='Figura 1 que muestra tres roles principales: estudiante, bibliotecario y administrador. El estudiante, representado con una lupa, puede buscar libros por título o autor, reservar ejemplares disponibles y consultar sus préstamos activos. El bibliotecario, ilustrado con un libro en la mano, registra devoluciones y agrega nuevos títulos al catálogo. El administrador, frente a un tablero con gráficos, genera reportes de préstamos. Flechas conectan cada rol con las funciones correspondientes dentro del sistema, destacando las interacciones y responsabilidades de cada usuario.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img32.svg', alt='Figura 1 que muestra tres roles principales: estudiante, bibliotecario y administrador. El estudiante, representado con una lupa, puede buscar libros por título o autor, reservar ejemplares disponibles y consultar sus préstamos activos. El bibliotecario, ilustrado con un libro en la mano, registra devoluciones y agrega nuevos títulos al catálogo. El administrador, frente a un tablero con gráficos, genera reportes de préstamos. Flechas conectan cada rol con las funciones correspondientes dentro del sistema, destacando las interacciones y responsabilidades de cada usuario.')
    p.mb-4.text-center(data-aos="fade-down") Lectura del diagrama:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C01.p-4.h-100.w-100
          ul.lista-ul--color(data-aos="fade-down")
            li
              i.fas.fa-computer
              p.mb-0 El estudiante puede buscar libros, reservarlos y consultar sus préstamos activos.
            li
              i.fas.fa-computer
              p.mb-0 El bibliotecario puede registrar devoluciones y agregar libros al catálogo.
            li
              i.fas.fa-computer
              p.mb-0 El administrador tiene acceso a los reportes de préstamos.
            li
              i.fas.fa-computer
              p.mb-0 La frontera del sistema delimita todo lo que el <em>software</em> debe implementar.
      .col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img33.svg', alt='Imagen decorativa')
    .col-lg-6.col-12.mb-4
      .titulo-sexto.color-acento-contenido01.etiqueta01
        h5.mb-0 ¿Como se construye un diagrama de casos de uso desde el lenguaje natural?
    p.mb-4(data-aos="fade-down") El proceso de extraer casos de uso a partir de un texto de requisitos sigue estos pasos:
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-8.col-12.order-lg-2.order-2
        ol.lista-ol--cuadro.lista-ol(data-aos="fade-down")
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold a)
            | Identificar los SUSTANTIVOS que representan usuarios o sistemas externos -> estos son los ACTORES.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold b)
            | Identificar los VERBOS que describen acciones que el sistema debe realizar -> estos son los CASOS DE USO.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold c)
            | Determinar que actor inicia cada caso de uso y trazar la ASOCIACIÓN.
          li.mb-3
            .lista-ol--cuadro__vineta
              span.text-bold d)
            | Identificar relaciones &lt;&lt;include&gt;&gt; (acciones siempre presentes) y &lt;&lt;extend&gt;&gt; (acciones opcionales).
          li.mb-0
            .lista-ol--cuadro__vineta
              span.text-bold e)
            | Dibujar la FRONTERA DEL SISTEMA y organizar los elementos visualmente.
      .col-lg-4.col-12.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        .col-lg-12.col-12
          figure
            img(src='@/assets/curso/tema2/img34.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          .row
            .col.col-auto.mb-3
            .col.col-12.mb-3
              p.mb-0(data-aos="fade-down") El siguiente es un ejemplo de extracción de casos de uso
            .col.col-12.mb-3
              .cajon.cajon.C04.p-4
                p.mb-0(data-aos="fade-down") Texto en lenguaje natural:
                p.text-bold.mb-0 "Los estudiantes pueden buscar libros y reservarlos si están disponibles. Para reservar, el sistema verifica primero si el estudiante tiene prestamos vencidos".
            .col.col-12.mb-0
              p.mb-0(data-aos="fade-down") Extracción:
    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img35.svg' alt='AvatarTop')
        h4.text-center Actor
        p.text-center(data-aos="fade-down") Estudiante.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img36.svg' alt='AvatarTop')
        h4.text-center Caso de uso 1
        p.text-center(data-aos="fade-down") Buscar libro.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img37.svg' alt='AvatarTop')
        h4.text-center Caso de uso 2
        p.text-center(data-aos="fade-down") Reservar libro.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img38.svg' alt='AvatarTop')
        h4.text-center Caso de uso 3
        p.text-center(data-aos="fade-down") Verificar prestamos vencidos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img39.svg' alt='AvatarTop')
        h4.text-center Relación:
        p.text-center(data-aos="fade-down") “reservar libro” &lt;&lt;include&gt;&gt; “verificar prestamos vencidos”.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 B. Diagramas de flujo
    p(data-aos="fade-down") Los diagramas de flujo (<em>flowcharts</em>) representan gráficamente la secuencia lógica de pasos que se siguen en un proceso o algoritmo. Son herramientas fundamentales para documentar el flujo de trabajo de un sistema antes de su implementación y para identificar decisiones, ciclos y caminos alternativos. Aunque no forman parte del estándar UML, son ampliamente utilizados en la ingeniería de requisitos por su simplicidad y claridad para representar procesos de negocio.
    p.mb-4(data-aos="fade-down") A continuación, se presenta una tabla que describe los símbolos estándar del diagrama de flujo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Símbolo estándar de los diagramas de flujo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Símbolo
                th(data-aos="fade-down")(style= "width: 40%") Nombre
                th(data-aos="fade-down")(style= "width: 40%") Uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ovalo / capsula
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Inicio / fin (terminal)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marca el punto de inicio o finalización del proceso. Siempre hay uno de inicio y al menos uno de fin.
              tr
                td(data-aos="fade-down") Rectángulo
                td(data-aos="fade-down") Proceso / acción
                td(data-aos="fade-down") Representa una tarea, operación o acción que se ejecuta. Ejemplo: “registrar usuario”, “calcular total”.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rombo / diamante
                td(data-aos="fade-down")(style="background-color: #F6F6F6") decisión
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Representa un punto de decisión con dos o más caminos posibles. Generalmente tiene salidas sí/no o verdadero/falso.
              tr
                td(data-aos="fade-down") Paralelogramo
                td(data-aos="fade-down") Entrada / salida
                td(data-aos="fade-down") Representa datos que entran al sistema (<em>input</em>) o resultados que salen (<em>output</em>).
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flecha
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flujo de control
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indica la dirección del flujo entre los pasos del proceso.
              tr
                td(data-aos="fade-down") Rectángulo doble borde
                td(data-aos="fade-down") Subproceso
                td(data-aos="fade-down") Indica que ese paso llama a otro proceso definido en un diagrama separado.
    p.text-center.mb-4(data-aos="fade-down") El siguiente ejemplo de diagrama representa un el flujo mediante unos pasos secuenciales:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        .row.justify-content-center.align-items-center.g-0
          .col.col-12
            .cajon.cajon.py-2.px-3(style="background-color: #19538D")
              p.text-center.mb-0.text-white Diagrama de flujo - Proceso de préstamo de libro
            .cajon.cajon.py-2.px-3(style="background-color: #62249E")
              p.text-center.mb-0.text-white INICIO  El estudiante solicita un libro
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #7DBFFF")
              p.text-center.mb-0 [ PROCESO ]  Buscar libro en el catálogo del sistema
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #DDA2FF")
              p.text-center.mb-0 < DECISION >  El libro está disponible?
            .cajon.cajon.py-2.px-3(style="background-color: #F1E2FF")
              p.text-center.mb-0   SI v  /  NO -->  SI: continuar | NO: notificar no disponible -> FIN
            .cajon.cajon.py-2.px-3(style="background-color: #7DBFFF")
              p.text-center.mb-0 [ PROCESO ]  Verificar si el estudiante tiene prestamos vencidos
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #CF9EFF")
              p.text-center.mb-0 < DECISION >  Tiene prestamos vencidos?
            .cajon.cajon.py-2.px-3(style="background-color: #F1E2FF")
              p.text-center.mb-0   NO v  /  SI -->  NO: continuar | SI: bloquear solicitud -> FIN
            .cajon.cajon.py-2.px-3(style="background-color: #7DBFFF")
              p.text-center.mb-0 [ PROCESO ]  Registrar préstamo (estudiante, libro, fecha)
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #7DBFFF")
              p.text-center.mb-0 [ PROCESO ]  Actualizar estado del libro a “Prestado”
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #19538D")
              p.text-center.mb-0.text-white [ SALIDA ]  Enviar correo de confirmación al estudiante
            .cajon.cajon.py-2.px-3(style="background-color: #DFEFFF")
              p.text-center.mb-0   v    
            .cajon.cajon.py-2.px-3(style="background-color: #62249E")
              p.text-center.mb-0.text-white FIN  Préstamo registrado exitosamente
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col.col-12.order-lg-2.order-2
        .cajon.C02.p-4.h-100.w-100
          p.text-bold(data-aos="fade-down") ¿Cuándo usar un diagrama de flujo?
          ul.lista-ul.mb-0(data-aos="fade-down") 
            li
              i.fas.fa-circle(style="top: 8px") 
              p.mb-0 Para documentar el flujo de un proceso de negocio complejo con múltiples decisiones.
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Para clarificar la lógica detrás de un requisito funcional especifico.
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Para detectar cuellos de botella, redundancias o pasos innecesarios en un proceso.
            li.mb-0
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Para comunicar algoritmos a desarrolladores antes de la codificación.
      .col.col-12.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img40.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 C. Diagramas de clases
    p(data-aos="fade-down") Son el artefacto central del estándar UML para representar la estructura estática de un sistema. Muestran las clases (tipos de objetos), sus atributos (datos que almacenan), sus métodos (acciones que realizan) y las relaciones entre ellas. Son la base para el diseño de la base de datos y la arquitectura orientada a objetos del sistema. Los desarrolladores usan estos diagramas directamente para implementar el código.
    p.mb-4(data-aos="fade-down") A continuación, se presenta una tabla con la descripción de los elementos del diagrama de clases:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Elementos de los diagramas de clase
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 80%") Descripción y notación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Clase
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rectángulo dividido en tres partes: nombre (arriba, en negrita), atributos (centro) y métodos (abajo).
              tr
                td(data-aos="fade-down") Atributo
                td(data-aos="fade-down") Dato que caracteriza a un objeto de la clase. Notación: visibilidad nombre: tipo. Ejemplo: - nombre: String.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Método
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Acción que puede realizar un objeto. Notación: visibilidad nombre(parámetros): retorno. Ejemplo: + calcularTotal(): Double.
              tr
                td(data-aos="fade-down") Visibilidad
                td(data-aos="fade-down") + publico (accesible desde fuera), - privado (solo dentro de la clase), # protegido (herencia).
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Asociación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Línea solida entre clases. Indica que una clase conoce o usa a otra.
              tr
                td(data-aos="fade-down") Multiplicidad
                td(data-aos="fade-down") Números en los extremos de la asociación: 1 (exactamente uno), 0..* (cero o más), 1..* (uno o más).
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Composición
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rombo sólido. La clase componente no puede existir sin la clase contenedora (ciclo de vida dependiente).
              tr
                td(data-aos="fade-down") Agregación
                td(data-aos="fade-down") Rombo vacío. La clase componente puede existir independientemente de la clase contenedora.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Herencia
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flecha con triangulo vacío apuntando hacia la superclase. Expresa la relación “es un tipo de”.
    p.mb-4.text-center(data-aos="fade-down") El siguiente es un ejemplo de este tipo de diagrama:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Diagrama de clases - Sistema de biblioteca (simplificado)
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img41.svg', alt='Figura 2 que incluye tres clases principales: Libro, con atributos como ISBN, título, autor, categoría y disponibilidad, además de métodos públicos para buscar y reservar; Préstamo, con atributos de identificación, fechas de inicio y vencimiento, estado y referencia al libro, junto con métodos para registrar y devolver; y Estudiante, con atributos de identificación, nombre, correo y estado de bloqueo, además de métodos para solicitar préstamos y ver historial. El diagrama utiliza notación UML con símbolos de visibilidad (privado y público) y multiplicidad 1..* para representar relaciones entre objetos.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img42.svg', alt='Figura 2 que incluye tres clases principales: Libro, con atributos como ISBN, título, autor, categoría y disponibilidad, además de métodos públicos para buscar y reservar; Préstamo, con atributos de identificación, fechas de inicio y vencimiento, estado y referencia al libro, junto con métodos para registrar y devolver; y Estudiante, con atributos de identificación, nombre, correo y estado de bloqueo, además de métodos para solicitar préstamos y ver historial. El diagrama utiliza notación UML con símbolos de visibilidad (privado y público) y multiplicidad 1..* para representar relaciones entre objetos.')
    p.mb-4.text-center(data-aos="fade-down") ¿Como se construye un diagrama de clases desde el lenguaje natural?
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col.col-lg-10.col-12
        .cajon.C02.p-4.h-100.w-100
          ul.lista-ul.mb-0(data-aos="fade-down") 
            li
              i.fas.fa-circle(style="top: 8px") 
              p.mb-0 Identificar los SUSTANTIVOS principales en el texto de requisitos -> son candidatos a CLASES.
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Para cada clase, identificar los ADJETIVOS y DATOS asociados -> son los ATRIBUTOS.
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Identificar los VERBOS asociados a cada clase -> son los MÉTODOS.
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Identificar las RELACIONES entre clases (una reserva pertenece a un estudiante y un libro).
            li
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Definir la MULTIPLICIDAD de cada relación.
            li.mb-0
              i.fas.fa-circle(style="top: 8px")
              p.mb-0 Refinar el modelo eliminando clases redundantes o fusionando las muy similares.
    p.mb-0.text-center(data-aos="fade-down") Los siguientes son los tipos de datos comunes en atributos:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG06(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-3.px-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img43.png", alt="Imagen decorativa")
            .col-lg-8.p-5
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img44.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>String</b> -> Texto (nombre, correo, descripción).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img45.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>Integer</b> -> Número entero (id, cantidad, edad).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img46.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>Double</b> -> Número decimal (precio, descuento, porcentaje).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img47.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>Boolean</b> -> Verdadero / Falso (activo, disponible, bloqueado).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img48.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>Date</b> -> Fecha (fechaNacimiento, fechaCreación).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img49.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>DateTime</b> -> Fecha y hora (fechaRegistro, ultimaModificación).
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img50.svg", alt="Imagen decorativa").img100.m-auto
                  p <b>Enum</b> -> Conjunto de valores fijos (estado: ACTIVO, INACTIVO, SUSPENDIDO).
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 D. Diagramas de secuencia
    p(data-aos="fade-down") Son diagramas de comportamiento UML que muestran como los diferentes componentes (objetos, clases, actores o sistemas) de una aplicación interactúan entre si a lo largo del tiempo para realizar una tarea especifica. El eje horizontal representa los participantes y el eje vertical representa el tiempo (fluye hacia abajo). Son especialmente útiles para documentar escenarios de casos de uso, describiendo paso a paso los mensajes que se intercambian entre componentes.
    p.mb-4(data-aos="fade-down") A continuación, se presenta una tabla que describe los elementos del diagrama de secuencia:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Elementos de los diagramas de secuencia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Lifeline</em> (Línea de vida)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Línea vertical punteada que representa la existencia de un participante (actor, objeto, sistema) durante la interacción.
              tr
                td(data-aos="fade-down") Participante / actor
                td(data-aos="fade-down") Rectángulo en la parte superior de la <em>Lifeline</em> que indica el nombre del participante.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mensaje síncrono
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flecha sólida. El emisor espera la respuesta antes de continuar. Ejemplo: llamada a método.
              tr
                td(data-aos="fade-down") Mensaje de retorno
                td(data-aos="fade-down") Flecha punteada. Representa la respuesta que regresa al emisor después de procesar el mensaje.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mensaje asíncrono
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flecha con punta abierta. El emisor no espera respuesta para continuar. Ejemplo: notificación, evento.
              tr
                td(data-aos="fade-down") Activación (barra)
                td(data-aos="fade-down") Rectángulo delgado sobre la <em>Lifeline</em> que indica el periodo en que el participante este activo procesando.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fragmento alt
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marco rectangular con “alt” que representa condiciones alternativas (similar a if-else).
              tr
                td(data-aos="fade-down") Fragmento loop
                td(data-aos="fade-down") Marco rectangular con “loop” que representa una iteración (similar a un ciclo for o while).
    p.mb-4.text-center(data-aos="fade-down") A continuación, un ejemplo de este diagrama:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .tabla-a.color-primario
          table
            colgroup
              col(style="width: 10%")
              col(style="width: 20%")
              col(style="width: 20%")
              col(style="width: 25%")
              col(style="width: 25%")
            thead
              tr
                th(colspan="5" style="text-align: center; background-color: #9ECFFF; width: 100%") Diagrama de secuencia - Búsqueda y préstamo de libro
              tr
                th(style="width: 10%") #
                th(style="width: 15%") De
                th(style="width: 15%") Para
                th(style="width: 30%") Mensaje (método)
                th(style="width: 30%") Descripción
            tbody
              tr
                td.text-center(style="background-color: #DFEFFF") 1
                td Estudiante
                td Sistema
                td buscarLibro(titulo)
                td El estudiante ingresa el título en la interfaz.
              tr
                td.text-center(style="background-color: #DFEFFF") 2
                td Sistema
                td BaseDatos
                td consultarCatalogo(titulo)
                td El sistema consulta el catálogo en la base de datos.
              tr
                td.text-center(style="background-color: #DFEFFF") 3
                td BaseDatos
                td Sistema
                td retornarResultados(libros[])
                td La BD devuelve la lista de libros encontrados.
              tr
                td.text-center(style="background-color: #DFEFFF") 4
                td Sistema
                td Estudiante
                td mostrarResultados(libros[])
                td El sistema muestra los resultados al estudiante.
              tr
                td.text-center(style="background-color: #DFEFFF") 5
                td Estudiante
                td Sistema
                td seleccionarLibro(isbn)
                td El estudiante elige el libro que desea reservar.
              tr
                td.text-center(style="background-color: #DFEFFF") 6
                td Sistema
                td BaseDatos
                td verificarDisponibilidad(isbn)
                td El sistema comprueba si el libro está disponible.
              tr
                td.text-center(style="background-color: #DFEFFF") 7
                td BaseDatos
                td Sistema
                td retornarEstado(disponible=true)
                td La BD confirma que el libro está disponible.
              tr
                td.text-center(style="background-color: #DFEFFF") 8
                td Sistema
                td BaseDatos
                td registrarPrestamo(estudiante, isbn)
                td El sistema crea el registro del préstamo.
              tr
                td.text-center(style="background-color: #DFEFFF") 9
                td Sistema
                td Correo
                td enviarConfirmacion(estudiante)
                td El sistema solicita enviar correo de confirmación.
              tr
                td.text-center(style="background-color: #DFEFFF") 10
                td Sistema
                td Estudiante
                td mostrarConfirmacion()
                td El sistema confirma el préstamo al estudiante.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C03.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-8.col-12.order-lg-2.order-2
              p.text-bold(data-aos="fade-down") Interpretación del diagrama:
              ul.lista-ul(data-aos="fade-down") 
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F") 
                  p.mb-0 Los pasos 1-4 describen el flujo de búsqueda: el estudiante busca, el sistema consulta la BD y devuelve resultados.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Los pasos 5-7 describen la selección y verificación de disponibilidad.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Los pasos 8-10 describen el registro del préstamo y la confirmación al usuario.
                li
                  i.fas.fa-circle(style="top: 8px; color: #FBB03F")
                  p.mb-0 Cada flecha representa un mensaje o llamada entre componentes, lo que ayuda a definir las interfaces del sistema.
            .col.col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure.mb-0
                img(src='@/assets/curso/tema2/img51.svg', alt='Imagen decorativa')
    p.mb-4.text-center(data-aos="fade-down") La siguiente tabla muestra la comparación general de los cuatro modelos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Comparación modelos conceptuales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Modelo
                th(data-aos="fade-down")(style= "width: 25%") ¿Qué representa?
                th(data-aos="fade-down")(style= "width: 25%") ¿Cuándo usarlo?
                th(data-aos="fade-down")(style= "width: 25%") Nivel técnico
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Caso de uso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Interacciones entre actores y el sistema (funcionalidades).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Al inicio del proyecto para definir el alcance funcional con el cliente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Bajo - accesible para no técnicos.
              tr
                td(data-aos="fade-down") Diagrama de flujo
                td(data-aos="fade-down") Secuencia de pasos y decisiones en un proceso.
                td(data-aos="fade-down") Para documentar lógica de procesos complejos con muchas ramificaciones.
                td(data-aos="fade-down") Bajo - medio.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Diagrama de clases
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estructura del sistema: clases, atributos, métodos y relaciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En la fase de diseño para definir la arquitectura orientada a objetos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alto - orientado a desarrollo.
              tr
                td(data-aos="fade-down") Diagrama de secuencia
                td(data-aos="fade-down") Interacción entre componentes a lo largo del tiempo.
                td(data-aos="fade-down") Para documentar el comportamiento dinámico de un caso de uso especifico.
                td(data-aos="fade-down") Alto - orientado a desarrollo.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Herramientas para crear modelos conceptuales
    p.mb-4(data-aos="fade-down") Existen diversas herramientas, tanto gratuitas como de pago, que los ingenieros de requisitos usan para crear estos diagramas de forma profesional:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Herramientas para crear modelos conceptuales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Herramienta
                th(data-aos="fade-down")(style= "width: 35%") Costo / tipo
                th(data-aos="fade-down")(style= "width: 35%") Diagramas que soporta
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Draw.io (diagrams.net)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gratuita - <em>web</em> y escritorio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Todos los tipos: UML, flujo, ER, redes, etc.
              tr
                td(data-aos="fade-down") Lucidchart
                td(data-aos="fade-down") <em>Freemium</em> - <em>web</em> colaborativa
                td(data-aos="fade-down") UML, flujo, <em>wireframes</em>, mapas mentales.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") StarUML
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>Freemium</em> - escritorio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Especialización en UML: casos de uso, clases, secuencia.
              tr
                td(data-aos="fade-down") Visual Paradigm
                td(data-aos="fade-down") <em>Freemium</em> - escritorio y <em>web</em>
                td(data-aos="fade-down") UML completo + BPMN + modelado de BD.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Enterprise Architect
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Pago - profesional
                td(data-aos="fade-down")(style="background-color: #F6F6F6") UML completo, trazabilidad, generación de código.
              tr
                td(data-aos="fade-down") PlantUML
                td(data-aos="fade-down") Gratuita - basada en texto
                td(data-aos="fade-down") UML desde código de texto plano. Ideal para automatización.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Microsoft Visio
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Pago - integrado con Office
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Flujo, organización, redes, UML básico.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img52.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Sin embargo, los modelos también presentan limitaciones, ya que su correcta interpretación exige que quienes los leen cuenten con formación técnica. Esto puede dificultar la comprensión por parte de clientes empresariales sin experiencia en notación UML. Además, al ser representaciones abstractas, los modelos pueden ocultar detalles importantes; por ejemplo, un diagrama de secuencia que indica que “el usuario envía datos al servidor” no especifica aspectos como la validación de datos, el manejo de errores o el comportamiento del sistema ante condiciones de red lenta.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Enfoque híbrido
    p.mb-4(data-aos="fade-down") Combina lo mejor de ambos mundos. Una especificación de requisitos típicamente incluye narrativa en lenguaje natural para contexto, explicación y casos de uso, complementada con diagramas que muestran relaciones complejas, flujos de datos y estructuras. Por ejemplo, podría haber un párrafo que explique el concepto de un cliente registrado en un sistema de comercio electrónico, seguido de un diagrama que muestre cómo se relacionan los clientes con sus órdenes, direcciones de envío y métodos de pago.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-7.col-12.order-lg-1.order-2
              p(data-aos="fade-down") En la práctica, los proyectos de <em>software</em> raramente usan un solo tipo de documentación. Los modelos híbridos combinan el lenguaje natural con uno o varios modelos conceptuales (diagramas UML, flujos, tablas) dentro de un mismo documento de requisitos, aprovechando las fortalezas de cada enfoque y compensando sus debilidades.
              p.mb-0(data-aos="fade-down") El objetivo es lograr documentación que sea a la vez comprensible para el cliente y precisa para el equipo técnico, sin duplicar el esfuerzo ni generar inconsistencias.
            .col.col-lg-4.order-lg-2.order-1.mb-lg-0.mb-3
              figure.mb-0
                img(src='@/assets/curso/tema2/img53.svg', alt='Imagen decorativa')
    p.mb-4.text-center(data-aos="fade-down") La siguiente tabla relaciona las combinaciones más usadas:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Combinaciones híbridas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Combinación hibrida
                th(data-aos="fade-down")(style= "width: 40%") ¿Cuándo se usa?
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo de aplicación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lenguaje natural + casos de uso
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Para presentar el alcance del sistema a clientes. El texto describe el contexto y el diagrama muestra el alcance funcional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una tabla de casos de uso con su descripción en texto adjunta al diagrama.
              tr
                td(data-aos="fade-down") Lenguaje natural + diagrama de flujo
                td(data-aos="fade-down") Para documentar reglas de negocio complejas. El texto describe la regla y el flujo muestra los caminos posibles.
                td(data-aos="fade-down") Un requisito de validación de pago descrito en texto + el flujo de decisión del proceso.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lenguaje natural + diagrama de clases
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Para definir el modelo de datos. El texto describe las entidades y el diagrama muestra sus relaciones y multiplicidades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Especificación de entidades de un <em>e-commerce</em>: texto + clases producto, orden, cliente.
              tr
                td(data-aos="fade-down") Lenguaje natural + diagrama de secuencia
                td(data-aos="fade-down") Para documentar integraciones entre sistemas. El texto describe el escenario y la secuencia muestra los mensajes intercambiados.
                td(data-aos="fade-down") Integración con pasarela de pago: texto del escenario + secuencia de llamadas API.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Historias de usuario + criterios de aceptación + flujo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En metodologías agiles. La historia describe el valor, los criterios definen la verificación y el flujo muestra el proceso.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Historia: “como comprador desea pagar con tarjeta”. Criterios medibles + flujo del <em>e-checkout</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C03.color-secundario.p-4
          p.mb-0(data-aos="fade-down") La selección entre estos enfoques depende del contexto del sistema. En proyectos pequeños y relativamente simples, el uso de lenguaje natural puede ser suficiente. En cambio, en sistemas complejos, con múltiples actores e interacciones, los modelos resultan fundamentales. Por esta razón, la mayoría de las organizaciones profesionales adopta un enfoque híbrido, ya que reconoce que las distintas audiencias tienen necesidades diferentes: los clientes comprenden mejor la narrativa, los arquitectos requieren los modelos y los desarrolladores se benefician de ambos enfoques.
    .row.justify-content-center
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") Para finalizar esta temática de tipos de documentación de requisitos, es importante analizar la siguiente tabla:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Comparación de enfoques de documentación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Enfoque
                th(data-aos="fade-down")(style= "width: 40%") Ventajas
                th(data-aos="fade-down")(style= "width: 40%") Limitaciones
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Lenguaje natural
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Accesible a todas las audiencias, excelente para narrativa y contexto, requiere mínima capacitación, flexible en expresión y permite descripción de requisitos complejos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ambiguo, sujeto a múltiples interpretaciones, difícil de validar formalmente, puede ser verboso, inconsistencias y no siempre detectadas.
              tr
                td(data-aos="fade-down") Modelos conceptuales (UML, diagramas)
                td(data-aos="fade-down") Precisión, captura relaciones complejas visualmente, permite análisis formal automático, consistencia entre vistas y facilita detección de inconsistencias.
                td(data-aos="fade-down") Requiere capacitación técnica, puede ser abstracto, no todas las personas técnicas conocen UML, tiempo de aprendizaje y puede ocultar detalles importantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Híbrido (narrativa + modelos)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Combina claridad de narrativa con precisión de modelos, múltiples perspectivas, flexible, comprensible por diferentes audiencias y profesional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mayor esfuerzo de documentación, necesita coordinación cuidadosa entre textos y diagramas, requiere competencia en múltiples técnicas.
</template>

<script>
export default {
  name: 'Tema2',
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
