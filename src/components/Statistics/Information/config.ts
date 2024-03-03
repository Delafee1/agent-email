export enum ProfileInfoEnum {
  league = 'vip lygis',
  spent = 'panaudoti tez taskai',
  actual = 'aktualus tez taskai',
  euro = 'aktualus tez taskai eurais',
  place = 'vieta reitingu lenteleje',
  sold = 'is viso parduota kelioniu'
}

export const profileInfo = [
  {
    id: ProfileInfoEnum.league,
    title: 'vip lygis',
    icon: 'icons/star.png',
  },
  {
    id: ProfileInfoEnum.spent,
    title: 'panaudoti tez taskai',
    icon: 'icons/spend.png',
  },
  {
    id: ProfileInfoEnum.actual,
    title: 'aktualus tez taskai',
    icon: 'icons/coins.png',
  },
  {
    id: ProfileInfoEnum.euro,
    title: 'aktualus tez taskai eurais',
    icon: 'icons/money.png',
  },
  {
    id: ProfileInfoEnum.place,
    title: 'vieta reitingu lenteleje',
    icon: 'icons/trophy.png',
  },
  {
    id: ProfileInfoEnum.sold,
    title: 'is viso parduota kelioniu',
    icon: 'icons/island.png',
  }
]