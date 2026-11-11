import { productPath } from '../../paths';
import type { Guide } from './types';

export const part2: Guide[] = [
  {
    slug: 'can-you-tan-through-clouds',
    title: 'Can you tan or burn through clouds?',
    metaTitle: 'Can You Tan or Burn Through Clouds? UV on Overcast Days | Soleil',
    metaDescription:
      'Yes. Up to 90% of UV passes through light cloud, and broken cloud can even amplify it. Why cloudy-day sunburn is so common and how to check the real UV in seconds.',
    category: 'UV basics',
    intro: [
      'Yes. <strong>Up to 90% of UV passes through light or scattered cloud</strong>, so you can tan, and burn, on an overcast day. Cloudy-day sunburn is common precisely because the warning signs are missing: the air feels cool, the light feels soft, and your skin can’t feel UV at all.',
    ],
    blocks: [
      { type: 'h2', text: 'How much UV does cloud actually block?' },
      {
        type: 'table',
        head: ['Sky', 'Approx. UV reaching the ground'],
        rows: [
          ['Clear sky', '100% (the forecast UV index)'],
          ['Thin / scattered white cloud', '≈ 75–95%'],
          ['Broken cumulus (sun in and out)', 'Can exceed 100% in bursts (see below)'],
          ['Uniform light overcast', '≈ 30–70%'],
          ['Thick, dark storm cloud', '≈ 10–30%'],
        ],
      },
      {
        type: 'callout',
        html: '<strong>The broken-cloud effect:</strong> when the sun shines between bright cumulus clouds, reflection off their edges can push ground-level UV a few percent <em>above</em> the clear-sky value. The “safe-looking” partly cloudy day is the classic surprise-burn sky.',
      },
      { type: 'h2', text: 'Why cloudy days catch people out' },
      {
        type: 'list',
        items: [
          '<strong>No heat cue.</strong> Skin senses infrared (warmth), not UV. A cool 19&nbsp;°C day in June can carry UV 7.',
          '<strong>Longer exposure.</strong> People stay out longer when it isn’t hot: gardening, sport, festivals, all accumulating a bigger dose.',
          '<strong>No sunscreen habit.</strong> Most people only reach for SPF when it’s sunny and hot.',
        ],
      },
      { type: 'h2', text: 'And in the shade?' },
      {
        type: 'p',
        html: 'Shade blocks direct UV but not the diffuse UV scattered by the whole sky, typically half the total on a clear day. A parasol on a reflective beach might only cut your dose by 50%. Shade is a genuinely good tool; it just isn’t total protection, which is why the advice is always shade <em>plus</em> clothing <em>plus</em> sunscreen at high UV. See <a href="/guides/what-uv-index-is-safe">what UV index needs protection</a>.',
      },
    ],
    soleil: {
      heading: 'Check the real number, not the sky',
      paragraphs: [
        'Soleil shows the live UV index for exactly where you are, next to the current cloud cover, so “it looks grey” stops being a judgement call. If UV is 3 or above, it says protection is recommended, whatever the sky looks like.',
        'A Home Screen widget or Apple Watch complication makes this a half-second glance before you head out, the habit that prevents most cloudy-day burns.',
      ],
      screenshot: {
        src: productPath('/images/app/your-day.webp'),
        alt: 'Soleil’s Your Day screen: UV 10, Very High, with cloud cover at 5% and humidity beside it',
      },
    },
    faqs: [
      {
        q: 'Can you burn through a car window?',
        a: 'Windscreens block both UVB and most UVA, but side windows often pass a third or more of UVA, enough to contribute to photo-ageing on long drives. You won’t typically burn through glass, but long-term UVA exposure is real.',
      },
      {
        q: 'Can you burn in winter?',
        a: 'In the UK lowlands, winter UV rarely exceeds 1–2, so burning is unlikely. On snow at altitude it is a different story: reflection nearly doubles the dose and skiers burn readily on cold, bright days.',
      },
      {
        q: 'Does rain mean zero UV?',
        a: 'Heavy rain clouds block most UV, but moderate levels can return within minutes of the sky brightening. Check the live index rather than assuming the day is “off”.',
      },
    ],
    related: ['what-uv-index-is-safe', 'best-uv-index-for-tanning', 'how-long-can-you-stay-in-the-sun'],
  },

  {
    slug: 'fitzpatrick-skin-type',
    title: 'What’s your Fitzpatrick skin type? The 6 types, explained',
    metaTitle: 'Fitzpatrick Skin Type Test: Find Your Type (I–VI) | Soleil',
    metaDescription:
      'The Fitzpatrick scale classifies skin I–VI by how it burns and tans. Identify your type with the trait table and see why it changes your sun-protection timing.',
    category: 'Skin',
    intro: [
      'The <strong>Fitzpatrick scale</strong>, developed by dermatologist Thomas Fitzpatrick in 1975, classifies skin into <strong>six types</strong> based on how it responds to UV: how easily it burns and how readily it tans. It remains the standard shorthand dermatologists use to talk about sun sensitivity, and it’s the single biggest personal factor in how quickly you burn.',
    ],
    blocks: [
      { type: 'h2', text: 'The six types' },
      {
        type: 'table',
        head: ['Type', 'Typical features', 'Burns?', 'Tans?'],
        rows: [
          ['I', 'Very fair skin, often freckles; red or blond hair; light eyes', 'Always, quickly', 'Never; peels'],
          ['II', 'Fair skin; light hair and eyes common', 'Easily', 'Minimally, with difficulty'],
          ['III', 'Medium / cream skin; any hair colour', 'Sometimes, mildly', 'Gradually and uniformly'],
          ['IV', 'Olive or light brown skin', 'Rarely', 'Easily, to medium brown'],
          ['V', 'Brown skin', 'Very rarely', 'Deeply and easily'],
          ['VI', 'Deeply pigmented brown to black skin', 'Almost never', 'Deeply'],
        ],
      },
      { type: 'h2', text: 'Why it matters' },
      {
        type: 'p',
        html: 'At the same UV index, a Type I and a Type IV person have completely different burn timelines: roughly 15 minutes versus an hour at UV 6. Generic advice (“limit midday sun”) is written for everyone at once; knowing your type is what turns the <a href="/guides/what-uv-index-is-safe">UV index</a> into a number that means something for <em>your</em> skin.',
      },
      { type: 'h3', text: 'The scale’s honest limitations' },
      {
        type: 'list',
        items: [
          'It was designed around sun response, and self-assessment is subjective; people routinely overestimate how well they tan.',
          'It doesn’t capture photosensitivity from medication, conditions or recent exfoliation.',
          '<strong>Types V–VI still need sun protection.</strong> Melanin is good natural SPF, but skin cancer occurs in all skin tones, and is often caught later in deeper tones.',
        ],
      },
    ],
    soleil: {
      heading: 'Set it once, and every number becomes yours',
      paragraphs: [
        'Soleil establishes your Fitzpatrick type during onboarding: answer a short survey, pick it directly, or use the optional AI skin scan (one photo through a secure proxy, never stored, with a fully on-device fallback).',
        'From then on, every protection-check estimate, family profile and session record is calibrated to the skin you actually have, not a population average. You can change it any time in the You tab.',
      ],
      screenshot: {
        src: productPath('/images/app/you.webp'),
        alt: 'Soleil’s You tab: Skin Type III, then each person in the family with their own protection guidance',
      },
    },
    faqs: [
      {
        q: 'Can your Fitzpatrick type change?',
        a: 'Your underlying type is genetic and stable. What changes is state: a tan temporarily raises your tolerance slightly, and medication or exfoliation can lower it. Assess yourself against untanned skin.',
      },
      {
        q: 'Which skin type is most common?',
        a: 'Globally, Types III–IV are most common. In the UK and Ireland, Types I–II make up an unusually large share, which is why British skin burns so readily on holiday.',
      },
      {
        q: 'Do Types V and VI need sunscreen?',
        a: 'Yes, though burn urgency is lower. UV still drives DNA damage, hyperpigmentation and skin cancer in deeper skin tones, and outcomes are often worse because detection is later. Protection advice applies to everyone at high UV.',
      },
    ],
    related: ['how-long-can-you-stay-in-the-sun', 'what-does-spf-mean', 'how-much-sun-for-vitamin-d'],
  },

  {
    slug: 'uv-index-for-kids',
    title: 'What UV index is safe for kids? A parent’s guide',
    metaTitle: 'What UV Index Is Safe for Kids? Family Sun Safety Guide | Soleil',
    metaDescription:
      'Children need protection from UV 3, and babies under 6 months should stay out of direct sun entirely. Practical family rules: shade, clothing, SPF, reapply timing.',
    category: 'Family',
    intro: [
      'Use the same threshold as adults, <strong>protection from UV 3 upwards</strong>, but apply it more strictly: children’s skin is thinner, burns faster, and childhood sunburns disproportionately raise lifetime melanoma risk. <strong>Babies under 6 months should be kept out of direct sun entirely</strong>, relying on shade and clothing rather than sunscreen.',
    ],
    blocks: [
      { type: 'h2', text: 'The family rules that matter most' },
      {
        type: 'list',
        items: [
          '<strong>Under 6 months:</strong> full shade, breathable long layers and a brimmed hat. Sunscreen only on small exposed areas if shade is genuinely impossible (NHS guidance).',
          '<strong>Shade and clothing first, sunscreen second.</strong> A rash vest and hat protect reliably all afternoon; sunscreen needs perfect application and reapplication.',
          '<strong>SPF 30+ broad spectrum</strong> on what clothing doesn’t cover, applied 15–30 minutes before going out.',
          '<strong>Reapply at least every two hours</strong>, and immediately after swimming or towelling, which is constant with kids. See <a href="/guides/how-often-reapply-sunscreen">reapply timing</a>.',
          '<strong>Time the day around the peak.</strong> Playground before 11am, pool late afternoon; picnic in the shade between.',
        ],
      },
      { type: 'h2', text: 'Why children burn faster' },
      {
        type: 'p',
        html: 'Children’s stratum corneum (the outer barrier layer) is thinner and their melanin response is immature, so an exposure an adult shrugs off can redden a child. They also don’t self-monitor; nobody aged six comes inside because they’ve “had enough UV”. The monitoring has to be done for them, which in practice means a parent keeping rough track of several different skin types at once.',
      },
      {
        type: 'callout',
        html: '<strong>School and sport:</strong> the highest-dose days in a UK child’s year are often sports day, school trips and weekend matches: long hours outside, mid-June, nobody reapplying. A morning application plus a hat in the kit bag changes those days materially.',
      },
    ],
    soleil: {
      heading: 'One outing, every child in view',
      paragraphs: [
        'Family is built into Soleil’s session model. Add a profile for each person you look after, each with their own skin type, then start an outing and record sunscreen, shade, cover and swimming per person. Each child gets their <strong>own reapply reminder</strong>, because the toddler who just towelled off is not on the same clock as the teenager in the shade.',
        'The You tab shows everyone’s skin type and protection guidance at a glance, and family data stays on your devices and in your own private iCloud: no Soleil account, nothing shared with us. Pro adds the family’s history over time and a Family status widget.',
      ],
      screenshot: {
        src: productPath('/images/app/you.webp'),
        alt: 'Soleil’s You tab: family members, including a child, each with their own skin type and protection guidance',
      },
    },
    faqs: [
      {
        q: 'What sunscreen should babies and toddlers use?',
        a: 'From 6 months, a broad-spectrum SPF 30–50 formulated for children; mineral (zinc/titanium) formulas are often gentler on reactive skin. Under 6 months, shade and clothing instead of sunscreen, per NHS advice.',
      },
      {
        q: 'Do kids need sun protection on cloudy days?',
        a: 'Yes, when UV is 3 or above. Most of the UV passes through light cloud, and cool cloudy sports days are classic burn scenarios. Check the live UV rather than the sky.',
      },
      {
        q: 'How serious is childhood sunburn really?',
        a: 'Epidemiological studies link even a handful of blistering childhood sunburns to a substantially increased lifetime melanoma risk. Preventing burns in childhood is among the highest-leverage sun-safety actions a family can take.',
      },
    ],
    related: ['how-often-reapply-sunscreen', 'what-uv-index-is-safe', 'can-you-tan-through-clouds'],
  },

  {
    slug: 'what-does-spf-mean',
    title: 'What does SPF actually mean?',
    metaTitle: 'What Does SPF Mean? SPF 30 vs 50, How It Really Works | Soleil',
    metaDescription:
      'SPF is a lab-measured multiplier of how long skin takes to redden under UVB. SPF 30 filters ~96.7%, SPF 50 ~98%, and real-world application changes everything.',
    category: 'Sunscreen',
    intro: [
      '<strong>SPF, or Sun Protection Factor,</strong> is a lab measurement of how much longer protected skin takes to redden under UVB compared with bare skin. SPF 30 means 30× longer <em>under test conditions</em>: a thick, even 2&nbsp;mg/cm² layer that almost nobody applies in real life. It measures UVB (burning) protection only; UVA (ageing) protection is labelled separately.',
    ],
    blocks: [
      { type: 'h2', text: 'What the numbers filter' },
      {
        type: 'table',
        head: ['SPF', 'UVB filtered', 'UVB reaching skin'],
        rows: [
          ['SPF 15', '≈ 93.3%', '1/15th'],
          ['SPF 30', '≈ 96.7%', '1/30th'],
          ['SPF 50', '≈ 98.0%', '1/50th'],
          ['SPF 100', '≈ 99.0%', '1/100th'],
        ],
      },
      {
        type: 'p',
        html: 'Notice the shape: the step from 15 to 30 halves the UV getting through, but 50 to 100 halves an already-tiny remainder. That’s why dermatologists call SPF 30–50 the sweet spot; beyond it, marketing outruns physics.',
      },
      { type: 'h2', text: 'Why real-world SPF is lower' },
      {
        type: 'list',
        items: [
          '<strong>Quantity:</strong> at the typical quarter-to-half dose people actually apply, SPF falls roughly exponentially: an SPF 30 performs more like 5–10.',
          '<strong>Coverage:</strong> missed patches (ears, hairline, tops of feet, back of neck) get SPF 0.',
          '<strong>Time:</strong> filters degrade and the layer wears off, hence <a href="/guides/how-often-reapply-sunscreen">the two-hour reapply rule</a>.',
        ],
      },
      { type: 'h2', text: 'Don’t forget UVA' },
      {
        type: 'p',
        html: 'UVA penetrates deeper, drives photo-ageing and contributes to skin cancer, and passes through glass. In the UK/EU, look for the <strong>UVA circle logo</strong> (UVA protection at least a third of the SPF) or a star rating; “broad spectrum” is the US equivalent. A high SPF with poor UVA coverage protects you from the burn while letting the ageing wavelengths through.',
      },
    ],
    soleil: {
      heading: 'SPF as an input, not a promise',
      paragraphs: [
        'Soleil records which SPF you’re wearing and factors it into your protection-check estimates alongside live UV, your skin type and clothing, using conservative real-world assumptions, not the lab multiplier.',
        'It’s honest by design: logging SPF 50 doesn’t make the timer promise you the whole afternoon, and reapplying never extends a session. The estimate is a prompt to reassess, not permission.',
      ],
      screenshot: {
        src: productPath('/images/app/live-outing.webp'),
        alt: 'Soleil’s live outing: elapsed time, not a safe-time countdown, beside a protection check and sunscreen alerts',
      },
    },
    faqs: [
      {
        q: 'Is SPF 100 twice as good as SPF 50?',
        a: 'No. SPF 50 already filters about 98% of UVB; SPF 100 filters about 99%. The marginal gain is small, and very high SPFs can encourage longer exposure and less reapplication.',
      },
      {
        q: 'Does the SPF in makeup or moisturiser count?',
        a: 'Only partially. Studies show people apply cosmetics far too thinly to reach the labelled SPF, and coverage misses zones like ears and jawline. Treat cosmetic SPF as a bonus layer, not your protection plan.',
      },
      {
        q: 'Mineral or chemical sunscreen: does it change the SPF rules?',
        a: 'No. Zinc/titanium (mineral) filters reflect and absorb UV; organic (“chemical”) filters absorb it. Application quantity, coverage and reapplication rules are identical for both.',
      },
    ],
    related: ['how-often-reapply-sunscreen', 'how-long-can-you-stay-in-the-sun', 'fitzpatrick-skin-type'],
  },

  {
    slug: 'apple-watch-time-in-daylight',
    title: 'Apple Watch “Time in Daylight”, explained',
    metaTitle: 'Apple Watch Time in Daylight: How It Works & How to Use It | Soleil',
    metaDescription:
      'Time in Daylight uses the Apple Watch ambient light sensor to estimate minutes spent in ≥1,000 lux. How it works, where to find it, its limits, and how to pair it with UV.',
    category: 'Apple Watch',
    intro: [
      '<strong>Time in Daylight</strong> is an Apple Watch feature (watchOS 10 and later, Series 6 onwards and SE 2) that uses the <strong>ambient light sensor</strong> to estimate how many minutes you spend in daylight, roughly light of 1,000&nbsp;lux or more. Apple built it around research linking daylight exposure to lower myopia risk in children and to mood and circadian health in adults.',
    ],
    blocks: [
      { type: 'h2', text: 'How it works and where to find it' },
      {
        type: 'list',
        items: [
          'The watch samples ambient light through the day and accumulates minutes above the daylight threshold, with no GPS or UV measurement involved.',
          'View it in the <strong>Health app → Browse → Other Data → Time in Daylight</strong> (or via Health Sharing for a child’s watch).',
          'It syncs to HealthKit, so apps you authorise can read it, which is how Soleil uses it.',
        ],
      },
      { type: 'h2', text: 'What it can’t tell you' },
      {
        type: 'p',
        html: 'Time in Daylight measures <em>brightness</em>, not <em>UV</em>. An hour under a bright overcast sky and an hour at UV 9 on a beach can log identically, but their meaning for your skin is completely different. It also can’t see sunscreen, clothing or shade. It answers “did I get outside?”, not “what did the sun do to me?”.',
      },
      {
        type: 'callout',
        html: '<strong>The missing half of the picture is UV.</strong> Daylight minutes plus the day’s UV curve (what was the index while you were out?) is what turns the metric into something you can act on.',
      },
    ],
    soleil: {
      heading: 'Real Sun: your daylight, against the day’s UV',
      paragraphs: [
        'Soleil’s <strong>Real Sun</strong> (Pro) reads your Time in Daylight from HealthKit, with your permission, read-only and entirely on-device, and draws it against the same day’s UV curve. You can see at a glance whether your outdoor time was gentle morning light or peak-index sun, and what that meant for your exposure.',
        'The free Soleil Watch app also puts live UV, session time and today’s daylight on your wrist, with complications and a Smart Stack card.',
      ],
      screenshot: {
        src: productPath('/images/app/your-sun.webp'),
        alt: 'The Soleil Your Sun tab: start the Sun timer and keep protection checks running',
      },
    },
    faqs: [
      {
        q: 'Which Apple Watch models support Time in Daylight?',
        a: 'Apple Watch SE (2nd gen), Series 6 and later, and all Ultra models, running watchOS 10 or newer. Older models lack the required ambient light sensor pipeline.',
      },
      {
        q: 'Does sleeve position affect the measurement?',
        a: 'Yes. A covered watch reads darker, so winter coats and long sleeves undercount daylight. Treat the number as a good estimate rather than a precise measurement.',
      },
      {
        q: 'Does sitting by a window count as daylight?',
        a: 'Sometimes. Bright light through glass can exceed the lux threshold. But remember glass blocks UVB entirely, so window “daylight” contributes nothing to vitamin D.',
      },
    ],
    related: ['how-much-sun-for-vitamin-d', 'what-uv-index-is-safe', 'how-long-can-you-stay-in-the-sun'],
  },
];
