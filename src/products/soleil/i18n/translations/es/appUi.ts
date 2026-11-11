/** Copy inside the hand-built app-UI recreations. Uses the app's own
 *  translations wherever the app already says it. Sample values only. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      subtitle: 'El calor del día ya está aquí',
      rightNow: 'Ahora mismo',
      tabs: ['Tu día', 'Tu sol', 'Tú']
    },
    uvNow: {
      location: 'Santa Mónica',
      label: 'UV actual',
      time: '12:32',
      value: '6',
      category: 'Alto',
      livePill: 'UV en directo',
      guidance: 'Sol fuerte hasta las 16:00. Limita el sol directo y busca sombra.',
      axis: ['9:00', '12:00', '15:00'],
      peak: 'Pico 8 · 13:00',
      tiles: [
        { label: 'UV máximo', value: '8', caption: 'Pico a las 13:00' },
        { label: 'Nivel UV', value: 'Alto' },
        { label: 'Nubosidad', value: '18 %' },
        { label: 'Humedad', value: '54 %' }
      ]
    },
    protection: {
      label: 'Protección',
      state: 'Necesita revisión',
      title: 'Se recomienda protección ahora',
      body: 'Usa sombra, ropa y protector solar en la piel expuesta.',
      skinLabel: 'Tipo de piel',
      skinValue: 'Tipo III',
      spfLabel: 'FPS',
      spfValue: '50',
      coverLabel: 'Cobertura',
      coverValue: 'Sombrero + sombra'
    },
    reminders: {
      label: 'Alertas',
      state: 'Alertas listas',
      title: 'Reaplicar antes de las 14:40',
      body: 'Dos horas como máximo, antes tras el agua, el sudor o secarte con toalla.',
      activity: 'Actividad en directo activa'
    },
    outing: {
      label: 'Salida en directo',
      outsideFor: 'Fuera desde hace',
      elapsed: '18:42',
      uvLine: 'UV 6 · Alto',
      footnote: 'Tiempo transcurrido, no una cuenta atrás de tiempo seguro'
    },
    people: {
      label: 'Tu gente',
      childBadge: 'Niño',
      list: [
        { name: 'Tú', child: false, detail: 'Tipo III · FPS 50, aplicado hace 12 min' },
        { name: 'Maya', child: true, detail: 'Tipo II · FPS 50, aplicado hace 40 min' }
      ]
    },
    daylight: {
      label: 'Tiempo con luz de día',
      source: 'Desde el Apple Watch',
      value: '195 min',
      axis: ['9:00', 'Mediodía', '15:00']
    }
};
