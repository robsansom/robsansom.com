import type { HomeCopy, NavCopy } from '../../types';

export const nav: NavCopy = {
  features: 'Fonctionnalités',
  how: 'Comment ça marche',
  realSun: 'Real Sun',
  faq: 'Questions',
  guides: 'Guides soleil',
  support: 'Assistance',
  menu: 'Menu',
  close: 'Fermer',
  menuLabel: 'Menu du site',
  primaryLabel: 'Navigation principale',
};

export const skipLabel = 'Aller au contenu';

export const home: HomeCopy = {
  hero: {
    titleLines: ['Le rythme de', 'votre journée au soleil.'],
    body: 'L’UV en direct là où vous êtes, un point protection adapté à votre peau et des rappels de crème solaire qui suivent la journée.',
    note: 'Pour iPhone et Apple Watch',
    imageAlt:
      'Une femme applique de la crème solaire sur une plage lumineuse, la mer derrière elle',
    scrollCue: 'Faire défiler',
  },

  toolkit: {
    eyebrow: 'La boîte à outils',
    headline: 'Six choses que Soleil fait bien',
    prev: 'Carte précédente',
    next: 'Carte suivante',
    railLabel: 'Fonctionnalités de Soleil',
    cards: [
      {
        tag: 'Maintenant',
        title: 'UV en direct',
        body: 'L’indice là où vous êtes, sa catégorie et le pic du jour — avec la source et la fraîcheur de la mesure affichées à côté.',
      },
      {
        tag: 'Personnel',
        title: 'Point protection',
        body: 'Votre type de peau, votre SPF, vos vêtements et les conditions du moment deviennent une seule chose à faire maintenant.',
      },
      {
        tag: 'Rappels',
        title: 'Crème solaire à l’heure',
        body: 'Deux heures au maximum, et plus tôt après la baignade, la transpiration ou le séchage à la serviette. Réappliquer ne remet jamais à zéro votre temps dehors.',
      },
      {
        tag: 'Dehors',
        title: 'Minuteur solaire',
        body: 'Lancez une sortie : Soleil réunit le temps écoulé, la protection de chacun et ses rappels. Daily Glow ajoute une routine guidée, en option.',
      },
      {
        tag: 'Vos proches',
        title: 'Famille',
        body: 'Des profils pour les personnes dont vous prenez soin, chacune avec son type de peau et ses propres rappels de crème.',
      },
      {
        tag: 'Apple Watch',
        title: 'Real Sun',
        body: 'Le temps à la lumière du jour de votre Watch, tracé sur la courbe UV de la journée.',
      },
    ],
  },

  moves: {
    eyebrow: 'Comment ça marche',
    headline: 'Une journée au soleil en quatre gestes',
    steps: [
      {
        title: 'Regardez le ciel',
        body: 'L’indice UV en direct, sa catégorie et l’heure du pic.',
      },
      {
        title: 'Choisissez votre couverture',
        body: 'Type de peau, SPF, vêtements, ombre : le point protection s’ajuste.',
      },
      {
        title: 'Lancez la journée',
        body: 'Lancez le minuteur solaire pour les personnes dehors et gardez les rappels de crème en ordre.',
      },
      {
        title: 'Voyez votre Real Sun',
        body: 'Regardez après coup à quel moment votre lumière du jour a eu lieu.',
      },
    ],
  },

  uvNow: {
    eyebrow: 'UV maintenant',
    headline: 'La réponse UV, en un coup d’œil',
    steps: [
      {
        label: 'Une carte',
        title: 'Ouvrez Soleil : le ciel répond en premier.',
        body: 'Rien à décoder. Votre journée s’ouvre sur l’indice UV en direct là où vous êtes.',
      },
      {
        label: 'La mesure',
        title: 'L’indice, sa catégorie et sa fraîcheur.',
        body: 'L’UV et les conditions viennent d’Apple WeatherKit, avec la source et l’heure de la mesure.',
      },
      {
        label: 'La forme du jour',
        title: 'Le pic du jour, la nébulosité, l’humidité.',
        body: 'La courbe horaire montre quand arrive la partie forte de la journée — avant d’y aller.',
      },
      {
        label: 'Votre point',
        title: 'Quoi faire maintenant, pas combien de temps rester.',
        body: 'Votre type de peau et votre SPF transforment la mesure en point protection. Soleil ne présente jamais le temps comme une permission.',
      },
    ],
    imageAlt:
      'L’écran Votre journée de Soleil sur iPhone : UV en direct, pic du jour et conditions du moment',
  },

  moments: {
    eyebrow: 'Tous les jours de soleil',
    headline: 'Fait pour tous les jours de soleil',
    items: [
      'Sorties d’école',
      'Journées plage',
      'Après-midis au jardin',
      'Balades en ville',
      'Sport dehors',
      'Vacances en famille',
      'Peaux sensibles',
      'Ciel voilé mais lumineux',
      'Heure dorée',
    ],
    closer: 'et tout le reste, entre les deux',
  },

  why: {
    eyebrow: 'Pourquoi Soleil',
    headline: 'Utile, et bien à vous',
    body: 'Tout ce que Soleil apprend sur votre soleil reste à vous : sur votre iPhone, et dans votre iCloud privé si vous synchronisez. Aucun compte à créer, pas d’analytics, pas de publicité, pas de suivi entre apps.',
    badges: [
      'UV local en direct',
      'Privé par défaut',
      'Sans compte',
      'Prêt pour la famille',
      'Apple Watch',
      'Routine Daily Glow',
      'Synchro iCloud privée',
      'Widgets',
      'Activité en direct',
      'Alertes de pic UV',
      'Rappels de crème',
      'Nuages et humidité',
      'Scan du type de peau',
      'Historique et tendances',
    ],
    note: 'Conseils bien-être, pas des conseils médicaux',
  },

  realSun: {
    eyebrow: 'Real Sun',
    headline: 'Les prévisions disent ce qui pourrait arriver.',
    headlineAccent: 'Real Sun montre la lumière que vous avez vraiment eue.',
    /** Read out as the sun crosses the arc, morning to golden hour. */
    notes: [
      'Lumière douce du matin.',
      'Montée rapide. L’UV grimpe vers midi.',
      'Soleil au plus fort. Protection recommandée.',
      'L’après-midi s’adoucit.',
      'Heure dorée. Le soleil est bas et doux.',
    ],
    tabsLabel: 'Moments de la journée',
    tabs: [
      {
        label: 'Matin',
        title: 'Lumière douce, indice bas',
        body: 'La lumière du matin arrive quand l’UV est encore bas.',
      },
      {
        label: 'Pic',
        title: 'Les heures les plus fortes',
        body: 'Vers midi, l’indice atteint son maximum. Soleil montre quelle part de votre lumière s’est passée là.',
      },
      {
        label: 'Soir',
        title: 'Ça redescend',
        body: 'La lumière de fin de journée se place sur la partie descendante de la courbe.',
      },
    ],
    note: 'Real Sun lit le temps à la lumière du jour de l’Apple Watch avec votre permission. Soleil n’écrit jamais dans Santé, et la lumière du jour n’est jamais présentée comme un quota.',
    imageAlt:
      'Le graphique Real Sun de Soleil : temps à la lumière du jour tracé sur la courbe UV du jour',
  },

  faq: {
    eyebrow: 'Questions',
    headline: 'Questions fréquentes',
    more: 'Voir toutes les réponses',
  },

  closing: {
    headline: 'Emportez Soleil avec vous.',
    body: 'L’UV en direct, un point protection pour votre peau et des rappels qui suivent la journée.',
    note: 'iPhone et Apple Watch',
    privacy:
      'Sans compte. Sans suivi. Votre historique reste sur vos appareils et dans votre iCloud.',
    imageAlt: 'L’icône de l’app Soleil : un soleil doré sur un ciel bleu',
  },
};
