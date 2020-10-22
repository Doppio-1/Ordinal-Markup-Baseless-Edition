const b = () => {return game.base}
let ordThresh = {
  1: () => 0,
  2: () => b(), // hi patcail sooooo uhhhh we gotta implement the in-betweens but then we have to define them ourselves
  3: () => b()*2, // Psi Level was originally made to not have fractional
  4: () => b()*3, //
  5: () => b()*4,// big brain get psi function at the bottom
  6: () => b()**2,
  7: () => b()**2*2, // https://discord.com/channels/666033278553292800/674704776990294016/719620131226910811 for 100-110
  8: () => b()**3, // https://discord.com/channels/666033278553292800/674704776990294016/719620951238770839 for 110-120
  9: () => b()**4, // https://discord.com/channels/666033278553292800/674704776990294016/719622232468619405 for 120-150
  10: () => b()**5,
  11: () => b()**b(),
  12: () => b()**b()*2,
  13: () => b()**(b()+1),
  14: () => b()**(b()+1)*2,
  15: () => b()**(b()+2),
  16: () => b()**(b()+3),
  17: () => b()**(b()*2),
  18: () => b()**(b()*2+1),
  19: () => b()**(b()*3),
  20: () => b()**(b()**2),
  21: () => b()**(b()**2+1),
  22: () => b()**(b()**2+2),
  23: () => b()**(b()**2+3),
  24: () => b()**(b()**2+b()),
  25: () => b()**(b()**2+b()+1),
  26: () => b()**(b()**2+b()+2),
  27: () => b()**(b()**2+b()+3),
  28: () => b()**(b()**2+b()*2),
  29: () => b()**(b()**2+b()*2+1),
  30: () => b()**(b()**2+b()*2+2),
  31: () => b()**(b()**2+b()*2+3),
  32: () => b()**(b()**2+b()*3),
  33: () => b()**(b()**2+b()*3+1),
  34: () => b()**(b()**2+b()*3+2),
  35: () => b()**(b()**2+b()*3+3),
  36: () => b()**(b()**2*2),
  37: () => b()**(b()**2*2+1),
  38: () => b()**(b()**2*2+2),
  39: () => b()**(b()**2*2+3),
  40: () => b()**(b()**2*2+b()),
  41: () => b()**(b()**2*2+b()+1),
  42: () => b()**(b()**2*2+b()+2),
  43: () => b()**(b()**2*2+b()+3),
  44: () => b()**(b()**2*2+b()*2),
  45: () => b()**(b()**2*2+b()*2+1),
  46: () => b()**(b()**2*2+b()*2+2),
  47: () => b()**(b()**2*2+b()*2+3),
  48: () => b()**(b()**2*2+b()*3),
  49: () => b()**(b()**2*2+b()*3+1),
  50: () => b()**(b()**2*2+b()*3+2),
  51: () => b()**(b()**2*2+b()*3+3),
  52: () => b()**(b()**2*3),
  155: () => Infinity
}
//EN(3).pow(41*3**27)

let getPsi = ord => {
  if (game.incrementyverse==1) {
    let level = 154
    if (game.bigBrainOrd.gte(ordThreshData["buchholz e(W2+1)"])) level=155
    if (game.bigBrainOrd.gte(Infinity)) level=156
    return level
  }
  let temp = Object.keys(ordThresh)
  temp.reverse()
  for(const i in temp) {
    if((ordThresh[temp[i]] >= 1e270 ? Math.round(ord/1e270)*1e270 : ord) >= (ordThresh[temp[i]])()) return temp[i]
  }
}

let getPsiReq = level => {
  if (level >= 155) {
    return [ordThreshData["buchholz e(W2+1)"],EN(Infinity)][level-155]
  }
  let k
  for (k in ordThresh) {
    if (level<=k) {
      return ordThresh[k]
    }
  }
  return 0
}

