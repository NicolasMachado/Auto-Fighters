export const mockReducer = {
  fighters: [
    {
      id: 11,
      side: 'ally',
      name: 'A number 1',
      hp: 54,
      mp: 32,
      ap: 24,
      stats: {
        speed: 1.2,
        maxHp: 123,
        maxMp: 73
      },
      skills: [1]
    },
    {
      id: 22,
      side: 'ally',
      name: 'A number 2',
      hp: 92,
      rp: 27,
      ap: 42,
      stats: {
        speed: .5,
        maxHp: 97
      },
      skills: []
    },
    {
      id: 66,
      side: 'enemy',
      name: 'E number 1',
      hp: 34,
      mp: 52,
      ap: 13,
      stats: {
        speed: .7,
        maxHp: 241,
        maxMp: 120
      },
      skills: [1, 1, 1, 1]
    },
    {
      id: 77,
      side: 'enemy',
      name: 'E number 2',
      hp: 72,
      rp: 54,
      ap: 63,
      stats: {
        speed: 1.5,
        maxHp: 112
      },
      skills: []
    }
  ]
};
