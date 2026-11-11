/** Legal + support copy — ported verbatim from the previous Soleil site. */
import type { LegalCopy } from '../../types';

export const legal: LegalCopy = {
  privacyPage: {
    metaTitle: 'Política de privacidad - Soleil',
    metaDescription: 'Cómo trata Soleil tus datos. Sin cuenta. Sin rastreo. Tu perfil de piel, tus sesiones y tu historial viven en tus dispositivos y en tu iCloud privado.',
    eyebrow: 'Legal',
    headline: 'Privacidad.',
    headlineDim: 'Por defecto.',
    lastUpdated: '28 de septiembre de 2026',
    intro: 'Esta política explica, en lenguaje claro, qué hace Soleil con tu información. El resumen es breve: no hace gran cosa, a propósito.',
    promisesTitle: 'Nuestras promesas',
    promises: [
      'Sin cuenta. No hay nada en lo que tengas que registrarte.',
      'Sin analíticas. No medimos cómo usas la app.',
      'Sin publicidad. No mostramos anuncios, y nunca lo haremos.',
      'Sin rastreo. No te rastreamos entre apps ni sitios web.',
      'Sin venta de datos. Tu historial de sol es tuyo - no un producto.',
      'Sin SDK de analítica ni de publicidad de terceros en la app.'
    ],
    sections: [
      {
        title: 'Quiénes somos',
        body: 'Soleil (la "App") está publicada por un desarrollador independiente con sede en el Reino Unido ("nosotros"). Somos los responsables del tratamiento de la información personal que decidas enviarnos, como un correo de soporte. Para cuestiones de privacidad, escribe a support@getsoleilapp.com.'
      },
      {
        title: 'La versión corta',
        body: 'La App no tiene cuenta de Soleil ni servidor de contenidos operado por el desarrollador. Tu perfil de piel, tus sesiones de sol, tu registro de protector solar, los perfiles familiares y el historial de exposición se guardan en tu dispositivo mediante los frameworks de almacenamiento estándar de Apple y, si usas iCloud, se sincronizan entre tus propios dispositivos a través de tu cuenta privada de iCloud. Nosotros no los recibimos ni podemos leerlos. La App no incluye publicidad, rastreo entre apps ni SDK de analítica de terceros. La información que envías a soporte, los registros técnicos del sitio web gestionados por nuestro proveedor de alojamiento y la información que Apple proporciona a los desarrolladores se describen a continuación.'
      },
      {
        title: 'Qué datos maneja la app y dónde viven',
        body: 'En tu dispositivo, tu tipo de piel Fitzpatrick, tus elecciones de FPS y ropa, tus sesiones de sol, los perfiles familiares, los lugares guardados, las fotos de progreso y el historial se almacenan mediante el framework SwiftData de Apple. Si iCloud está activado en tu cuenta de Apple, SwiftData también sincroniza estos datos entre tus dispositivos a través de la base de datos privada de tu propia cuenta de iCloud, donde Apple los guarda conforme a sus propios términos. Esa base de datos privada pertenece a tu cuenta de Apple: Soleil no opera una base de datos aparte con esta información, y ni las herramientas de Apple ni la App nos permiten leerla. Puedes desactivar iCloud para Soleil en los Ajustes de iOS para mantener los datos solo en el dispositivo. Los perfiles familiares son simples registros que tú creas - Soleil no contacta ni identifica a las personas que describen.'
      },
      {
        title: 'Ubicación y meteorología',
        body: 'Para mostrar el índice UV donde estás, la App solicita tu ubicación a iOS y envía las coordenadas al servicio WeatherKit de Apple para obtener el UV y las condiciones meteorológicas locales. Apple procesa estas solicitudes conforme a sus propios términos de privacidad. Nosotros no recibimos ni almacenamos tu ubicación, y la App no construye un historial de movimientos en nuestros sistemas.'
      },
      {
        title: 'Datos de salud',
        body: 'Con tu permiso, la App lee el "Tiempo con luz de día" de Apple HealthKit para alimentar la función Real Sun, y puede consultar otras métricas relacionadas con el sol a las que concedas acceso. Los datos de salud se leen en tu dispositivo, se usan para cálculos y visualización en el propio dispositivo, y nunca se nos transmiten a nosotros ni a ningún tercero. Puedes retirar el acceso a HealthKit en cualquier momento en los Ajustes de iOS, y la función se adapta sin problemas.'
      },
      {
        title: 'Escaneo opcional del tono de piel con IA',
        body: 'El escaneo opcional del tono de piel puede ejecutarse íntegramente en el dispositivo. Si eliges la opción asistida por IA, tu foto se envía por una conexión cifrada, a través de un proxy seguro, a un proveedor de modelos con el único fin de estimar un tipo de piel Fitzpatrick, y el resultado se devuelve a tu dispositivo. Las fotos no se usan para identificarte, no se emplean para entrenamiento y nosotros no las conservamos. Siempre puedes establecer tu tipo de piel manualmente.'
      },
      {
        title: 'Información disponible a través de Apple',
        body: 'Apple puede proporcionar a los desarrolladores informes agregados de ventas, descargas y uso del App Store. Si has activado el uso compartido con desarrolladores de apps en iOS, Apple también puede proporcionar información de diagnóstico y de fallos. Apple controla la información que recopila a través del App Store, StoreKit, WeatherKit, HealthKit y las analíticas del dispositivo conforme a sus propios términos de privacidad. No usamos esta información para crear perfiles publicitarios ni para rastrearte entre apps o sitios web.'
      },
      {
        title: 'Compras y suscripciones',
        body: 'Soleil Pro se vende a través del App Store de Apple mediante StoreKit. Apple procesa los pagos y pone a disposición de la App la información de compra y de derechos de acceso para que pueda desbloquear las funciones de pago. Nosotros no recibimos los datos completos de tu tarjeta. Apple gestiona la facturación, los reembolsos y los impuestos conforme a los Términos de los Servicios Multimedia de Apple.'
      },
      {
        title: 'Sitio web y soporte',
        body: 'Este sitio web está alojado en GitHub Pages. GitHub puede procesar direcciones IP, detalles de las solicitudes y registros de seguridad cuando se visita el sitio. El sitio sirve sus propias fuentes y no carga scripts de terceros, cookies publicitarias ni analíticas. Si escribes a soporte, nuestro proveedor de correo procesa tu dirección, tu mensaje y los adjuntos para que podamos leerlo y responderte.'
      },
      {
        title: 'Por qué usamos la información de soporte y cuánto tiempo la conservamos',
        body: 'Usamos la correspondencia de soporte para responder a tu solicitud, diagnosticar problemas, prevenir abusos y mantener un registro adecuado de la asistencia prestada. Nuestra base legal conforme al RGPD del Reino Unido es nuestro interés legítimo en dar soporte a la App y mejorarla y, cuando corresponda, tomar medidas relacionadas con nuestro contrato contigo. Conservamos los mensajes de soporte solo durante el tiempo razonablemente necesario para esos fines, normalmente no más de 24 meses tras el cierre de la conversación, salvo que se requiera un plazo mayor por motivos legales, de seguridad o contables.'
      },
      {
        title: 'Proveedores de servicios y transferencias internacionales',
        body: 'Apple, GitHub y nuestro proveedor de correo procesan la información conforme a sus propios términos y pueden hacerlo fuera del Reino Unido. Cuando la legislación de protección de datos del Reino Unido se aplica a una transferencia que realizamos, nos basamos en una decisión de adecuación aplicable o en salvaguardas contractuales apropiadas. No permitimos que estos proveedores usen la correspondencia de soporte para nuestra publicidad.'
      },
      {
        title: 'Seguridad',
        body: 'Usamos las funciones de seguridad de la plataforma y tomamos medidas organizativas razonables, apropiadas a la información limitada que manejamos. La seguridad del dispositivo la proporciona principalmente Apple. Ningún método de almacenamiento o transmisión es completamente seguro, por lo que no podemos prometer una seguridad absoluta.'
      },
      {
        title: 'Menores',
        body: 'Soleil está pensada para un público general y no se dirige específicamente a menores. Los perfiles familiares de menores los crea y controla el adulto propietario del dispositivo, y permanecen en los dispositivos de ese adulto y en su propio iCloud privado. No pedimos a los usuarios que creen una cuenta ni que indiquen su edad. Si un menor escribe a soporte, usamos el mensaje solo para responder y gestionar la solicitud. Un padre, madre o tutor puede contactarnos en relación con esa correspondencia.'
      },
      {
        title: 'Tus derechos',
        body: 'Según dónde vivas, puedes tener derechos sobre la información personal que controlamos, incluidos los derechos de acceso, rectificación, supresión, limitación u oposición a su uso, y el derecho a reclamar ante un regulador. Estos derechos están sujetos a límites legales. Escribe a support@getsoleilapp.com para hacer una solicitud. Los residentes en el Reino Unido pueden reclamar ante la Information Commissioner\u2019s Office en ico.org.uk. El contenido almacenado en tus dispositivos o en tu iCloud privado debe gestionarse desde la App, el propio dispositivo o los ajustes de iCloud, porque nosotros no guardamos ninguna copia.'
      },
      {
        title: 'Cambios en esta política',
        body: 'Podemos actualizar esta política cuando cambien la App, el sitio web, los proveedores o los requisitos legales. Actualizaremos la fecha indicada arriba y daremos aviso adicional cuando un cambio afecte de forma sustancial a cómo usamos la información personal.'
      },
      {
        title: 'Contacto',
        body: 'Las preguntas o solicitudes sobre privacidad pueden enviarse a support@getsoleilapp.com. Hay una dirección postal disponible bajo petición para correspondencia formal.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Soporte - Soleil',
    metaDescription: 'Ayuda y respuestas para Soleil. Ama el sol. No las quemaduras.',
    eyebrow: 'Soporte',
    headline: 'Estamos aquí',
    headlineDim: 'para ayudarte.',
    intro: 'Casi todo lo que necesitas saber está abajo. Si no encuentras una respuesta, escríbenos y una persona real te contestará.',
    contactTitle: 'Contacto',
    contactButton: 'Enviar un mensaje',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Qué me dice Soleil sobre el UV de hoy?',
        a: 'Soleil muestra el índice UV en directo de tu ubicación, su categoría, el pico de hoy y la curva horaria con Apple WeatherKit. Tu tipo de piel Fitzpatrick y tu FPS lo convierten en una comprobación de protección a tiempo. A propósito, no presenta una cuenta atrás como tiempo seguro al sol: la sombra, el agua, la altitud y los reflejos también cuentan.'
      },
      {
        q: '¿Cómo configuro mi tipo de piel?',
        a: 'Durante la configuración inicial puedes responder unas preguntas, usar el escaneo con la cámara o elegir directamente tu tipo Fitzpatrick. El escaneo opcional asistido por IA envía una sola foto a través de un proxy seguro únicamente para estimar el tono de piel - o puedes mantenerlo todo en el dispositivo. Puedes cambiar tu tipo de piel en cualquier momento en la pestaña Tú.'
      },
      {
        q: '¿Cómo funcionan los perfiles familiares?',
        a: 'Los perfiles familiares forman parte de Soleil Pro. Añade a las personas que cuidas en la pestaña Tú y elige quién está fuera al iniciar el temporizador de sol. Cada persona conserva su propio tipo de piel y su registro de protector, y Soleil lleva un recordatorio de reaplicación para cada una. Pro añade también el historial familiar y el widget de estado de Familia. Los datos familiares se quedan en tus dispositivos y en tu propio iCloud privado - no se comparte nada con nosotros. Tu propia protección solar siempre es gratis.'
      },
      {
        q: '¿Qué necesito para las funciones de Apple Watch?',
        a: 'La app gratuita para el reloj funciona en watchOS con un iPhone enlazado, y muestra el UV, el estado del protector solar y la luz del día, con avisos hápticos de reaplicación y complicaciones. La historia de luz de Real Sun usa el Tiempo con luz de día de Apple, que requiere un Apple Watch SE (2.ª generación), Series 6 o posterior, o cualquier Ultra.'
      },
      {
        q: '¿Reaplicar protector solar reinicia mi exposición al sol?',
        a: 'No - y es deliberado. Reaplicar renueva tu protección de ahí en adelante, pero el UV que tu piel ya ha recibido hoy sigue contando. Soleil registra ambas cosas por separado, para que tu total diario sea siempre honesto.'
      },
      {
        q: '¿Qué incluye Soleil Pro y cuánto cuesta?',
        a: 'Gratis cubre tu propio sol, cada día: UV en directo y las condiciones del día, el temporizador de sol y los recordatorios, la Actividad en Vivo, la app de Apple Watch, los widgets, tu perfil de piel (con un escaneo de piel con IA) y cada sesión que registres. Pro añade sesiones Daily Glow guiadas y el editor de rutina, perfiles familiares y salidas con un recordatorio para cada persona, el historial familiar y el widget de Familia, Real Sun (tiempo con luz de día), tendencias mensuales, el mapa de calor del calendario, Viaje al sol y nuevos escaneos de piel con IA. Cuesta 2,49 $/semana, 29,99 $/año con 3 días de prueba gratis, o 79,99 $ en un pago único. Los precios pueden variar según el país - Apple te muestra el tuyo antes de comprar.'
      },
      {
        q: '¿Cómo cancelo una suscripción Pro?',
        a: 'Las suscripciones las gestiona Apple. Abre los Ajustes de iOS, toca tu nombre, luego Suscripciones, busca Soleil y toca Cancelar. Mantendrás el acceso a Pro hasta el final del período de facturación actual.'
      },
      {
        q: '¿Puedo pedir un reembolso?',
        a: 'Los reembolsos de compras del App Store los gestiona Apple. Visita reportaproblem.apple.com, inicia sesión, busca la compra de Soleil y solicita un reembolso.'
      },
      {
        q: '¿Es Soleil consejo médico?',
        a: 'No. Soleil es orientación de bienestar basada en ciencia UV publicada, y siempre peca de prudente - pero no puede ver tu piel. Si tienes la piel sensible, antecedentes de cáncer de piel o una afección diagnosticada, sigue primero el plan de tu dermatólogo.'
      },
      {
        q: 'He encontrado un error. ¿Qué hago?',
        a: 'Escribe a support@getsoleilapp.com con una breve descripción de lo que estabas haciendo, lo que esperabas y lo que ocurrió en realidad. Una captura de pantalla ayuda mucho.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Términos de uso - Soleil',
    metaDescription: 'Los términos en lenguaje claro que se aplican cuando descargas o usas la app Soleil para iOS.',
    eyebrow: 'Legal',
    headline: 'Términos',
    headlineDim: 'de uso.',
    lastUpdated: '28 de septiembre de 2026',
    intro: 'Estos términos se aplican cuando descargas o usas la app Soleil para iOS ("Soleil", "nosotros"). Al usar Soleil los aceptas, junto con el EULA estándar de Apple. Están escritos en lenguaje claro a propósito.',
    tldrTitle: 'En resumen',
    tldr: [
      'Soleil se te licencia para uso personal en tus dispositivos Apple.',
      'Las funciones gratuitas y de pago, los precios y la disponibilidad se muestran en la App antes de comprar.',
      'Apple cobra el pago, gestiona los reembolsos y administra tu suscripción.',
      'Soleil es orientación de bienestar, no consejo médico - las decisiones sobre el sol siguen siendo tuyas.',
      'Estos términos se rigen por las leyes de Inglaterra y Gales.'
    ],
    sections: [
      {
        title: '1. Sobre estos términos',
        body: 'Estos términos se aplican cuando descargas o usas la app Soleil para iOS y watchOS ("Soleil", la "App"). La App está publicada por un desarrollador independiente con sede en el Reino Unido ("nosotros"). Al usar Soleil, aceptas estos términos junto con el Acuerdo de Licencia de Aplicación con Licencia para el Usuario Final de Apple (el "EULA de Apple"). Están escritos en lenguaje claro a propósito.'
      },
      {
        title: '2. La licencia',
        body: 'Soleil se te licencia (no se te vende) para uso personal y no comercial en cualquier dispositivo Apple que poseas o controles, conforme a los términos del EULA de Apple. Cuando estos términos añaden algo al EULA de Apple - por ejemplo, sobre nuestra propiedad intelectual, los reembolsos o la ley que rige las disputas entre nosotros - estos términos se aplican junto a él.',
        link: {
          label: 'Leer el EULA estándar de Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. No es consejo médico',
        body: 'Soleil ofrece orientación general de bienestar sobre la exposición al sol basada en ciencia UV publicada, datos meteorológicos y la información que introduces. No es un dispositivo médico, no diagnostica, trata ni previene ninguna afección, y no puede tener en cuenta todos los factores individuales. Las estimaciones como las lecturas de UV, las comprobaciones de protección y el tiempo a la luz del día son aproximaciones. Usa siempre tu propio criterio y sigue los consejos de un profesional sanitario cualificado - especialmente si tienes la piel sensible, antecedentes de cáncer de piel, fotosensibilidad o tomas medicación que afecte a la tolerancia al sol. Tú sigues siendo responsable de tus decisiones sobre el sol y de las de tu familia.'
      },
      {
        title: '4. Gratis y Pro',
        body: 'Soleil puede ofrecer funciones gratuitas y de pago. Los límites y funciones actuales se muestran en la App y en la ficha del App Store. Las funciones de pago pueden incluir sesiones guiadas, la historia de luz de Real Sun y un historial ampliado. Las funciones pueden variar según el dispositivo, la versión del sistema operativo y el territorio; algunas funciones requieren un Apple Watch y/o permisos como la ubicación o el acceso a HealthKit.'
      },
      {
        title: '5. Suscripciones y compra única',
        body: 'Pro puede ofrecerse como suscripción con renovación automática y/o como compra única. El precio, el período de facturación, las funciones incluidas y cualquier prueba gratuita los muestra Apple antes de que confirmes una compra, y pueden variar según el país o la moneda. Las suscripciones se renuevan automáticamente salvo que se cancelen a través de tu cuenta de Apple al menos 24 horas antes del final del período actual. Apple realiza el cargo en tu cuenta y gestiona la cancelación. Una compra única no se repite y se aplica a la versión y funciones descritas en el momento de la compra; no es una promesa de que la App o todos los servicios en línea vayan a estar disponibles para siempre.'
      },
      {
        title: '6. Reembolsos',
        body: 'Todas las compras de Soleil las procesa Apple conforme a los Términos de los Servicios Multimedia de Apple. Apple, no nosotros, gestiona los reembolsos. Puedes solicitar un reembolso en reportaproblem.apple.com o desde el historial de compras de tu Apple ID. No tenemos capacidad para emitir reembolsos directamente y no almacenamos tus datos de pago.',
        link: {
          label: 'Solicitar un reembolso a Apple',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '7. Cambios de precio',
        body: 'Los precios pueden cambiar. Apple proporcionará el aviso o proceso de consentimiento que se requiera para los cambios de precio de las suscripciones. Un precio nuevo no afecta a una compra única ya completada. Puedes cancelar una suscripción antes de que un cambio entre en vigor, con arreglo a los términos aplicables de Apple.',
        link: {
          label: 'Términos de los Servicios Multimedia de Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '8. Tus datos son tuyos',
        body: 'Tu perfil de piel, tus sesiones de sol, tu registro de protector solar, los perfiles familiares y el historial te pertenecen. Se almacenan en tu dispositivo y, si usas iCloud, en tu propia cuenta privada de iCloud. No reclamamos ninguna licencia sobre ellos y nunca accedemos a ellos. Eres responsable de la exactitud de la información que introduces - la orientación de la App solo es tan buena como el tipo de piel, el FPS y los detalles de ropa que le proporciones.'
      },
      {
        title: '9. Servicios de terceros',
        body: 'La App depende de servicios de Apple, incluidos WeatherKit (datos de UV y meteorología), HealthKit (Tiempo con luz de día, con tu permiso), StoreKit y las notificaciones. La disponibilidad y precisión de esos servicios dependen de Apple, de tu dispositivo, de tus ajustes y de tu conexión de red. Los datos meteorológicos y de UV son estimaciones proporcionadas por terceros y en ocasiones pueden no estar disponibles o ser inexactos; la orientación de la App debe interpretarse en consecuencia.'
      },
      {
        title: '10. Uso aceptable',
        body: 'Por favor, no (a) realices ingeniería inversa, descompiles ni modifiques Soleil salvo donde la ley o el EULA de Apple lo permitan expresamente; (b) eludas las comprobaciones de compra o de derechos de acceso; ni (c) interfieras con la App o con el uso que otra persona haga de ella. Cuando sea técnica y legalmente posible, podremos restringir el acceso a las funciones afectadas en caso de incumplimiento grave.'
      },
      {
        title: '11. Nuestra propiedad intelectual',
        body: 'El nombre, el diseño, los iconos, el código fuente y la marca de Soleil son de nuestra propiedad o se usan bajo licencia. La licencia de la sección 2 no te transfiere esos derechos. Puedes mencionar la App o enlazar a getsoleilapp.com en reseñas, artículos o publicaciones en redes sociales, pero no debes dar a entender nuestro respaldo o patrocinio sin permiso.'
      },
      {
        title: '12. El papel de Apple (software habilitado por Apple)',
        body: 'Soleil se distribuye a través del App Store de Apple, lo que añade los siguientes términos exigidos por Apple:',
        bullets: [
          'Estos términos se celebran entre tú y nosotros, no con Apple. Apple no es parte de ellos y no tiene responsabilidad alguna sobre la App ni su contenido.',
          'Nosotros (no Apple) somos los únicos responsables de la App, de su contenido y de cualquier mantenimiento o soporte. Apple no tiene obligación alguna de proporcionar mantenimiento o soporte en relación con la App.',
          'En caso de que la App no se ajuste a cualquier garantía aplicable, puedes notificarlo a Apple, y Apple te reembolsará el precio de compra de la App (si lo hubiera). En la máxima medida permitida por la ley, Apple no tiene ninguna otra obligación de garantía en relación con la App.',
          'Nosotros (no Apple) somos responsables de atender cualquier reclamación relativa a la App o a tu posesión o uso de ella, incluidas las reclamaciones por responsabilidad de producto, las reclamaciones de que la App no cumple algún requisito legal o reglamentario aplicable, y las reclamaciones derivadas de la legislación de protección del consumidor o de privacidad.',
          'Nosotros (no Apple) somos responsables de la investigación, defensa, resolución y liquidación de cualquier reclamación de terceros por infracción de propiedad intelectual relativa a la App.',
          'Declaras y garantizas que (a) no te encuentras en un país sujeto a un embargo del Gobierno de EE. UU. ni en uno designado por el Gobierno de EE. UU. como país "que apoya el terrorismo", y (b) no figuras en ninguna lista del Gobierno de EE. UU. de partes prohibidas o restringidas.',
          'Apple y las filiales de Apple son terceros beneficiarios de estos términos y, tras tu aceptación, tendrán el derecho (y se considerará que han aceptado el derecho) de hacerlos valer frente a ti como terceros beneficiarios.'
        ]
      },
      {
        title: '13. Exenciones de responsabilidad',
        body: 'Soleil se proporciona "tal cual" y "según disponibilidad". En la máxima medida permitida por la ley, rechazamos todas las garantías, condiciones y declaraciones no expresamente indicadas aquí, incluida cualquier garantía de que la App funcionará sin interrupciones o sin errores, o de que las estimaciones de UV, meteorología o luz de día serán exactas. Nada en estos términos elimina ni limita los derechos irrenunciables que te correspondan en virtud de la Consumer Rights Act 2015 del Reino Unido o de leyes de protección del consumidor similares.'
      },
      {
        title: '14. Limitación de responsabilidad',
        body: 'Somos responsables de las pérdidas o daños que sean un resultado previsible de nuestro incumplimiento de estos términos o de no actuar con un cuidado y una diligencia razonables. No somos responsables de pérdidas que no fueran previsibles, de pérdidas empresariales sufridas por un consumidor, de quemaduras solares o resultados de salud derivados de confiar en las estimaciones en contra de lo indicado en la sección 3, ni de fallos causados por Apple, un proveedor de red o un servicio de terceros fuera de nuestro control razonable. Nada en estos términos excluye ni limita la responsabilidad cuando hacerlo sería ilegal, incluida la responsabilidad por muerte o lesiones personales causadas por negligencia, por fraude, o respecto de tus derechos legales como consumidor.'
      },
      {
        title: '15. Terminación',
        body: 'Estos términos se aplican mientras uses la App. Puedes dejar de usarla en cualquier momento eliminándola y gestionando cualquier suscripción a través de Apple. Podemos dejar de ofrecer o actualizar la App, pero esto no elimina los derechos que ya tengas en virtud de la legislación de consumo.'
      },
      {
        title: '16. Cambios',
        body: 'Podemos actualizar estos términos por motivos legales, de seguridad o de producto. Actualizaremos la fecha indicada arriba y daremos un aviso razonable de los cambios sustanciales cuando sea posible. Los cambios no eliminarán retroactivamente derechos relativos a una compra ya realizada. Si no aceptas un cambio sustancial, puedes dejar de usar la App y cancelar cualquier suscripción a través de Apple.'
      },
      {
        title: '17. Ley aplicable y jurisdicción',
        body: 'Estos términos se rigen por las leyes de Inglaterra y Gales. Si eres un consumidor residente en otro lugar, también conservas las protecciones imperativas que te otorgue la ley de tu país de residencia. Puedes iniciar procedimientos ante los tribunales que tengas a tu disposición conforme a la legislación de consumo aplicable.'
      },
      {
        title: '18. Contacto',
        body: '¿Preguntas sobre estos términos? Escribe a support@getsoleilapp.com. Hay una dirección postal en el Reino Unido disponible bajo petición para correspondencia formal.'
      }
    ]
  }
};
