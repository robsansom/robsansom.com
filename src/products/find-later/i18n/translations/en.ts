import type { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  meta: {
    title: 'Find Later - Save anything. Find everything.',
    description: 'A beautifully simple place for the articles, videos, recipes and ideas you want to find again. For iPhone and iPad.'
  },
  a11y: {
    selectLanguage: 'Select language',
    homeLink: 'Find Later home',
    appStoreLinkLabel: 'Download Find Later on the App Store',
    appStoreBadgeAlt: 'Download on the App Store',
    cardScreenAlt: 'A saved card in Find Later'
  },
  cta: {
    comingSoon: 'Coming soon to the App Store',
    comingSoonShort: 'Coming soon'
  },
  mockSaveCards: {
    restaurant: {
      title: 'Luca: Clerkenwell Pasta for Friday Night',
      tag1: 'Restaurants',
      tag2: 'London',
      aria: 'A saved restaurant card in the Find Later library',
      coverAlt: 'Sunset over a lakeside restaurant terrace, the cover of a saved restaurant card'
    },
    livingRoom: {
      title: 'Living Room Lighting Ideas That Feel Warm',
      tag1: 'Home',
      tag2: 'Decor',
      aria: 'A saved interior-design card in the Find Later library',
      coverAlt: 'A bright living room with armchairs and an arched floor lamp, the cover of a saved interior-design card'
    }
  },
  mockCollectionCards: {
    travel: { title: 'Places to Visit in Italy', meta: '14 saves • Find Later' },
    home: { title: 'Living Room Inspiration', meta: '9 saves • Find Later' },
    recipes: { title: 'Favourite Restaurants', meta: '23 saves • Find Later' }
  },
  bentoMocks: {
    editMenu: {
      cover: 'Edit Cover',
      tags: 'Edit Tags',
      title: 'Edit Title',
      description: 'Edit Description'
    },
    export: {
      title: 'Import & Export',
      importTitle: 'Import saves',
      importBody: 'JSON or CSV. Adds new saves and skips any you already have.',
      exportTitle: 'Export library',
      exportBody: 'Choose CSV, JSON, or Markdown.'
    }
  },
  header: {
    features: 'Features',
    support: 'Support',
    download: 'Download'
  },
  footer: {
    taglineEyebrow: 'A small, considered app',
    taglineHeadline: 'Save it.',
    taglineHeadlineDim: 'Close the tab.',
    copyright: 'Made with care in the UK.',
    appleAffiliation: 'Find Later is an independent app, not affiliated with Apple Inc.',
    appleTrademarks: 'Apple, the Apple logo, iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    features: 'Features',
    download: 'Download',
    support: 'Support',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms'
  },
  hero: {
    eyebrow: 'Find Later',
    title: 'Save anything.',
    titleAccent: 'Find everything.',
    body: 'A beautifully simple place for the articles, videos, recipes and ideas you want to find again.',
    badgeLabel: 'For iPhone & iPad'
  },
  showcaseQuickSave: {
    eyebrow: 'Quick save',
    headline: 'Save it now,',
    headlineAccent: 'find it later.',
    body: 'One tap from any app saves it with its title, cover and source - search, filter and find your way back, fast.',
    imageAlt: 'The Find Later iPhone app showing the dark-mode library of saved articles and ideas, with photos, titles and tags.'
  },
  showcaseLibrary: {
    eyebrow: 'Your library',
    headline: 'Every save.',
    headlineAccent: 'Uniquely yours.',
    body: 'Everything you save lands as a full card with its cover image, source and notes. Edit the title, swap the cover, retag it, or regenerate it with Apple Intelligence - every part of the card is yours to shape.',
    imageAlt: 'The Find Later iPhone app showing detail cards for different saved items, cycling through recipes, travel planning, walks, design ideas, and restaurants.'
  },
  showcaseIpad: {
    eyebrow: 'iPad',
    headline: 'Your library,',
    headlineAccent: 'expanded.',
    body: 'Designed for iPad from the start. See more of your library at once, with collections, previews and your saves arranged for the wider screen.',
    imageAltDark: 'The Find Later iPad app in dark mode, showing a Collections home with Quick Jump shortcuts, Recently Added cards and Favorites.',
    imageAltLight: 'The Find Later iPad app in light mode, showing a Collections home with Quick Jump shortcuts, Recently Added cards and Favorites.'
  },
  showcaseCollections: {
    eyebrow: 'Collections',
    headline: 'Share',
    headlineAccent: 'collections.',
    body: 'Group your saves into trips, projects, wishlists or moodboards. Share a snapshot of a whole collection so someone else can add their own copy to Find Later.',
    imageAlt: 'Three collection share cards fanning out, showing how saved items can be grouped and sent to someone else.'
  },
  splitHeadlinePrivacy: {
    eyebrow: 'Privacy',
    first: 'Private,',
    second: 'by default.',
    body: 'No account. No tracking. No third-party SDKs. What happens in Find Later stays on your iPhone, your iPad, and your own iCloud.'
  },
  bento: {
    eyebrow: 'Features',
    headline: 'Simple,',
    headlineAccent: 'on purpose.',
    body: 'Quiet on the outside, deeply capable underneath. The essentials are designed to feel obvious, fast and out of your way.',
    shareExtension: {
      eyebrow: 'Share Extension',
      title: 'Save from anywhere',
      body: 'Save articles, videos, posts, PDFs and useful attachments from the apps you already use. One tap, straight to your library.',
      alt: 'iOS share sheet with AirDrop contacts and the Find Later save action'
    },
    collections: {
      eyebrow: 'Collections',
      title: 'Collect & share what matters',
      body: 'Create collections for trips, projects, wishlists and ideas. Share a snapshot that someone else can add to their own library.',
      alt: 'Two collection cards: Living Room Inspiration and Favourite Restaurants'
    },
    find: {
      eyebrow: 'Find',
      title: 'Find the thing fast',
      body: 'Search titles, notes, tags and sources without digging. Find it even when you can’t remember what it was called.',
      alt: ''
    },
    makeItYours: {
      eyebrow: 'Make It Yours',
      title: 'Make every save yours',
      body: 'Rewrite, tag, swap the cover or regenerate it with Apple Intelligence.',
      alt: 'Edit menu with Edit Cover, Edit Tags, Edit Title and Edit Description actions'
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Private by default',
      body: 'No account. No tracking. Your iCloud, your library.',
      alt: 'Red padlock'
    },
    export: {
      eyebrow: 'Export',
      title: 'Export anytime. Portable, flexible and yours.',
      body: 'Export your full library - saves, notes and collections - as Markdown (Obsidian, LLM), CSV (Excel) or JSON.',
      alt: 'Import and Export settings card with Import bookmarks and Export library options'
    }
  },
  integration: {
    eyebrow: 'Woven into iOS',
    headline: 'Siri &',
    headlineAccent: 'Search',
    body: 'Saves appear in iOS Search the moment you make them. Ask Siri to save, find, or open things. Build automations in Shortcuts - save, search, open, favourite, file, and export your library without opening the app.',
    spotlight: {
      eyebrow: 'Spotlight',
      title: 'In iOS Search',
      body: 'Your saves show up in iOS Search - find them without opening the app.'
    },
    siri: {
      eyebrow: 'Siri',
      title: 'Just ask',
      body: 'Ask Siri to save a link in Find Later, search Find Later, or tell you what you saved.'
    },
    shortcuts: {
      eyebrow: 'Shortcuts',
      title: 'Seven actions for your automations',
      actions: [
        'Save Link',
        'Search Library',
        'Recent Saves',
        'Open a Save',
        'Export a Collection',
        'Favourite a Save',
        'Add to a Collection'
      ]
    }
  },
  privacyPage: {
    metaTitle: 'Privacy Policy - Find Later',
    metaDescription: 'How Find Later handles your data. No account. No tracking. Your data lives on your device and syncs through your own iCloud.',
    eyebrow: 'Legal',
    headline: 'Privacy.',
    headlineDim: 'By default.',
    lastUpdated: '10 June 2026',
    intro: 'This policy explains, in plain language, what Find Later does with your information. The headline is short: it doesn’t do much, on purpose.',
    promisesTitle: 'Our promises',
    promises: [
      'No account. There is nothing for you to sign up to.',
      'No analytics. We do not measure how you use the app.',
      'No advertising. We do not show ads, and we never will.',
      'No tracking. We do not track you across apps or websites.',
      'No selling data. Your library is yours - not a product.',
      'No third-party analytics or advertising SDKs in the app.'
    ],
    sections: [
      {
        title: 'Who we are',
        body: 'Find Later (the "App") is published by an independent developer based in the United Kingdom ("we", "us"). We are the controller of personal information you choose to send us, such as a support email. For privacy questions, contact support@getfindlater.com.'
      },
      {
        title: 'The short version',
        body: 'The App has no Find Later account or developer-operated content server. We do not receive your saved links, notes, tags or Collections. That library is stored on your device and, if enabled, in Apple’s iCloud. The App has no advertising, cross-app tracking or third-party analytics SDK. Information you send to support, technical website logs handled by our hosting provider, and information Apple provides to developers are described below.'
      },
      {
        title: 'What data the app handles, and where it lives',
        body: 'On your device, URLs, titles, thumbnails, notes, tags and read state are stored using Apple’s standard storage frameworks. If iCloud sync is available and enabled, Apple’s CloudKit stores and synchronises that content under your Apple ID. Find Later does not operate a separate database containing your library or provide us with an interface for reading it. If you share a Collection, Apple processes a snapshot so the recipient can add an independent copy to their own library. The copies are not collaborative and later changes do not sync between them.'
      },
      {
        title: 'Information available through Apple',
        body: 'Apple may provide developers with aggregated App Store sales, download and usage reports. If you have enabled sharing with app developers in iOS, Apple may also provide diagnostic and crash information. Apple controls the information it collects through the App Store, StoreKit, iCloud and device analytics under Apple’s own privacy terms. We do not use this information to build advertising profiles or track you across apps or websites.'
      },
      {
        title: 'No tracking, no advertising',
        body: 'Find Later does not track you across apps and websites, request App Tracking Transparency permission, or show advertising. We do not sell personal information. We disclose information only to service providers where needed to operate the website and support channel, when you ask us to, or where disclosure is required by law.'
      },
      {
        title: 'Fetching the pages you save',
        body: 'When the App fetches information about a link, your device may contact that website or another service shown to you in the App. The destination can receive ordinary network information such as your IP address and request details under its own privacy terms. Opening a link may use Apple’s in-app browser technology. Find Later does not use these requests to create a browsing history on our systems.'
      },
      {
        title: 'Purchases and subscriptions',
        body: 'Find Later Plus is sold through Apple’s App Store using StoreKit. Apple processes payments and makes purchase and entitlement information available to the App so it can unlock paid features. We do not receive your full payment-card details. Apple handles billing, refunds and taxes under the Apple Media Services Terms.'
      },
      {
        title: 'Website and support',
        body: 'This website is hosted by GitHub Pages. GitHub may process IP addresses, request details and security logs when the site is visited. The site loads a font from Google Fonts, so Google may receive ordinary network information when your browser requests that font. The website does not use advertising cookies or analytics. If you email support, our email provider processes your address, message and attachments so we can read and answer it.'
      },
      {
        title: 'Why we use support information and how long we keep it',
        body: 'We use support correspondence to answer your request, diagnose problems, prevent abuse and keep an appropriate record of the assistance provided. Our lawful basis under UK GDPR is our legitimate interest in supporting and improving the App and, where relevant, taking steps connected with our contract with you. We keep support messages only for as long as reasonably needed for those purposes, normally no longer than 24 months after the conversation closes unless a longer period is required for a legal, security or accounting reason.'
      },
      {
        title: 'Service providers and international transfers',
        body: 'Apple, GitHub, Google and our email provider process information under their own terms and may process it outside the United Kingdom. Where UK data-protection law applies to a transfer we make, we rely on an applicable adequacy decision or appropriate contractual safeguards. We do not permit these providers to use support correspondence for our advertising.'
      },
      {
        title: 'Security',
        body: 'We use platform security features and take reasonable organisational measures appropriate to the limited information we handle. Device and iCloud security are provided primarily by Apple. No storage or transmission method is completely secure, so we cannot promise absolute security.'
      },
      {
        title: 'Children',
        body: 'Find Later is intended for a general audience and is not directed specifically at children. We do not ask users to create an account or provide an age. If a child emails support, we use the message only to respond and manage the request. A parent or guardian can contact us about that correspondence.'
      },
      {
        title: 'Your rights',
        body: 'Depending on where you live, you may have rights over personal information we control, including rights to access, correct, erase, restrict or object to its use, and to complain to a regulator. These rights are subject to legal limits. Contact support@getfindlater.com to make a request. UK residents may complain to the Information Commissioner’s Office at ico.org.uk. Content stored only on your device or in your iCloud account should be managed through the App, your device or Apple because we do not hold a copy.'
      },
      {
        title: 'Changes to this policy',
        body: 'We may update this policy when the App, website, providers or legal requirements change. We will update the date above and provide additional notice where a change materially affects how we use personal information.'
      },
      {
        title: 'Contact',
        body: 'Questions or requests about privacy can be sent to support@getfindlater.com. A postal address for formal correspondence is available on request.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Support - Find Later',
    metaDescription: 'Help and answers for Find Later. Save anything. Find everything.',
    eyebrow: 'Support',
    headline: 'We’re here',
    headlineDim: 'to help.',
    intro: 'Most of what you need to know is below. If you can’t find an answer, email us and a real person will get back to you.',
    contactTitle: 'Contact',
    contactButton: 'Send a message',
    faqTitle: 'Frequently asked',
    faqs: [
      {
        q: 'How do I save something?',
        a: 'Open it in Safari or any other app, tap the iOS Share button, then choose Find Later. Add tags, a collection or a note in the sheet, then Save. It lands in your library instantly.'
      },
      {
        q: 'How do I create a collection?',
        a: 'On the Collections tab, tap the pencil at the top right. Give the collection a name, pick an icon and a colour, then add saves to it from anywhere in the app.'
      },
      {
        q: 'How does sharing a collection work?',
        a: 'Open a collection, tap the menu, then Share Collection. This sends a snapshot that the other person can add to their own Find Later library. Their copy is independent: changes, additions and removals made by either person do not update the other copy, and collections are not collaborative.'
      },
      {
        q: 'Does Find Later sync between my iPhone and iPad?',
        a: 'Yes. If you’re signed in to iCloud, Find Later syncs your library between your devices via CloudKit automatically. There’s no setting to switch on - it just works.'
      },
      {
        q: 'I’ve hit the 100-save limit. What now?',
        a: 'The free tier covers up to 100 saves. To go beyond that, upgrade to Find Later Plus from Settings - either £12.99 per year or £34.99 once for lifetime access. Plus also unlocks unlimited collections.'
      },
      {
        q: 'How do I cancel a Plus subscription?',
        a: 'Subscriptions are managed by Apple. Open iOS Settings, tap your name, then Subscriptions, find Find Later and tap Cancel. You’ll keep Plus access until the end of the current billing period.'
      },
      {
        q: 'Can I get a refund?',
        a: 'Refunds for App Store purchases are handled by Apple. Visit reportaproblem.apple.com, sign in, find the Find Later purchase and request a refund.'
      },
      {
        q: 'I’ve found a bug. What do I do?',
        a: 'Email support@getfindlater.com with a short description of what you were doing, what you expected and what actually happened. A screenshot helps a lot.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Terms of Use - Find Later',
    metaDescription: 'The plain-English terms that apply when you download or use the Find Later iOS app.',
    eyebrow: 'Legal',
    headline: 'Terms',
    headlineDim: 'of Use.',
    lastUpdated: '10 June 2026',
    intro: 'These terms apply when you download or use the Find Later iOS app (“Find Later”, “we”, “us”). By using Find Later you agree to them, together with Apple’s Standard EULA. They are written in plain English on purpose.',
    tldrTitle: 'In short',
    tldr: [
      'Find Later is licensed to you for personal use on your Apple devices.',
      'Free and paid features, prices and availability are shown in the App before purchase.',
      'Apple takes payment, handles refunds and manages your subscription.',
      'Your saved content is yours - we don’t access it, claim it or train AI on it.',
      'These terms are governed by the laws of England & Wales.'
    ],
    sections: [
      {
        title: '1. About these terms',
        body: 'These terms apply when you download or use the Find Later iOS app ("Find Later", the "App"). The App is published by an independent UK-based developer ("we", "us"). By using Find Later, you agree to these terms together with Apple’s Licensed Application End User Licence Agreement (the "Apple EULA"). They are written in plain English on purpose.'
      },
      {
        title: '2. The licence',
        body: 'Find Later is licensed (not sold) to you for personal, non-commercial use on any Apple device you own or control, on the terms of the Apple EULA. Where these terms add to the Apple EULA - for example on our intellectual property, refunds, or the law that governs disputes between us - these terms apply alongside it.',
        link: {
          label: 'Read the Apple Standard EULA',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Free and Plus',
        body: 'Find Later may offer free and paid features. The current limits and features are shown in the App and App Store listing. Paid features may include higher or unlimited limits and Collection sharing. Features can vary by device, operating-system version and territory.'
      },
      {
        title: '4. Subscriptions and one-time purchase',
        body: 'Plus may be offered as an auto-renewing subscription and/or a one-time purchase. The price, billing period, included features and any trial are displayed by Apple before you confirm a purchase and may vary by country or currency. Subscriptions renew automatically unless cancelled through your Apple account at least 24 hours before the end of the current period. Apple charges your account and manages cancellation. A one-time purchase does not recur and applies to the version and features described at the time of purchase; it is not a promise that the App or every online service will remain available forever.'
      },
      {
        title: '5. Refunds',
        body: 'All purchases of Find Later are processed by Apple under the Apple Media Services Terms. Apple, not us, handles refunds. You can request a refund via reportaproblem.apple.com or your Apple ID purchase history. We have no power to issue refunds directly and we do not store your payment details.',
        link: {
          label: 'Request an Apple refund',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '6. Price changes',
        body: 'Prices may change. Apple will provide any notice or consent process required for subscription price changes. A new price does not affect a completed one-time purchase. You may cancel a subscription before a change takes effect, subject to Apple’s applicable terms.',
        link: {
          label: 'Apple Media Services Terms',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '7. Your content is yours',
        body: 'Everything you save in Find Later - links, tags, notes, the structure of your Collections - belongs to you. We claim no licence over it and we never access it. You are responsible for what you choose to save: please don’t use Find Later to save or share material that is illegal, that infringes someone else’s rights, or that is intended to harass other people. Respect the terms of the websites whose content you save.'
      },
      {
        title: '8. Sync and sharing',
        body: 'If iCloud sync is available and enabled, Apple’s CloudKit stores and synchronises App data under your Apple ID. Availability and recovery depend on your device, Apple ID, network connection and Apple’s services. Sharing a Collection sends a snapshot that the recipient can add to their own library as an independent copy. Collections are not collaborative, and later changes do not sync between copies. You are responsible for choosing recipients and for the content you share.'
      },
      {
        title: '9. Acceptable use',
        body: 'Please don’t (a) reverse engineer, decompile or modify Find Later except where the law or Apple EULA expressly permits it; (b) bypass purchase or entitlement checks; (c) use sharing to spam, harass or distribute unlawful content; or (d) interfere with the App or another person’s use of it. Where technically and legally possible, we may restrict access to affected features for a serious breach.'
      },
      {
        title: '10. Third-party content',
        body: 'Find Later displays previews of, and opens, links from third-party websites and services. We don’t host, modify, screen or endorse that content, and we aren’t responsible for its accuracy, legality, availability or terms. Your use of any linked site is subject to that site’s own rules.'
      },
      {
        title: '11. Our intellectual property',
        body: 'The Find Later name, design, icons, source code and brand are owned by us or used under licence. The licence in section 2 does not transfer those rights to you. You may mention the App or link to getfindlater.com in reviews, articles or social posts, but must not imply our endorsement or sponsorship without permission.'
      },
      {
        title: '12. Apple’s role (Apple-Enabled Software)',
        body: 'Find Later is distributed through Apple’s App Store, which adds the following terms required by Apple:',
        bullets: [
          'These terms are entered into between you and us, not Apple. Apple is not a party to them and has no responsibility for the App or its content.',
          'We (not Apple) are solely responsible for the App, its content and any maintenance or support. Apple has no obligation to provide any maintenance or support in relation to the App.',
          'In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App to you (if any). To the maximum extent permitted by law, Apple has no other warranty obligation whatsoever in relation to the App.',
          'We (not Apple) are responsible for addressing any claims relating to the App or your possession or use of it, including product-liability claims, claims that the App fails to conform to any applicable legal or regulatory requirement, and claims arising under consumer-protection or privacy law.',
          'We (not Apple) are responsible for the investigation, defence, settlement and discharge of any third-party intellectual-property infringement claims relating to the App.',
          'You represent and warrant that (a) you are not located in a country subject to a US Government embargo, or that has been designated by the US Government as a "terrorist supporting" country, and (b) you are not listed on any US Government list of prohibited or restricted parties.',
          'Apple and Apple’s subsidiaries are third-party beneficiaries of these terms and, upon your acceptance, will have the right (and will be deemed to have accepted the right) to enforce them against you as a third-party beneficiary.'
        ]
      },
      {
        title: '13. Disclaimers',
        body: 'Find Later is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, conditions and representations not expressly stated here, including any warranty that the App will be uninterrupted, error-free, or that metadata fetched from third-party sites will be accurate. Nothing in these terms removes or limits any non-excludable rights you have under the UK Consumer Rights Act 2015 or similar consumer-protection laws.'
      },
      {
        title: '14. Limitation of liability',
        body: 'We are responsible for loss or damage that is a foreseeable result of our breach of these terms or failure to use reasonable care and skill. We are not responsible for loss that was not foreseeable, for business losses suffered by a consumer, or for failures caused by Apple, a network provider or a third-party website outside our reasonable control. Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for death or personal injury caused by negligence, fraud, or your statutory consumer rights.'
      },
      {
        title: '15. Termination',
        body: 'These terms apply while you use the App. You can stop using it at any time by deleting it and managing any subscription through Apple. We may stop providing or updating the App, but this does not remove rights you already have under consumer law. Deleting the App may not delete content retained in iCloud; use the App and Apple’s settings to manage that data.'
      },
      {
        title: '16. Changes',
        body: 'We may update these terms for legal, security or product reasons. We will update the date above and give reasonable notice of material changes where practicable. Changes will not retrospectively remove rights relating to a purchase already made. If you do not accept a material change, you may stop using the App and cancel any subscription through Apple.'
      },
      {
        title: '17. Governing law and jurisdiction',
        body: 'These terms are governed by the laws of England and Wales. If you are a consumer resident elsewhere, you also retain any mandatory protections provided by the law of your home country. You may bring proceedings in the courts available to you under applicable consumer law.'
      },
      {
        title: '18. Contact',
        body: 'Questions about these terms? Email support@getfindlater.com. A UK postal address is available on request for formal correspondence.'
      }
    ]
  }
};
