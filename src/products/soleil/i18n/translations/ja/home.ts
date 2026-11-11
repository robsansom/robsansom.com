import type { HomeCopy, NavCopy } from '../../types';

export const nav: NavCopy = {
  features: '機能',
  how: '使い方',
  realSun: 'Real Sun',
  faq: 'よくある質問',
  guides: '日差しガイド',
  support: 'サポート',
  menu: 'メニュー',
  close: '閉じる',
  menuLabel: 'サイトメニュー',
  primaryLabel: 'メインナビゲーション',
};

export const skipLabel = '本文へスキップ';

export const home: HomeCopy = {
  hero: {
    titleLines: ['あなたの一日の', '日差しのかたち。'],
    body: 'いまいる場所のリアルタイムUV、肌に合わせた保護チェック、そして一日に寄り添う日焼け止めリマインダー。',
    note: 'iPhoneとApple Watchのために',
    imageAlt: '明るいビーチで日焼け止めを塗る女性。背景には海。',
    scrollCue: 'スクロール',
  },

  toolkit: {
    eyebrow: '機能',
    headline: 'Soleilが得意な6つのこと',
    prev: '前のカード',
    next: '次のカード',
    railLabel: 'Soleilの機能',
    cards: [
      {
        tag: 'いま',
        title: 'リアルタイムUV',
        body: 'いまいる場所の指数とカテゴリー、そして今日のピーク。データの出典と更新時刻もすぐ横に表示します。',
      },
      {
        tag: 'あなた向け',
        title: '保護チェック',
        body: '肌タイプ、SPF、服装、いまの状況をまとめて、「次にすること」をひとつだけ示します。',
      },
      {
        tag: 'リマインダー',
        title: '日焼け止めのタイミング',
        body: '最長でも2時間、泳いだ後・汗をかいた後・タオルで拭いた後はもっと早く。塗り直しても、外にいた時間はリセットされません。',
      },
      {
        tag: '外出',
        title: 'サンタイマー',
        body: '外出を開始すると、経過時間、一人ひとりの保護状況、リマインダーをまとめて管理します。Daily Glowで、ガイド付きのルーティンも追加できます。',
      },
      {
        tag: '大切な人',
        title: '家族',
        body: '見守りたい人のプロフィール。一人ひとりの肌タイプと、それぞれの塗り直しリマインダー。',
      },
      {
        tag: 'Apple Watch',
        title: 'Real Sun',
        body: 'Apple Watchの「日光を浴びた時間」を、その日のUVカーブの上に重ねて表示します。',
      },
    ],
  },

  moves: {
    eyebrow: '使い方',
    headline: '日差しの一日を、4つのステップで',
    steps: [
      {
        title: '空を確かめる',
        body: 'リアルタイムのUV指数、カテゴリー、そして今日のピーク時刻。',
      },
      {
        title: '守り方を選ぶ',
        body: '肌タイプ、SPF、服装、日陰を設定すると、保護チェックが調整されます。',
      },
      {
        title: '一日を始める',
        body: '外に出る人のサンタイマーを開始し、日焼け止めのタイミングを整えます。',
      },
      {
        title: 'Real Sunで振り返る',
        body: '自分の日光がいつだったのかを、あとから確かめられます。',
      },
    ],
  },

  uvNow: {
    eyebrow: '現在のUV',
    headline: 'UVの答えを、ひと目で',
    steps: [
      {
        label: '1枚のカード',
        title: 'Soleilを開くと、まず空が答えます。',
        body: '読み解く必要はありません。「あなたの一日」は、いまいる場所のリアルタイムUV指数から始まります。',
      },
      {
        label: '数値',
        title: '指数、カテゴリー、そして鮮度。',
        body: 'UVと気象条件はApple WeatherKitから。出典と取得時刻もあわせて表示します。',
      },
      {
        label: '一日の形',
        title: '今日のピーク、雲量、湿度。',
        body: '時間ごとのカーブが、強い時間帯がいつ来るかを、外に出る前に教えてくれます。',
      },
      {
        label: 'あなたのチェック',
        title: 'いま何をするか。どれだけいられるか、ではありません。',
        body: '肌タイプとSPFが、数値をタイムリーな保護チェックに変えます。Soleilは時間を「許可」として示すことはありません。',
      },
    ],
    imageAlt:
      'iPhoneのSoleil「あなたの一日」画面：リアルタイムUV、今日のピーク、現在の気象条件',
  },

  moments: {
    eyebrow: 'どんな日にも',
    headline: 'どんな晴れの日のためにも',
    items: [
      '送り迎えの道',
      'ビーチの日',
      '庭で過ごす午後',
      '街歩き',
      '屋外スポーツ',
      '家族旅行',
      '敏感肌',
      '曇りでも明るい日',
      'ゴールデンアワー',
    ],
    closer: 'そのあいだの、ふだんの時間も',
  },

  why: {
    eyebrow: 'Soleilを選ぶ理由',
    headline: '役に立って、あなたのもの',
    body: 'Soleilがあなたの日差しについて知ることは、すべてあなたのものです。iPhoneの中、そして同期する場合はあなた専用のiCloudの中に保存されます。アカウント作成なし、解析なし、広告なし、アプリをまたぐトラッキングもありません。',
    badges: [
      '現在地のリアルタイムUV',
      '初期設定でプライベート',
      'アカウント不要',
      '家族にも対応',
      'Apple Watch',
      'Daily Glowルーティン',
      'プライベートなiCloud同期',
      'ウィジェット',
      'ライブアクティビティ',
      'ピークUVの通知',
      '日焼け止めリマインダー',
      '雲量と湿度',
      '肌タイプのスキャン',
      '履歴とトレンド',
    ],
    note: 'ウェルネスのためのガイダンスであり、医学的な助言ではありません',
  },

  realSun: {
    eyebrow: 'Real Sun',
    headline: '予報は、これから起きるかもしれないことを教えてくれます。',
    headlineAccent: 'Real Sunは、実際に浴びた日光を見せてくれます。',
    /** Read out as the sun crosses the arc, morning to golden hour. */
    notes: [
      'やわらかな朝の光。',
      '正午に向けてUVが急上昇。',
      '日差しのピーク。対策をおすすめします。',
      '午後はしだいに和らぎます。',
      'ゴールデンアワー。低く、やさしい日差し。',
    ],
    tabsLabel: '時間帯',
    tabs: [
      {
        label: '朝',
        title: 'やわらかな光、低い指数',
        body: '一日の早い時間の日光は、UVがまだ低いうちに届きます。',
      },
      {
        label: 'ピーク',
        title: 'いちばん強い時間帯',
        body: '正午前後に指数はその日の最高に達します。あなたの日光のどれだけがここで起きたかを示します。',
      },
      {
        label: '夕方',
        title: 'ふたたびやわらぐ',
        body: '遅い時間の日光は、カーブの下がっていく側にあります。',
      },
    ],
    note: 'Real Sunは、あなたの許可を得てApple Watchの「日光を浴びた時間」を読み取ります。ヘルスケアに書き込むことはなく、日光の量を「許容量」として示すこともありません。',
    imageAlt:
      'SoleilのReal Sunグラフ：その日のUVカーブに重ねた、日光を浴びた時間',
  },

  faq: {
    eyebrow: 'よくある質問',
    headline: 'よくある質問',
    more: 'すべての質問を見る',
  },

  closing: {
    headline: 'Soleilを、いっしょに。',
    body: 'リアルタイムUV、あなたの肌のための保護チェック、そして一日に寄り添うリマインダー。',
    note: 'iPhoneとApple Watch',
    privacy:
      'アカウントなし。トラッキングなし。履歴はあなたのデバイスと、あなた自身のiCloudに残ります。',
    imageAlt: 'Soleilのアプリアイコン：青空に浮かぶ金色の太陽',
  },
};
