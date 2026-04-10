export default {
  global: {
    Name:
      'Requisitos de <em>software</em>: documentación, validación y versionamiento',
    Description:
      'Este componente formativo fortalece las capacidades para analizar y levantar requisitos de <em>software</em> mediante métodos y estándares técnicos reconocidos. Se tendrá con él las bases para recolectar información de los <em>stakeholders</em>, documentar y validar requisitos de forma clara y estructurada, asegurando que respondan a las necesidades del cliente y sirvan como base para soluciones de <em>software</em> exitosas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos fundamentales de la ingeniería de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de documentación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Lenguaje natural', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Modelos conceptuales', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Enfoque híbrido', hash: 't_2_3' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas prácticas de documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Informe de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Historias de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Listas de chequeo para validación de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Técnicas para validar requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Versionamiento de requisitos: gestión de cambios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Herramientas y tecnologías para la gestión de requisitos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de impacto',
      significado:
        'Evaluación sistemática de cómo un cambio propuesto en requisitos afecta otros requisitos, diseño, implementación y pruebas.',
    },
    {
      termino: 'Behavior-Driven Development (BDD)',
      significado:
        'Enfoque que documenta requisitos en términos de comportamientos observables que pueden ser automáticamente probados.',
    },
    {
      termino: 'Completitud',
      significado:
        'Característica de un requisito que asegura que contiene toda la información necesaria para ser implementado sin información adicional de otras fuentes.',
    },
    {
      termino: 'Computer-Aided <em>software</em> Engineering (CASE)',
      significado:
        'Herramientas que automatizan aspectos del desarrollo de <em>software</em> incluyendo requisitos, diseño, y pruebas.',
    },
    {
      termino: '<em>Constraint</em>',
      significado:
        'Restricción o limitación que restringe cómo un requisito puede ser implementado, ya sea técnica, organizacional o de negocio.',
    },
    {
      termino: '<em>Design thinking</em>',
      significado:
        'Metodología centrada en el usuario para innovación que enfatiza empatía, experimentación e iteración—valores importantes en elicitación de requisitos.',
    },
    {
      termino: 'Documento de visión',
      significado:
        'Documento de alto nivel que describe la visión, <em>scope</em> y beneficios esperados de un proyecto propuesto.',
    },
    {
      termino: 'Elicitación',
      significado:
        'Proceso de descubrimiento, extracción y comunicación de requisitos de los <em>stakeholders</em> mediante entrevistas, <em>workshops</em> y análisis.',
    },
    {
      termino: 'Encriptación',
      significado:
        'Proceso de transformar información legible en código ilegible sin una clave, requisito crítico para seguridad de datos sensibles.',
    },
    {
      termino: 'Entidad',
      significado:
        'Objeto de negocio o concepto importante que el sistema necesita rastrear (cliente, orden, producto en un sistema de ventas).',
    },
    {
      termino: 'Granularidad',
      significado:
        'Nivel de detalle de requisitos muy generales (baja granularidad), versus requisitos muy específicos (alta granularidad).',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        '<em>Framework</em> ágil para gestión de proyectos que usa historias de usuario, sprints iterativos y reuniones de retroalimentación regular.',
    },
    {
      termino: '<em>Stakeholder</em>',
      significado:
        'Cualquier persona o grupo con interés en el proyecto, incluyendo cliente, usuarios finales, desarrolladores, managers, reguladores.',
    },
    {
      termino: '<em>Waterfall</em>',
      significado:
        'Modelo tradicional de desarrollo de <em>software</em> donde cada fase (requisitos, diseño, implementación, pruebas) se completa antes de la siguiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cohn, M. (2004). <em>Historias de usuario aplicadas: Para el desarrollo de <em>software</em> ágil</em>. Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Davis, A. M. (2003). <em>Gestión de requisitos: lo justo y necesario donde el desarrollo de <em>software</em> se encuentra con el negocio</em>. Dorset House Publishing.',
      link: '',
    },
    {
      referencia:
        'IEEE. (2011). IEEE Standard 829-2008: <em>IEEE Standard for <em>software</em> and System Test Documentation</em>. IEEE Standards Association.',
      link: '',
    },
    {
      referencia:
        'IEEE. (2017). IEEE 830-1998 IEEE <em>Recommended Practice for <em>software</em> Requirements Specifications</em>. Institute of Electrica and Electronics Engineers.',
      link: '',
    },
    {
      referencia:
        'IEEE. (2018). IEEE/ISO/IEC 29148-2018: <em>Systems and <em>software</em> engineering—Life cycle processes—Requirements Engineering</em>. IEEE Standards Association.',
      link: '',
    },
    {
      referencia:
        'Pohl, K. (2010). <em>Ingeniería de requisitos: Fundamentos, principios y técnicas</em>. Springer Publishing Company (Edición en español).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        // {
        //   nombre: 'Francisco José Vásquez Suárez',
        //   cargo: 'Desarrollador <em>full stack</em>',
        //   centro: 'Centro de Comercio y Servicios - Regional Tolima',
        // },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
