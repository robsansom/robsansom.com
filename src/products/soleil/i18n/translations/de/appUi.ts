/** Copy inside the hand-built app-UI recreations. Uses the app's own
 *  translations wherever the app already says it. Sample values only. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      subtitle: 'Die Hitze des Tages ist da',
      rightNow: 'Gerade jetzt',
      tabs: ['Dein Tag', 'Deine Sonne', 'Du']
    },
    uvNow: {
      location: 'Santa Monica',
      label: 'UV jetzt',
      time: '12:32',
      value: '6',
      category: 'Hoch',
      livePill: 'Live-UV',
      guidance: 'Starke Sonne bis 16 Uhr. Direkte Sonne kurz halten und Schatten nutzen.',
      axis: ['9:00', '12:00', '15:00'],
      peak: 'Spitze 8 · 13:00',
      tiles: [
        { label: 'UV-Höchstwert', value: '8', caption: 'Spitze um 13:00' },
        { label: 'UV-Stufe', value: 'Hoch' },
        { label: 'Bewölkung', value: '18 %' },
        { label: 'Luftfeuchtigkeit', value: '54 %' }
      ]
    },
    protection: {
      label: 'Schutz',
      state: 'Prüfung nötig',
      title: 'Schutz wird jetzt empfohlen',
      body: 'Nutze Schatten, Kleidung und Sonnencreme auf unbedeckter Haut.',
      skinLabel: 'Hauttyp',
      skinValue: 'Typ III',
      spfLabel: 'LSF',
      spfValue: '50',
      coverLabel: 'Bedeckung',
      coverValue: 'Hut + Schatten'
    },
    reminders: {
      label: 'Mitteilungen',
      state: 'Benachrichtigungen bereit',
      title: 'Nachcremen bis 14:40 Uhr',
      body: 'Höchstens zwei Stunden, früher nach Wasser, Schweiß oder Abtrocknen.',
      activity: 'Live-Aktivität aktiv'
    },
    outing: {
      label: 'Live-Ausflug',
      outsideFor: 'Draußen seit',
      elapsed: '18:42',
      uvLine: 'UV 6 · Hoch',
      footnote: 'Vergangene Zeit, kein Countdown für sichere Zeit'
    },
    people: {
      label: 'Deine Leute',
      childBadge: 'Kind',
      list: [
        { name: 'Du', child: false, detail: 'Typ III · LSF 50, vor 12 Min. aufgetragen' },
        { name: 'Maya', child: true, detail: 'Typ II · LSF 50, vor 40 Min. aufgetragen' }
      ]
    },
    daylight: {
      label: 'Zeit im Tageslicht',
      source: 'Von der Apple Watch',
      value: '195 Min.',
      axis: ['9:00', 'Mittag', '15:00']
    }
};
