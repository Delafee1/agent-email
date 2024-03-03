export enum ProfileInfoEnum {
  league = 'league',
  spent = 'spent',
  actual = 'actual',
  euro = 'euro',
  place = 'place',
  sold = 'sold',
}

export const profileInfo = [
  {
    id: ProfileInfoEnum.league,
    title: 'vip lygis',
    icon: 'icons/star.png',
  },
  {
    id: ProfileInfoEnum.spent,
    title: 'panaudoti tez taškai',
    icon: 'icons/spend.png',
  },
  {
    id: ProfileInfoEnum.actual,
    title: 'aktualūs tez taškai',
    icon: 'icons/coins.png',
  },
  {
    id: ProfileInfoEnum.euro,
    title: 'aktualūs tez taškai eurais',
    icon: 'icons/money.png',
  },
  {
    id: ProfileInfoEnum.place,
    title: 'vieta reitingų lentelėje',
    icon: 'icons/trophy.png',
  },
  {
    id: ProfileInfoEnum.sold,
    title: 'iš viso parduota kelionių',
    icon: 'icons/island.png',
  }
]