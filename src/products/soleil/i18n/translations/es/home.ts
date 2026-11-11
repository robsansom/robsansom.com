import type { HomeCopy, NavCopy } from '../../types';

export const nav: NavCopy = {
  features: 'Funciones',
  how: 'Cómo funciona',
  realSun: 'Real Sun',
  faq: 'Preguntas',
  guides: 'Guías del sol',
  support: 'Soporte',
  menu: 'Menú',
  close: 'Cerrar',
  menuLabel: 'Menú del sitio',
  primaryLabel: 'Navegación principal',
};

export const skipLabel = 'Ir al contenido';

export const home: HomeCopy = {
  hero: {
    titleLines: ['La forma de', 'tu día al sol.'],
    body: 'UV en directo donde estás, una comprobación de protección ajustada a tu piel y recordatorios de protector solar que siguen el ritmo del día.',
    note: 'Para iPhone y Apple Watch',
    imageAlt:
      'Una mujer aplicándose protector solar en una playa luminosa, con el mar detrás',
    scrollCue: 'Desliza',
  },

  toolkit: {
    eyebrow: 'Las herramientas',
    headline: 'Seis cosas que Soleil hace bien',
    prev: 'Tarjeta anterior',
    next: 'Tarjeta siguiente',
    railLabel: 'Funciones de Soleil',
    cards: [
      {
        tag: 'Ahora',
        title: 'UV en directo',
        body: 'El índice donde estás, su categoría y el pico de hoy, con la fuente y la antigüedad del dato al lado.',
      },
      {
        tag: 'Personal',
        title: 'Comprobación de protección',
        body: 'Tu tipo de piel, tu FPS, la ropa y las condiciones del momento se convierten en una sola cosa que hacer ahora.',
      },
      {
        tag: 'Recordatorios',
        title: 'Protector a tiempo',
        body: 'Dos horas como máximo, y antes tras nadar, sudar o secarte con la toalla. Volver a aplicarlo nunca reinicia tu tiempo al aire libre.',
      },
      {
        tag: 'Al aire libre',
        title: 'Temporizador de sol',
        body: 'Empieza una salida y Soleil reúne el tiempo transcurrido, la protección de cada persona y sus recordatorios. Daily Glow añade una rutina guiada opcional.',
      },
      {
        tag: 'Tu gente',
        title: 'Familia',
        body: 'Perfiles para las personas que cuidas, cada una con su tipo de piel y sus propios recordatorios de reaplicación.',
      },
      {
        tag: 'Apple Watch',
        title: 'Real Sun',
        body: 'El tiempo con luz diurna de tu Watch, dibujado sobre la curva UV del día.',
      },
    ],
  },

  moves: {
    eyebrow: 'Cómo funciona',
    headline: 'Un día de sol en cuatro pasos',
    steps: [
      {
        title: 'Mira el cielo',
        body: 'El índice UV en directo, su categoría y cuándo llega el pico de hoy.',
      },
      {
        title: 'Elige tu protección',
        body: 'Tipo de piel, FPS, ropa y sombra: la comprobación se ajusta.',
      },
      {
        title: 'Empieza el día',
        body: 'Inicia el temporizador de sol para quien esté fuera y mantén los recordatorios en orden.',
      },
      {
        title: 'Mira tu Real Sun',
        body: 'Después, comprueba en qué momento ocurrió tu luz diurna.',
      },
    ],
  },

  uvNow: {
    eyebrow: 'UV actual',
    headline: 'La respuesta UV, de un vistazo',
    steps: [
      {
        label: 'Una tarjeta',
        title: 'Abres Soleil y el cielo responde primero.',
        body: 'Nada que descifrar. Tu día se abre con el índice UV en directo donde estás.',
      },
      {
        label: 'El dato',
        title: 'El índice, su categoría y su antigüedad.',
        body: 'El UV y las condiciones vienen de Apple WeatherKit, con la fuente y la hora de la lectura.',
      },
      {
        label: 'La forma del día',
        title: 'El pico de hoy, la nubosidad, la humedad.',
        body: 'La curva por horas muestra cuándo llega la parte fuerte del día, antes de salir a ella.',
      },
      {
        label: 'Tu comprobación',
        title: 'Qué hacer ahora, no cuánto tiempo puedes quedarte.',
        body: 'Tu tipo de piel y tu FPS convierten la lectura en una comprobación oportuna. Soleil nunca presenta el tiempo como permiso.',
      },
    ],
    imageAlt:
      'La pantalla Tu día de Soleil en iPhone: UV en directo, pico del día y las condiciones del momento',
  },

  moments: {
    eyebrow: 'Todo tipo de días',
    headline: 'Hecha para todo tipo de día soleado',
    items: [
      'Salidas del cole',
      'Días de playa',
      'Tardes en el jardín',
      'Paseos por la ciudad',
      'Deporte al aire libre',
      'Vacaciones en familia',
      'Piel sensible',
      'Días nublados pero brillantes',
      'Hora dorada',
    ],
    closer: 'y todo lo demás, entre medias',
  },

  why: {
    eyebrow: 'Por qué Soleil',
    headline: 'Útil, y tuya',
    body: 'Todo lo que Soleil aprende sobre tu sol sigue siendo tuyo: en tu iPhone y, si sincronizas, en tu iCloud privado. Sin cuenta que crear, sin analíticas, sin publicidad, sin seguimiento entre apps.',
    badges: [
      'UV local en directo',
      'Privada por defecto',
      'Sin cuenta',
      'Lista para la familia',
      'Apple Watch',
      'Rutina Daily Glow',
      'Sincronización privada con iCloud',
      'Widgets',
      'Actividad en vivo',
      'Avisos de pico UV',
      'Recordatorios de protector',
      'Nubes y humedad',
      'Escaneo del tipo de piel',
      'Historial y tendencias',
    ],
    note: 'Orientación de bienestar, no consejo médico',
  },

  realSun: {
    eyebrow: 'Real Sun',
    headline: 'Las previsiones dicen lo que podría pasar.',
    headlineAccent: 'Real Sun muestra la luz que de verdad te dio.',
    /** Read out as the sun crosses the arc, morning to golden hour. */
    notes: [
      'Luz suave de la mañana.',
      'Sube rápido: el UV crece hacia el mediodía.',
      'Sol en su punto máximo. Se recomienda protección.',
      'La tarde se suaviza.',
      'Hora dorada: el sol está bajo y suave.',
    ],
    tabsLabel: 'Momentos del día',
    tabs: [
      {
        label: 'Mañana',
        title: 'Luz suave, índice bajo',
        body: 'La luz de primera hora llega cuando el UV todavía es bajo.',
      },
      {
        label: 'Pico',
        title: 'Las horas más fuertes',
        body: 'Hacia el mediodía el índice alcanza su máximo. Soleil muestra qué parte de tu luz ocurrió ahí.',
      },
      {
        label: 'Tarde',
        title: 'Vuelve a suavizarse',
        body: 'La luz del final del día cae en el lado descendente de la curva.',
      },
    ],
    note: 'Real Sun lee el tiempo con luz diurna del Apple Watch con tu permiso. Soleil nunca escribe en Salud, y la luz diurna nunca se presenta como un cupo.',
    imageAlt:
      'El gráfico Real Sun de Soleil: tiempo con luz diurna dibujado sobre la curva UV del día',
  },

  faq: {
    eyebrow: 'Preguntas',
    headline: 'Preguntas frecuentes',
    more: 'Ver todas las respuestas',
  },

  closing: {
    headline: 'Llévate Soleil contigo.',
    body: 'UV en directo, una comprobación de protección para tu piel y recordatorios que siguen el ritmo del día.',
    note: 'iPhone y Apple Watch',
    privacy:
      'Sin cuenta. Sin seguimiento. Tu historial se queda en tus dispositivos y en tu propio iCloud.',
    imageAlt: 'El icono de la app Soleil: un sol dorado sobre un cielo azul',
  },
};
