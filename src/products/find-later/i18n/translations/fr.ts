import type { TranslationSchema } from '../types';

export const fr: TranslationSchema = {
  meta: {
    title: 'Find Later - Enregistrez tout. Retrouvez tout.',
    description: 'Un espace simple et élégant pour vos articles, vidéos, recettes et idées à retrouver. Pour iPhone et iPad.'
  },
  a11y: {
    selectLanguage: 'Choisir la langue',
    homeLink: 'Accueil Find Later',
    appStoreLinkLabel: 'Télécharger Find Later dans l’App Store',
    appStoreBadgeAlt: 'Télécharger dans l’App Store',
    cardScreenAlt: 'Une carte enregistrée dans Find Later'
  },
  cta: {
    comingSoon: 'Bientôt sur l’App Store',
    comingSoonShort: 'Bientôt disponible'
  },
  mockSaveCards: {
    restaurant: {
      title: 'Luca : pâtes à Clerkenwell pour vendredi soir',
      tag1: 'Restaurants',
      tag2: 'Londres',
      aria: 'Une carte de restaurant enregistrée dans la bibliothèque Find Later',
      coverAlt: 'Coucher de soleil sur la terrasse d’un restaurant au bord d’un lac, couverture d’une carte de restaurant enregistrée'
    },
    livingRoom: {
      title: 'Idées d’éclairage chaleureux pour le salon',
      tag1: 'Maison',
      tag2: 'Déco',
      aria: 'Une carte de décoration intérieure enregistrée dans la bibliothèque Find Later',
      coverAlt: 'Un salon lumineux avec des fauteuils et un lampadaire arqué, couverture d’une carte de décoration enregistrée'
    }
  },
  mockCollectionCards: {
    travel: { title: 'Lieux à voir en Italie', meta: '14 éléments • Find Later' },
    home: { title: 'Inspiration salon', meta: '9 éléments • Find Later' },
    recipes: { title: 'Restaurants favoris', meta: '23 éléments • Find Later' }
  },
  bentoMocks: {
    editMenu: {
      cover: 'Modifier la couverture',
      tags: 'Modifier les balises',
      title: 'Modifier le titre',
      description: 'Modifier la description'
    },
    export: {
      title: 'Importation et exportation',
      importTitle: 'Importer des sauvegardes',
      importBody: 'JSON ou CSV. Ajoute les nouvelles sauvegardes et ignore celles que vous avez déjà.',
      exportTitle: 'Exporter la bibliothèque',
      exportBody: 'Choisissez CSV, JSON ou Markdown.'
    }
  },
  header: {
    features: 'Fonctionnalités',
    support: 'Support',
    download: 'Télécharger'
  },
  footer: {
    taglineEyebrow: 'Une application simple et soignée',
    taglineHeadline: 'Enregistrez.',
    taglineHeadlineDim: 'Fermez l’onglet.',
    copyright: 'Conçu avec soin au Royaume-Uni.',
    appleAffiliation: 'Find Later est une application indépendante, non affiliée à Apple Inc.',
    appleTrademarks: 'Apple, le logo Apple, iPhone et iPad sont des marques déposées d’Apple Inc., enregistrées aux États-Unis et dans d’autres pays. App Store est une marque de service d’Apple Inc.',
    product: 'Produit',
    company: 'Société',
    legal: 'Mentions légales',
    features: 'Fonctionnalités',
    download: 'Télécharger',
    support: 'Support',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions'
  },
  hero: {
    eyebrow: 'Find Later',
    title: 'Enregistrez tout.',
    titleAccent: 'Retrouvez tout.',
    body: 'Un espace simple et élégant pour vos articles, vidéos, recettes et idées à retrouver.',
    badgeLabel: 'Pour iPhone et iPad'
  },
  showcaseQuickSave: {
    eyebrow: 'Sauvegarde rapide',
    headline: 'Enregistrez maintenant,',
    headlineAccent: 'retrouvez plus tard.',
    body: 'Un geste depuis n’importe quelle application suffit pour sauvegarder un lien avec son titre, son image et sa source. Recherchez et filtrez en un instant.',
    imageAlt: 'L’application Find Later sur iPhone affichant la bibliothèque en mode sombre avec les photos, les titres et les tags des articles sauvegardés.'
  },
  showcaseLibrary: {
    eyebrow: 'Votre bibliothèque',
    headline: 'Chaque sauvegarde.',
    headlineAccent: 'Rien qu’à vous.',
    body: 'Tout ce que vous enregistrez devient une fiche complète avec image, source et notes. Modifiez le titre, changez l’image de couverture, ajoutez des tags ou régénérez le tout avec Apple Intelligence.',
    imageAlt: 'L’application Find Later sur iPhone affichant les fiches détaillées d’éléments sauvegardés, comprenant des recettes, des projets de voyage et des idées de design.'
  },
  showcaseIpad: {
    eyebrow: 'iPad',
    headline: 'Votre bibliothèque,',
    headlineAccent: 'en grand.',
    body: 'Conçu pour l’iPad dès le départ. Visualisez une plus grande partie de votre bibliothèque en un coup d’œil grâce aux collections, aux aperçus et à une disposition optimisée pour grand écran.',
    imageAltDark: 'L’application Find Later sur iPad en mode sombre, affichant la page d’accueil des collections avec des raccourcis et les favoris.',
    imageAltLight: 'L’application Find Later sur iPad en mode clair, affichant la page d’accueil des collections avec des raccourcis et les favoris.'
  },
  showcaseCollections: {
    eyebrow: 'Collections',
    headline: 'Partagez vos',
    headlineAccent: 'collections.',
    body: 'Regroupez vos sauvegardes par projets, voyages, listes d’envies ou tableaux d’inspiration. Partagez un instantané d’une collection entière pour que d’autres l’ajoutent à leur propre application.',
    imageAlt: 'Trois fiches de collection se déployant en éventail, montrant comment regrouper des éléments sauvegardés.'
  },
  splitHeadlinePrivacy: {
    eyebrow: 'Confidentialité',
    first: 'Privé,',
    second: 'par défaut.',
    body: 'Pas de compte. Pas de suivi. Pas de SDK tiers. Tout ce que vous faites dans Find Later reste sur votre iPhone, votre iPad et votre propre compte iCloud.'
  },
  bento: {
    eyebrow: 'Fonctionnalités',
    headline: 'Simple,',
    headlineAccent: 'par choix.',
    body: 'Épurée à l’extérieur, puissante à l’intérieur. Les fonctionnalités essentielles sont pensées pour être évidentes, rapides et discrètes.',
    shareExtension: {
      eyebrow: 'Extension de partage',
      title: 'Enregistrez de n’importe où',
      body: 'Enregistrez des articles, vidéos, publications, PDF et pièces jointes directement depuis vos applications. Un geste, et c’est dans votre bibliothèque.',
      alt: 'Menu de partage iOS avec les contacts AirDrop et l’action d’enregistrement Find Later'
    },
    collections: {
      eyebrow: 'Collections',
      title: 'Rassemblez et partagez',
      body: 'Créez des collections pour vos voyages, projets, listes d’envies ou idées. Partagez un instantané de votre collection.',
      alt: 'Deux fiches de collection : Inspiration Salon et Restaurants Favoris'
    },
    find: {
      eyebrow: 'Recherche',
      title: 'Trouvez en un clin d’œil',
      body: 'Recherchez par titres, notes, tags et sources en un instant. Retrouvez vos sauvegardes même si vous avez oublié leur nom.',
      alt: ''
    },
    makeItYours: {
      eyebrow: 'Personnalisation',
      title: 'Rien qu’à vous',
      body: 'Modifiez les titres, changez l’image de couverture, ajoutez des tags ou régénérez le texte avec Apple Intelligence.',
      alt: 'Menu d’édition affichant les actions Modifier la couverture, Modifier les tags et Modifier la description'
    },
    privacy: {
      eyebrow: 'Confidentialité',
      title: 'Privé par défaut',
      body: 'Aucun compte requis. Aucun traçage. Vos données restent dans votre iCloud.',
      alt: 'Cadenas rouge'
    },
    export: {
      eyebrow: 'Exportation',
      title: 'Exportez quand vous voulez',
      body: 'Exportez l’intégralité de votre bibliothèque (sauvegardes, notes et collections) aux formats Markdown (Obsidian, LLM), CSV (Excel) ou JSON.',
      alt: 'Fiche des paramètres d’importation et d’exportation'
    }
  },
  integration: {
    eyebrow: 'Intégration iOS',
    headline: 'Siri &',
    headlineAccent: 'Recherche',
    body: 'Vos sauvegardes apparaissent dans la Recherche iOS dès que vous les enregistrez. Demandez à Siri de sauvegarder, rechercher ou ouvrir vos fiches. Créez des automatisations dans l’application Raccourcis.',
    spotlight: {
      eyebrow: 'Recherche iOS',
      title: 'Directement dans iOS',
      body: 'Retrouvez vos sauvegardes via la Recherche iOS, sans même ouvrir l’application.'
    },
    siri: {
      eyebrow: 'Siri',
      title: 'Demandez simplement',
      body: 'Demandez à Siri d’enregistrer un lien dans Find Later, d’y faire une recherche ou de lister vos lectures.'
    },
    shortcuts: {
      eyebrow: 'Raccourcis',
      title: 'Sept actions pour vos automatisations',
      actions: [
        'Enregistrer le lien',
        'Rechercher dans la bibliothèque',
        'Sauvegardes récentes',
        'Ouvrir une sauvegarde',
        'Exporter une collection',
        'Ajouter aux favoris',
        'Ajouter à une collection'
      ]
    }
  },
  privacyPage: {
    metaTitle: 'Charte de Confidentialité - Find Later',
    metaDescription: 'Comment Find Later gère vos données. Aucun compte. Aucun suivi. Vos données restent sur votre appareil et se synchronisent via iCloud.',
    eyebrow: 'Mentions légales',
    headline: 'Confidentialité.',
    headlineDim: 'Par défaut.',
    lastUpdated: '10 juin 2026',
    intro: 'Cette charte explique de manière claire ce que Find Later fait de vos informations. C’est très simple : l’application en fait le moins possible, par choix.',
    promisesTitle: 'Nos engagements',
    promises: [
      'Aucun compte. Il n’y a rien à quoi s’inscrire.',
      'Aucune analyse. Nous ne mesurons pas votre utilisation.',
      'Aucune publicité. Pas de pub aujourd’hui, ni jamais.',
      'Aucun traçage. Pas de suivi entre les applications ou sites.',
      'Aucune vente de données. Votre bibliothèque vous appartient.',
      'Aucun SDK tiers de pub ou d’analyse dans l’application.'
    ],
    sections: [
      {
        title: 'Qui nous sommes',
        body: 'Find Later (l’« Application ») est publiée par un développeur indépendant basé au Royaume-Uni (« nous », « notre »). Nous sommes le responsable du traitement des données personnelles que vous choisissez de nous envoyer, comme un e-mail au support. Pour toute question, écrivez à support@getfindlater.com.'
      },
      {
        title: 'La version courte',
        body: 'L’Application ne dispose d’aucun compte Find Later ni de serveur de contenu géré par le développeur. Nous ne recevons pas vos liens, notes, tags ou collections. Cette bibliothèque est stockée sur votre appareil et, si activé, dans votre iCloud. L’Application ne contient pas de publicité, de traçage publicitaire ou de SDK d’analyse tiers. Les informations de support, les historiques techniques du site web et les rapports fournis par Apple sont détaillés ci-dessous.'
      },
      {
        title: 'Quelles données l’application traite, et où elles vivent',
        body: 'Sur votre appareil, les URL, titres, images, notes, tags et états de lecture sont stockés en utilisant les frameworks standard d’Apple. Si la synchronisation iCloud est activée, Apple CloudKit stocke et synchronise ces données sous votre identifiant Apple. Find Later ne gère pas de base de données externe et ne nous permet pas d’accéder à vos lectures. Si vous partagez une collection, Apple en traite une copie pour que votre destinataire l’ajoute à sa propre bibliothèque de façon indépendante. Les copies ne sont pas collaboratives.'
      },
      {
        title: 'Informations disponibles via Apple',
        body: 'Apple peut fournir aux développeurs des rapports agrégés de ventes, téléchargements et statistiques d’utilisation de l’App Store. Si vous avez accepté de partager ces données avec les développeurs dans iOS, Apple peut aussi nous transmettre des rapports de plantage. Apple contrôle ces informations selon ses propres règles de confidentialité. Nous n’utilisons pas ces données pour faire de la publicité ou vous pister.'
      },
      {
        title: 'Aucun traçage, aucune publicité',
        body: 'Find Later ne vous suit pas à la trace sur d’autres applications ou sites, ne demande pas l’autorisation de suivi publicitaire et n’affiche pas de pub. Nous ne vendons pas vos données. Nous ne transmettons des informations à des prestataires de services que pour faire fonctionner le site ou le support, à votre demande, ou si la loi l’exige.'
      },
      {
        title: 'Chargement des pages enregistrées',
        body: 'Lorsque l’Application charge les informations d’un lien, votre appareil peut contacter le site en question. Ce site externe reçoit alors des informations réseau de base, comme votre adresse IP, selon sa propre politique de confidentialité. L’ouverture d’un lien peut utiliser le navigateur intégré d’Apple. Find Later ne conserve aucun historique de ces requêtes sur ses systèmes.'
      },
      {
        title: 'Achats et abonnements',
        body: 'Find Later Plus est vendu sur l’App Store d’Apple via StoreKit. Apple traite les paiements et fournit à l’Application les reçus d’achat pour débloquer les fonctionnalités payantes. Nous ne recevons pas les coordonnées de votre carte bancaire. Apple gère la facturation, les remboursements et les taxes selon les conditions d’Apple Media Services.'
      },
      {
        title: 'Site web et support',
        body: 'Ce site est hébergé par GitHub Pages. GitHub peut traiter les adresses IP et les journaux de sécurité lors des visites. Le site charge une police via Google Fonts, Google reçoit donc les requêtes réseau de base associées. Le site n’utilise pas de cookies publicitaires ou de suivi. Si vous écrivez au support, notre fournisseur de messagerie traite votre e-mail pour que nous puissions y répondre.'
      },
      {
        title: 'Pourquoi nous utilisons ces données et durée de conservation',
        body: 'Nous utilisons les e-mails de support uniquement pour répondre à vos demandes, diagnostiquer les bugs et conserver un historique de l’assistance. Notre base légale selon le RGPD britannique est notre intérêt légitime à vous aider et à améliorer l’Application. Nous conservons ces messages uniquement pour la durée nécessaire, généralement pas plus de 24 mois après la clôture du ticket, sauf obligation légale ou comptable.'
      },
      {
        title: 'Prestataires et transferts internationaux',
        body: 'Apple, GitHub, Google et notre fournisseur d’e-mails traitent les informations selon leurs propres conditions et peuvent le faire hors du Royaume-Uni. Lorsque nous transférons des données soumises aux lois britanniques, nous nous appuyons sur des décisions d’adéquation ou des clauses contractuelles types. Nous n’autorisons pas l’usage de vos e-mails de support à des fins publicitaires.'
      },
      {
        title: 'Sécurité',
        body: 'Nous utilisons les fonctions de sécurité des plateformes et prenons des mesures organisationnelles raisonnables. La sécurité de l’appareil et d’iCloud est principalement assurée par Apple. Aucune méthode de stockage ou de transmission n’étant infaillible, nous ne pouvons garantir une sécurité absolue.'
      },
      {
        title: 'Enfants',
        body: 'Find Later s’adresse à un public général et n’est pas conçu spécifiquement pour les enfants. Nous ne demandons pas de création de compte ou d’âge. Si un enfant contacte le support, nous n’utilisons son message que pour lui répondre. Les parents ou tuteurs peuvent nous contacter au sujet de ces échanges.'
      },
      {
        title: 'Vos droits',
        body: 'Selon votre pays, vous pouvez disposer de droits sur vos données personnelles (accès, rectification, suppression, limitation, opposition, réclamation). Ces droits ont des limites légales. Écrivez à support@getfindlater.com pour faire une demande. Les résidents britanniques peuvent s’adresser à l’ICO (ico.org.uk). Les données stockées sur votre appareil ou iCloud doivent être gérées directement par vous car nous n’en possédons pas de copie.'
      },
      {
        title: 'Modification de cette charte',
        body: 'Nous pouvons mettre à jour cette charte si l’Application, le site ou la réglementation évoluent. Nous mettrons à jour la date indiquée en haut et vous informerons en cas de changement majeur affectant vos données.'
      },
      {
        title: 'Contact',
        body: 'Pour toute question sur la confidentialité, écrivez à support@getfindlater.com. Une adresse postale formelle est disponible sur demande.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Support - Find Later',
    metaDescription: 'Aide et réponses pour Find Later. Enregistrez tout. Retrouvez tout.',
    eyebrow: 'Support',
    headline: 'Nous sommes là',
    headlineDim: 'pour vous aider.',
    intro: 'La plupart des réponses à vos questions se trouvent ci-dessous. Si vous ne trouvez pas votre bonheur, écrivez-nous et une vraie personne vous répondra.',
    contactTitle: 'Contact',
    contactButton: 'Envoyer un message',
    faqTitle: 'Foire aux questions',
    faqs: [
      {
        q: 'Comment enregistrer un élément ?',
        a: 'Ouvrez-le dans Safari ou une autre application, touchez le bouton Partager d’iOS, puis sélectionnez Find Later. Ajoutez des tags, classez-le dans une collection ou rédigez une note, puis touchez Enregistrer. Il apparaît instantanément dans votre bibliothèque.'
      },
      {
        q: 'Comment créer une collection ?',
        a: 'Dans l’onglet Collections, touchez l’icône de crayon en haut à droite. Donnez un nom à la collection, choisissez une icône et une couleur, puis ajoutez-y des éléments depuis n’importe quel écran de l’application.'
      },
      {
        q: 'Comment fonctionne le partage de collection ?',
        a: 'Ouvrez une collection, touchez le menu, puis Partager la collection. Cela envoie un instantané que votre destinataire peut importer dans son application. Les deux copies deviennent indépendantes : les modifications ultérieures ne se synchronisent pas.'
      },
      {
        q: 'Est-ce que Find Later se synchronise entre mon iPhone et mon iPad ?',
        a: 'Oui. Si vous êtes connecté à iCloud, Find Later synchronise automatiquement votre bibliothèque entre vos appareils via CloudKit. Il n’y a aucun réglage à activer, cela fonctionne tout seul.'
      },
      {
        q: 'J’ai atteint la limite de 100 sauvegardes. Que faire ?',
        a: 'La version gratuite permet d’enregistrer jusqu’à 100 éléments. Pour aller au-delà, passez à Find Later Plus depuis les Réglages — soit 12,99 € par an, soit 34,99 € en achat unique à vie. Plus débloque aussi les collections illimitées.'
      },
      {
        q: 'Comment annuler mon abonnement Plus ?',
        a: 'Les abonnements sont gérés par Apple. Ouvrez les Réglages d’iOS, touchez votre nom, puis Abonnements, sélectionnez Find Later et touchez Annuler l’abonnement. Vous garderez vos accès Plus jusqu’à la fin de la période en cours.'
      },
      {
        q: 'Puis-je obtenir un remboursement ?',
        a: 'Les remboursements App Store sont gérés par Apple. Connectez-vous sur reportaproblem.apple.com, recherchez votre achat Find Later et demandez un remboursement.'
      },
      {
        q: 'J’ai trouvé un bug. Que dois-je faire ?',
        a: 'Envoyez un e-mail à support@getfindlater.com avec une description rapide du problème, de ce que vous faisiez et du résultat obtenu. Une capture d’écran nous aide beaucoup.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Conditions d’Utilisation - Find Later',
    metaDescription: 'Les conditions d’utilisation rédigées en termes clairs qui s’appliquent à l’application Find Later.',
    eyebrow: 'Mentions légales',
    headline: 'Conditions',
    headlineDim: 'd’Utilisation.',
    lastUpdated: '10 juin 2026',
    intro: 'Ces conditions s’appliquent lorsque vous téléchargez ou utilisez l’application Find Later (« Find Later », « nous », « notre »). En l’utilisant, vous acceptez ces règles ainsi que le CLUF standard d’Apple. Elles sont écrites de façon simple et compréhensible.',
    tldrTitle: 'En bref',
    tldr: [
      'Find Later vous est concédé sous licence pour un usage personnel sur vos appareils Apple.',
      'Les fonctions gratuites et payantes, les tarifs et la disponibilité sont affichés dans l’application avant l’achat.',
      'Apple gère les paiements, les remboursements et la gestion de votre abonnement.',
      'Vos contenus vous appartiennent. Nous n’y accédons pas et n’entraînons pas d’IA dessus.',
      'Ces conditions sont régies par les lois d’Angleterre et du Pays de Galles.'
    ],
    sections: [
      {
        title: '1. À propos de ces conditions',
        body: 'Ces conditions régissent le téléchargement et l’utilisation de l’application iOS Find Later (« Find Later », l’« Application »). L’Application est publiée par un développeur indépendant basé au Royaume-Uni. En utilisant Find Later, vous acceptez ces conditions ainsi que le Contrat de licence d’utilisateur final de l’application sous licence d’Apple (le « CLUF Apple »).'
      },
      {
        title: '2. La licence',
        body: 'Find Later vous est concédé sous licence (et non vendu) pour un usage personnel et non commercial sur tout appareil Apple que vous possédez ou contrôlez, selon les termes du CLUF Apple. Lorsque ces conditions complètent le CLUF Apple (par exemple sur la propriété intellectuelle ou les litiges), elles s’appliquent conjointement.',
        link: {
          label: 'Lire le CLUF standard d’Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Gratuit et Plus',
        body: 'Find Later propose des fonctionnalités gratuites et payantes. Les limites actuelles et les détails de l’offre sont présentés dans l’Application et sur sa fiche App Store. Les fonctionnalités Plus peuvent inclure des limites plus élevées ou illimitées et le partage de collections. Les options peuvent varier selon l’appareil, la version du système et votre pays.'
      },
      {
        title: '4. Abonnements et achat unique',
        body: 'Plus peut être proposé sous forme d’abonnement renouvelable automatiquement et/ou d’achat unique. Le prix, la période de facturation et les fonctionnalités incluses sont affichés par Apple avant la confirmation d’achat. Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours. Apple gère les paiements et les résiliations. Un achat unique n’est pas récurrent et s’applique aux fonctionnalités décrites au moment de l’achat ; il ne garantit pas la disponibilité à vie des services en ligne.'
      },
      {
        title: '5. Remboursements',
        body: 'Tous les achats sur Find Later sont traités par Apple conformément aux conditions d’Apple Media Services. Apple gère les remboursements. Vous pouvez demander un remboursement sur reportaproblem.apple.com ou depuis l’historique d’achats de votre identifiant Apple. Nous ne pouvons effectuer de remboursement directement et n’avons pas accès à vos coordonnées de paiement.',
        link: {
          label: 'Demander un remboursement à Apple',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '6. Modifications de tarifs',
        body: 'Les prix peuvent évoluer. Apple vous informera de tout changement de tarif des abonnements conformément à ses règles. Un nouveau tarif n’affecte pas un achat unique déjà finalisé. Vous pouvez résilier votre abonnement avant l’entrée en vigueur d’un nouveau tarif.',
        link: {
          label: 'Conditions d’Apple Media Services',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '7. Vos contenus vous appartiennent',
        body: 'Tout ce que vous enregistrez dans Find Later — liens, tags, notes, structure de collections — vous appartient. Nous n’y revendiquons aucun droit et n’y accédons jamais. Vous êtes responsable de ce que vous sauvegardez : veuillez ne pas enregistrer ou partager de contenus illégaux, contrefaits ou constituant du harcèlement. Respectez les conditions d’utilisation des sites web que vous sauvegardez.'
      },
      {
        title: '8. Synchronisation et partage',
        body: 'Si la synchronisation iCloud est activée, Apple CloudKit stocke et synchronise les données de l’Application sous votre identifiant Apple. La disponibilité et la restauration dépendent des services d’Apple. Le partage d’une collection envoie une copie indépendante. Les collections ne sont pas collaboratives et les modifications futures ne se synchronisent pas d’une copie à l’autre. Vous êtes responsable du choix de vos destinataires.'
      },
      {
        title: '9. Utilisation acceptable',
        body: 'Il est interdit de : (a) rétroconcevoir, décompiler ou modifier l’Application, sauf autorisation légale ou du CLUF Apple ; (b) contourner les contrôles d’achat ou de licence ; (c) utiliser le partage pour envoyer des spams ou du contenu illicite ; (d) perturber l’Application ou son utilisation par autrui. Nous nous réservons le droit de restreindre l’accès aux fonctionnalités en cas de manquement grave.'
      },
      {
        title: '10. Contenus tiers',
        body: 'Find Later affiche des aperçus et ouvre des liens vers des sites ou services tiers. Nous n’hébergeons pas, ne contrôlons pas et n’approuvons pas ces contenus, et ne saurions être responsables de leur exactitude, légalité ou disponibilité. Votre utilisation de ces sites est soumise à leurs propres conditions.'
      },
      {
        title: '11. Propriété intellectuelle',
        body: 'Le nom Find Later, le design, les icônes, le code source et la marque nous appartiennent ou sont utilisés sous licence. La licence accordée à la section 2 ne vous transfère aucun de ces droits. Vous pouvez citer l’Application ou pointer vers getfindlater.com dans des articles ou partages, sans impliquer notre parrainage sans notre accord.'
      },
      {
        title: '12. Rôle d’Apple',
        body: 'L’Application étant distribuée via l’App Store, Apple impose les mentions suivantes :',
        bullets: [
          'Ces conditions sont conclues entre vous et nous, pas avec Apple. Apple n’est pas responsable de l’Application ni de son contenu.',
          'Nous (et non Apple) sommes seuls responsables de l’Application, de son support et de sa maintenance. Apple n’a aucune obligation à cet égard.',
          'En cas de défaut de garantie de l’Application, vous pouvez en informer Apple, qui vous remboursera le prix d’achat (le cas échéant). Apple n’a aucune autre obligation de garantie de quelque nature que ce soit.',
          'Nous (et non Apple) sommes responsables du traitement des réclamations concernant l’Application (responsabilité du fait des produits, conformité légale, protection des consommateurs, etc.).',
          'Nous (et non Apple) prenons en charge la défense et le règlement de toute plainte pour contrefaçon de propriété intellectuelle de tiers.',
          'Vous déclarez ne pas être situé dans un pays sous embargo américain ou désigné par les États-Unis comme soutenant le terrorisme, ni figurer sur une liste de parties interdites du gouvernement américain.',
          'Apple et ses filiales sont des tiers bénéficiaires de ces conditions et auront le droit de les faire valoir contre vous dès votre acceptation.'
        ]
      },
      {
        title: '13. Exclusions de garanties',
        body: 'Find Later est fourni « en l’état » et « selon disponibilité ». Dans la limite de la loi, nous excluons toute autre garantie quant au fonctionnement ininterrompu ou sans erreur de l’Application, ou à l’exactitude des métadonnées récupérées sur les sites tiers. Rien n’affecte vos droits légaux de consommateur.'
      },
      {
        title: '14. Limite de responsabilité',
        body: 'Nous sommes responsables des dommages qui résultent de manière prévisible de notre manquement à ces conditions ou d’un manque de diligence raisonnable. Nous ne sommes pas responsables des pertes imprévisibles, des pertes commerciales, ou des pannes causées par Apple ou un tiers hors de notre contrôle. Aucune clause n’exclut notre responsabilité là où la loi l’interdit.'
      },
      {
        title: '15. Résiliation',
        body: 'Ces conditions s’appliquent tant que vous utilisez l’Application. Vous pouvez cesser de l’utiliser à tout moment en la supprimant et en annulant votre abonnement auprès d’Apple. Supprimer l’Application ne supprime pas les données conservées dans iCloud ; utilisez les réglages de l’appareil pour gérer cela.'
      },
      {
        title: '16. Modifications',
        body: 'Nous pouvons mettre à jour ces conditions pour des raisons juridiques, de sécurité ou d’évolution du produit. Nous mettrons à jour la date indiquée et fournirons un préavis raisonnable en cas de modification substantielle. Si vous refusez un changement important, vous devez cesser d’utiliser l’Application et résilier votre abonnement.'
      },
      {
        title: '17. Loi applicable et litiges',
        body: 'Ces conditions sont régies par les lois d’Angleterre et du Pays de Galles. Si vous résidez ailleurs en tant que consommateur, vous conservez la protection des dispositions obligatoires de votre pays de résidence. Vous pouvez saisir les tribunaux compétents selon les règles de protection des consommateurs.'
      },
      {
        title: '18. Contact',
        body: 'Des questions sur ces conditions ? Écrivez à support@getfindlater.com. Une adresse postale formelle au Royaume-Uni est disponible sur demande.'
      }
    ]
  }
};
