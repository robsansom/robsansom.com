import type { TranslationSchema } from '../types';

export const de: TranslationSchema = {
  meta: {
    title: 'Find Later - Alles speichern. Alles finden.',
    description: 'Ein wunderschön einfacher Ort für Artikel, Videos, Rezepte und Ideen, die du wiederfinden möchtest. Für iPhone und iPad.'
  },
  a11y: {
    selectLanguage: 'Sprache auswählen',
    homeLink: 'Find Later Startseite',
    appStoreLinkLabel: 'Find Later im App Store laden',
    appStoreBadgeAlt: 'Laden im App Store',
    cardScreenAlt: 'Eine gespeicherte Karte in Find Later'
  },
  cta: {
    comingSoon: 'Demnächst im App Store',
    comingSoonShort: 'Demnächst'
  },
  mockSaveCards: {
    restaurant: {
      title: 'Luca: Pasta in Clerkenwell für Freitagabend',
      tag1: 'Restaurants',
      tag2: 'London',
      aria: 'Eine gespeicherte Restaurant-Karte in der Find Later-Bibliothek',
      coverAlt: 'Sonnenuntergang über einer Restaurantterrasse am See, das Cover einer gespeicherten Restaurant-Karte'
    },
    livingRoom: {
      title: 'Warme Lichtideen fürs Wohnzimmer',
      tag1: 'Zuhause',
      tag2: 'Deko',
      aria: 'Eine gespeicherte Einrichtungs-Karte in der Find Later-Bibliothek',
      coverAlt: 'Ein helles Wohnzimmer mit Sesseln und einer Bogenlampe, das Cover einer gespeicherten Einrichtungs-Karte'
    }
  },
  mockCollectionCards: {
    travel: { title: 'Reiseziele in Italien', meta: '14 Elemente • Find Later' },
    home: { title: 'Wohnzimmer-Inspiration', meta: '9 Elemente • Find Later' },
    recipes: { title: 'Lieblingsrestaurants', meta: '23 Elemente • Find Later' }
  },
  bentoMocks: {
    editMenu: {
      cover: 'Cover bearbeiten',
      tags: 'Tags bearbeiten',
      title: 'Titel bearbeiten',
      description: 'Beschreibung bearbeiten'
    },
    export: {
      title: 'Importieren und Exportieren',
      importTitle: 'Gespeicherte Einträge importieren',
      importBody: 'JSON oder CSV. Fügt neue Einträge hinzu und überspringt bereits vorhandene.',
      exportTitle: 'Bibliothek exportieren',
      exportBody: 'Wählen Sie CSV, JSON oder Markdown.'
    }
  },
  header: {
    features: 'Funktionen',
    support: 'Support',
    download: 'Laden'
  },
  footer: {
    taglineEyebrow: 'Eine kleine, durchdachte App',
    taglineHeadline: 'Speichern.',
    taglineHeadlineDim: 'Tab schließen.',
    copyright: 'Mit Sorgfalt in Großbritannien entwickelt.',
    appleAffiliation: 'Find Later ist eine unabhängige App und steht in keiner Verbindung zu Apple Inc.',
    appleTrademarks: 'Apple, das Apple-Logo, iPhone und iPad sind Marken von Apple Inc., die in den USA und anderen Ländern und Regionen eingetragen sind. App Store ist eine Dienstleistungsmarke von Apple Inc.',
    product: 'Produkt',
    company: 'Unternehmen',
    legal: 'Rechtliches',
    features: 'Funktionen',
    download: 'Laden',
    support: 'Support',
    contact: 'Kontakt',
    privacy: 'Datenschutz',
    terms: 'Bedingungen'
  },
  hero: {
    eyebrow: 'Find Later',
    title: 'Alles speichern.',
    titleAccent: 'Alles finden.',
    body: 'Ein wunderschön einfacher Ort für Artikel, Videos, Rezepte und Ideen, die du wiederfinden möchtest.',
    badgeLabel: 'Für iPhone & iPad'
  },
  showcaseQuickSave: {
    eyebrow: 'Schnellspeichern',
    headline: 'Jetzt speichern,',
    headlineAccent: 'später finden.',
    body: 'Ein Fingertipp aus jeder App speichert den Link samt Titel, Cover und Quelle. Suche, filtere und finde blitzschnell den Weg zurück.',
    imageAlt: 'Die Find Later iPhone-App zeigt die Bibliothek im Dunkelmodus mit Fotos, Titeln und Tags der gespeicherten Elemente.'
  },
  showcaseLibrary: {
    eyebrow: 'Deine Bibliothek',
    headline: 'Jedes Element.',
    headlineAccent: 'Einzigartig deins.',
    body: 'Alles, was du speicherst, wird als vollständige Karte mit Cover-Bild, Quelle und Notizen abgelegt. Schreibe Titel um, passe Cover an, füge Tags hinzu oder generiere Inhalte mit Apple Intelligence neu.',
    imageAlt: 'Die Find Later iPhone-App zeigt Detailkarten für verschiedene gespeicherte Elemente wie Rezepte, Reisepläne, Designideen und Restaurants.'
  },
  showcaseIpad: {
    eyebrow: 'iPad',
    headline: 'Deine Bibliothek,',
    headlineAccent: 'im Großformat.',
    body: 'Von Anfang an für das iPad entwickelt. Sieh mehr von deiner Bibliothek auf einmal – mit Sammlungen, Vorschauen und einer Anordnung, die den breiten Bildschirm perfekt nutzt.',
    imageAltDark: 'Die Find Later iPad-App im Dunkelmodus, zeigt die Startseite der Sammlungen mit Kurzbefehlen und Favoriten.',
    imageAltLight: 'Die Find Later iPad-App im Hellmodus, zeigt die Startseite der Sammlungen mit Kurzbefehlen und Favoriten.'
  },
  showcaseCollections: {
    eyebrow: 'Sammlungen',
    headline: 'Teile',
    headlineAccent: 'Sammlungen.',
    body: 'Gruppiere deine gespeicherten Inhalte für Reisen, Projekte, Wunschzettel oder Moodboards. Teile eine Momentaufnahme einer ganzen Sammlung, damit andere sie in ihr eigenes Find Later importieren können.',
    imageAlt: 'Drei Fächerkarten für geteilte Sammlungen zeigen, wie gespeicherte Elemente gruppiert und an andere gesendet werden.'
  },
  splitHeadlinePrivacy: {
    eyebrow: 'Datenschutz',
    first: 'Privat,',
    second: 'standardmäßig.',
    body: 'Kein Account. Kein Tracking. Keine SDKs von Drittanbietern. Was in Find Later geschieht, bleibt auf deinem iPhone, deinem iPad und in deiner eigenen iCloud.'
  },
  bento: {
    eyebrow: 'Funktionen',
    headline: 'Einfach,',
    headlineAccent: 'ganz bewusst.',
    body: 'Außen minimalistisch, innen extrem leistungsfähig. Das Wesentliche ist so gestaltet, dass es sich intuitiv, schnell und unauffällig anfühlt.',
    shareExtension: {
      eyebrow: 'Teilen-Erweiterung',
      title: 'Aus jeder App speichern',
      body: 'Speichere Artikel, Videos, Beiträge, PDFs und nützliche Anhänge direkt aus den Apps, die du bereits verwendest. Ein Fingertipp genügt.',
      alt: 'iOS-Teilen-Menü mit AirDrop-Kontakten und der Speicheraktion von Find Later'
    },
    collections: {
      eyebrow: 'Sammlungen',
      title: 'Sammeln & Teilen',
      body: 'Erstelle Sammlungen für Reisen, Projekte, Wunschzettel und Ideen. Teile eine Momentaufnahme, damit andere sie importieren können.',
      alt: 'Zwei Sammlungs-Karten: Wohnzimmer-Inspiration und Lieblingsrestaurants'
    },
    find: {
      eyebrow: 'Suche',
      title: 'Schnell wiederfinden',
      body: 'Durchsuche Titel, Notizen, Tags und Quellen im Handumdrehen. Finde Inhalte, selbst wenn dir der Name entfallen ist.',
      alt: ''
    },
    makeItYours: {
      eyebrow: 'Personalisierung',
      title: 'Mach es zu deinem',
      body: 'Schreibe Titel um, füge Tags hinzu, tausche das Cover oder generiere Beschreibungen mit Apple Intelligence neu.',
      alt: 'Bearbeitungsmenü mit den Optionen Cover bearbeiten, Tags bearbeiten, Titel bearbeiten und Beschreibung bearbeiten'
    },
    privacy: {
      eyebrow: 'Datenschutz',
      title: 'Privat, standardmäßig',
      body: 'Kein Account erforderlich. Kein Tracking. Deine iCloud, deine Bibliothek.',
      alt: 'Rotes Vorhängeschloss'
    },
    export: {
      eyebrow: 'Export',
      title: 'Jederzeit exportieren',
      body: 'Exportiere deine gesamte Bibliothek (gespeicherte Elemente, Notizen und Sammlungen) im Markdown- (Obsidian, LLM), CSV- (Excel) oder JSON-Format.',
      alt: 'Einstellungskarte zum Importieren und Exportieren der Bibliothek'
    }
  },
  integration: {
    eyebrow: 'iOS-Integration',
    headline: 'Siri &',
    headlineAccent: 'Suche',
    body: 'Gespeicherte Elemente erscheinen sofort in der iOS-Suche. Bitte Siri, Dinge zu speichern, zu finden oder zu öffnen. Erstelle Kurzbefehle, um deine Bibliothek zu verwalten, ohne die App zu öffnen.',
    spotlight: {
      eyebrow: 'iOS-Suche',
      title: 'In der iOS-Suche',
      body: 'Deine gespeicherten Elemente erscheinen in der iOS-Suche – finde sie, ohne die App zu öffnen.'
    },
    siri: {
      eyebrow: 'Siri',
      title: 'Einfach fragen',
      body: 'Bitte Siri, einen Link in Find Later zu speichern, die App zu durchsuchen oder dir deine Speicherungen vorzulesen.'
    },
    shortcuts: {
      eyebrow: 'Kurzbefehle',
      title: 'Sieben Aktionen für deine Kurzbefehle',
      actions: [
        'Link speichern',
        'Bibliothek durchsuchen',
        'Letzte Speicherungen',
        'Speicherung öffnen',
        'Sammlung exportieren',
        'Favorit hinzufügen',
        'Zu Sammlung hinzufügen'
      ]
    }
  },
  privacyPage: {
    metaTitle: 'Datenschutzerklärung - Find Later',
    metaDescription: 'Wie Find Later mit deinen Daten umgeht. Kein Account. Kein Tracking. Deine Daten bleiben auf deinem Gerät und synchronisieren sich über deine eigene iCloud.',
    eyebrow: 'Rechtliches',
    headline: 'Datenschutz.',
    headlineDim: 'Standardmäßig.',
    lastUpdated: '10. Juni 2026',
    intro: 'Diese Datenschutzerklärung erklärt in klarer Sprache, was Find Later mit deinen Informationen tut. Die Kurzfassung lautet: Ganz bewusst fast nichts.',
    promisesTitle: 'Unsere Versprechen',
    promises: [
      'Kein Account. Es gibt nichts, wofür du dich registrieren müsstest.',
      'Keine Analysen. Wir messen nicht, wie du die App nutzt.',
      'Keine Werbung. Wir zeigen keine Werbung und werden das auch nie tun.',
      'Kein Tracking. Wir verfolgen dich nicht über Apps oder Websites hinweg.',
      'Kein Datenverkauf. Deine Bibliothek gehört dir – sie ist kein Produkt.',
      'Keine SDKs von Drittanbietern für Analyse oder Werbung in der App.'
    ],
    sections: [
      {
        title: 'Wer wir sind',
        body: 'Find Later (die „App“) wird von einem unabhängigen Entwickler mit Sitz im Vereinigten Königreich herausgegeben („wir“, „uns“). Wir sind der Verantwortliche für personenbezogene Daten, die du uns sendest (z. B. eine Support-E-Mail). Bei Fragen zum Datenschutz wende dich an support@getfindlater.com.'
      },
      {
        title: 'Die Kurzversion',
        body: 'Die App benötigt keinen Find Later-Account und nutzt keinen vom Entwickler betriebenen Inhaltsserver. Wir erhalten deine gespeicherten Links, Notizen, Tags oder Sammlungen nicht. Diese Bibliothek wird lokal auf deinem Gerät und, falls aktiviert, in deiner Apple iCloud gespeichert. Die App enthält keine Werbung, kein App-übergreifendes Tracking und keine Analyse-SDKs von Drittanbietern. Informationen, die du an den Support sendest, technische Webprotokolle unseres Hosters sowie Berichte von Apple werden im Folgenden beschrieben.'
      },
      {
        title: 'Welche Daten die App verarbeitet und wo sie liegen',
        body: 'Auf deinem Gerät werden URLs, Titel, Vorschaubilder, Notizen, Tags und der Lesestatus mithilfe der Standard-Speicher-Frameworks von Apple gesichert. Ist die iCloud-Synchronisierung aktiv, speichert und synchronisiert Apple CloudKit diese Inhalte unter deiner Apple-ID. Find Later betreibt keine eigene Datenbank und bietet uns keine Schnittstelle zum Lesen deiner Bibliothek. Wenn du eine Sammlung teilst, verarbeitet Apple eine Kopie, damit der Empfänger sie seiner Bibliothek unabhängig hinzufügen kann. Die Sammlungen sind nicht kollaborativ.'
      },
      {
        title: 'Über Apple verfügbare Informationen',
        body: 'Apple kann Entwicklern aggregierte Berichte über Verkäufe, Downloads und Nutzung im App Store bereitstellen. Wenn du dem Teilen von Diagnosedaten mit Entwicklern in iOS zugestimmt hast, kann Apple uns auch Absturz- und Diagnoseberichte senden. Apple verwaltet diese Daten unter seinen eigenen Datenschutzbestimmungen. Wir nutzen diese Daten nicht, um Werbeprofile zu erstellen oder dich über Apps hinweg zu verfolgen.'
      },
      {
        title: 'Kein Tracking, keine Werbung',
        body: 'Find Later verfolgt dich nicht über Apps und Websites hinweg, bittet nicht um Tracking-Erlaubnis und schaltet keine Werbung. Wir verkaufen keine personenbezogenen Daten. Wir geben Daten nur an Dienstleister weiter, wenn dies für den Betrieb der Website und des Supports nötig ist, du uns darum bittest oder wir gesetzlich dazu verpflichtet sind.'
      },
      {
        title: 'Abrufen der von dir gespeicherten Seiten',
        body: 'Wenn die App Informationen zu einem Link abruft, kann dein Gerät die entsprechende Website oder einen Drittanbieterdienst kontaktieren. Das Ziel empfängt dabei die üblichen Netzwerkdaten wie deine IP-Adresse gemäß den eigenen Richtlinien. Das Öffnen von Links kann den In-App-Browser von Apple nutzen. Find Later speichert keinen Browserverlauf auf unseren Systemen.'
      },
      {
        title: 'Käufe und Abonnements',
        body: 'Find Later Plus wird über den App Store von Apple via StoreKit verkauft. Apple wickelt die Zahlungen ab und stellt der App Kaufbelege bereit, damit die Premium-Funktionen freigeschaltet werden können. Wir erhalten keine vollständigen Kreditkartendaten. Apple verwaltet die Abrechnung, Rückerstattung und Steuern gemäß den Bedingungen für Apple Media Services.'
      },
      {
        title: 'Website und Support',
        body: 'Diese Website wird von GitHub Pages gehostet. GitHub kann IP-Adressen und Sicherheitsdaten bei Besuchen erfassen. Die Website lädt eine Schriftart von Google Fonts. Google erhält beim Abruf der Schriftart die üblichen Netzwerkdaten. Die Website nutzt keine Werbe- oder Analyse-Cookies. Wenn du den Support anschreibst, verarbeitet unser E-Mail-Anbieter deine Nachricht, damit wir antworten können.'
      },
      {
        title: 'Warum wir Support-Daten nutzen und wie lange wir sie aufbewahren',
        body: 'Wir nutzen E-Mails an den Support nur, um deine Anfragen zu beantworten, Fehler zu beheben und Aufzeichnungen über die Hilfe zu führen. Unsere Rechtsgrundlage nach der britischen DSGVO ist unser berechtigtes Interesse, die App zu verbessern und dir zu helfen. Wir bewahren Nachrichten nur so lange auf, wie es für diese Zwecke nötig ist, in der Regel nicht länger als 24 Monate nach Abschluss der Anfrage, außer bei gesetzlichen Aufbewahrungspflichten.'
      },
      {
        title: 'Dienstleister und internationale Übertragungen',
        body: 'Apple, GitHub, Google und unser E-Mail-Provider verarbeiten Daten nach eigenen Bedingungen und tun dies gegebenenfalls außerhalb des Vereinigten Königreichs. Soweit britisches Recht gilt, stützen wir uns bei Übertragungen auf Angemessenheitsbeschlüsse oder genehmigte vertragliche Garantien. Wir erlauben Anbietern nicht, deine Support-Nachrichten für Werbung zu nutzen.'
      },
      {
        title: 'Sicherheit',
        body: 'Wir nutzen Sicherheitsfunktionen der Betriebssysteme und treffen organisatorische Maßnahmen. Die Sicherheit von Gerät und iCloud wird primär von Apple bereitgestellt. Kein Speicherverfahren ist 100 % sicher, weshalb wir keine absolute Sicherheit garantieren können.'
      },
      {
        title: 'Kinder',
        body: 'Find Later richtet sich an ein allgemeines Publikum und ist nicht speziell für Kinder konzipiert. Wir verlangen kein Alter und keine Account-Erstellung. Wenn ein Kind den Support kontaktiert, nutzen wir die E-Mail nur zur Antwort. Eltern oder Erziehungsberechtigte können sich diesbezüglich an uns wenden.'
      },
      {
        title: 'Deine Rechte',
        body: 'Je nach Wohnort hast du Rechte an deinen Daten (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Beschwerde). Wende dich an support@getfindlater.com, um eine Anfrage zu stellen. Einwohner des UK können Beschwerde beim ICO einreichen (ico.org.uk). Lokale Daten auf deinem Gerät oder in iCloud musst du dort verwalten, da wir keine Kopie davon besitzen.'
      },
      {
        title: 'Änderungen dieser Erklärung',
        body: 'Wir können diese Datenschutzerklärung aktualisieren, wenn sich die App, die Website oder gesetzliche Anforderungen ändern. Wir passen dann das Datum oben an und weisen bei wesentlichen Änderungen gesondert darauf hin.'
      },
      {
        title: 'Kontakt',
        body: 'Fragen zum Datenschutz können an support@getfindlater.com gesendet werden. Eine Postanschrift für formelle Korrespondenz ist auf Anfrage erhältlich.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Support - Find Later',
    metaDescription: 'Hilfe und Antworten für Find Later. Alles speichern. Alles finden.',
    eyebrow: 'Support',
    headline: 'Wir sind da,',
    headlineDim: 'um zu helfen.',
    intro: 'Die meisten Fragen werden unten beantwortet. Solltest du keine Antwort finden, schreibe uns eine E-Mail und ein Mitarbeiter wird sich bei dir melden.',
    contactTitle: 'Kontakt',
    contactButton: 'Nachricht senden',
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Wie speichere ich Inhalte?',
        a: 'Öffne das gewünschte Element in Safari oder einer anderen App, tippe auf das iOS-Teilen-Symbol und wähle Find Later. Füge bei Bedarf Tags, eine Sammlung oder Notizen hinzu und tippe auf Speichern. Es erscheint sofort in deiner Bibliothek.'
      },
      {
        q: 'Wie erstelle ich eine Sammlung?',
        a: 'Tippe im Tab „Sammlungen“ oben rechts auf das Stiftsymbol. Gib der Sammlung einen Namen, wähle ein Icon und eine Farbe und füge Inhalte aus der gesamten App hinzu.'
      },
      {
        q: 'Wie funktioniert das Teilen einer Sammlung?',
        a: 'Öffne eine Sammlung, tippe auf das Menü und wähle „Sammlung teilen“. Dadurch wird eine Kopie gesendet, die der Empfänger in seine eigene Find Later-Bibliothek einfügen kann. Diese Kopie ist unabhängig: spätere Änderungen werden nicht synchronisiert.'
      },
      {
        q: 'Synchronisiert sich Find Later zwischen iPhone und iPad?',
        a: 'Ja. Wenn du bei iCloud angemeldet bist, synchronisiert Find Later deine Bibliothek automatisch im Hintergrund über CloudKit. Es ist keine Einstellung erforderlich.'
      },
      {
        q: 'Ich habe das Limit von 100 Speicherungen erreicht. Was nun?',
        a: 'Die kostenlose Version erlaubt bis zu 100 gespeicherte Elemente. Um dieses Limit aufzuheben, kannst du in den Einstellungen ein Upgrade auf Find Later Plus durchführen – entweder für 12,99 € pro Jahr oder als einmaliger Kauf für 34,99 € auf Lebenszeit. Plus schaltet auch unbegrenzte Sammlungen frei.'
      },
      {
        q: 'Wie kündige ich das Plus-Abonnement?',
        a: 'Abonnements werden direkt von Apple verwaltet. Öffne die iOS-Einstellungen, tippe auf deinen Namen, wähle „Abonnements“, suche nach Find Later und tippe auf Kündigen. Du behältst den Plus-Zugang bis zum Ende des aktuellen Abrechnungszeitraums.'
      },
      {
        q: 'Kann ich eine Rückerstattung erhalten?',
        a: 'Rückerstattungen für Käufe im App Store werden von Apple abgewickelt. Besuche reportaproblem.apple.com, melde dich an, wähle den Kauf von Find Later aus und beantrage eine Rückerstattung.'
      },
      {
        q: 'Ich habe einen Fehler gefunden. Was soll ich tun?',
        a: 'Sende eine E-Mail an support@getfindlater.com mit einer kurzen Beschreibung des Fehlers, was du getan hast und was passiert ist. Ein Screenshot hilft uns sehr weiter.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Nutzungsbedingungen - Find Later',
    metaDescription: 'Die Nutzungsbedingungen für die App Find Later, verfasst in verständlicher Sprache.',
    eyebrow: 'Rechtliches',
    headline: 'Nutzungs-',
    headlineDim: 'bedingungen.',
    lastUpdated: '10. Juni 2026',
    intro: 'Diese Bedingungen gelten, wenn du die Find Later iOS-App („Find Later“, „wir“, „uns“) herunterlädst oder nutzt. Mit der Nutzung von Find Later stimmst du diesen Bedingungen und der Standard-EULA von Apple zu. Sie sind bewusst in verständlichem Deutsch geschrieben.',
    tldrTitle: 'In Kürze',
    tldr: [
      'Find Later wird dir zur persönlichen Nutzung auf deinen Apple-Geräten lizenziert.',
      'Kostenlose und kostenpflichtige Funktionen sowie Preise werden vor dem Kauf in der App angezeigt.',
      'Apple wickelt Zahlungen ab, bearbeitet Rückerstattungen und verwaltet dein Abonnement.',
      'Deine gespeicherten Inhalte gehören dir – wir greifen nicht darauf zu und trainieren keine KI damit.',
      'Diese Bedingungen unterliegen dem Recht von England und Wales.'
    ],
    sections: [
      {
        title: '1. Über diese Bedingungen',
        body: 'Diese Bedingungen gelten, wenn du die Find Later iOS-App („Find Later“, die „App“) herunterlädst oder nutzt. Die App wird von einem unabhängigen, in Großbritannien ansässigen Entwickler herausgegeben. Durch die Nutzung der App stimmst du diesen Bedingungen und der standardmäßigen Apple-Lizenzvereinbarung für Endbenutzer (die „Apple EULA“) zu.'
      },
      {
        title: '2. Die Lizenz',
        body: 'Find Later wird an dich lizenziert (nicht verkauft) zur privaten, nicht-kommerziellen Nutzung auf Apple-Geräten, die du besitzt oder kontrollierst, gemäß den Bestimmungen der Apple EULA. Ergänzende Bedingungen in diesem Dokument (etwa zu geistigem Eigentum oder Rückerstattungen) gelten parallel zum Apple EULA.',
        link: {
          label: 'Das standardmäßige Apple EULA lesen',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Kostenlose Version und Plus',
        body: 'Find Later bietet kostenlose und kostenpflichtige Funktionen. Die aktuellen Limits und Preise werden in der App und der App Store-Beschreibung angezeigt. Plus-Funktionen können unbegrenztes Speichern und das Teilen von Sammlungen umfassen. Funktionen können je nach Gerät, Betriebssystemversion und Region variieren.'
      },
      {
        title: '4. Abonnements und Einmalkauf',
        body: 'Plus kann als sich automatisch verlängerndes Abonnement und/oder als Einmalkauf angeboten werden. Preis, Abrechnungszeitraum und Funktionen werden vor dem Kauf über Apple angezeigt. Abonnements verlängern sich automatisch, wenn sie nicht mindestens 24 Stunden vor Ablauf des aktuellen Zeitraums über deine Apple-ID gekündigt werden. Apple verwaltet Abrechnung und Kündigung. Ein Einmalkauf ist nicht wiederkehrend und gilt für die zum Kaufzeitpunkt beschriebenen Funktionen; er ist kein Versprechen, dass Online-Dienste unbegrenzt zur Verfügung stehen.'
      },
      {
        title: '5. Rückerstattungen',
        body: 'Alle Käufe bei Find Later werden von Apple gemäß den Bedingungen für Apple Media Services abgewickelt. Apple, nicht wir, verwaltet Rückerstattungen. Du kannst eine Rückerstattung über reportaproblem.apple.com oder deinen Kaufverlauf beantragen. Wir haben keine Möglichkeit, Rückerstattungen selbst zu veranlassen, und speichern keine Zahlungsdaten.',
        link: {
          label: 'Eine Rückerstattung bei Apple beantragen',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '6. Preisänderungen',
        body: 'Preise können sich ändern. Apple informiert dich über Preisänderungen bei Abonnements gemäß seinen Richtlinien. Preisänderungen betreffen bereits getätigte Einmalkäufe nicht. Du kannst dein Abonnement kündigen, bevor eine Preisänderung wirksam wird.',
        link: {
          label: 'Bedingungen für Apple Media Services',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '7. Deine Inhalte gehören dir',
        body: 'Alles, was du in Find Later speicherst (Links, Tags, Notizen, Struktur deiner Sammlungen), gehört dir. Wir beanspruchen keine Rechte daran und greifen niemals darauf zu. Du bist für deine Speicherungen selbst verantwortlich: Bitte speichere oder teile keine Inhalte, die illegal sind, Rechte anderer verletzen oder zur Belästigung gedacht sind. Beachte die Regeln der Websites, deren Links du speicherst.'
      },
      {
        title: '8. Synchronisierung und Teilen',
        body: 'Wenn iCloud aktiv ist, speichert und synchronisiert Apple CloudKit die App-Daten unter deiner Apple-ID. Die Verfügbarkeit und Wiederherstellung hängen von Apple ab. Das Teilen einer Sammlung sendet eine eigenständige Kopie. Sammlungen sind nicht kollaborativ; spätere Änderungen werden nicht synchronisiert. Du bist für die Auswahl der Empfänger selbst verantwortlich.'
      },
      {
        title: '9. Zulässige Nutzung',
        body: 'Es ist nicht gestattet: (a) Find Later zurückzuentwickeln, zu dekompilieren oder zu modifizieren, es sei denn, dies ist gesetzlich oder durch das Apple EULA gestattet; (b) Kauf- oder Lizenzprüfungen zu umgehen; (c) die Teilen-Funktion für Spam oder illegale Inhalte zu nutzen; oder (d) die App oder deren Nutzung durch andere zu stören. Wir können bei schweren Verstößen den Zugriff sperren.'
      },
      {
        title: '10. Inhalte Dritter',
        body: 'Find Later zeigt Vorschauen von Drittanbieter-Websites an und öffnet diese. Wir hosten, prüfen oder empfehlen diese Inhalte nicht und sind nicht für deren Richtigkeit, Legalität oder Verfügbarkeit verantwortlich. Die Nutzung verlinkter Websites unterliegt deren eigenen Bedingungen.'
      },
      {
        title: '11. Unser geistiges Eigentum',
        body: 'Der Name Find Later, das Design, die Icons, der Quellcode und die Marke gehören uns oder werden unter Lizenz genutzt. Die Lizenz aus Abschnitt 2 überträgt keine dieser Rechte auf dich. Du darfst die App in Rezensionen oder Beiträgen erwähnen und verlinken, solange dies keine offizielle Empfehlung ohne Absprache impliziert.'
      },
      {
        title: '12. Rolle von Apple',
        body: 'Da die App über das App Store von Apple vertrieben wird, gelten folgende von Apple geforderte Bedingungen:',
        bullets: [
          'Diese Bedingungen gelten zwischen dir und uns, nicht Apple. Apple ist nicht für die App oder deren Inhalte verantwortlich.',
          'Wir (nicht Apple) sind allein für Support und Wartung verantwortlich. Apple hat keine Verpflichtung bezüglich Wartung oder Support.',
          'Bei Fehlern der App bezüglich anwendbarer Garantien kannst du Apple informieren, und Apple erstattet den Kaufpreis (falls zutreffend). Apple hat darüber hinaus keine weiteren Garantieverpflichtungen.',
          'Wir (nicht Apple) sind für die Bearbeitung von Ansprüchen bezüglich der App verantwortlich (wie Produkthaftung, gesetzliche Konformität oder Verbraucherschutz).',
          'Wir (nicht Apple) übernehmen die Verteidigung und Beilegung von Ansprüchen Dritter wegen Verletzung geistigen Eigentums.',
          'Du erklärst, dass du dich nicht in einem Land befindest, das einem Embargo der US-Regierung unterliegt oder als Terrorismus unterstützendes Land eingestuft ist, und nicht auf einer Verbotsliste der US-Regierung stehst.',
          'Apple und seine Tochtergesellschaften sind Drittbegünstigte dieser Bedingungen und haben das Recht, diese Bedingungen nach deiner Annahme dir gegenüber durchzusetzen.'
        ]
      },
      {
        title: '13. Gewährleistungsausschluss',
        body: 'Find Later wird „wie besehen“ und „wie verfügbar“ bereitgestellt. Soweit gesetzlich zulässig, schließen wir alle Garantien aus, einschließlich der Mängelfreiheit oder ununterbrochenen Verfügbarkeit der App oder der Genauigkeit abgerufener Metadaten. Deine gesetzlichen Rechte als Verbraucher bleiben unberührt.'
      },
      {
        title: '14. Haftungsbeschränkung',
        body: 'Wir haften für Schäden, die die vorhersehbare Folge einer Verletzung dieser Bedingungen oder eines Mangels an angemessener Sorgfalt unsererseits sind. Wir haften nicht für unvorhersehbare Schäden, geschäftliche Verluste oder Ausfälle, die durch Apple oder Dritte außerhalb unserer Kontrolle verursacht werden. Unsere Haftung bleibt unberührt, wo ein Ausschluss gesetzlich unzulässig ist.'
      },
      {
        title: '15. Kündigung',
        body: 'Diese Bedingungen gelten, solange du die App nutzt. Du kannst die Nutzung jederzeit beenden, indem du die App löschst und dein Abonnement bei Apple verwaltest. Das Löschen der App löscht keine Daten in iCloud; nutze die Geräteeinstellungen, um diese Daten zu verwalten.'
      },
      {
        title: '16. Änderungen',
        body: 'Wir können diese Bedingungen aus rechtlichen, sicherheitsrelevanten oder produktbezogenen Gründen anpassen. Wir aktualisieren das Datum oben und weisen bei wesentlichen Änderungen rechtzeitig darauf hin. Wenn du Änderungen nicht akzeptierst, musst du die Nutzung beenden und Abonnements kündigen.'
      },
      {
        title: '17. Anwendbares Recht und Gerichtsstand',
        body: 'Diese Bedingungen unterliegen dem Recht von England und Wales. Wenn du ein Verbraucher mit Wohnsitz in einem anderen Land bist, behältst du auch den Schutz der zwingenden Bestimmungen deines Wohnsitzlandes. Du kannst Verfahren vor den nach anwendbarem Verbraucherrecht zuständigen Gerichten einleiten.'
      },
      {
        title: '18. Kontakt',
        body: 'Fragen zu diesen Bedingungen? Sende eine E-Mail an support@getfindlater.com. Eine Postanschrift im Vereinigten Königreich ist für formelle Korrespondenz auf Anfrage erhältlich.'
      }
    ]
  }
};
