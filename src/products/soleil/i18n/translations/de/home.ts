import type { HomeCopy, NavCopy } from '../../types';

export const nav: NavCopy = {
  features: 'Features',
  how: 'So funktioniert’s',
  realSun: 'Real Sun',
  faq: 'Fragen',
  guides: 'Sonnen-Guides',
  support: 'Support',
  menu: 'Menü',
  close: 'Schließen',
  menuLabel: 'Website-Menü',
  primaryLabel: 'Hauptnavigation',
};

export const skipLabel = 'Zum Inhalt springen';

export const home: HomeCopy = {
  hero: {
    titleLines: ['Dein Sonnentag,', 'auf einen Blick.'],
    body: 'Live-UV an deinem Standort, ein Schutz-Check passend zu deiner Haut und Sonnencreme-Erinnerungen, die mit dem Tag Schritt halten.',
    note: 'Für iPhone und Apple Watch',
    imageAlt:
      'Eine Frau trägt an einem hellen Strand Sonnencreme auf, dahinter das Meer',
    scrollCue: 'Scrollen',
  },

  toolkit: {
    eyebrow: 'Das Werkzeug',
    headline: 'Sechs Dinge, die Soleil gut kann',
    prev: 'Vorherige Karte',
    next: 'Nächste Karte',
    railLabel: 'Funktionen von Soleil',
    cards: [
      {
        tag: 'Jetzt',
        title: 'Live-UV',
        body: 'Der Index an deinem Standort, seine Kategorie und das Tagesmaximum — mit Quelle und Aktualität direkt daneben.',
      },
      {
        tag: 'Persönlich',
        title: 'Schutz-Check',
        body: 'Hauttyp, LSF, Kleidung und die aktuellen Bedingungen ergeben eine klare Sache, die jetzt zu tun ist.',
      },
      {
        tag: 'Erinnerungen',
        title: 'Sonnencreme im Takt',
        body: 'Höchstens zwei Stunden, und früher nach Schwimmen, Schwitzen oder Abtrocknen. Nachcremen setzt deine Zeit draußen nie zurück.',
      },
      {
        tag: 'Draußen',
        title: 'Sonnen-Timer',
        body: 'Starte einen Ausflug: Soleil hält verstrichene Zeit, den Schutz aller und ihre Erinnerungen zusammen. Daily Glow ergänzt eine optionale geführte Routine.',
      },
      {
        tag: 'Deine Leute',
        title: 'Familie',
        body: 'Profile für alle, um die du dich kümmerst, jeweils mit eigenem Hauttyp und eigenen Nachcreme-Erinnerungen.',
      },
      {
        tag: 'Apple Watch',
        title: 'Real Sun',
        body: 'Die Tageslichtzeit deiner Watch, gezeichnet auf der UV-Kurve des Tages.',
      },
    ],
  },

  moves: {
    eyebrow: 'So funktioniert’s',
    headline: 'Ein Sonnentag in vier Schritten',
    steps: [
      {
        title: 'Schau in den Himmel',
        body: 'Der Live-UV-Index, seine Kategorie und wann der Tag sein Maximum erreicht.',
      },
      {
        title: 'Wähl deinen Schutz',
        body: 'Hauttyp, LSF, Kleidung und Schatten — der Schutz-Check passt sich an.',
      },
      {
        title: 'Starte den Tag',
        body: 'Starte den Sonnen-Timer für alle, die draußen sind, und halte die Creme-Erinnerungen in Ordnung.',
      },
      {
        title: 'Sieh dein Real Sun',
        body: 'Schau dir danach an, wann dein Tageslicht tatsächlich stattfand.',
      },
    ],
  },

  uvNow: {
    eyebrow: 'UV jetzt',
    headline: 'Die UV-Antwort, auf einen Blick',
    steps: [
      {
        label: 'Eine Karte',
        title: 'Du öffnest Soleil, und der Himmel antwortet zuerst.',
        body: 'Nichts zu entziffern. Dein Tag beginnt mit dem Live-UV-Index an deinem Standort.',
      },
      {
        label: 'Der Messwert',
        title: 'Der Index, seine Kategorie und wie frisch er ist.',
        body: 'UV und Bedingungen kommen von Apple WeatherKit, mit Quelle und Uhrzeit der Messung.',
      },
      {
        label: 'Die Form des Tages',
        title: 'Tagesmaximum, Bewölkung, Luftfeuchtigkeit.',
        body: 'Die Stundenkurve zeigt, wann der starke Teil des Tages kommt — bevor du hinausgehst.',
      },
      {
        label: 'Dein Check',
        title: 'Was jetzt zu tun ist, nicht wie lange du bleiben darfst.',
        body: 'Hauttyp und LSF machen aus dem Messwert einen Schutz-Check. Soleil stellt Zeit nie als Erlaubnis dar.',
      },
    ],
    imageAlt:
      'Der Bildschirm „Dein Tag“ von Soleil auf dem iPhone: Live-UV, Tagesmaximum und die Bedingungen dahinter',
  },

  moments: {
    eyebrow: 'Jede Art von Tag',
    headline: 'Gemacht für jede Art von Sonnentag',
    items: [
      'Der Schulweg',
      'Strandtage',
      'Nachmittage im Garten',
      'Spaziergänge in der Stadt',
      'Sport im Freien',
      'Familienurlaub',
      'Empfindliche Haut',
      'Bewölkt, aber hell',
      'Goldene Stunde',
    ],
    closer: 'und alles dazwischen',
  },

  why: {
    eyebrow: 'Warum Soleil',
    headline: 'Nützlich, und deins',
    body: 'Alles, was Soleil über deine Sonne lernt, bleibt deins: auf deinem iPhone und, wenn du synchronisierst, in deiner privaten iCloud. Kein Account, keine Analytics, keine Werbung, kein app-übergreifendes Tracking.',
    badges: [
      'Live-UV vor Ort',
      'Privat von Haus aus',
      'Ohne Account',
      'Familientauglich',
      'Apple Watch',
      'Daily Glow Routine',
      'Private iCloud-Synchronisierung',
      'Widgets',
      'Live-Aktivität',
      'Warnung beim UV-Maximum',
      'Creme-Erinnerungen',
      'Wolken und Feuchtigkeit',
      'Hauttyp-Scan',
      'Verlauf und Trends',
    ],
    note: 'Wellness-Orientierung, keine medizinische Beratung',
  },

  realSun: {
    eyebrow: 'Real Sun',
    headline: 'Prognosen sagen, was passieren könnte.',
    headlineAccent: 'Real Sun zeigt das Tageslicht, das du wirklich hattest.',
    /** Read out as the sun crosses the arc, morning to golden hour. */
    notes: [
      'Sanftes Morgenlicht.',
      'Schnell steigend. Der UV-Wert klettert Richtung Mittag.',
      'Höchststand der Sonne. Schutz wird empfohlen.',
      'Der Nachmittag wird milder.',
      'Goldene Stunde. Die Sonne steht tief und weich.',
    ],
    tabsLabel: 'Tageszeiten',
    tabs: [
      {
        label: 'Morgens',
        title: 'Sanftes Licht, niedriger Index',
        body: 'Tageslicht am frühen Morgen fällt in eine Zeit, in der der UV-Wert noch niedrig ist.',
      },
      {
        label: 'Maximum',
        title: 'Die stärksten Stunden',
        body: 'Um die Mittagszeit erreicht der Index sein Tageshoch. Soleil zeigt, wie viel deines Tageslichts hier lag.',
      },
      {
        label: 'Abends',
        title: 'Es wird wieder sanfter',
        body: 'Spätes Tageslicht liegt auf der fallenden Seite der Kurve.',
      },
    ],
    note: 'Real Sun liest mit deiner Erlaubnis die Tageslichtzeit der Apple Watch. Soleil schreibt nie in „Health“, und Tageslicht wird nie als Kontingent dargestellt.',
    imageAlt:
      'Das Real-Sun-Diagramm von Soleil: Tageslichtzeit auf der UV-Kurve des Tages',
  },

  faq: {
    eyebrow: 'Fragen',
    headline: 'Häufige Fragen',
    more: 'Alle Antworten ansehen',
  },

  closing: {
    headline: 'Nimm Soleil mit.',
    body: 'Live-UV, ein Schutz-Check für deine Haut und Erinnerungen, die mit dem Tag Schritt halten.',
    note: 'iPhone und Apple Watch',
    privacy:
      'Kein Account. Kein Tracking. Deine Historie bleibt auf deinen Geräten und in deiner eigenen iCloud.',
    imageAlt: 'Das Soleil-App-Symbol: eine goldene Sonne an blauem Himmel',
  },
};
