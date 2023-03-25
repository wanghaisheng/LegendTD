/**
 * 地图数据 
 * 控制x y轴的方向 1:左 2:上 3:右 4:下
 */
export default [
  {
    29: 1, 33: 1, 37: 1, 49: 1, 69: 1,  
    3: 2, 7: 2, 47: 2, 51: 2, 57: 2,  
    5: 3, 9: 3, 21: 3, 25: 3, 53: 3, 60: 3,  
    19: 4, 23: 4, 27: 4, 31: 4, 35: 4, 66: 4,
  },
  {
    18: 1, 48: 1, 53: 1, 60: 1, 64: 1, 70: 1, 81: 1,
    8: 2, 29: 2, 51: 2, 62: 2, 74: 2, 79: 2,
    5: 3, 10: 3, 23: 3, 34: 3, 77: 3,
    3: 4, 15: 4, 21: 4, 39: 4, 58: 4, 68: 4,
  },
  {
    9: 1, 47: 1, 66: 1,
    6: 2, 14: 2, 23: 2, 54: 2, 63: 2,
    18: 3, 25: 3, 58: 3,
    38: 4, 74: 4,
  },
  {
    45: 1, 54: 1, 62: 1, 70: 1, 78: 1,
    3: 2, 19: 2, 35: 2, 58: 2, 74: 2,
    7: 3, 15: 3, 23: 3, 31: 3,
    11: 4, 27: 4, 50: 4, 66: 4, 80: 4,
  },
  {
    28: 1, 73: 1,
    46: 2, 85: 2,
    53: 3, 88: 3,
    19: 4, 68: 4,
  },
  {
    11: 1, 43: 1, 66: 1, 73: 1, 80: 1, 85: 1, 92: 1,
    9: 2, 19: 2, 70: 2, 82: 2, 96: 2,
    22: 3, 53: 3,
    40: 4, 51: 4, 61: 4, 77: 4, 89: 4,
  },
  {
    19: 1, 27: 1, 33: 1, 71: 1, 77: 1, 83: 1, 90: 1,
    4: 2, 10: 2, 16: 2, 35: 2, 43: 2, 74: 2, 80: 2, 101: 2,
    7: 3, 13: 3, 40: 3, 46: 3, 62: 3, 96: 3, 99: 3, 103: 3, 107: 3,
    24: 4, 30: 4, 59: 4, 66: 4, 85: 4, 93: 4, 98: 4, 105: 4,
  },
  {
    2: 1, 16: 1, 46: 1, 88: 1, 106: 1,
    4: 2, 22: 2, 64: 2, 94: 2, 108: 2,
    7: 3, 29: 3, 73: 3, 99: 3,
    11: 4, 37: 4, 81: 4, 103: 4,
  },
  {
    14: 1, 21: 1,
    9: 2, 45: 2,
    31: 3, 43: 3, 49: 3,
    16: 4, 29: 4, 39: 4,
  },
  {
    6: 1, 18: 1, 24: 1, 44: 1, 81: 1,
    20: 2, 62: 2, 78: 2, 87: 2,
    36: 3, 54: 3, 65: 3, 70: 3, 89: 3,
    14: 4, 32: 4, 42: 4, 50: 4, 67: 4,
  },
  // 最后一个地图选项是无限火力版
  {
    29: 1, 33: 1, 37: 1, 49: 1, 69: 1,  
    3: 2, 7: 2, 47: 2, 51: 2, 57: 2,  
    5: 3, 9: 3, 21: 3, 25: 3, 53: 3, 60: 3,  
    19: 4, 23: 4, 27: 4, 31: 4, 35: 4, 66: 4,
  },
  // {
  //   : 1, : 1, : 1, : 1, : 1, : 1,
  //   : 2, : 2, : 2, : 2, : 2, : 2,
  //   : 3, : 3, : 3, : 3, : 3, : 3,
  //   : 4, : 4, : 4, : 4, : 4, : 4,
  // },
] as {[key in number]: DirectionType}[]

/** 初始格子的格子位置信息和总格子数量 (刚开始的值是，xy方向上的第几格) */
const mapGridInfoList: MapGridInfo[] = [
  { x: 0, y: 5, x_y: 3, num: 72 },
  { x: 0, y: 1, x_y: 3, num: 83 },
  { x: 0, y: 11, x_y: 3, num: 79 },
  { x: 0, y: 11, x_y: 3, num: 87 },
  { x: 0, y: 1, x_y: 3, num: 96 },
  { x: 0, y: 6, x_y: 3, num: 99 },
  { x: 0, y: 11, x_y: 3, num: 111 },
  { x: 15, y: 4, x_y: 4, num: 109 },
  { x: 20, y: 5, x_y: 1, num: 57 },
  { x: 19, y: 7, x_y: 2, num: 92 },
  { x: 0, y: 5, x_y: 3, num: 72 },
]
export {
  mapGridInfoList
}

/** 格子类型 */
export type GridInfo = {
  x: number
  y: number
  /** 下一步往上下左右哪边 */
  x_y: DirectionType
}

export type MapGridInfo = GridInfo & {num: number}

/** 方向 1:左 2:下 3:右 4:上 */
export type DirectionType = 1 | 2| 3 | 4
  
/* 
刚开始的时候，switch判断写法
switch (i) {
  // 下
  case 3: case 15: case 21: case 39: case 58: case 68: {
    x_y = 4; break;
  }
  // 右
  case 5: case 10: case 23: case 34: case 77: {
    x_y = 3; break;
  } 
  // 上
  case 8: case 29: case 51: case 62: case 74: case 79: {
    x_y = 2; break;
  } 
  // 左
  case 18: case 48: case 53: case 60: case 64: case 70: case 81: {
    x_y = 1; break;
  } 
}
*/