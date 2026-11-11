/** Legal + support copy — ported verbatim from the previous Soleil site. */
import type { LegalCopy } from '../../types';

export const legal: LegalCopy = {
  privacyPage: {
    metaTitle: 'Politique de confidentialité - Soleil',
    metaDescription: 'Comment Soleil traite vos données. Pas de compte. Pas de suivi. Votre profil de peau, vos sessions et votre historique restent sur vos appareils et dans votre iCloud privé.',
    eyebrow: 'Mentions légales',
    headline: 'Confidentialité.',
    headlineDim: 'Par défaut.',
    lastUpdated: '28 septembre 2026',
    intro: 'Cette politique explique, en langage clair, ce que Soleil fait de vos informations. Le résumé tient en peu de mots : pas grand-chose, et c\u2019est voulu.',
    promisesTitle: 'Nos engagements',
    promises: [
      'Pas de compte. Vous n\u2019avez à vous inscrire à rien.',
      'Pas d\u2019analytique. Nous ne mesurons pas la façon dont vous utilisez l\u2019app.',
      'Pas de publicité. Nous n\u2019affichons pas de publicités, et nous n\u2019en afficherons jamais.',
      'Pas de suivi. Nous ne vous suivons pas entre les apps ou les sites web.',
      'Pas de vente de données. Votre historique solaire vous appartient - ce n\u2019est pas un produit.',
      'Aucun SDK tiers d\u2019analytique ou de publicité dans l\u2019app.'
    ],
    sections: [
      {
        title: 'Qui nous sommes',
        body: 'Soleil (l\u2019« App ») est publiée par un développeur indépendant basé au Royaume-Uni (« nous »). Nous sommes le responsable du traitement des informations personnelles que vous choisissez de nous envoyer, comme un e-mail d\u2019assistance. Pour toute question de confidentialité, contactez support@getsoleilapp.com.'
      },
      {
        title: 'L\u2019essentiel',
        body: 'L\u2019App ne comporte aucun compte Soleil ni serveur de contenu opéré par le développeur. Votre profil de peau, vos sessions solaires, votre journal de crème solaire, vos profils familiaux et votre historique d\u2019exposition sont stockés sur votre appareil à l\u2019aide des frameworks de stockage standard d\u2019Apple et, si vous utilisez iCloud, synchronisés entre vos propres appareils via votre compte iCloud privé. Nous ne les recevons pas et ne pouvons pas les lire. L\u2019App ne contient ni publicité, ni suivi inter-apps, ni SDK d\u2019analytique tiers. Les informations que vous envoyez à l\u2019assistance, les journaux techniques du site web traités par notre hébergeur et les informations qu\u2019Apple fournit aux développeurs sont décrits ci-dessous.'
      },
      {
        title: 'Quelles données l\u2019app traite, et où elles vivent',
        body: 'Sur votre appareil, votre type de peau Fitzpatrick, vos choix de SPF et de vêtements, vos sessions solaires, vos profils familiaux, vos lieux enregistrés, vos photos de progression et votre historique sont stockés via le framework SwiftData d\u2019Apple. Si iCloud est activé pour votre compte Apple, SwiftData synchronise aussi ces données entre vos appareils via la base de données privée de votre propre compte iCloud, où Apple les stocke selon ses propres conditions. Cette base privée appartient à votre compte Apple : Soleil n\u2019exploite pas de base de données distincte contenant ces informations, et ni les outils d\u2019Apple ni l\u2019App ne nous permettent de les lire. Vous pouvez désactiver iCloud pour Soleil dans les Réglages iOS afin de conserver les données sur l\u2019appareil uniquement. Les profils familiaux sont de simples fiches que vous créez - Soleil ne contacte ni n\u2019identifie les personnes qu\u2019ils décrivent.'
      },
      {
        title: 'Localisation et météo',
        body: 'Pour afficher l\u2019indice UV là où vous êtes, l\u2019App demande votre position à iOS et envoie des coordonnées au service WeatherKit d\u2019Apple afin de récupérer les conditions UV et météo locales. Apple traite ces requêtes selon ses propres conditions de confidentialité. Nous ne recevons ni ne stockons votre position, et l\u2019App ne constitue aucun historique de déplacements sur nos systèmes.'
      },
      {
        title: 'Données de santé',
        body: 'Avec votre autorisation, l\u2019App lit le « Temps à la lumière du jour » depuis Apple HealthKit pour alimenter la fonctionnalité Real Sun, et peut consulter d\u2019autres mesures liées au soleil auxquelles vous accordez l\u2019accès. Les données de santé sont lues sur votre appareil, utilisées pour des calculs et un affichage sur l\u2019appareil, et ne sont jamais transmises à nous ni à un quelconque tiers. Vous pouvez retirer l\u2019accès HealthKit à tout moment dans les Réglages iOS, et la fonctionnalité se dégrade en douceur.'
      },
      {
        title: 'Analyse IA du teint de peau (optionnelle)',
        body: 'L\u2019analyse optionnelle du teint de peau peut s\u2019exécuter entièrement sur l\u2019appareil. Si vous choisissez l\u2019option assistée par IA, votre photo est envoyée via une connexion chiffrée, par un proxy sécurisé, à un fournisseur de modèle dans le seul but d\u2019estimer un type de peau Fitzpatrick, et le résultat est renvoyé à votre appareil. Les photos ne servent pas à vous identifier, ne sont pas utilisées pour l\u2019entraînement et ne sont pas conservées par nous. Vous pouvez toujours définir votre type de peau manuellement.'
      },
      {
        title: 'Informations disponibles via Apple',
        body: 'Apple peut fournir aux développeurs des rapports agrégés de ventes, de téléchargements et d\u2019utilisation de l\u2019App Store. Si vous avez activé le partage avec les développeurs d\u2019apps dans iOS, Apple peut aussi fournir des informations de diagnostic et de plantage. Apple contrôle les informations qu\u2019il collecte via l\u2019App Store, StoreKit, WeatherKit, HealthKit et l\u2019analyse des appareils, selon ses propres conditions de confidentialité. Nous n\u2019utilisons pas ces informations pour constituer des profils publicitaires ni pour vous suivre entre les apps ou les sites web.'
      },
      {
        title: 'Achats et abonnements',
        body: 'Soleil Pro est vendu via l\u2019App Store d\u2019Apple au moyen de StoreKit. Apple traite les paiements et met à disposition de l\u2019App les informations d\u2019achat et de droits d\u2019accès afin de déverrouiller les fonctionnalités payantes. Nous ne recevons pas les détails complets de votre carte de paiement. Apple gère la facturation, les remboursements et les taxes selon les Conditions des services multimédias Apple.'
      },
      {
        title: 'Site web et assistance',
        body: 'Ce site est hébergé par GitHub Pages. GitHub peut traiter des adresses IP, des détails de requêtes et des journaux de sécurité lors de la visite du site. Le site héberge ses propres polices et ne charge aucun script tiers, cookie publicitaire ni outil d\u2019analytique. Si vous écrivez à l\u2019assistance, notre fournisseur d\u2019e-mail traite votre adresse, votre message et vos pièces jointes afin que nous puissions les lire et y répondre.'
      },
      {
        title: 'Pourquoi nous utilisons les informations d\u2019assistance et combien de temps nous les conservons',
        body: 'Nous utilisons la correspondance d\u2019assistance pour répondre à votre demande, diagnostiquer des problèmes, prévenir les abus et conserver une trace appropriée de l\u2019aide fournie. Notre base légale au titre du UK GDPR est notre intérêt légitime à assurer l\u2019assistance et l\u2019amélioration de l\u2019App et, le cas échéant, la prise de mesures liées à notre contrat avec vous. Nous ne conservons les messages d\u2019assistance que le temps raisonnablement nécessaire à ces fins, normalement pas plus de 24 mois après la clôture de la conversation, sauf si une durée plus longue est requise pour une raison légale, de sécurité ou comptable.'
      },
      {
        title: 'Prestataires de services et transferts internationaux',
        body: 'Apple, GitHub et notre fournisseur d\u2019e-mail traitent les informations selon leurs propres conditions et peuvent les traiter en dehors du Royaume-Uni. Lorsque le droit britannique de la protection des données s\u2019applique à un transfert que nous effectuons, nous nous appuyons sur une décision d\u2019adéquation applicable ou sur des garanties contractuelles appropriées. Nous n\u2019autorisons pas ces prestataires à utiliser la correspondance d\u2019assistance pour notre publicité.'
      },
      {
        title: 'Sécurité',
        body: 'Nous utilisons les fonctions de sécurité de la plateforme et prenons des mesures organisationnelles raisonnables, adaptées aux informations limitées que nous traitons. La sécurité de l\u2019appareil est assurée principalement par Apple. Aucune méthode de stockage ou de transmission n\u2019est totalement sûre ; nous ne pouvons donc pas promettre une sécurité absolue.'
      },
      {
        title: 'Enfants',
        body: 'Soleil s\u2019adresse à un public général et ne vise pas spécifiquement les enfants. Les profils familiaux d\u2019enfants sont créés et contrôlés par l\u2019adulte propriétaire de l\u2019appareil, et restent sur les appareils de cet adulte et dans son propre iCloud privé. Nous ne demandons ni la création d\u2019un compte ni un âge. Si un enfant écrit à l\u2019assistance, nous n\u2019utilisons le message que pour répondre et gérer la demande. Un parent ou tuteur peut nous contacter au sujet de cette correspondance.'
      },
      {
        title: 'Vos droits',
        body: 'Selon votre lieu de résidence, vous pouvez disposer de droits sur les informations personnelles que nous contrôlons, notamment des droits d\u2019accès, de rectification, d\u2019effacement, de limitation ou d\u2019opposition à leur utilisation, ainsi que le droit de saisir un régulateur. Ces droits sont soumis à des limites légales. Contactez support@getsoleilapp.com pour formuler une demande. Les résidents du Royaume-Uni peuvent saisir l\u2019Information Commissioner\u2019s Office sur ico.org.uk. Le contenu stocké sur vos appareils ou dans votre iCloud privé doit être géré via l\u2019App, votre appareil ou vos réglages iCloud, car nous n\u2019en détenons aucune copie.'
      },
      {
        title: 'Modifications de cette politique',
        body: 'Nous pouvons mettre à jour cette politique lorsque l\u2019App, le site web, les prestataires ou les exigences légales évoluent. Nous mettrons à jour la date ci-dessus et fournirons un avis supplémentaire si un changement affecte de façon substantielle la manière dont nous utilisons les informations personnelles.'
      },
      {
        title: 'Contact',
        body: 'Les questions ou demandes relatives à la confidentialité peuvent être adressées à support@getsoleilapp.com. Une adresse postale pour la correspondance formelle est disponible sur demande.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Assistance - Soleil',
    metaDescription: 'Aide et réponses pour Soleil. Aimez le soleil. Pas les coups de soleil.',
    eyebrow: 'Assistance',
    headline: 'Nous sommes là',
    headlineDim: 'pour vous aider.',
    intro: 'L\u2019essentiel de ce qu\u2019il faut savoir se trouve ci-dessous. Si vous ne trouvez pas de réponse, écrivez-nous : une vraie personne vous répondra.',
    contactTitle: 'Contact',
    contactButton: 'Envoyer un message',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Que me dit Soleil sur l’UV du jour ?',
        a: 'Soleil affiche l’indice UV en direct de votre position, sa catégorie, le pic du jour et la courbe horaire via Apple WeatherKit. Votre type de peau Fitzpatrick et votre SPF le transforment en un point protection au bon moment. Volontairement, aucun compte à rebours n’est présenté comme un temps sûr au soleil - l’ombre, l’eau, l’altitude et la réverbération comptent aussi.'
      },
      {
        q: 'Comment définir mon type de peau ?',
        a: 'Pendant la configuration, vous pouvez répondre à quelques questions, utiliser l\u2019analyse par caméra ou choisir directement votre type Fitzpatrick. L\u2019analyse optionnelle assistée par IA envoie une seule photo via un proxy sécurisé, uniquement pour estimer votre teint - ou vous pouvez tout garder sur l\u2019appareil. Vous pouvez changer votre type de peau à tout moment dans l\u2019onglet Vous.'
      },
      {
        q: 'Comment fonctionnent les profils familiaux ?',
        a: 'Les profils familiaux font partie de Soleil Pro. Ajoutez les personnes dont vous prenez soin dans l\u2019onglet Vous, puis choisissez qui est dehors au lancement du minuteur solaire. Chaque personne garde son propre type de peau et son suivi de crème solaire, et Soleil gère un rappel de réapplication pour chacune. Pro ajoute aussi l\u2019historique familial et le widget de statut Famille. Les données familiales restent sur vos appareils et dans votre iCloud privé - rien n\u2019est partagé avec nous. Votre propre protection solaire reste toujours gratuite.'
      },
      {
        q: 'De quoi ai-je besoin pour les fonctionnalités Apple Watch ?',
        a: 'L\u2019app Watch gratuite fonctionne sous watchOS avec un iPhone jumelé : UV, état de la crème solaire et lumière du jour, avec rappels haptiques de réapplication et complications. Le récit Real Sun s\u2019appuie sur le « Temps à la lumière du jour » d\u2019Apple, qui nécessite une Apple Watch SE (2e génération), Series 6 ou ultérieure, ou n\u2019importe quelle Ultra.'
      },
      {
        q: 'Réappliquer de la crème solaire remet-il mon exposition à zéro ?',
        a: 'Non - et c\u2019est voulu. Réappliquer renouvelle votre protection pour la suite, mais les UV que votre peau a déjà reçus aujourd\u2019hui restent comptés. Soleil suit les deux séparément, pour que votre total quotidien reste honnête.'
      },
      {
        q: 'Que contient Soleil Pro, et combien coûte-t-il ?',
        a: 'La version gratuite couvre votre propre soleil, chaque jour : UV en direct et conditions du jour, le minuteur solaire et les rappels, l\u2019Activité en direct, l\u2019app Apple Watch, les widgets, votre profil de peau (scan de peau par IA compris) et chaque session enregistrée. Pro ajoute les sessions Daily Glow guidées et l\u2019éditeur de routine, les profils familiaux et les sorties avec un rappel pour chaque personne, l\u2019historique familial et le widget Famille, Real Sun (temps à la lumière du jour), les tendances mensuelles, le calendrier en carte de chaleur, le Parcours solaire et les nouveaux scans de peau par IA. C\u2019est 2,49 $/semaine, 29,99 $/an avec 3 jours d\u2019essai gratuit, ou 79,99 $ en une fois. Les prix peuvent varier selon le pays - Apple affiche le vôtre avant l\u2019achat.'
      },
      {
        q: 'Comment annuler un abonnement Pro ?',
        a: 'Les abonnements sont gérés par Apple. Ouvrez les Réglages iOS, touchez votre nom, puis Abonnements, trouvez Soleil et touchez Annuler. Vous conservez l\u2019accès Pro jusqu\u2019à la fin de la période de facturation en cours.'
      },
      {
        q: 'Puis-je obtenir un remboursement ?',
        a: 'Les remboursements des achats sur l\u2019App Store sont gérés par Apple. Rendez-vous sur reportaproblem.apple.com, connectez-vous, trouvez l\u2019achat Soleil et demandez un remboursement.'
      },
      {
        q: 'Soleil constitue-t-il un avis médical ?',
        a: 'Non. Soleil offre des conseils bien-être fondés sur la science UV publiée, et penche toujours du côté de la prudence - mais il ne voit pas votre peau. Si vous avez la peau sensible, des antécédents de cancer de la peau ou une pathologie diagnostiquée, suivez d\u2019abord le protocole de votre dermatologue.'
      },
      {
        q: 'J\u2019ai trouvé un bug. Que faire ?',
        a: 'Écrivez à support@getsoleilapp.com en décrivant brièvement ce que vous faisiez, ce que vous attendiez et ce qui s\u2019est réellement passé. Une capture d\u2019écran aide beaucoup.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Conditions d\u2019utilisation - Soleil',
    metaDescription: 'Les conditions, en langage clair, qui s\u2019appliquent lorsque vous téléchargez ou utilisez l\u2019app iOS Soleil.',
    eyebrow: 'Mentions légales',
    headline: 'Conditions',
    headlineDim: 'd\u2019utilisation.',
    lastUpdated: '28 septembre 2026',
    intro: 'Ces conditions s\u2019appliquent lorsque vous téléchargez ou utilisez l\u2019app iOS Soleil (« Soleil », « nous »). En utilisant Soleil, vous les acceptez, ainsi que le CLUF standard d\u2019Apple. Elles sont volontairement rédigées en langage clair.',
    tldrTitle: 'En bref',
    tldr: [
      'Soleil vous est concédé sous licence pour un usage personnel sur vos appareils Apple.',
      'Les fonctionnalités gratuites et payantes, les prix et la disponibilité sont indiqués dans l\u2019App avant l\u2019achat.',
      'Apple encaisse le paiement, gère les remboursements et administre votre abonnement.',
      'Soleil offre des conseils bien-être, pas des conseils médicaux - vos décisions face au soleil restent les vôtres.',
      'Ces conditions sont régies par le droit de l\u2019Angleterre et du pays de Galles.'
    ],
    sections: [
      {
        title: '1. À propos de ces conditions',
        body: 'Ces conditions s\u2019appliquent lorsque vous téléchargez ou utilisez l\u2019app iOS et watchOS Soleil (« Soleil », l\u2019« App »). L\u2019App est publiée par un développeur indépendant basé au Royaume-Uni (« nous »). En utilisant Soleil, vous acceptez ces conditions ainsi que le Contrat de licence d\u2019application sous licence d\u2019Apple (le « CLUF Apple »). Elles sont volontairement rédigées en langage clair.'
      },
      {
        title: '2. La licence',
        body: 'Soleil vous est concédé sous licence (et non vendu) pour un usage personnel et non commercial sur tout appareil Apple que vous possédez ou contrôlez, selon les conditions du CLUF Apple. Lorsque ces conditions complètent le CLUF Apple - par exemple concernant notre propriété intellectuelle, les remboursements ou le droit régissant les litiges entre nous - elles s\u2019appliquent en parallèle de celui-ci.',
        link: {
          label: 'Lire le CLUF standard d\u2019Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Pas un avis médical',
        body: 'Soleil fournit des conseils bien-être généraux sur l\u2019exposition au soleil, fondés sur la science UV publiée, des données météo et les informations que vous saisissez. Ce n\u2019est pas un dispositif médical ; il ne diagnostique, ne traite ni ne prévient aucune pathologie, et ne peut pas tenir compte de chaque facteur individuel. Les estimations telles que les relevés UV, les points protection et le temps à la lumière du jour sont des approximations. Faites toujours preuve de discernement et suivez l\u2019avis d\u2019un clinicien qualifié - surtout si vous avez la peau sensible, des antécédents de cancer de la peau, une photosensibilité, ou si vous prenez un médicament qui affecte la tolérance au soleil. Vous restez responsable de vos décisions face au soleil, et de celles de votre famille.'
      },
      {
        title: '4. Gratuit et Pro',
        body: 'Soleil peut proposer des fonctionnalités gratuites et payantes. Les limites et fonctionnalités actuelles sont indiquées dans l\u2019App et sur la fiche App Store. Les fonctionnalités payantes peuvent inclure des sessions guidées, le récit de lumière « Real Sun » et un historique étendu. Les fonctionnalités peuvent varier selon l\u2019appareil, la version du système d\u2019exploitation et le territoire ; certaines nécessitent une Apple Watch et/ou des autorisations comme la localisation ou l\u2019accès HealthKit.'
      },
      {
        title: '5. Abonnements et achat unique',
        body: 'Pro peut être proposé sous forme d\u2019abonnement à renouvellement automatique et/ou d\u2019achat unique. Le prix, la période de facturation, les fonctionnalités incluses et tout essai éventuel sont affichés par Apple avant la confirmation de l\u2019achat et peuvent varier selon le pays ou la devise. Les abonnements se renouvellent automatiquement, sauf annulation via votre compte Apple au moins 24 heures avant la fin de la période en cours. Apple débite votre compte et gère l\u2019annulation. Un achat unique n\u2019est pas récurrent et s\u2019applique à la version et aux fonctionnalités décrites au moment de l\u2019achat ; il ne constitue pas une promesse que l\u2019App ou chaque service en ligne restera disponible pour toujours.'
      },
      {
        title: '6. Remboursements',
        body: 'Tous les achats de Soleil sont traités par Apple selon les Conditions des services multimédias Apple. C\u2019est Apple, et non nous, qui gère les remboursements. Vous pouvez demander un remboursement via reportaproblem.apple.com ou l\u2019historique d\u2019achats de votre identifiant Apple. Nous n\u2019avons aucun pouvoir d\u2019émettre des remboursements directement et nous ne stockons pas vos informations de paiement.',
        link: {
          label: 'Demander un remboursement Apple',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '7. Changements de prix',
        body: 'Les prix peuvent changer. Apple fournira tout avis ou processus de consentement requis pour les changements de prix d\u2019abonnement. Un nouveau prix n\u2019affecte pas un achat unique déjà effectué. Vous pouvez annuler un abonnement avant qu\u2019un changement ne prenne effet, sous réserve des conditions applicables d\u2019Apple.',
        link: {
          label: 'Conditions des services multimédias Apple',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '8. Vos données vous appartiennent',
        body: 'Votre profil de peau, vos sessions solaires, votre journal de crème solaire, vos profils familiaux et votre historique vous appartiennent. Ils sont stockés sur votre appareil et, si vous utilisez iCloud, dans votre propre compte iCloud privé. Nous ne revendiquons aucune licence sur eux et nous n\u2019y accédons jamais. Vous êtes responsable de l\u2019exactitude des informations que vous saisissez - les conseils de l\u2019App ne valent que par le type de peau, le SPF et les détails vestimentaires que vous lui indiquez.'
      },
      {
        title: '9. Services tiers',
        body: 'L\u2019App s\u2019appuie sur des services Apple, notamment WeatherKit (données UV et météo), HealthKit (Temps à la lumière du jour, avec votre autorisation), StoreKit et les notifications. La disponibilité et l\u2019exactitude de ces services dépendent d\u2019Apple, de votre appareil, de vos réglages et de votre connexion réseau. Les données météo et UV sont des estimations fournies par des tiers et peuvent occasionnellement être indisponibles ou inexactes ; les conseils de l\u2019App doivent être considérés en conséquence.'
      },
      {
        title: '10. Utilisation acceptable',
        body: 'Merci de ne pas (a) pratiquer l\u2019ingénierie inverse, décompiler ou modifier Soleil, sauf lorsque la loi ou le CLUF Apple l\u2019autorise expressément ; (b) contourner les vérifications d\u2019achat ou de droits d\u2019accès ; ou (c) perturber l\u2019App ou son utilisation par autrui. Lorsque cela est techniquement et légalement possible, nous pouvons restreindre l\u2019accès aux fonctionnalités concernées en cas de manquement grave.'
      },
      {
        title: '11. Notre propriété intellectuelle',
        body: 'Le nom Soleil, le design, les icônes, le code source et la marque nous appartiennent ou sont utilisés sous licence. La licence de la section 2 ne vous transfère pas ces droits. Vous pouvez mentionner l\u2019App ou créer un lien vers getsoleilapp.com dans des avis, articles ou publications sur les réseaux sociaux, mais vous ne devez pas suggérer notre approbation ou notre parrainage sans autorisation.'
      },
      {
        title: '12. Le rôle d\u2019Apple (logiciel compatible Apple)',
        body: 'Soleil est distribué via l\u2019App Store d\u2019Apple, ce qui ajoute les conditions suivantes exigées par Apple :',
        bullets: [
          'Ces conditions sont conclues entre vous et nous, et non avec Apple. Apple n\u2019y est pas partie et n\u2019assume aucune responsabilité concernant l\u2019App ou son contenu.',
          'Nous (et non Apple) sommes seuls responsables de l\u2019App, de son contenu et de toute maintenance ou assistance. Apple n\u2019a aucune obligation de fournir une quelconque maintenance ou assistance concernant l\u2019App.',
          'En cas de non-conformité de l\u2019App à une garantie applicable, vous pouvez en informer Apple, et Apple vous remboursera le prix d\u2019achat de l\u2019App (le cas échéant). Dans toute la mesure permise par la loi, Apple n\u2019a aucune autre obligation de garantie concernant l\u2019App.',
          'Nous (et non Apple) sommes responsables du traitement de toute réclamation relative à l\u2019App ou à votre possession ou utilisation de celle-ci, y compris les réclamations en responsabilité du fait des produits, les réclamations selon lesquelles l\u2019App ne serait pas conforme à une exigence légale ou réglementaire applicable, et les réclamations relevant du droit de la consommation ou de la protection de la vie privée.',
          'Nous (et non Apple) sommes responsables de l\u2019instruction, de la défense, du règlement et de l\u2019extinction de toute réclamation de tiers pour atteinte à la propriété intellectuelle relative à l\u2019App.',
          'Vous déclarez et garantissez (a) que vous ne vous trouvez pas dans un pays soumis à un embargo du gouvernement des États-Unis ou désigné par celui-ci comme pays « soutenant le terrorisme », et (b) que vous ne figurez sur aucune liste du gouvernement des États-Unis de parties interdites ou soumises à des restrictions.',
          'Apple et ses filiales sont des tiers bénéficiaires de ces conditions et, dès votre acceptation, auront le droit (et seront réputés avoir accepté le droit) de les faire respecter à votre encontre en tant que tiers bénéficiaires.'
        ]
      },
      {
        title: '13. Exclusions de garantie',
        body: 'Soleil est fourni « tel quel » et « selon disponibilité ». Dans toute la mesure permise par la loi, nous excluons toutes les garanties, conditions et déclarations non expressément énoncées ici, y compris toute garantie que l\u2019App fonctionnera sans interruption ni erreur, ou que les estimations d\u2019UV, de météo ou de lumière du jour seront exactes. Rien dans ces conditions ne supprime ni ne limite les droits auxquels il ne peut être dérogé dont vous disposez au titre du UK Consumer Rights Act 2015 ou de lois similaires de protection des consommateurs.'
      },
      {
        title: '14. Limitation de responsabilité',
        body: 'Nous sommes responsables des pertes ou dommages qui résultent de façon prévisible de notre manquement à ces conditions ou d\u2019un défaut de diligence et de compétence raisonnables. Nous ne sommes pas responsables des pertes imprévisibles, des pertes commerciales subies par un consommateur, des coups de soleil ou conséquences pour la santé résultant d\u2019une confiance accordée aux estimations contrairement à la section 3, ni des défaillances causées par Apple, un opérateur réseau ou un service tiers échappant à notre contrôle raisonnable. Rien dans ces conditions n\u2019exclut ni ne limite une responsabilité lorsqu\u2019une telle exclusion serait illégale, y compris la responsabilité en cas de décès ou de blessure corporelle causés par une négligence, en cas de fraude, ou concernant vos droits légaux de consommateur.'
      },
      {
        title: '15. Résiliation',
        body: 'Ces conditions s\u2019appliquent tant que vous utilisez l\u2019App. Vous pouvez cesser de l\u2019utiliser à tout moment en la supprimant et en gérant tout abonnement via Apple. Nous pouvons cesser de fournir ou de mettre à jour l\u2019App, mais cela ne supprime pas les droits que vous détenez déjà au titre du droit de la consommation.'
      },
      {
        title: '16. Modifications',
        body: 'Nous pouvons mettre à jour ces conditions pour des raisons légales, de sécurité ou liées au produit. Nous mettrons à jour la date ci-dessus et donnerons un préavis raisonnable des changements substantiels lorsque cela est possible. Les modifications ne supprimeront pas rétroactivement des droits relatifs à un achat déjà effectué. Si vous n\u2019acceptez pas un changement substantiel, vous pouvez cesser d\u2019utiliser l\u2019App et annuler tout abonnement via Apple.'
      },
      {
        title: '17. Droit applicable et juridiction',
        body: 'Ces conditions sont régies par le droit de l\u2019Angleterre et du pays de Galles. Si vous êtes un consommateur résidant ailleurs, vous conservez également les protections impératives prévues par le droit de votre pays de résidence. Vous pouvez engager des procédures devant les tribunaux qui vous sont ouverts en vertu du droit de la consommation applicable.'
      },
      {
        title: '18. Contact',
        body: 'Des questions sur ces conditions ? Écrivez à support@getsoleilapp.com. Une adresse postale au Royaume-Uni est disponible sur demande pour la correspondance formelle.'
      }
    ]
  }
};
