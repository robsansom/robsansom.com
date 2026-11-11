/** Copy inside the hand-built app-UI recreations. Where the app already
 *  says something, these use the app's own string (and its own
 *  translations in the other locales), so the recreations read like the
 *  product. The sample values are plausible, not live data. */
export const appUi = {
    /** The full Your Day screen recreated for the hero. Recreated rather
     *  than screenshotted so every locale gets its own hero rather than an
     *  English picture. */
    phoneScreen: {
      statusTime: '09:41',
      /** The handwritten line under the place name. */
      subtitle: 'The heat of the day is here',
      rightNow: 'Right now',
      tabs: ['Your Day', 'Your Sun', 'You']
    },
    /** The top card of Your Day: the live reading. */
    uvNow: {
      location: 'Santa Monica',
      label: 'UV now',
      time: '12:32',
      value: '6',
      category: 'High',
      livePill: 'Live UV',
      guidance: 'Strong sun until 4 pm. Keep direct sun short and use shade.',
      axis: ['9 am', 'Noon', '3 pm'],
      peak: 'Peak 8 · 13:00',
      tiles: [
        { label: 'Peak UV', value: '8', caption: 'Peak at 13:00' },
        { label: 'UV Level', value: 'High' },
        { label: 'Cloud Cover', value: '18 %' },
        { label: 'Humidity', value: '54 %' }
      ]
    },
    protection: {
      label: 'Protection',
      state: 'Needs a check',
      title: 'Protection is recommended now',
      body: 'Use shade, clothing and sunscreen on exposed skin.',
      skinLabel: 'Skin type',
      skinValue: 'Type III',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: 'Cover',
      coverValue: 'Hat + shade'
    },
    /** Sunscreen runs on its own clock and never resets time outside. */
    reminders: {
      label: 'Alerts',
      state: 'Alerts ready',
      title: 'Reapply by 14:40',
      body: 'Two hours at most, sooner after water, sweat or towel-drying.',
      activity: 'Live Activity active'
    },
    /** The Sun timer's live outing: elapsed time only, never a countdown. */
    outing: {
      label: 'Live outing',
      outsideFor: 'Outside for',
      elapsed: '18:42',
      uvLine: 'UV 6 · High',
      footnote: 'Elapsed time, not a safe-time countdown'
    },
    people: {
      label: 'Your people',
      childBadge: 'Child',
      list: [
        { name: 'You', child: false, detail: 'Type III · SPF 50, applied 12 min ago' },
        { name: 'Maya', child: true, detail: 'Type II · SPF 50, applied 40 min ago' }
      ]
    },
    /** Real Sun, from Apple Watch's Time in Daylight. */
    daylight: {
      label: 'Time in Daylight',
      source: 'From Apple Watch',
      value: '195 min',
      axis: ['9:00', 'Noon', '15:00']
    }
};
