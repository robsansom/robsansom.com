import type { TranslationSchema } from '../types';

export const es: TranslationSchema = {
  meta: {
    title: 'Find Later - Guarda lo que quieras. Encuéntralo todo.',
    description: 'Un espacio simple y elegante para guardar los artículos, vídeos, recetas e ideas que quieres volver a ver. Para iPhone y iPad.'
  },
  a11y: {
    selectLanguage: 'Seleccionar idioma',
    homeLink: 'Inicio de Find Later',
    appStoreLinkLabel: 'Descargar Find Later en el App Store',
    appStoreBadgeAlt: 'Descargar en el App Store',
    cardScreenAlt: 'Una tarjeta guardada en Find Later'
  },
  cta: {
    comingSoon: 'Próximamente en el App Store',
    comingSoonShort: 'Próximamente'
  },
  mockSaveCards: {
    restaurant: {
      title: 'Luca: pasta en Clerkenwell para el viernes',
      tag1: 'Restaurantes',
      tag2: 'Londres',
      aria: 'Una tarjeta de restaurante guardada en la biblioteca de Find Later',
      coverAlt: 'Atardecer sobre la terraza de un restaurante junto al lago, portada de una tarjeta de restaurante guardada'
    },
    livingRoom: {
      title: 'Ideas de iluminación cálida para el salón',
      tag1: 'Hogar',
      tag2: 'Deco',
      aria: 'Una tarjeta de interiorismo guardada en la biblioteca de Find Later',
      coverAlt: 'Un salón luminoso con butacas y una lámpara de pie arqueada, portada de una tarjeta de interiorismo guardada'
    }
  },
  mockCollectionCards: {
    travel: { title: 'Lugares que ver en Italia', meta: '14 elementos • Find Later' },
    home: { title: 'Inspiración para el salón', meta: '9 elementos • Find Later' },
    recipes: { title: 'Restaurantes favoritos', meta: '23 elementos • Find Later' }
  },
  bentoMocks: {
    editMenu: {
      cover: 'Editar portada',
      tags: 'Editar etiquetas',
      title: 'Editar título',
      description: 'Editar descripción'
    },
    export: {
      title: 'Importar y Exportar',
      importTitle: 'Importar guardados',
      importBody: 'JSON o CSV. Añade guardados nuevos y omite los que ya tienes.',
      exportTitle: 'Exportar biblioteca',
      exportBody: 'Elige CSV, JSON o Markdown.'
    }
  },
  header: {
    features: 'Funciones',
    support: 'Soporte',
    download: 'Descargar'
  },
  footer: {
    taglineEyebrow: 'Una aplicación cuidada al detalle',
    taglineHeadline: 'Guárdalo.',
    taglineHeadlineDim: 'Cierra la pestaña.',
    copyright: 'Creado con esmero en el Reino Unido.',
    appleAffiliation: 'Find Later es una aplicación independiente, no afiliada a Apple Inc.',
    appleTrademarks: 'Apple, el logotipo de Apple, iPhone y iPad son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. App Store es una marca de servicio de Apple Inc.',
    product: 'Producto',
    company: 'Compañía',
    legal: 'Aviso legal',
    features: 'Funciones',
    download: 'Descargar',
    support: 'Soporte',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Condiciones'
  },
  hero: {
    eyebrow: 'Find Later',
    title: 'Guarda lo que quieras.',
    titleAccent: 'Encuéntralo todo.',
    body: 'Un espacio simple y elegante para guardar los artículos, vídeos, recetas e ideas que quieres volver a ver.',
    badgeLabel: 'Para iPhone y iPad'
  },
  showcaseQuickSave: {
    eyebrow: 'Guardado rápido',
    headline: 'Guárdalo ahora,',
    headlineAccent: 'encuéntralo después.',
    body: 'Un solo toque desde cualquier app lo guarda con su título, portada y origen. Busca, filtra y vuelve a tus contenidos en un instante.',
    imageAlt: 'La app Find Later en un iPhone mostrando la biblioteca en modo oscuro con fotos, títulos y etiquetas de los elementos guardados.'
  },
  showcaseLibrary: {
    eyebrow: 'Tu biblioteca',
    headline: 'Todo guardado.',
    headlineAccent: 'Único y tuyo.',
    body: 'Todo lo que guardas se convierte en una ficha completa con imagen, origen y notas. Modifica el título, cambia la portada, edita las etiquetas o redáctalo de nuevo con Apple Intelligence.',
    imageAlt: 'La app Find Later en un iPhone mostrando fichas detalladas de elementos guardados que incluyen recetas, planes de viaje, diseño y restaurantes.'
  },
  showcaseIpad: {
    eyebrow: 'iPad',
    headline: 'Tu biblioteca,',
    headlineAccent: 'expandida.',
    body: 'Diseñado para iPad desde el primer día. Mira más contenido a la vez gracias a las colecciones, las vistas previas y una interfaz adaptada a la pantalla grande.',
    imageAltDark: 'La app Find Later en un iPad en modo oscuro, mostrando la pantalla de inicio de Colecciones con atajos de búsqueda rápida y favoritos.',
    imageAltLight: 'La app Find Later en un iPad en modo claro, mostrando la pantalla de inicio de Colecciones con atajos de búsqueda rápida y favoritos.'
  },
  showcaseCollections: {
    eyebrow: 'Colecciones',
    headline: 'Comparte',
    headlineAccent: 'colecciones.',
    body: 'Agrupa tus guardados por viajes, proyectos, listas de deseos o tableros de inspiración. Comparte una copia de la colección para que otros la añadan a su propia app.',
    imageAlt: 'Tres fichas de colección desplegándose en abanico, mostrando cómo se pueden agrupar los elementos guardados.'
  },
  splitHeadlinePrivacy: {
    eyebrow: 'Privacidad',
    first: 'Privado,',
    second: 'por defecto.',
    body: 'Sin cuentas. Sin rastreo. Sin SDK de terceros. Todo lo que haces en Find Later se queda en tu iPhone, tu iPad y tu propia cuenta de iCloud.'
  },
  bento: {
    eyebrow: 'Funciones',
    headline: 'Sencillo,',
    headlineAccent: 'por diseño.',
    body: 'Minimalista por fuera, increíblemente potente por dentro. Lo esencial pensado para ser intuitivo, rápido y discreto.',
    shareExtension: {
      eyebrow: 'Extensión para compartir',
      title: 'Guarda desde cualquier app',
      body: 'Guarda artículos, vídeos, publicaciones, PDF y archivos adjuntos de las aplicaciones que ya usas. Un toque y directo a tu biblioteca.',
      alt: 'Menú de compartir de iOS con contactos de AirDrop y la acción de guardar de Find Later'
    },
    collections: {
      eyebrow: 'Colecciones',
      title: 'Agrupa y comparte',
      body: 'Crea colecciones para tus viajes, proyectos, listas de deseos o ideas. Comparte un enlace para que otros importen una copia.',
      alt: 'Dos tarjetas de colección: Inspiración Salón y Restaurantes Favoritos'
    },
    find: {
      eyebrow: 'Búsqueda',
      title: 'Encuéntralo rápido',
      body: 'Busca por título, notas, etiquetas y fuentes en segundos. Encuéntralo incluso si no recuerdas exactamente cómo se llamaba.',
      alt: ''
    },
    makeItYours: {
      eyebrow: 'Personalización',
      title: 'Hazlo a tu medida',
      body: 'Edita títulos, cambia la portada, añade etiquetas o redacta descripciones con Apple Intelligence.',
      alt: 'Menú de edición con las acciones Editar Portada, Editar Etiquetas, Editar Título y Editar Descripción'
    },
    privacy: {
      eyebrow: 'Privacidad',
      title: 'Privado por defecto',
      body: 'Sin cuentas ni registro. Sin rastreo. Tus datos se quedan en tu cuenta de iCloud.',
      alt: 'Candado rojo'
    },
    export: {
      eyebrow: 'Exportación',
      title: 'Exporta cuando quieras',
      body: 'Exporta toda tu biblioteca (elementos guardados, notas y colecciones) en formatos Markdown (Obsidian, LLM), CSV (Excel) o JSON.',
      alt: 'Ficha de ajustes de importación y exportación'
    }
  },
  integration: {
    eyebrow: 'Integración iOS',
    headline: 'Siri y',
    headlineAccent: 'Buscar',
    body: 'Tus guardados aparecen en Buscar de iOS al instante. Pídele a Siri que guarde, busque o abra elementos. Crea automatizaciones en Atajos para gestionar tu biblioteca sin abrir la app.',
    spotlight: {
      eyebrow: 'Buscar en iOS',
      title: 'En Buscar de iOS',
      body: 'Tus elementos guardados aparecen en Buscar de iOS: encuéntralos sin abrir la app.'
    },
    siri: {
      eyebrow: 'Siri',
      title: 'Solo pídelo',
      body: 'Pídele a Siri que guarde un enlace en Find Later, que busque en la app o que te diga qué has guardado.'
    },
    shortcuts: {
      eyebrow: 'Atajos',
      title: 'Siete acciones para tus automatizaciones',
      actions: [
        'Guardar enlace',
        'Buscar en la biblioteca',
        'Elementos recientes',
        'Abrir un elemento',
        'Exportar colección',
        'Añadir a favoritos',
        'Añadir a colección'
      ]
    }
  },
  privacyPage: {
    metaTitle: 'Política de Privacidad - Find Later',
    metaDescription: 'Cómo trata Find Later tus datos. Sin cuenta. Sin rastreo. Tus datos viven en tu dispositivo y se sincronizan a través de tu propia cuenta de iCloud.',
    eyebrow: 'Aviso legal',
    headline: 'Privacidad.',
    headlineDim: 'Por defecto.',
    lastUpdated: '10 de junio de 2026',
    intro: 'Esta política explica en un lenguaje sencillo qué hace Find Later con tu información. El resumen es rápido: no hace casi nada, a propósito.',
    promisesTitle: 'Nuestras promesas',
    promises: [
      'Sin cuenta. No tienes que registrarte en ningún sitio.',
      'Sin analíticas. No medimos cómo utilizas la aplicación.',
      'Sin publicidad. No mostramos anuncios, ni lo haremos nunca.',
      'Sin rastreo. No te rastreamos en otras aplicaciones o webs.',
      'Sin venta de datos. Tu biblioteca es tuya, no un producto.',
      'Sin SDK de analíticas o publicidad de terceros en la app.'
    ],
    sections: [
      {
        title: 'Quiénes somos',
        body: 'Find Later (la "App") es publicada por un desarrollador independiente con sede en el Reino Unido ("nosotros", "nuestro"). Somos los responsables del tratamiento de la información personal que decidas enviarnos, como un correo de soporte. Para dudas sobre privacidad, escribe a support@getfindlater.com.'
      },
      {
        title: 'La versión corta',
        body: 'La App no requiere crear ninguna cuenta de Find Later ni utiliza servidores de contenido propios. No recibimos tus enlaces guardados, notas, etiquetas ni Colecciones. Esa biblioteca se guarda en tu dispositivo y, si lo activas, en tu iCloud de Apple. La App no contiene publicidad, rastreo entre aplicaciones ni SDK de analíticas de terceros. A continuación detallamos los datos de soporte, registros de la web y la información que Apple proporciona a los desarrolladores.'
      },
      {
        title: 'Qué datos procesa la app y dónde viven',
        body: 'En tu dispositivo, las URL, títulos, portadas, notas, etiquetas y el estado de lectura se guardan usando las herramientas estándar de Apple. Si iCloud está activo, Apple CloudKit almacena y sincroniza ese contenido bajo tu Apple ID. Find Later no gestiona una base de datos externa ni nos permite leer tu biblioteca. Si compartes una Colección, Apple procesa una copia para que el destinatario la añada de forma independiente. Las copias no son colaborativas.'
      },
      {
        title: 'Información disponible a través de Apple',
        body: 'Apple puede proporcionar a los desarrolladores informes agregados de descargas, ventas y uso de la App Store. Si has aceptado compartir datos con desarrolladores en iOS, Apple también puede facilitarnos datos de fallos y diagnóstico. Apple controla estos datos según sus propias políticas. Nosotros no usamos esta información para crear perfiles publicitarios ni rastrearte.'
      },
      {
        title: 'Sin rastreo, sin publicidad',
        body: 'Find Later no rastrea tu actividad en otras aplicaciones ni sitios web, no solicita permisos de rastreo publicitario ni muestra anuncios. No vendemos información personal. Solo comunicamos datos a proveedores indispensables para mantener la web y el soporte, bajo tu solicitud o cuando la ley así lo exija.'
      },
      {
        title: 'Acceso a las páginas que guardas',
        body: 'Cuando la App recopila información sobre un enlace, tu dispositivo puede contactar con ese sitio web o con un servicio de terceros. El sitio de destino recibe información de red ordinaria (como tu dirección IP) según sus propios términos. La apertura de enlaces puede usar el navegador interno de Apple. Find Later no recopila tu historial de navegación.'
      },
      {
        title: 'Compras y suscripciones',
        body: 'Find Later Plus se vende en la App Store de Apple usando StoreKit. Apple procesa los pagos y comunica a la App las compras activas para desbloquear las funciones de pago. Nosotros no recibimos los datos de tu tarjeta bancaria. Apple gestiona la facturación, los reembolsos y los impuestos de acuerdo con sus condiciones de servicios multimedia.'
      },
      {
        title: 'Sitio web y soporte',
        body: 'Esta web está alojada en GitHub Pages. GitHub puede procesar direcciones IP y registros de seguridad durante las visitas. La web carga una tipografía de Google Fonts, por lo que Google recibe información de red básica al realizar la petición. La web no utiliza cookies de publicidad ni analítica. Si escribes al soporte, nuestro proveedor de correo procesará tu e-mail para que podamos responderte.'
      },
      {
        title: 'Uso de la información de soporte y tiempo de conservación',
        body: 'Usamos los correos de soporte para responder a tus dudas, solucionar fallos técnicos y mantener un registro de la ayuda ofrecida. Nuestra base legal bajo el RGPD británico es nuestro interés legítimo en dar asistencia y mejorar la App. Conservamos los mensajes solo el tiempo estrictamente necesario, normalmente no más de 24 meses desde el cierre del caso, salvo obligaciones legales o contables.'
      },
      {
        title: 'Proveedores de servicios y transferencias internacionales',
        body: 'Apple, GitHub, Google y nuestro proveedor de correo tratan la información según sus propios términos y pueden hacerlo fuera del Reino Unido. Cuando realizamos transferencias bajo las leyes británicas de protección de datos, nos apoyamos en decisiones de adecuación o en garantías contractuales aprobadas. No permitimos a estos proveedores usar tu correspondencia para publicidad.'
      },
      {
        title: 'Seguridad',
        body: 'Utilizamos funciones de seguridad de la plataforma y tomamos medidas organizativas proporcionales a los limitados datos que gestionamos. La seguridad del dispositivo y de iCloud corre a cargo de Apple. Ningún método de transmisión o almacenamiento es 100% seguro, por lo que no podemos garantizar la seguridad absoluta.'
      },
      {
        title: 'Menores',
        body: 'Find Later está dirigida al público en general y no está diseñada específicamente para niños. No solicitamos datos de edad ni creación de cuentas. Si un menor escribe al soporte, usamos el mensaje exclusivamente para responderle. Los padres o tutores pueden contactar con nosotros para revisar esa correspondencia.'
      },
      {
        title: 'Tus derechos',
        body: 'Dependiendo de dónde residas, puedes tener derechos sobre tus datos personales (acceso, rectificación, supresión, limitación, oposición o reclamación ante un regulador). Escribe a support@getfindlater.com para realizar una solicitud. Los residentes en el Reino Unido pueden reclamar ante la ICO (ico.org.uk). Las copias locales en tu dispositivo o iCloud deben gestionarse desde la App o por tu parte, ya que no tenemos acceso.'
      },
      {
        title: 'Cambios en esta política',
        body: 'Podemos actualizar esta política si la App, la web o los requisitos legales cambian. Actualizaremos la fecha superior y avisaremos de forma destacada en caso de cambios importantes sobre cómo tratamos tu información.'
      },
      {
        title: 'Contacto',
        body: 'Si tienes dudas o solicitudes sobre privacidad, puedes escribir a support@getfindlater.com. Disponemos de una dirección postal formal bajo petición.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Soporte - Find Later',
    metaDescription: 'Ayuda y respuestas para Find Later. Guarda lo que quieras. Encuéntralo todo.',
    eyebrow: 'Soporte',
    headline: 'Estamos aquí',
    headlineDim: 'para ayudarte.',
    intro: 'La mayoría de las dudas se resuelven a continuación. Si no encuentras tu respuesta, escríbenos y una persona de nuestro equipo te contestará.',
    contactTitle: 'Contacto',
    contactButton: 'Enviar un mensaje',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Cómo guardo un elemento?',
        a: 'Abre el enlace en Safari o en cualquier otra app, toca el botón Compartir de iOS y elige Find Later. Si quieres, añade etiquetas, notas o asígnalo a una colección, y toca Guardar. Se añadirá a tu biblioteca al instante.'
      },
      {
        q: '¿Cómo creo una colección?',
        a: 'En la pestaña Colecciones, toca el icono de lápiz arriba a la derecha. Dale un nombre a la colección, elige un icono y un color, y añade elementos desde cualquier sección de la app.'
      },
      {
        q: '¿Cómo funciona compartir una colección?',
        a: 'Abre una colección, toca el menú y selecciona Compartir colección. Esto envía una copia para que la otra persona la añada a su propia biblioteca de Find Later. Su copia será independiente: los cambios o elementos añadidos después por cualquiera de los dos no se actualizarán en el otro dispositivo.'
      },
      {
        q: '¿Se sincroniza Find Later entre mi iPhone y mi iPad?',
        a: 'Sí. Si has iniciado sesión en iCloud, Find Later sincroniza automáticamente tu biblioteca entre todos tus dispositivos mediante CloudKit. No hay que activar ningún ajuste: simplemente funciona.'
      },
      {
        q: 'He alcanzado el límite de 100 guardados. ¿Qué hago?',
        a: 'La versión gratuita permite guardar hasta 100 elementos. Para eliminar este límite, suscríbete a Find Later Plus desde los Ajustes de la app, bien por 12,99 € al año o mediante un pago único de 34,99 € de por vida. Plus también activa las colecciones ilimitadas.'
      },
      {
        q: '¿Cómo cancelo la suscripción a Plus?',
        a: 'Las suscripciones las gestiona Apple. Abre los Ajustes de iOS, toca tu nombre, ve a Suscripciones, busca Find Later y toca Cancelar. Seguirás teniendo acceso a Plus hasta el final del periodo de facturación actual.'
      },
      {
        q: '¿Puedo solicitar un reembolso?',
        a: 'Los reembolsos de compras en el App Store los procesa directamente Apple. Entra en reportaproblem.apple.com, inicia sesión, busca tu compra de Find Later y solicita el reembolso.'
      },
      {
        q: 'He encontrado un fallo. ¿Qué hago?',
        a: 'Escribe a support@getfindlater.com detallando brevemente qué estabas haciendo, qué esperabas que pasara y qué ha ocurrido en realidad. Si adjuntas una captura de pantalla, nos ayuda muchísimo.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Condiciones de Uso - Find Later',
    metaDescription: 'Las condiciones explicadas de manera sencilla que se aplican al descargar o usar la aplicación Find Later.',
    eyebrow: 'Aviso legal',
    headline: 'Condiciones',
    headlineDim: 'de Uso.',
    lastUpdated: '10 de junio de 2026',
    intro: 'Estas condiciones se aplican al descargar o utilizar la aplicación de iOS Find Later (“Find Later”, “nosotros”, “nuestro”). Al usar Find Later, aceptas estas condiciones junto con el contrato de licencia estándar (EULA) de Apple. Las hemos redactado en un lenguaje claro y accesible.',
    tldrTitle: 'En resumen',
    tldr: [
      'Find Later se te concede bajo licencia para uso personal en tus dispositivos Apple.',
      'Las funciones gratuitas y de pago, los precios y la disponibilidad se detallan antes de la compra.',
      'Apple gestiona el pago, tramita los reembolsos y administra tu suscripción.',
      'Tus contenidos guardados son tuyos: no los leemos ni los usamos para entrenar IA.',
      'Estas condiciones se rigen por las leyes de Inglaterra y Gales.'
    ],
    sections: [
      {
        title: '1. Sobre estas condiciones',
        body: 'Estas condiciones regulan el uso de la aplicación de iOS Find Later ("Find Later", la "App"). La App la publica un desarrollador independiente con sede en el Reino Unido. Al utilizar Find Later, aceptas estas condiciones junto con la Licencia de Usuario Final estándar de Apple (el "EULA de Apple").'
      },
      {
        title: '2. La licencia',
        body: 'Find Later se te concede bajo licencia (no se vende) para uso personal y no comercial en cualquier dispositivo Apple de tu propiedad o bajo tu control, según las condiciones del EULA de Apple. Cuando estas condiciones amplíen dicho EULA (como en propiedad intelectual, reembolsos o resolución de disputas), estas condiciones se aplicarán junto con él.',
        link: {
          label: 'Leer el EULA estándar de Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Gratis y Plus',
        body: 'Find Later puede ofrecer funciones gratuitas y de pago. Los límites y precios actuales se detallan en la App y en la ficha de la App Store. Las funciones Plus pueden incluir límites más altos o ilimitados y la posibilidad de compartir colecciones. Las funciones pueden variar según el dispositivo, la versión del sistema operativo y la región.'
      },
      {
        title: '4. Suscripciones y pago único',
        body: 'Plus puede ofrecerse como suscripción auto-renovable y/o como pago único de por vida. El precio, el periodo de facturación y las funciones incluidas se muestran a través de Apple antes de confirmar la compra. Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del periodo actual. Apple gestiona los cobros y cancelaciones. El pago único no es recurrente y se aplica a las funciones descritas al comprar; no constituye una promesa de que la App o sus servicios en línea funcionen eternamente.'
      },
      {
        title: '5. Reembolsos',
        body: 'Todas las compras en Find Later las procesa Apple bajo las Condiciones de los Servicios Multimedia de Apple. Apple, y no nosotros, gestiona los reembolsos. Puedes solicitar un reembolso en reportaproblem.apple.com o a través del historial de compras de tu Apple ID. Nosotros no podemos emitir reembolsos directos ni guardamos tus datos de pago.',
        link: {
          label: 'Solicitar un reembolso a Apple',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '6. Cambios de precio',
        body: 'Los precios pueden variar. Apple comunicará cualquier cambio en el precio de las suscripciones según su normativa. Un cambio de precio no afectará a pagos únicos ya completados. Puedes cancelar tu suscripción antes de que el nuevo precio entre en vigor.',
        link: {
          label: 'Condiciones de los Servicios Multimedia de Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '7. Tus contenidos son tuyos',
        body: 'Todo lo que guardes en Find Later (enlaces, etiquetas, notas, la estructura de tus Colecciones) te pertenece. No reclamamos ninguna licencia sobre tus contenidos ni accedemos a ellos. Eres responsable de lo que guardas: por favor, no utilices Find Later para almacenar o compartir material ilegal, que infrinja derechos de terceros o que constituya acoso. Respeta las condiciones de las webs que guardas.'
      },
      {
        title: '8. Sincronización y uso compartido',
        body: 'Si iCloud está activo, Apple CloudKit almacena y sincroniza los datos de la App bajo tu Apple ID. La disponibilidad y recuperación dependen de los servicios de Apple. Compartir una colección envía una copia estática e independiente. Las colecciones no son colaborativas y las modificaciones posteriores no se sincronizan entre las copias. Eres responsable de elegir a los destinatarios.'
      },
      {
        title: '9. Uso aceptable',
        body: 'Queda prohibido: (a) realizar ingeniería inversa, descompilar o modificar Find Later salvo que lo permita expresamente la ley o el EULA de Apple; (b) eludir las comprobaciones de licencia o compras; (c) usar la función de compartir para enviar correo no deseado (spam) o acosar; o (d) interferir con la App o el uso de la misma por parte de otros. Podremos restringir el acceso a funciones específicas ante incumplimientos graves.'
      },
      {
        title: '10. Contenido de terceros',
        body: 'Find Later muestra vistas previas y abre enlaces de sitios web y servicios de terceros. Nosotros no alojamos, controlamos ni respaldamos ese contenido, ni nos hacemos responsables de su veracidad o legalidad. El uso de cualquier sitio enlazado se rige por las condiciones de dicho sitio.'
      },
      {
        title: '11. Nuestra propiedad intelectual',
        body: 'El nombre de Find Later, su diseño, iconos, código fuente y marca son de nuestra propiedad o se utilizan bajo licencia. La licencia detallada en la sección 2 no te transfiere ningún derecho sobre ellos. Puedes mencionar la App o enlazar a getfindlater.com en reseñas o publicaciones, sin implicar nuestro patrocinio sin autorización.'
      },
      {
        title: '12. El papel de Apple',
        body: 'Al distribuirse a través del App Store de Apple, se aplican los siguientes términos obligatorios:',
        bullets: [
          'Estas condiciones se acuerdan entre tú y nosotros, no con Apple. Apple no es responsable de la App ni de su contenido.',
          'Nosotros (y no Apple) somos los únicos responsables del soporte y mantenimiento de la App. Apple no tiene ninguna obligación de soporte.',
          'Si la App no cumple con la garantía aplicable, puedes notificárselo a Apple para que te devuelva el importe de compra (si procede). Apple no asume ninguna otra obligación de garantía.',
          'Nosotros (y no Apple) somos responsables de atender las reclamaciones relativas a la App (como responsabilidad civil del producto, cumplimiento legal o protección del consumidor).',
          'Nosotros (y no Apple) nos encargaremos de la defensa y resolución de cualquier reclamación por infracción de propiedad intelectual de terceros.',
          'Declaras que no resides en un país sujeto a embargo por parte del Gobierno de EE. UU. o calificado por este como estado patrocinador del terrorismo, y que no figuras en ninguna lista de partes prohibidas o restringidas.',
          'Apple y sus filiales son terceros beneficiarios de estas condiciones y tendrán derecho a exigir su cumplimiento a partir de tu aceptación de las mismas.'
        ]
      },
      {
        title: '13. Exclusiones de garantía',
        body: 'Find Later se proporciona "tal cual" y "según disponibilidad". En la medida que la ley lo permita, excluimos cualquier otra garantía de funcionamiento ininterrumpido o libre de errores de la App, o de que los metadatos de terceros sean precisos. Nada en estas condiciones afecta a tus derechos legales como consumidor.'
      },
      {
        title: '14. Limitación de responsabilidad',
        body: 'Somos responsables de las pérdidas o daños que sean consecuencia previsible de nuestro incumplimiento de estas condiciones o de nuestra falta de diligencia razonable. No nos hacemos responsables de pérdidas imprevisibles, pérdidas comerciales o fallos causados por Apple o terceros fuera de nuestro control razonable. Ninguna cláusula excluye la responsabilidad que sea ilegal excluir.'
      },
      {
        title: '15. Finalización del acuerdo',
        body: 'Estas condiciones se aplican mientras uses la App. Puedes dejar de usarla cuando quieras eliminándola de tus dispositivos y gestionando tus suscripciones desde Apple. Eliminar la App no borra las copias de seguridad de iCloud; utiliza los ajustes de tu dispositivo para gestionar esos datos.'
      },
      {
        title: '16. Cambios',
        body: 'Podemos actualizar estas condiciones por motivos legales, de seguridad o técnicos. Actualizaremos la fecha superior y notificaremos los cambios importantes con antelación siempre que sea viable. Si no aceptas un cambio material, puedes dejar de usar la App y cancelar tu suscripción.'
      },
      {
        title: '17. Ley aplicable y jurisdicción',
        body: 'Estas condiciones se rigen por las leyes de Inglaterra y Gales. Si eres un consumidor residente en otro lugar, también conservarás la protección de las disposiciones obligatorias de tu país de residencia. Podrás presentar reclamaciones ante los tribunales competentes según las leyes de consumo aplicables.'
      },
      {
        title: '18. Contacto',
        body: '¿Tienes dudas sobre estas condiciones? Escribe a support@getfindlater.com. Disponemos de dirección postal en el Reino Unido bajo petición para correspondencia formal.'
      }
    ]
  }
};
