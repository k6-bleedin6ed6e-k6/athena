const PHOSPHOR_NOIR_SURFACES = {
  rose:  { bgBase: '#15121c', bgSurface: '#211d29', bgPanel: '#2c2738', textPrimary: '#f0edf6', textSecondary: '#c4becf' },
  ocean: { bgBase: '#10171d', bgSurface: '#18232b', bgPanel: '#25313a', textPrimary: '#e5eff2', textSecondary: '#b3c3c8' },
  gold:  { bgBase: '#171713', bgSurface: '#222018', bgPanel: '#302b20', textPrimary: '#f1ebdc', textSecondary: '#c5bba0' },
  iris:  { bgBase: '#15131c', bgSurface: '#211d2a', bgPanel: '#2e293a', textPrimary: '#efeaf5', textSecondary: '#c3b9d2' },
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
