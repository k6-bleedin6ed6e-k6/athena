const PHOSPHOR_NOIR_SURFACES = {
  bgBase: '#111016',
  bgSurface: '#191720',
  bgPanel: '#211f2a',
  textPrimary: '#eeeaf2',
  textSecondary: '#aaa4b3',
}

export const PHASES = {
  rose: {
    key:         'rose',
    displayName: 'nyx',
    gold:        '#ea9a97',
    goldRgb:     '234,154,151',
    ...PHOSPHOR_NOIR_SURFACES,
  },
  ocean: {
    key:         'ocean',
    displayName: 'choice',
    gold:        '#5ec8ed',
    goldRgb:     '94,200,237',
    ...PHOSPHOR_NOIR_SURFACES,
  },
  gold: {
    key:         'gold',
    displayName: 'desire',
    gold:        '#f6c177',
    goldRgb:     '246,193,119',
    ...PHOSPHOR_NOIR_SURFACES,
  },
  iris: {
    key:         'iris',
    displayName: 'still-pine',
    gold:        '#c4a7e7',
    goldRgb:     '196,167,231',
    ...PHOSPHOR_NOIR_SURFACES,
  },
}

export function getPhase(hour) {
  if (hour >= 6  && hour < 11) return 'ocean'
  if (hour >= 11 && hour < 17) return 'gold'
  if (hour >= 17 && hour < 21) return 'iris'
  return 'rose'
}
