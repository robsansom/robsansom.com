/** Copy inside the hand-built app-UI recreations. Uses the app's own
 *  translations wherever the app already says it. Sample values only. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      subtitle: 'La chaleur du jour est là',
      rightNow: 'En ce moment',
      tabs: ['Votre journée', 'Votre soleil', 'Vous']
    },
    uvNow: {
      location: 'Santa Monica',
      label: 'UV maintenant',
      time: '12:32',
      value: '6',
      category: 'Élevé',
      livePill: 'UV en direct',
      guidance: 'Soleil fort jusqu’à 16 h. Limitez l’exposition directe et cherchez l’ombre.',
      axis: ['9 h', '12 h', '15 h'],
      peak: 'Pic 8 · 13:00',
      tiles: [
        { label: 'Pic UV', value: '8', caption: 'Pic à 13:00' },
        { label: 'Niveau UV', value: 'Élevé' },
        { label: 'Couverture nuageuse', value: '18 %' },
        { label: 'Humidité', value: '54 %' }
      ]
    },
    protection: {
      label: 'Protection',
      state: 'À vérifier',
      title: 'Une protection est recommandée maintenant',
      body: 'Utilisez l’ombre, des vêtements et de la crème solaire sur la peau exposée.',
      skinLabel: 'Type de peau',
      skinValue: 'Type III',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: 'Couverture',
      coverValue: 'Chapeau + ombre'
    },
    reminders: {
      label: 'Alertes',
      state: 'Alertes prêtes',
      title: 'Réappliquer avant 14 h 40',
      body: 'Deux heures au maximum, plus tôt après l’eau, la transpiration ou la serviette.',
      activity: 'Activité en direct active'
    },
    outing: {
      label: 'Sortie en cours',
      outsideFor: 'Dehors depuis',
      elapsed: '18:42',
      uvLine: 'UV 6 · Élevé',
      footnote: 'Temps écoulé, et non un compte à rebours de temps sûr'
    },
    people: {
      label: 'Vos proches',
      childBadge: 'Enfant',
      list: [
        { name: 'Vous', child: false, detail: 'Type III · SPF 50, appliqué il y a 12 min' },
        { name: 'Maya', child: true, detail: 'Type II · SPF 50, appliqué il y a 40 min' }
      ]
    },
    daylight: {
      label: 'Temps à la lumière du jour',
      source: 'Depuis l’Apple Watch',
      value: '195 min',
      axis: ['9:00', 'Midi', '15:00']
    }
};
