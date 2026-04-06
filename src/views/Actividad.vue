<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre los principios, prácticas y procesos clave que permiten identificar, documentar, validar y gestionar requisitos de <em>software</em> de forma estructurada y alineada con las necesidades del cliente y del proyecto.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué es un requisito en el contexto del desarrollo de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto asignado para construir el sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una condición o capacidad que el sistema debe satisfacer para resolver un problema o alcanzar un objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un diagrama UML que representa la arquitectura del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cronograma de entrega acordado con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Un requisito es una declaración de lo que el sistema debe hacer o cómo debe hacerlo, traduciendo las necesidades del usuario en términos implementables. Esta definición es la base de toda la ingeniería de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de los defectos en sistemas de <em>software</em> se originan en errores de captura y documentación de requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entre el 20 % y el 30 %.', esCorrecta: false },
            { id: 'b', texto: 'Entre el 40 % y el 50 %.', esCorrecta: false },
            { id: 'c', texto: 'Entre el 70 % y el 80 %.', esCorrecta: true },
            { id: 'd', texto: 'Entre el 90 % y el 95 %.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! La investigación industrial muestra consistentemente que el 70-80 % de los defectos en <em>software</em> se originan en errores de requisitos. Esto resalta la importancia crítica de documentar bien los requisitos desde el inicio del proyecto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Cuál de las siguientes opciones describe correctamente un requisito funcional:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema debe estar disponible el 99.9 % del tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema debe cumplir con la ley de protección de datos GDPR.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El sistema debe procesar transacciones en menos de 2 segundos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sistema debe permitir que los usuarios registren nuevas órdenes de compra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Exacto! Los requisitos funcionales describen qué debe hacer el sistema; es decir, sus funciones y comportamientos. Las otras opciones son ejemplos de requisitos no funcionales o de restricción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El estándar de documentación de requisitos de <em>software</em> publicado por el IEEE, que ahora ha sido actualizado como IEEE 29148, se conoce originalmente como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'IEEE 830.', esCorrecta: true },
            { id: 'b', texto: 'IEEE 1028.', esCorrecta: false },
            { id: 'c', texto: 'IEEE 12207.', esCorrecta: false },
            { id: 'd', texto: 'IEEE 9126.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El IEEE 830 (ahora IEEE 29148) proporciona la estructura y directrices recomendadas para la especificación de requisitos de <em>software</em> (SRS). Es el estándar de referencia para documentación formal de requisitos a nivel internacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal ventaja del lenguaje natural para documentar requisitos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elimina completamente la ambigüedad en la especificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite análisis formal automático de inconsistencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es accesible para todas las audiencias sin necesidad de capacitación técnica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Garantiza trazabilidad bidireccional entre requisitos y código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien! La mayor ventaja del lenguaje natural es su accesibilidad: cualquier persona —cliente, usuario o desarrollador— puede leerlo y entenderlo sin formación técnica especial. Sin embargo, su principal limitación es que es inherentemente ambiguo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Cuál de estos ejemplos representa un requisito ambiguo que debe mejorarse:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El sistema debe ser rápido.', esCorrecta: true },
            {
              id: 'b',
              texto:
                'El sistema debe procesar solicitudes de reembolso en menos de 30 segundos para el 95 % de los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El sistema debe encriptar datos en tránsito usando TLS 1.3 o superior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sistema debe procesar un lote de 1000 órdenes en menos de 5 minutos en un servidor Intel Xeon E5-2690.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El sistema debe ser rápido, es un requisito ambiguo e inverificable porque no tiene un <em>baseline</em> claro (¿rápido en cuánto tiempo?, ¿bajo qué condiciones?). Un buen requisito siempre incluye métricas concretas y condiciones de medición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En un Diagrama de Casos de Uso UML, ¿qué representa el símbolo de "figura de palito" (<em>stickman</em>)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un caso de uso del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una relación <<include>> entre casos de uso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un actor: persona, rol o sistema externo que interactúa con el sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La frontera del sistema que delimita sus límites.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El <em>stickman</em> o figura de palito representa a un actor: una entidad externa que interactúa con el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué organización internacional certifica profesionales en ingeniería de requisitos y establece un <em>body of knowledge</em> sobre sus mejores prácticas?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'IEEE (Institute of Electrical and Electronics Engineers).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IREB (International Requirements Engineering Board).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ICONTEC (Instituto Colombiano de Normas Técnicas).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ISO (International Organization for Standardization).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IREB es la organización profesional que certifica ingenieros de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El formato estándar de una historia de usuario en metodologías ágiles es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'ID: REQ-001 | Descripción: [...] | Prioridad: Alta | Criterio: [...]',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema DEBE + [acción] + [objeto] + [condición o restricción].',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como [tipo de usuario], quiere [funcionalidad], para que [beneficio/valor].',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'DADO [contexto], CUÁNDO [acción], ENTONCES [resultado esperado].',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! El formato estándar de una historia de usuario tiene tres partes: rol, funcionalidad y beneficio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El acrónimo INVEST para historias de usuario incluye las características: Independent, Negotiable, Valuable, Estimable, Small y Testable. ¿Qué significa que una historia sea "testable"?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el equipo puede calcular el tiempo de desarrollo con precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la historia puede dividirse en tareas técnicas más pequeñas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la historia no depende de otras historias para ser comprendida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que existen criterios claros para verificar que la historia fue completada correctamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Una historia "testable" tiene criterios de aceptación definidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la diferencia fundamental entre verificación y validación de requisitos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La verificación la realiza el cliente y la validación la realiza el equipo técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La verificación pregunta ¿se construye el producto correctamente? y la validación pregunta ¿se construye el producto correcto?',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La verificación usa diagramas UML y la validación usa lenguaje natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No hay diferencia: ambos términos son sinónimos en ingeniería de requisitos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Verificación = ¿se implementa lo que se específica? Validación = ¿lo que se especifica es realmente lo que el cliente necesita? Ambas son críticas, pero la validación es donde más sorpresas negativas ocurren cuando se descuida.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes técnicas de validación de requisitos es la más formal y sistemática, capaz de identificar hasta el 80 % de los defectos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La revisión guiada (<em>walkthrough</em>).',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La opinión de expertos.', esCorrecta: false },
            { id: 'c', texto: 'La inspección formal.', esCorrecta: true },
            {
              id: 'd',
              texto: 'La entrevista con <em>stakeholders</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La inspección formal es la técnica más rigurosa: un equipo multidisciplinario examina los requisitos bajo criterios predefinidos usando una lista de chequeo. Bien ejecutada, puede identificar el 70-80 % de los defectos en requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En el contexto de los modelos conceptuales, ¿cuál es la principal ventaja de un diagrama de clases UML?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Muestra las interacciones entre actores externos y el sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representa la secuencia temporal de mensajes entre componentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Describe la estructura estática del sistema: clases, atributos, métodos y relaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Documenta el flujo lógico de pasos en un proceso de negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! El diagrama de clases muestra la estructura estática del sistema, incluyendo clases (tipos de objetos), sus atributos (datos), sus métodos (comportamientos) y las relaciones entre ellas. Es la base para el diseño orientado a objetos y la arquitectura del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué es una matriz de trazabilidad en una especificación de requisitos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una tabla que muestra el cronograma de implementación de cada requisito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un diagrama que representa las dependencias entre clases del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una tabla que mapea cada requisito a los casos de prueba, componentes de diseño e historias de usuario relacionados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un documento que lista los <em>stakeholders</em> y sus niveles de autorización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La matriz de trazabilidad vincula cada requisito con sus artefactos relacionados (casos de prueba, módulos de diseño, historias de usuario). Es un control de calidad poderoso que evita que requisitos se pierdan o implementen de forma incompleta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El estándar NTC-1486 del ICONTEC, referenciado en el CF-10 para la documentación de requisitos, es originalmente un estándar para:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La certificación de ingenieros de <em>software</em> en Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La gestión de proyectos de tecnología en entidades públicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La presentación de trabajos escritos y documentos técnicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La auditoría de sistemas de información en empresas colombianas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien! El NTC-1486 del ICONTEC establece directrices para la presentación de trabajos escritos (originalmente diseñado para tesis académicas). Sus recomendaciones de estructura, márgenes y tipografía son aplicables a documentos técnicos de requisitos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre el enfoque híbrido de documentación de requisitos es correcta?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El enfoque híbrido solo usa diagramas UML y elimina el lenguaje natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es el menos recomendado porque genera más trabajo sin beneficios claros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Combina narrativa en lenguaje natural con modelos gráficos para satisfacer diferentes audiencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo se usa en proyectos de metodología ágil como Scrum.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El enfoque híbrido combina lo mejor de ambos mundos: el lenguaje natural para contexto y narrativa (comprensible para clientes no técnicos) y los modelos conceptuales para precisión y estructura (necesarios para arquitectos y desarrolladores). Es el estándar de facto en la industria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'En un diagrama de flujo, ¿qué símbolo se usa para representar un punto de decisión con dos o más caminos posibles (Sí/No)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un rectángulo.', esCorrecta: false },
            { id: 'b', texto: 'Un óvalo o cápsula.', esCorrecta: false },
            { id: 'c', texto: 'Un paralelogramo.', esCorrecta: false },
            { id: 'd', texto: 'Un rombo o diamante.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Exacto! El rombo (diamante) representa una decisión en el diagrama de flujo. Desde él salen dos o más flechas etiquetadas con las posibles respuestas (Sí/No, Verdadero/Falso). Es el símbolo que da estructura ramificada al flujo del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué principio de calidad de un requisito garantiza que se pueda demostrar objetivamente mediante pruebas que fue implementado correctamente?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consistencia.', esCorrecta: false },
            { id: 'b', texto: 'Trazabilidad.', esCorrecta: false },
            { id: 'c', texto: 'Completitud.', esCorrecta: false },
            { id: 'd', texto: 'Verificabilidad.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien! La verificabilidad exige que el requisito sea medible y comprobable. Por ejemplo, "el 90 % de usuarios deben completar el registro en menos de 3 minutos" es verificable; "el sistema debe ser fácil de usar" no lo es porque no hay criterio objetivo de medición.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes herramientas para gestión de requisitos es completamente gratuita, funciona en <em>web</em> y escritorio, y soporta todos los tipos de diagramas UML, flujo y ER?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Enterprise Architect.', esCorrecta: false },
            { id: 'b', texto: 'Microsoft Visio.', esCorrecta: false },
            { id: 'c', texto: 'draw.io (diagrams.net).', esCorrecta: true },
            { id: 'd', texto: 'IBM Rational DOORS.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! draw.io (diagrams.net) es una herramienta gratuita, sin instalación obligatoria, que soporta UML completo, diagramas de flujo, ER, redes y más. Es la recomendada para este programa de formación por su accesibilidad y capacidad de exportar en PNG, PDF y SVG.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué característica hace que las historias de usuario sean más efectivas para el trabajo iterativo en proyectos ágiles, comparadas con las especificaciones formales tradicionales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que contienen toda la documentación técnica necesaria para implementar la funcionalidad sin conversación adicional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que son expresadas en notación UML estándar, lo que facilita su interpretación por cualquier equipo técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que son pequeñas, enfocadas en valor para el usuario y promueven la conversación continua entre cliente y desarrolladores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que reemplazan completamente la necesidad de una especificación formal de requisitos en proyectos de cualquier tamaño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Las historias de usuario son efectivas en contextos ágiles porque son pequeñas (completables en 1-4 semanas), centradas en el valor para el usuario y deliberadamente incompletas para fomentar la conversación. Sin embargo, el componente formativo aclara que no reemplazan las especificaciones formales en sistemas críticos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad y demuestra sólidos conocimientos sobre la ingeniería de requisitos y la documentación de <em>software</em>.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
