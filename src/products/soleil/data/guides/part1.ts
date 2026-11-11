import { productPath } from '../../paths';
import type { Guide } from './types';

export const part1: Guide[] = [
  {
    slug: 'how-long-can-you-stay-in-the-sun',
    title: 'How long can you stay in the sun without burning?',
    metaTitle: 'How Long Can You Stay in the Sun Without Burning? | Soleil',
    metaDescription:
      'How long you can stay in the sun depends on the UV index and your skin type, from ~10 minutes to a few hours. See the table, the maths, and how to track it live.',
    category: 'Sun safety',
    intro: [
      'There is no single answer: the time it takes skin to start burning depends on the current <strong>UV index</strong> and your <strong>Fitzpatrick skin type</strong>. At UV 6, very fair skin (Type I) can start to redden in roughly 15–20 minutes unprotected, while deeply pigmented skin (Type VI) may tolerate two hours or more. Double the UV index and the time roughly halves.',
      'Every figure below is an estimate for intact, unprotected adult skin, not a personal safety promise. Altitude, water and sand reflection, medications and patchy sunscreen all shorten it.',
    ],
    blocks: [
      { type: 'h2', text: 'Approximate time to first redness, by skin type' },
      {
        type: 'p',
        html: 'Dermatology references express burn time as a “minimal erythemal dose”: the UV energy at which skin visibly reddens. Converted to minutes at a <strong>UV index of 6</strong> (a typical high-summer afternoon in the UK), unprotected estimates look like this:',
      },
      {
        type: 'table',
        head: ['Fitzpatrick type', 'Typical features', 'Approx. time at UV 6'],
        rows: [
          ['Type I', 'Very fair, always burns, never tans', '≈ 15–20 min'],
          ['Type II', 'Fair, burns easily, tans minimally', '≈ 20–30 min'],
          ['Type III', 'Medium, sometimes mild burn, tans uniformly', '≈ 30–40 min'],
          ['Type IV', 'Olive, rarely burns, tans well', '≈ 40–60 min'],
          ['Type V', 'Brown, very rarely burns', '≈ 60–90 min'],
          ['Type VI', 'Deeply pigmented, almost never burns', '≈ 90 min +'],
        ],
      },
      {
        type: 'callout',
        html: '<strong>The halving rule:</strong> burn time scales inversely with UV. If you have about 30 minutes at UV 6, you have roughly 15 minutes at UV 12, and about an hour at UV 3.',
      },
      { type: 'h2', text: 'What shortens the estimate' },
      {
        type: 'list',
        items: [
          '<strong>Reflection.</strong> Water, white sand and snow bounce UV back at you; snow can nearly double your dose.',
          '<strong>Altitude.</strong> UV rises roughly 10% per 1,000 m of elevation.',
          '<strong>Patchy sunscreen.</strong> Most people apply a quarter to a half of the tested amount, so real-world SPF is far below the number on the bottle.',
          '<strong>Medication and skin conditions.</strong> Some antibiotics, retinoids and conditions increase photosensitivity. Follow your clinician’s advice, not a table.',
          '<strong>Wet or exfoliated skin.</strong> Freshly scrubbed or wet skin burns faster.',
        ],
      },
      { type: 'h2', text: 'Does sunscreen multiply your time?' },
      {
        type: 'p',
        html: 'In theory, SPF 30 multiplies your unprotected time by 30. In practice it doesn’t, because application is thin, uneven and wears off with water, sweat and towelling. That’s why dermatologists say <strong>reapply at least every two hours</strong> rather than “SPF 50 lasts all day”. Treat sunscreen as risk reduction, not a licence to stay out indefinitely. See <a href="/guides/what-does-spf-mean">what SPF actually means</a>.',
      },
    ],
    soleil: {
      heading: 'Let Soleil do this maths, live',
      paragraphs: [
        'Soleil takes the live UV index for where you are (from Apple WeatherKit), your Fitzpatrick skin type, your SPF and what you’re wearing, and turns them into a personal <strong>protection check</strong>: a reminder to reassess shade and sunscreen before the estimate runs out, with a live ring on your phone and in the Dynamic Island.',
        'It deliberately frames the number as a check, not permission: reapplying sunscreen never “resets” your time outside. Start a session when you head out and Soleil keeps watch while you enjoy the day.',
      ],
      screenshot: {
        src: productPath('/images/app/live-outing.webp'),
        alt: 'Soleil’s live outing: 18 minutes outside at UV 10, labelled as elapsed time, not a safe-time countdown, with a protection check and sunscreen alerts',
      },
    },
    faqs: [
      {
        q: 'Do you burn faster in water or on sand?',
        a: 'Yes. Water and sand reflect UV onto your skin, and being in water offers little protection, because UV penetrates the surface. Swimmers and beachgoers typically receive a higher dose than the UV index alone suggests.',
      },
      {
        q: 'Can you burn at high altitude even when it is cold?',
        a: 'Yes. UV increases about 10% per 1,000 m of altitude, and snow reflects up to 80% of UV. Skiers can burn badly on freezing days; temperature has no effect on UV.',
      },
      {
        q: 'If I use SPF 50, can I stay out all day?',
        a: 'No. Lab SPF numbers assume a thick, even layer that nobody applies in real life, and protection degrades with water, sweat and towel-drying. Reapply at least every two hours and use shade and clothing during peak UV.',
      },
    ],
    related: ['what-uv-index-is-safe', 'what-does-spf-mean', 'fitzpatrick-skin-type'],
  },

  {
    slug: 'what-uv-index-is-safe',
    title: 'What UV index is safe? The scale, explained properly',
    metaTitle: 'What UV Index Is Safe? UV Scale 0–11+ Explained | Soleil',
    metaDescription:
      'UV index below 3 is low risk for most people; 3 and above calls for protection. Full UV scale table, what each level means for your skin, and when to check it.',
    category: 'UV basics',
    intro: [
      'For most skin types, a UV index <strong>below 3 is considered low risk</strong>, and no special protection is usually needed. From <strong>UV 3 upwards</strong>, the World Health Organization recommends sun protection: shade, clothing, and sunscreen. “Safe” is relative, though: very fair skin can still redden during long exposure at UV 2, and deeply pigmented skin tolerates far more.',
    ],
    blocks: [
      { type: 'h2', text: 'The UV index scale' },
      {
        type: 'table',
        head: ['UV index', 'Category', 'What it means in practice'],
        rows: [
          ['0–2', 'Low', 'Minimal risk for most people. Very fair skin should still be mindful during long exposure.'],
          ['3–5', 'Moderate', 'Protection recommended: seek shade around midday, cover up, use SPF 30+.'],
          ['6–7', 'High', 'Protection essential. Fair skin can redden in under half an hour.'],
          ['8–10', 'Very high', 'Extra care: minimise midday exposure, reapply sunscreen diligently.'],
          ['11+', 'Extreme', 'Unprotected skin can burn in minutes. Avoid midday sun entirely.'],
        ],
      },
      { type: 'h2', text: 'Why UV 3 is the magic threshold' },
      {
        type: 'p',
        html: 'The WHO’s guidance is built around UV 3 because that’s roughly where the rate of skin damage starts to outpace what typical incidental exposure can repair. It’s also the threshold many public-health campaigns (including Cancer Research UK) use for “think about protection”. Below 3, most people can be outside freely, which matters, because time outdoors is genuinely good for you.',
      },
      { type: 'h2', text: 'When is UV highest?' },
      {
        type: 'list',
        items: [
          '<strong>Time of day:</strong> around solar noon, roughly 11am–3pm in a UK summer. About 60% of the day’s UV arrives in that window.',
          '<strong>Season:</strong> late May to mid-July peaks in the northern hemisphere; UK summer days regularly reach UV 6–8.',
          '<strong>Latitude and altitude:</strong> closer to the equator and higher up both raise UV sharply.',
          '<strong>Surroundings:</strong> water, sand and snow reflect UV; light cloud barely reduces it. See <a href="/guides/can-you-tan-through-clouds">UV on cloudy days</a>.',
        ],
      },
      {
        type: 'callout',
        html: '<strong>Heat is not UV.</strong> A cool, breezy day in June can carry the same UV as a heatwave. Your skin can’t feel UV, which is exactly why people burn on “mild” days.',
      },
    ],
    soleil: {
      heading: 'Know the UV without thinking about it',
      paragraphs: [
        'Soleil’s Your Day tab reads the live UV index for your exact location and leads with it in one card, <strong>UV now</strong>, plus the day’s peak time, hourly curve and cloud cover. When UV crosses 3, it says protection is recommended, plainly.',
        'Home Screen and Apple Watch widgets keep the current UV one glance away, and optional peak-UV alerts warn you before the strongest part of the day.',
      ],
      screenshot: {
        src: productPath('/images/app/uv-index.webp'),
        alt: 'Soleil’s UV Index sheet: UV 10, Very High, with the day’s curve peaking around midday and the UV scale beneath it',
      },
    },
    faqs: [
      {
        q: 'Can you get sunburnt at UV 1 or 2?',
        a: 'It is unlikely for most people during normal activity, but very fair (Type I) skin can redden during extended exposure, especially with reflection from water or snow. Low UV is low risk, not zero risk.',
      },
      {
        q: 'What is the highest UV index ever recorded?',
        a: 'Readings around 25 were reported at Bolivia’s Licancabur volcano in 2003: extreme altitude plus tropical latitude. Everyday extremes of 11–14 occur in Australia, South America and at altitude.',
      },
      {
        q: 'Does temperature affect the UV index?',
        a: 'No. UV depends on the sun’s angle, ozone, altitude and cloud, not air temperature. Cool days in early summer routinely carry high UV, which is why they cause so many surprise burns.',
      },
    ],
    related: ['how-long-can-you-stay-in-the-sun', 'can-you-tan-through-clouds', 'uv-index-for-kids'],
  },

  {
    slug: 'best-uv-index-for-tanning',
    title: 'What’s the best UV index for tanning?',
    metaTitle: 'Best UV Index for Tanning: Honest Answer + Safer Habits | Soleil',
    metaDescription:
      'Tanning starts from about UV 3. Lower UV means slower colour but lower burn risk; UV 8+ mostly adds damage. The honest dermatology position, plus how to pace exposure.',
    category: 'Tanning',
    intro: [
      'Melanin production ramps up from about <strong>UV 3</strong>, so if you’re going to spend time in the sun for colour, a <strong>moderate index of 3–5</strong> gives skin a chance to respond gradually with a lower risk of burning. Higher UV doesn’t give you a “better” tan; it mostly compresses the time between some colour and a burn that undoes it.',
      'Honesty first: dermatologists are clear that <strong>no UV tan is risk-free</strong>. A tan is your skin’s damage response. If you choose to tan anyway, the realistic goal is pacing, never burning, because burns drive both photo-ageing and skin-cancer risk.',
    ],
    blocks: [
      { type: 'h2', text: 'How tanning actually works' },
      {
        type: 'p',
        html: 'UVB stimulates melanocytes to produce new melanin over 24–72 hours (delayed tanning), while UVA oxidises existing melanin for the short-lived “same-day” tint. Both wavelengths damage DNA on the way. That’s why colour built slowly over multiple short, sub-burn exposures lasts longer and costs less damage than one long session.',
      },
      { type: 'h2', text: 'Pacing rules that actually protect you' },
      {
        type: 'list',
        items: [
          '<strong>Stay well inside your burn time.</strong> Know your skin type’s approximate limit for the current UV and stop at roughly half of it. See <a href="/guides/how-long-can-you-stay-in-the-sun">how long you can stay in the sun</a>.',
          '<strong>Avoid the midday peak.</strong> Late morning or mid-afternoon at UV 3–5 beats noon at UV 8 in every way except speed.',
          '<strong>Wear SPF anyway.</strong> You will still develop colour with SPF 30, more slowly and with far less burn risk.',
          '<strong>Skip consecutive long days.</strong> Skin needs 48–72 hours to express the melanin you’ve already triggered.',
          '<strong>Hydrate and moisturise.</strong> A burn peels; a paced tan doesn’t.',
        ],
      },
      {
        type: 'callout',
        html: '<strong>UV 8+ is not a tanning opportunity.</strong> At very high UV, fair and medium skin types reach burn territory in 10–25 minutes, usually before meaningful extra melanin is triggered. You gain risk, not colour.',
      },
    ],
    soleil: {
      heading: 'Pace it with Daily Glow',
      paragraphs: [
        'Soleil’s <strong>Daily Glow</strong> sessions (Pro) run your sun routine as a guided timer: your products, your steps, your SPF, with protection checks scheduled from the live UV and your skin type. The free sun timer covers simple sessions.',
        'Because Soleil tracks the sessions you actually did, you can build colour across a week without silently stacking three long days back-to-back, and reapply reminders fire on schedule, sooner after swimming or towel-drying.',
      ],
      screenshot: {
        src: productPath('/images/app/your-sun.webp'),
        alt: 'Soleil’s Your Sun tab: start the Sun timer or a Daily Glow routine, with a protection note before you go',
      },
    },
    faqs: [
      {
        q: 'Can you tan at UV 2?',
        a: 'Barely. Below UV 3, melanin stimulation is minimal for most skin types, so any colour develops extremely slowly. Fair skin is unlikely to tan at all at UV 2, though very long exposure still adds UVA damage.',
      },
      {
        q: 'Do tanning oils speed things up safely?',
        a: 'No. Most oils have little or no SPF and work partly by focusing UV on the skin. They accelerate burning as much as tanning. If you use one, choose a product with genuine broad-spectrum SPF.',
      },
      {
        q: 'Is a base tan protective for a holiday?',
        a: 'Only trivially: a natural tan offers protection of roughly SPF 2–4, far below any sunscreen. It does not earn you safe extra time at holiday UV levels.',
      },
    ],
    related: ['what-uv-index-is-safe', 'can-you-tan-through-clouds', 'how-often-reapply-sunscreen'],
  },

  {
    slug: 'how-often-reapply-sunscreen',
    title: 'How often should you reapply sunscreen?',
    metaTitle: 'How Often to Reapply Sunscreen (2-Hour Rule + Exceptions) | Soleil',
    metaDescription:
      'Reapply sunscreen at least every 2 hours, and immediately after swimming, heavy sweating or towel-drying. Why the rule exists, how much to use, and how to never forget.',
    category: 'Sunscreen',
    intro: [
      'Reapply <strong>at least every two hours</strong> while you’re in the sun, and <strong>immediately after swimming, heavy sweating or towel-drying</strong>, whatever the bottle says. “Water-resistant” formulas are typically tested for just 40–80 minutes in water, and towelling removes most of what’s left.',
    ],
    blocks: [
      { type: 'h2', text: 'Why every two hours?' },
      {
        type: 'p',
        html: 'Sunscreen filters degrade in UV light, rub off on clothes and skin contact, and migrate with sweat and skin oils. Studies consistently show real-world protection falling well below the labelled SPF within a couple of hours. The two-hour rule isn’t marketing; it’s the point at which a typical application has thinned enough to matter.',
      },
      { type: 'h2', text: 'The part everyone gets wrong: quantity' },
      {
        type: 'p',
        html: 'Lab SPF is measured at 2&nbsp;mg of product per cm² of skin. For an adult body that’s roughly <strong>six to eight teaspoons, about a shot glass</strong>, and around half a teaspoon for face, ears and neck. Most people apply a quarter to a half of that, which cuts an SPF 30 to an effective SPF of roughly 5–10. Applying generously matters more than the number on the tube.',
      },
      { type: 'h2', text: 'Reapply sooner when…' },
      {
        type: 'list',
        items: [
          'You’ve been <strong>swimming</strong>. Even “very water resistant” products are only tested to 80 minutes.',
          'You’ve been <strong>sweating heavily</strong>: sport, hot days, hiking.',
          'You’ve <strong>towelled off</strong>. Towelling removes most product in one pass.',
          'It’s <strong>peak UV</strong> (11am–3pm) and you’re staying out, so err on the side of a fresh layer.',
        ],
      },
      {
        type: 'callout',
        html: '<strong>Reapplying is not a reset button.</strong> Fresh sunscreen restores protection going forward; it doesn’t undo the dose you’ve already absorbed. Your total time in strong sun still counts. Track it separately from your SPF.',
      },
    ],
    soleil: {
      heading: 'Reminders that survive real life',
      paragraphs: [
        'Log a sunscreen application in Soleil and it schedules the next reminder: never more than two hours out, and sooner if you record swimming, sweating or towel-drying. On a family outing, each person gets their own reapply reminder, because a toddler’s schedule isn’t yours.',
        'Crucially, Soleil never treats a reapplication as extra permitted time outside: the session clock keeps running, and protection checks stay honest.',
      ],
      screenshot: {
        src: productPath('/images/app/live-outing.webp'),
        alt: 'Soleil’s live outing: elapsed time outside, a protection check and sunscreen reminder alerts',
      },
    },
    faqs: [
      {
        q: 'Does SPF 50 last longer than SPF 30?',
        a: 'No. SPF describes how much UVB is filtered while the layer is intact, not how long it lasts. Both need reapplying at least every two hours, and both come off in water and on towels.',
      },
      {
        q: 'How do I reapply over makeup?',
        a: 'SPF powders, sprays and cushion compacts make top-ups practical, though they rarely reach a full protective dose. On high-UV days, shade and a hat carry more of the load for your face.',
      },
      {
        q: 'Are “once-a-day” sunscreens real?',
        a: 'UK consumer testing has repeatedly found protection from “once-a-day” products falls substantially over a day. Dermatology bodies and Cancer Research UK still advise reapplying every two hours regardless of the label.',
      },
    ],
    related: ['what-does-spf-mean', 'how-long-can-you-stay-in-the-sun', 'uv-index-for-kids'],
  },

  {
    slug: 'how-much-sun-for-vitamin-d',
    title: 'How much sun do you need for vitamin D?',
    metaTitle: 'How Much Sun Do You Need for Vitamin D? By Skin Type & Season | Soleil',
    metaDescription:
      'Around 10–30 minutes of midday sun on forearms a few times a week suffices for lighter skin in summer; darker skin needs longer. Latitude, winter and the honest limits.',
    category: 'Wellbeing',
    intro: [
      'In summer, most lighter-skinned adults make adequate vitamin D from roughly <strong>10–30 minutes of midday sun</strong> on forearms and lower legs, <strong>two to three times a week</strong>, well under typical burn times. Deeper skin tones need meaningfully longer (often 30–60 minutes) because melanin filters UVB. Burning adds nothing: vitamin D synthesis plateaus long before your skin reddens.',
    ],
    blocks: [
      { type: 'h2', text: 'The variables that actually matter' },
      {
        type: 'table',
        head: ['Factor', 'Effect on vitamin D synthesis'],
        rows: [
          ['Skin tone', 'Melanin filters UVB, so deeper skin tones need several times longer for the same dose.'],
          ['Latitude & season', 'Above roughly 35–40° latitude (including all of the UK), winter sun is too weak: from about October to March the UVB needed simply doesn’t reach the ground.'],
          ['Time of day', 'UVB peaks around solar noon. “Little and often around midday” beats long evening exposure, when UVB is negligible.'],
          ['Skin exposed', 'Forearms + lower legs beats face + hands alone; more skin, shorter time needed.'],
          ['Age', 'Skin over ~65 synthesises noticeably less vitamin D from the same exposure.'],
          ['Glass', 'Window glass blocks UVB, so you make essentially no vitamin D indoors by a sunny window.'],
        ],
      },
      { type: 'h2', text: 'The UK winter problem' },
      {
        type: 'p',
        html: 'The NHS advises that everyone in the UK <strong>consider a daily 10&nbsp;microgram (400&nbsp;IU) supplement from October to March</strong>, because the sun is simply too low for skin synthesis regardless of how long you spend outside. Time outdoors in winter is still excellent for daylight, mood and sleep; it just isn’t a vitamin D source at UK latitudes.',
      },
      {
        type: 'callout',
        html: '<strong>Sunscreen and vitamin D:</strong> in trials, normal real-world sunscreen use does not cause deficiency, because application is imperfect enough that some UVB gets through. You don’t need to burn, or even tan, to top up.',
      },
    ],
    soleil: {
      heading: 'See the sun you actually got',
      paragraphs: [
        'Soleil deliberately does not convert sunlight into vitamin D numbers, because turning UV into IU involves so many personal unknowns that a precise figure would be false confidence. What it gives you instead is the honest raw material: your recorded time outside, and the UV that was around while you were out.',
        'With Pro, <strong>Real Sun</strong> places your Apple Watch Time in Daylight against the day’s UV curve, so you can see whether your outdoor time landed in gentle morning light or the strong midday window that drives synthesis, and answer “did I actually get outside enough this week?” from real data.',
      ],
      screenshot: {
        src: productPath('/images/app/your-sun.webp'),
        alt: 'The Soleil Your Sun tab: time outside, kept simple, with the Sun timer and Daily Glow',
      },
    },
    faqs: [
      {
        q: 'Can you get vitamin D through a window?',
        a: 'No. Standard glass blocks virtually all UVB, the wavelength skin needs for vitamin D synthesis. A sunny windowsill feels warm because of visible light and infrared, but produces essentially no vitamin D.',
      },
      {
        q: 'Do you make vitamin D on a cloudy day?',
        a: 'Some. Thin cloud still passes a substantial fraction of UVB in summer. Heavy grey cloud cuts it dramatically. In winter at UK latitudes, cloud is irrelevant: there is too little UVB either way.',
      },
      {
        q: 'Can you overdose on vitamin D from sunshine?',
        a: 'No. Skin regulates itself: prolonged exposure degrades excess previtamin D. Toxicity only occurs from very high supplement doses, never from the sun. The sun’s real limit is skin damage, not vitamin D excess.',
      },
    ],
    related: ['apple-watch-time-in-daylight', 'what-uv-index-is-safe', 'fitzpatrick-skin-type'],
  },
];
