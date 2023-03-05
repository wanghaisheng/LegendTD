/**
 * 塔防数据
 * name:名称, money:花费, r:攻击半径, damage:伤害, targetNum:攻击目标数量, rate:攻击速率(n毫秒/次, import.meta.url).href, speed:子弹速度, slow:{num:减速倍数,time:减速时间}  bSize: 子弹大小, img:塔防图片, bulletImg:子弹图片
 */
export default [
  { name: '单发豌豆', money: 50, saleMoney: 25, r: 100, damage: 1, targetNum: 1, rate: 900, speed: 5, bSize: {w:20,h:20},    audioKey: 'pea-one',  img: new URL("../assets/img/plant/pea_icon.gif", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet.png", import.meta.url).href},
  { name: '寒冰豌豆', money: 300, saleMoney: 100, r: 150, damage: 1, targetNum: 2, rate: 900, speed: 5, slow: {num: 2, time: 5000}, bSize: {w:20,h:20}, audioKey: 'pea-slow', img: new URL("../assets/img/plant/pea_snow_icon.gif", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet2.png", import.meta.url).href},
  { name: '三发豌豆', money: 350, saleMoney: 150, r: 200, damage: 1, targetNum: 3, rate: 900, speed: 8, bSize: {w:20,h:20},   audioKey: 'pea-three', img: new URL("../assets/img/plant/pea_3_icon.gif", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet.png", import.meta.url).href},
  { name: '四发豌豆', money: 450, saleMoney: 225, r: 250, damage: 1, targetNum: 1, rate: 200, speed: 10, bSize: {w:20,h:20},   audioKey: 'pea-four',  img: new URL("../assets/img/plant/pea_4_icon.gif", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet.png", import.meta.url).href},
  { name: '茄子',     money: 500, saleMoney: 250, r: 300, damage: 6, targetNum: 1, rate: 1200, speed: 12, bSize: {w:20,h:20}, audioKey: 'qizi', img: new URL("../assets/img/plant/qiezi.png", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet3.png", import.meta.url).href},
  { name: 'fengche',  money: 500, saleMoney: 250, r: 180, damage: 2, targetNum: 1, rate: 1000, speed: 6, bSize: {w:50,h:50}, isThrough: true, audioKey: 'fengche', img: new URL("../assets/img/plant/fengche.png", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet-fengche.png", import.meta.url).href},
  { name: 'PDD',      money: 600, saleMoney: 300, r: 230, damage: 4, targetNum: 20, rate: 3000, speed: 8, bSize: {w:20,h:20},   audioKey: 'pdd', img: new URL("../assets/img/plant/pdd.png", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet1.png", import.meta.url).href},
  {
    // 这里的攻击间隔应要大于子弹扩散完毕的时间
    name: 'lanbo',    money: 600, saleMoney: 300, r: 200, damage: 1, targetNum: 999, rate: 1600, speed: 5, bSize: {w:50,h:50},   audioKey: 'lanbo',
    img: new URL("../assets/img/tower/lanbo.png", import.meta.url).href, cover: new URL("../assets/img/tower/lanbo-cover.png", import.meta.url).href, bulletImg: new URL("../assets/img/tower/blisters.png", import.meta.url).href
  },
  { name: '冰星',     money: 800, saleMoney: 400, r: 200, damage: 1, targetNum: 20, rate: 1200, speed: 8, slow: {num: 2, time: 5000}, bSize: {w:30,h:30},   audioKey: 'slow-star', img: new URL("../assets/img/plant/tower_slow.png", import.meta.url).href, bulletImg: new URL("../assets/img/plant/bullet_star.png", import.meta.url).href},
] as TowerType[]

export type TowerType = {
  name: string
  money: number,
  saleMoney: number,
  r: number,
  damage: number,
  targetNum: number
  /** 攻击范围 */
  rate: number
  speed: number
  bSize: {w:number,h:number}
  audioKey: string
  /** 游戏图片 */
  img: string
  /** 封面图 */
  cover?: string
  bulletImg: string
  /** 减速 */
  slow?: TowerSlowType
}

export type TowerSlowType = {
  /** 减少速度 */
  num: number
  /** 减速持续时间 */
  time: number
}
