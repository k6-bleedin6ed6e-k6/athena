const PHOSPHOR_NOIR_SURFACES = {
  rose:  { bgBase: '#e9e0e7', bgSurface: '#f8f3f7', bgPanel: '#ded3df', textPrimary: '#2d222d', textSecondary: '#493b49' },
  ocean: { bgBase: '#e3eff1', bgSurface: '#f5fafb', bgPanel: '#d5e5e8', textPrimary: '#1a2b30', textSecondary: '#2f454b' },
  gold:  { bgBase: '#f2e8d5', bgSurface: '#fbf6eb', bgPanel: '#e6d8bd', textPrimary: '#302719', textSecondary: '#4a3a24' },
  iris:  { bgBase: '#ece6f1', bgSurface: '#f8f5fb', bgPanel: '#ddd4e8', textPrimary: '#2b2534', textSecondary: '#443a51' },
}

export const PHASES = {
  rose: {
    key:         'rose',
    displayName: 'nyx',
    gold:        '#ea9a97',
    goldRgb:     '234,154,151',
    ...PHOSPHOR_NOIR_SURFACES.rose,
  },
  ocean: {
    key:         'ocean',
    displayName: 'choice',
    gold:        '#5ec8ed',
    goldRgb:     '94,200,237',
    ...PHOSPHOR_NOIR_SURFACES.ocean,
  },
  gold: {
    key:         'gold',
    displayName: 'desire',
    gold:        '#f6c177',
    goldRgb:     '246,193,119',
    ...PHOSPHOR_NOIR_SURFACES.gold,
  },
  iris: {
    key:         'iris',
    displayName: 'still-pine',
    gold:        '#c4a7e7',
    goldRgb:     '196,167,231',
    ...PHOSPHOR_NOIR_SURFACES.iris,
  },
}

export function getPhase(hour) {
  if (hour >= 6  && hour < 11) return 'ocean'
  if (hour >= 11 && hour < 17) return 'gold'
  if (hour >= 17 && hour < 21) return 'iris'
  return 'rose'
}
