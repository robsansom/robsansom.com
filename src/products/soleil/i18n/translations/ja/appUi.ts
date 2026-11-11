/** Copy inside the hand-built app-UI recreations. Uses the app's own
 *  translations wherever the app already says it. Sample values only. */
import type { AppUiCopy } from '../../types';

export const appUi: AppUiCopy = {
    phoneScreen: {
      statusTime: '09:41',
      subtitle: '一日でいちばん暑い時間です',
      rightNow: '現在',
      tabs: ['あなたの一日', 'あなたの太陽', 'あなた']
    },
    uvNow: {
      location: 'サンタモニカ',
      label: '現在のUV',
      time: '12:32',
      value: '6',
      category: '強い',
      livePill: 'ライブUV',
      guidance: '16時まで日差しが強めです。直射日光は短めに、日陰を使いましょう。',
      axis: ['9時', '12時', '15時'],
      peak: 'ピーク 8・13:00',
      tiles: [
        { label: '最大UV', value: '8', caption: '13:00にピーク' },
        { label: 'UVレベル', value: '強い' },
        { label: '雲量', value: '18 %' },
        { label: '湿度', value: '54 %' }
      ]
    },
    protection: {
      label: '保護',
      state: '確認が必要',
      title: '今は保護が推奨されます',
      body: '日陰と衣服を使い、露出した肌には日焼け止めを塗ってください。',
      skinLabel: '肌タイプ',
      skinValue: 'タイプIII',
      spfLabel: 'SPF',
      spfValue: '50',
      coverLabel: '服装',
      coverValue: '帽子＋日陰'
    },
    reminders: {
      label: '通知',
      state: 'アラート準備完了',
      title: '14:40までに塗り直し',
      body: '最長2時間。水・汗・タオルの後は、より早めに塗り直しましょう。',
      activity: 'ライブアクティビティ実行中'
    },
    outing: {
      label: '外出中',
      outsideFor: '屋外での経過時間',
      elapsed: '18:42',
      uvLine: 'UV 6・強い',
      footnote: '経過時間です。安全な時間のカウントダウンではありません'
    },
    people: {
      label: 'あなたの大切な人',
      childBadge: '子ども',
      list: [
        { name: 'あなた', child: false, detail: 'タイプIII・SPF 50、12分前に塗布' },
        { name: 'マヤ', child: true, detail: 'タイプII・SPF 50、40分前に塗布' }
      ]
    },
    daylight: {
      label: '日光を浴びた時間',
      source: 'Apple Watchから',
      value: '195分',
      axis: ['9:00', '正午', '15:00']
    }
};
