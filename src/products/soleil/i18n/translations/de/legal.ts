/** Legal + support copy — ported verbatim from the previous Soleil site. */
import type { LegalCopy } from '../../types';

export const legal: LegalCopy = {
  privacyPage: {
    metaTitle: 'Datenschutzerklärung - Soleil',
    metaDescription: 'Wie Soleil mit Ihren Daten umgeht. Kein Account. Kein Tracking. Ihr Hautprofil, Ihre Sessions und Ihr Verlauf bleiben auf Ihren Geräten und in Ihrer privaten iCloud.',
    eyebrow: 'Rechtliches',
    headline: 'Privatsphäre.',
    headlineDim: 'Von Haus aus.',
    lastUpdated: '28. September 2026',
    intro: 'Diese Erklärung beschreibt in einfacher Sprache, was Soleil mit Ihren Informationen macht. Die Kurzfassung: absichtlich sehr wenig.',
    promisesTitle: 'Unsere Versprechen',
    promises: [
      'Kein Account. Es gibt nichts, wofür Sie sich registrieren müssten.',
      'Keine Analytics. Wir messen nicht, wie Sie die App nutzen.',
      'Keine Werbung. Wir zeigen keine Anzeigen - und werden es nie tun.',
      'Kein Tracking. Wir verfolgen Sie nicht über Apps oder Websites hinweg.',
      'Kein Datenverkauf. Ihr Sonnenverlauf gehört Ihnen - er ist kein Produkt.',
      'Keine Analyse- oder Werbe-SDKs von Drittanbietern in der App.'
    ],
    sections: [
      {
        title: 'Wer wir sind',
        body: 'Soleil (die "App") wird von einem unabhängigen Entwickler mit Sitz im Vereinigten Königreich veröffentlicht ("wir", "uns"). Wir sind Verantwortliche für personenbezogene Informationen, die Sie uns freiwillig senden, etwa eine Support-E-Mail. Bei Datenschutzfragen wenden Sie sich an support@getsoleilapp.com.'
      },
      {
        title: 'Die Kurzfassung',
        body: 'Die App hat keinen Soleil-Account und keinen vom Entwickler betriebenen Inhaltsserver. Ihr Hautprofil, Ihre Sonnensessions, Ihr Sonnencreme-Protokoll, Ihre Familienprofile und Ihr Verlauf werden mit Apples Standard-Frameworks auf Ihrem Gerät gespeichert und, wenn Sie iCloud nutzen, über Ihren privaten iCloud-Account zwischen Ihren eigenen Geräten synchronisiert. Wir erhalten sie nicht und können sie nicht lesen. Die App enthält keine Werbung, kein App-übergreifendes Tracking und kein Analyse-SDK von Drittanbietern. Informationen, die Sie an den Support senden, technische Website-Logs unseres Hosting-Anbieters und Informationen, die Apple Entwicklern bereitstellt, werden unten beschrieben.'
      },
      {
        title: 'Welche Daten die App verarbeitet und wo sie liegen',
        body: 'Auf Ihrem Gerät werden Ihr Fitzpatrick-Hauttyp, Ihre LSF- und Kleidungsangaben, Sonnensessions, Familienprofile, gespeicherte Orte, Fortschrittsfotos und Ihr Verlauf mit Apples SwiftData-Framework gespeichert. Ist iCloud für Ihren Apple Account aktiviert, synchronisiert SwiftData diese Daten außerdem über die private Datenbank Ihres eigenen iCloud-Accounts zwischen Ihren Geräten; Apple speichert sie dort nach Apples eigenen Bedingungen. Diese private Datenbank gehört zu Ihrem Apple Account: Soleil betreibt keine separate Datenbank mit diesen Informationen, und weder Apples Werkzeuge noch die App geben uns eine Möglichkeit, sie einzusehen. Sie können iCloud für Soleil in den iOS-Einstellungen deaktivieren, damit die Daten nur auf dem Gerät bleiben. Familienprofile sind einfache Einträge, die Sie anlegen - Soleil kontaktiert oder identifiziert die darin beschriebenen Personen nicht.'
      },
      {
        title: 'Standort und Wetter',
        body: 'Um den UV-Index an Ihrem Standort anzuzeigen, fragt die App iOS nach Ihrem Standort und sendet Koordinaten an Apples WeatherKit-Dienst, um lokale UV- und Wetterdaten abzurufen. Apple verarbeitet diese Anfragen nach Apples eigenen Datenschutzbestimmungen. Wir erhalten oder speichern Ihren Standort nicht, und die App erstellt keinen Bewegungsverlauf auf unseren Systemen.'
      },
      {
        title: 'Gesundheitsdaten',
        body: 'Mit Ihrer Erlaubnis liest die App "Zeit im Tageslicht" aus Apple HealthKit, um die Real Sun Funktion zu ermöglichen, und kann auf weitere sonnenbezogene Werte zugreifen, die Sie freigeben. Gesundheitsdaten werden auf Ihrem Gerät gelesen, für Berechnungen und Anzeige auf dem Gerät verwendet und niemals an uns oder Dritte übertragen. Sie können den HealthKit-Zugriff jederzeit in den iOS-Einstellungen widerrufen; die Funktion bleibt dann in reduzierter Form nutzbar.'
      },
      {
        title: 'Optionaler KI-Hautton-Scan',
        body: 'Der optionale Hautton-Scan kann vollständig auf dem Gerät laufen. Wenn Sie die KI-gestützte Option wählen, wird Ihr Foto über eine verschlüsselte Verbindung durch einen sicheren Proxy an einen Modellanbieter gesendet - ausschließlich, um einen Fitzpatrick-Hauttyp zu schätzen - und das Ergebnis an Ihr Gerät zurückgegeben. Fotos werden nicht verwendet, um Sie zu identifizieren, nicht für Training genutzt und nicht von uns aufbewahrt. Sie können Ihren Hauttyp stattdessen jederzeit manuell festlegen.'
      },
      {
        title: 'Informationen, die über Apple verfügbar sind',
        body: 'Apple kann Entwicklern aggregierte Berichte zu App Store Verkäufen, Downloads und Nutzung bereitstellen. Wenn Sie in iOS das Teilen mit App-Entwicklern aktiviert haben, kann Apple auch Diagnose- und Absturzinformationen bereitstellen. Apple kontrolliert die Informationen, die es über den App Store, StoreKit, WeatherKit, HealthKit und Geräteanalysen erhebt, nach Apples eigenen Datenschutzbestimmungen. Wir nutzen diese Informationen nicht, um Werbeprofile zu erstellen oder Sie über Apps oder Websites hinweg zu verfolgen.'
      },
      {
        title: 'Käufe und Abonnements',
        body: 'Soleil Pro wird über Apples App Store mit StoreKit verkauft. Apple wickelt Zahlungen ab und stellt der App Kauf- und Berechtigungsinformationen bereit, damit sie bezahlte Funktionen freischalten kann. Wir erhalten nicht Ihre vollständigen Zahlungskartendaten. Apple regelt Abrechnung, Rückerstattungen und Steuern nach den Nutzungsbedingungen für Apple Medienservices.'
      },
      {
        title: 'Website und Support',
        body: 'Diese Website wird von GitHub Pages gehostet. GitHub kann IP-Adressen, Anfragedetails und Sicherheitsprotokolle verarbeiten, wenn die Seite besucht wird. Die Seite liefert ihre Schriften selbst aus und lädt keine Skripte Dritter, keine Werbe-Cookies und keine Analytics. Wenn Sie dem Support eine E-Mail schreiben, verarbeitet unser E-Mail-Anbieter Ihre Adresse, Nachricht und Anhänge, damit wir sie lesen und beantworten können.'
      },
      {
        title: 'Warum wir Support-Informationen nutzen und wie lange wir sie aufbewahren',
        body: 'Wir nutzen Support-Korrespondenz, um Ihre Anfrage zu beantworten, Probleme zu diagnostizieren, Missbrauch zu verhindern und die geleistete Unterstützung angemessen zu dokumentieren. Unsere Rechtsgrundlage nach der UK-DSGVO ist unser berechtigtes Interesse an der Unterstützung und Verbesserung der App sowie, soweit einschlägig, die Durchführung von Schritten im Zusammenhang mit unserem Vertrag mit Ihnen. Wir bewahren Support-Nachrichten nur so lange auf, wie es für diese Zwecke vernünftigerweise nötig ist - in der Regel höchstens 24 Monate nach Abschluss der Konversation, sofern nicht ein längerer Zeitraum aus rechtlichen, Sicherheits- oder Buchhaltungsgründen erforderlich ist.'
      },
      {
        title: 'Dienstleister und internationale Übermittlungen',
        body: 'Apple, GitHub und unser E-Mail-Anbieter verarbeiten Informationen nach ihren eigenen Bedingungen und können sie außerhalb des Vereinigten Königreichs verarbeiten. Soweit britisches Datenschutzrecht auf eine von uns veranlasste Übermittlung anwendbar ist, stützen wir uns auf einen einschlägigen Angemessenheitsbeschluss oder geeignete vertragliche Garantien. Wir gestatten diesen Anbietern nicht, Support-Korrespondenz für unsere Werbung zu nutzen.'
      },
      {
        title: 'Sicherheit',
        body: 'Wir nutzen Sicherheitsfunktionen der Plattform und treffen angemessene organisatorische Maßnahmen, die den begrenzten Informationen entsprechen, die wir verarbeiten. Die Gerätesicherheit wird in erster Linie von Apple gewährleistet. Keine Speicher- oder Übertragungsmethode ist vollkommen sicher, daher können wir keine absolute Sicherheit versprechen.'
      },
      {
        title: 'Kinder',
        body: 'Soleil richtet sich an ein allgemeines Publikum und nicht gezielt an Kinder. Familienprofile für Kinder werden von der erwachsenen Person angelegt und kontrolliert, der das Gerät gehört, und bleiben auf deren Geräten und in deren eigener privater iCloud. Wir verlangen weder ein Konto noch eine Altersangabe. Wenn ein Kind dem Support schreibt, verwenden wir die Nachricht nur, um zu antworten und die Anfrage zu bearbeiten. Ein Elternteil oder Erziehungsberechtigter kann uns zu dieser Korrespondenz kontaktieren.'
      },
      {
        title: 'Ihre Rechte',
        body: 'Je nach Wohnort haben Sie möglicherweise Rechte an personenbezogenen Informationen in unserer Verantwortung, darunter Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde. Diese Rechte unterliegen gesetzlichen Grenzen. Wenden Sie sich für eine Anfrage an support@getsoleilapp.com. Personen mit Wohnsitz im Vereinigten Königreich können sich beim Information Commissioner\u2019s Office unter ico.org.uk beschweren. Inhalte, die auf Ihren Geräten oder in Ihrer privaten iCloud gespeichert sind, verwalten Sie bitte über die App, Ihr Gerät oder Ihre iCloud-Einstellungen, da wir keine Kopie davon haben.'
      },
      {
        title: 'Änderungen an dieser Erklärung',
        body: 'Wir können diese Erklärung aktualisieren, wenn sich App, Website, Anbieter oder rechtliche Anforderungen ändern. Wir aktualisieren dann das Datum oben und informieren zusätzlich, wenn eine Änderung die Nutzung personenbezogener Informationen wesentlich beeinflusst.'
      },
      {
        title: 'Kontakt',
        body: 'Fragen oder Anliegen zum Datenschutz senden Sie an support@getsoleilapp.com. Eine Postadresse für formelle Korrespondenz stellen wir auf Anfrage bereit.'
      }
    ]
  },
  supportPage: {
    metaTitle: 'Support - Soleil',
    metaDescription: 'Hilfe und Antworten zu Soleil. Liebe die Sonne. Nicht den Sonnenbrand.',
    eyebrow: 'Support',
    headline: 'Wir sind',
    headlineDim: 'für dich da.',
    intro: 'Das meiste findest du unten. Wenn eine Antwort fehlt, schreib uns - ein echter Mensch meldet sich zurück.',
    contactTitle: 'Kontakt',
    contactButton: 'Nachricht senden',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        q: 'Was sagt mir Soleil über den UV-Wert von heute?',
        a: 'Soleil zeigt den Live-UV-Index für deinen Standort, seine Kategorie, die Tagesspitze und den Stundenverlauf über Apple WeatherKit. Dein Fitzpatrick-Hauttyp und dein LSF machen daraus einen Schutz-Check zur rechten Zeit. Bewusst zeigt Soleil keinen Countdown als sichere Zeit in der Sonne - Schatten, Wasser, Höhe und Reflexion spielen ebenfalls eine Rolle.'
      },
      {
        q: 'Wie lege ich meinen Hauttyp fest?',
        a: 'Beim Onboarding kannst du ein paar Fragen beantworten, den Kamera-Scan nutzen oder deinen Fitzpatrick-Typ direkt auswählen. Der optionale KI-gestützte Scan sendet ein einziges Foto durch einen sicheren Proxy, nur um den Hautton zu schätzen - oder du behältst alles auf dem Gerät. Deinen Hauttyp kannst du jederzeit im Tab "Du" ändern.'
      },
      {
        q: 'Wie funktionieren Familienprofile?',
        a: 'Familienprofile gehören zu Soleil Pro. Füge die Menschen, um die du dich kümmerst, im Tab "Du" hinzu und wähle beim Start des Sonnen-Timers, wer draußen ist. Jede Person behält ihren eigenen Hauttyp und ihr eigenes Sonnencreme-Protokoll, und Soleil führt für jede von ihnen eine eigene Nachcreme-Erinnerung. Pro ergänzt außerdem den Familienverlauf und das Familien-Status-Widget. Familiendaten bleiben auf deinen Geräten und in deiner eigenen privaten iCloud - nichts wird mit uns geteilt. Dein eigener Sonnenschutz bleibt immer kostenlos.'
      },
      {
        q: 'Was brauche ich für die Apple Watch Funktionen?',
        a: 'Die kostenlose Watch-App läuft auf watchOS mit einem gekoppelten iPhone und zeigt UV, Sonnencreme-Status und Tageslicht, mit haptischen Nachcreme-Hinweisen und Komplikationen. Die Real Sun Tageslicht-Story nutzt Apples "Zeit im Tageslicht" und braucht eine Apple Watch SE (2. Generation), Series 6 oder neuer oder eine beliebige Ultra.'
      },
      {
        q: 'Setzt Nachcremen meine Sonnenbelastung zurück?',
        a: 'Nein - und das ist Absicht. Nachcremen erneuert deinen Schutz für die Zeit danach, aber die UV-Dosis, die deine Haut heute schon erhalten hat, bleibt gezählt. Soleil verfolgt beides getrennt, damit deine Tagesbilanz immer ehrlich ist.'
      },
      {
        q: 'Was steckt in Soleil Pro und was kostet es?',
        a: 'Kostenlos ist dein eigener Sonnenschutz, jeden Tag: Live-UV und die Bedingungen des Tages, der Sonnen-Timer und Erinnerungen, die Live-Aktivität, die Apple Watch App, Widgets, dein Hautprofil (inklusive KI-Hautscan) und jede Sitzung, die du aufzeichnest. Pro ergänzt geführte Daily-Glow-Sessions und den Routine-Editor, Familienprofile und Ausflüge mit einer Erinnerung pro Person, den Familienverlauf und das Familien-Widget, Real Sun (Zeit im Tageslicht), Monatstrends, die Kalender-Heatmap, die Sonnenreise und erneute KI-Hautscans. Es kostet 2,49 $/Woche, 29,99 $/Jahr mit 3-tägiger Gratis-Testphase oder einmalig 79,99 $. Preise können je nach Land abweichen - Apple zeigt dir deinen vor dem Kauf.'
      },
      {
        q: 'Wie kündige ich ein Pro-Abo?',
        a: 'Abonnements verwaltet Apple. Öffne die iOS-Einstellungen, tippe auf deinen Namen, dann auf "Abonnements", wähle Soleil und tippe auf "Kündigen". Du behältst den Pro-Zugriff bis zum Ende des laufenden Abrechnungszeitraums.'
      },
      {
        q: 'Bekomme ich eine Rückerstattung?',
        a: 'Rückerstattungen für App Store Käufe übernimmt Apple. Besuche reportaproblem.apple.com, melde dich an, wähle den Soleil-Kauf aus und beantrage eine Rückerstattung.'
      },
      {
        q: 'Ist Soleil medizinische Beratung?',
        a: 'Nein. Soleil ist Wellness-Orientierung auf Basis veröffentlichter UV-Wissenschaft und rechnet lieber vorsichtig - aber es kann deine Haut nicht sehen. Bei empfindlicher Haut, Hautkrebs in der Vorgeschichte oder einer diagnostizierten Erkrankung folge bitte zuerst dem Plan deiner Hautärztin oder deines Hautarztes.'
      },
      {
        q: 'Ich habe einen Fehler gefunden. Was jetzt?',
        a: 'Schreib an support@getsoleilapp.com mit einer kurzen Beschreibung: was du gemacht hast, was du erwartet hast und was tatsächlich passiert ist. Ein Screenshot hilft sehr.'
      }
    ]
  },
  termsPage: {
    metaTitle: 'Nutzungsbedingungen - Soleil',
    metaDescription: 'Die verständlichen Bedingungen, die gelten, wenn Sie die Soleil iOS-App laden oder nutzen.',
    eyebrow: 'Rechtliches',
    headline: 'Nutzungs-',
    headlineDim: 'bedingungen.',
    lastUpdated: '28. September 2026',
    intro: 'Diese Bedingungen gelten, wenn Sie die Soleil iOS-App laden oder nutzen ("Soleil", "wir", "uns"). Mit der Nutzung von Soleil stimmen Sie ihnen zu, zusammen mit Apples Standard-EULA. Sie sind bewusst in einfacher Sprache geschrieben.',
    tldrTitle: 'Kurz gesagt',
    tldr: [
      'Soleil wird Ihnen für die persönliche Nutzung auf Ihren Apple Geräten lizenziert.',
      'Kostenlose und bezahlte Funktionen, Preise und Verfügbarkeit werden vor dem Kauf in der App angezeigt.',
      'Apple zieht die Zahlung ein, bearbeitet Rückerstattungen und verwaltet Ihr Abonnement.',
      'Soleil ist Wellness-Orientierung, keine medizinische Beratung - Entscheidungen rund um die Sonne bleiben bei Ihnen.',
      'Diese Bedingungen unterliegen dem Recht von England und Wales.'
    ],
    sections: [
      {
        title: '1. Über diese Bedingungen',
        body: 'Diese Bedingungen gelten, wenn Sie die Soleil-App für iOS und watchOS laden oder nutzen ("Soleil", die "App"). Die App wird von einem unabhängigen Entwickler mit Sitz im Vereinigten Königreich veröffentlicht ("wir", "uns"). Mit der Nutzung von Soleil stimmen Sie diesen Bedingungen zusammen mit Apples Endbenutzer-Lizenzvereinbarung für lizenzierte Anwendungen (der "Apple EULA") zu. Sie sind bewusst in einfacher Sprache geschrieben.'
      },
      {
        title: '2. Die Lizenz',
        body: 'Soleil wird Ihnen lizenziert (nicht verkauft) - für die persönliche, nicht-kommerzielle Nutzung auf jedem Apple Gerät, das Sie besitzen oder kontrollieren, zu den Bedingungen der Apple EULA. Soweit diese Bedingungen die Apple EULA ergänzen - etwa zu unserem geistigen Eigentum, zu Rückerstattungen oder zum Recht, das für Streitigkeiten zwischen uns gilt - gelten sie neben ihr.',
        link: {
          label: 'Apple Standard-EULA lesen',
          href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
        }
      },
      {
        title: '3. Keine medizinische Beratung',
        body: 'Soleil bietet allgemeine Wellness-Orientierung zur Sonnenexposition auf Basis veröffentlichter UV-Wissenschaft, Wetterdaten und der Angaben, die Sie machen. Es ist kein Medizinprodukt, diagnostiziert, behandelt oder verhindert keine Erkrankung und kann nicht jeden individuellen Faktor berücksichtigen. Schätzungen wie UV-Messwerte, Schutz-Checks und Zeit im Tageslicht sind Näherungswerte. Verlassen Sie sich immer auch auf Ihr eigenes Urteil und folgen Sie dem Rat qualifizierter medizinischer Fachleute - besonders bei empfindlicher Haut, Hautkrebs in der Vorgeschichte, Lichtempfindlichkeit oder Medikamenten, die die Sonnenverträglichkeit beeinflussen. Für die Sonnenentscheidungen für sich und Ihre Familie bleiben Sie selbst verantwortlich.'
      },
      {
        title: '4. Kostenlos und Pro',
        body: 'Soleil kann kostenlose und bezahlte Funktionen anbieten. Die jeweils aktuellen Grenzen und Funktionen werden in der App und im App Store angezeigt. Bezahlte Funktionen können geführte Sessions, die Real Sun Tageslicht-Story und einen erweiterten Verlauf umfassen. Funktionen können je nach Gerät, Betriebssystemversion und Region variieren; einige erfordern eine Apple Watch und/oder Berechtigungen wie Standort- oder HealthKit-Zugriff.'
      },
      {
        title: '5. Abonnements und Einmalkauf',
        body: 'Pro kann als automatisch verlängerndes Abonnement und/oder als Einmalkauf angeboten werden. Preis, Abrechnungszeitraum, enthaltene Funktionen und eine etwaige Testphase zeigt Apple an, bevor Sie einen Kauf bestätigen; sie können je nach Land oder Währung variieren. Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende des laufenden Zeitraums über Ihren Apple Account gekündigt werden. Apple belastet Ihr Konto und verwaltet die Kündigung. Ein Einmalkauf wiederholt sich nicht und gilt für die zum Kaufzeitpunkt beschriebene Version und die beschriebenen Funktionen; er ist kein Versprechen, dass die App oder jeder Online-Dienst für immer verfügbar bleibt.'
      },
      {
        title: '6. Rückerstattungen',
        body: 'Alle Käufe von Soleil werden von Apple nach den Nutzungsbedingungen für Apple Medienservices abgewickelt. Rückerstattungen bearbeitet Apple, nicht wir. Sie können eine Rückerstattung über reportaproblem.apple.com oder Ihre Apple ID Kaufhistorie beantragen. Wir können Rückerstattungen nicht direkt gewähren und speichern Ihre Zahlungsdaten nicht.',
        link: {
          label: 'Rückerstattung bei Apple beantragen',
          href: 'https://reportaproblem.apple.com'
        }
      },
      {
        title: '7. Preisänderungen',
        body: 'Preise können sich ändern. Apple stellt die für Abo-Preisänderungen erforderlichen Hinweise oder Zustimmungsprozesse bereit. Ein neuer Preis wirkt sich nicht auf einen bereits abgeschlossenen Einmalkauf aus. Sie können ein Abonnement kündigen, bevor eine Änderung wirksam wird - vorbehaltlich der jeweils geltenden Bedingungen von Apple.',
        link: {
          label: 'Nutzungsbedingungen für Apple Medienservices',
          href: 'https://www.apple.com/legal/internet-services/itunes/'
        }
      },
      {
        title: '8. Ihre Daten gehören Ihnen',
        body: 'Ihr Hautprofil, Ihre Sonnensessions, Ihr Sonnencreme-Protokoll, Ihre Familienprofile und Ihr Verlauf gehören Ihnen. Sie werden auf Ihrem Gerät gespeichert und, wenn Sie iCloud nutzen, in Ihrem eigenen privaten iCloud-Account. Wir beanspruchen keine Lizenz daran und greifen niemals darauf zu. Für die Richtigkeit Ihrer Angaben sind Sie verantwortlich - die Hinweise der App sind nur so gut wie die Hauttyp-, LSF- und Kleidungsangaben, die Sie ihr geben.'
      },
      {
        title: '9. Dienste von Drittanbietern',
        body: 'Die App stützt sich auf Apple Dienste, darunter WeatherKit (UV- und Wetterdaten), HealthKit ("Zeit im Tageslicht", mit Ihrer Erlaubnis), StoreKit und Mitteilungen. Verfügbarkeit und Genauigkeit dieser Dienste hängen von Apple, Ihrem Gerät, Ihren Einstellungen und Ihrer Netzverbindung ab. Wetter- und UV-Daten sind Schätzungen Dritter und können gelegentlich nicht verfügbar oder ungenau sein; die Hinweise der App sind entsprechend einzuordnen.'
      },
      {
        title: '10. Zulässige Nutzung',
        body: 'Bitte unterlassen Sie es, (a) Soleil zurückzuentwickeln, zu dekompilieren oder zu verändern, außer soweit das Gesetz oder die Apple EULA es ausdrücklich erlauben; (b) Kauf- oder Berechtigungsprüfungen zu umgehen; oder (c) die App oder ihre Nutzung durch andere zu stören. Soweit technisch und rechtlich möglich, können wir bei einem schwerwiegenden Verstoß den Zugriff auf betroffene Funktionen einschränken.'
      },
      {
        title: '11. Unser geistiges Eigentum',
        body: 'Name, Design, Icons, Quellcode und Marke von Soleil gehören uns oder werden unter Lizenz genutzt. Die Lizenz in Abschnitt 2 überträgt Ihnen diese Rechte nicht. Sie dürfen die App in Rezensionen, Artikeln oder Social-Media-Beiträgen erwähnen oder auf getsoleilapp.com verlinken, dürfen aber ohne Erlaubnis nicht den Eindruck erwecken, wir würden Sie unterstützen oder sponsern.'
      },
      {
        title: '12. Apples Rolle (Apple-Enabled Software)',
        body: 'Soleil wird über Apples App Store vertrieben; daraus ergeben sich die folgenden von Apple verlangten Bedingungen:',
        bullets: [
          'Diese Bedingungen werden zwischen Ihnen und uns geschlossen, nicht mit Apple. Apple ist keine Partei dieser Bedingungen und trägt keine Verantwortung für die App oder ihre Inhalte.',
          'Wir (nicht Apple) sind allein verantwortlich für die App, ihre Inhalte sowie jegliche Wartung und jeglichen Support. Apple ist nicht verpflichtet, Wartung oder Support für die App zu leisten.',
          'Entspricht die App einer anwendbaren Gewährleistung nicht, können Sie Apple benachrichtigen, und Apple erstattet Ihnen den Kaufpreis der App (sofern gezahlt). Soweit gesetzlich zulässig, trifft Apple keinerlei weitere Gewährleistungspflicht in Bezug auf die App.',
          'Wir (nicht Apple) sind für die Bearbeitung von Ansprüchen im Zusammenhang mit der App oder deren Besitz oder Nutzung verantwortlich, einschließlich Produkthaftungsansprüchen, Ansprüchen wegen Nichteinhaltung rechtlicher oder regulatorischer Anforderungen und Ansprüchen nach Verbraucherschutz- oder Datenschutzrecht.',
          'Wir (nicht Apple) sind für die Untersuchung, Verteidigung, Beilegung und Erfüllung von Ansprüchen Dritter wegen Verletzung geistigen Eigentums im Zusammenhang mit der App verantwortlich.',
          'Sie sichern zu und gewährleisten, dass (a) Sie sich nicht in einem Land befinden, das einem Embargo der US-Regierung unterliegt oder von der US-Regierung als "den Terrorismus unterstützendes" Land eingestuft wurde, und (b) Sie auf keiner Liste der US-Regierung mit verbotenen oder beschränkten Parteien stehen.',
          'Apple und Apples Tochtergesellschaften sind Drittbegünstigte dieser Bedingungen und haben mit Ihrer Annahme das Recht (und gelten als hätten sie dieses Recht angenommen), diese Bedingungen Ihnen gegenüber als Drittbegünstigte durchzusetzen.'
        ]
      },
      {
        title: '13. Haftungsausschlüsse',
        body: 'Soleil wird "wie besehen" und "wie verfügbar" bereitgestellt. Soweit gesetzlich zulässig, schließen wir alle hier nicht ausdrücklich genannten Gewährleistungen, Bedingungen und Zusicherungen aus, einschließlich jeder Gewährleistung, dass die App unterbrechungs- oder fehlerfrei läuft oder dass UV-, Wetter- oder Tageslichtschätzungen genau sind. Nichts in diesen Bedingungen beseitigt oder beschränkt nicht abdingbare Rechte, die Ihnen nach dem UK Consumer Rights Act 2015 oder ähnlichen Verbraucherschutzgesetzen zustehen.'
      },
      {
        title: '14. Haftungsbeschränkung',
        body: 'Wir haften für Verluste oder Schäden, die eine vorhersehbare Folge unseres Verstoßes gegen diese Bedingungen oder mangelnder angemessener Sorgfalt sind. Wir haften nicht für nicht vorhersehbare Verluste, für geschäftliche Verluste von Verbrauchern, für Sonnenbrand oder gesundheitliche Folgen aus einem Vertrauen auf Schätzungen entgegen Abschnitt 3 oder für Ausfälle, die von Apple, einem Netzbetreiber oder einem Drittdienst außerhalb unserer zumutbaren Kontrolle verursacht werden. Nichts in diesen Bedingungen schließt eine Haftung aus oder beschränkt sie, wo dies unzulässig wäre - einschließlich der Haftung für Tod oder Personenschäden durch Fahrlässigkeit, für Betrug oder in Bezug auf Ihre gesetzlichen Verbraucherrechte.'
      },
      {
        title: '15. Beendigung',
        body: 'Diese Bedingungen gelten, solange Sie die App nutzen. Sie können die Nutzung jederzeit beenden, indem Sie die App löschen und ein etwaiges Abonnement über Apple verwalten. Wir können die Bereitstellung oder Aktualisierung der App einstellen; Ihre bereits bestehenden Rechte nach Verbraucherrecht bleiben davon unberührt.'
      },
      {
        title: '16. Änderungen',
        body: 'Wir können diese Bedingungen aus rechtlichen, sicherheitsbezogenen oder produktbezogenen Gründen aktualisieren. Wir aktualisieren dann das Datum oben und informieren, soweit praktikabel, angemessen über wesentliche Änderungen. Änderungen entziehen nicht rückwirkend Rechte aus einem bereits getätigten Kauf. Wenn Sie eine wesentliche Änderung nicht akzeptieren, können Sie die Nutzung der App beenden und ein Abonnement über Apple kündigen.'
      },
      {
        title: '17. Anwendbares Recht und Gerichtsstand',
        body: 'Diese Bedingungen unterliegen dem Recht von England und Wales. Wenn Sie als Verbraucher anderswo wohnen, behalten Sie zusätzlich alle zwingenden Schutzrechte nach dem Recht Ihres Heimatlandes. Sie können Verfahren vor den Gerichten anstrengen, die Ihnen nach anwendbarem Verbraucherrecht offenstehen.'
      },
      {
        title: '18. Kontakt',
        body: 'Fragen zu diesen Bedingungen? Schreiben Sie an support@getsoleilapp.com. Eine britische Postadresse für formelle Korrespondenz ist auf Anfrage erhältlich.'
      }
    ]
  }
};
