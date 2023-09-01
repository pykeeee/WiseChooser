function calcItemSet(set,itemSets) {
  if (!itemSets) return []
  let j,s,itemSet = {}
  let start,start2, end, dataType
  let displaySet = []
  if (set<=4) {
    for (s in itemSets['itemSet'+(set+1)]) displaySet.push([s, itemSets['itemSet'+(set+1)][s][0],itemSets['itemSet'+(set+1)][s][1]])
    displaySet.sort((a, b) => b[1] - a[1])
  } else if (set>=13 && set<=18) {
    for (s in itemSets['itemBootSet'+(set-12)]) displaySet.push([s, itemSets['itemBootSet'+(set-12)][s][0],itemSets['itemBootSet'+(set-12)][s][1]])
    displaySet.sort((a, b) => b[1] - a[1])
  } else if ((set>=5 && set<=8) || (set>=19 && set<=23)) {
    if (set<=8) { dataType = 'itemSet'; start = set -3; end = 5; }
    else { dataType  = 'itemBootSet'; start = set-17; end = 6; }
    for (j=start; j<=end; j++) {
      if (typeof itemSets[dataType+j] === 'undefined') continue;
      for (s in itemSets[dataType+j]) {
        if (typeof itemSet[s.substr(0,start*5-1)] === 'undefined') itemSet[s.substr(0,start*5-1)] = [0,0];
        itemSet[s.substr(0,start*5-1)][0] += itemSets[dataType+j][s][0];
        itemSet[s.substr(0,start*5-1)][1] += itemSets[dataType+j][s][1];
      }
    }
    for (s in itemSet) displaySet.push([s, itemSet[s][0],itemSet[s][1]]);
    displaySet.sort((a, b) => b[1] - a[1])
  } else {
    if (set<=12) { dataType = 'itemSet'; start = set -7; start2 = 5; }
    else { dataType  = 'itemBootSet'; start = set-23; start2 = 6; }

    let potentialSets = {}
    for (j=start2; j>=2; j--) {
      let exactSet = dataType+j
      for (s in itemSets[exactSet]) {
        let dest = s.substr(0,(j-1)*5-1)
        if (itemSets[exactSet] && typeof itemSets[exactSet][s] !== 'undefined') {
          if (typeof potentialSets[dest] === 'undefined') potentialSets[dest] = 0
          potentialSets[dest] += itemSets[exactSet][s][0]
        }
      }
    }

    let ratios = {}
    for (j=start; j>=1; j--) {
      let exactSet = dataType+j
      if (typeof itemSets[exactSet] === 'undefined') continue;
      for (s in itemSets[dataType+start]) {
        if (typeof itemSet[s] === 'undefined') itemSet[s] = [0,0]
        let subSet = s.substr(0,j*5-1)
        if (itemSets[exactSet] && typeof itemSets[exactSet][subSet] !== 'undefined') {
            let overSet = s.substr(0,(j+1)*5-1)
            if (j===start) {
              ratios[s] = 1
            } else {
              ratios[s] = typeof itemSets[dataType+(j+1)][overSet] !== 'undefined' ? itemSets[dataType+(j+1)][overSet][0]/potentialSets[subSet]*ratios[s] : 0
            }
            itemSet[s][0] += parseInt(itemSets[exactSet][subSet][0]*ratios[s])
            itemSet[s][1] += parseInt(itemSets[exactSet][subSet][1]*ratios[s])
        }
      }
    }
    for (s in itemSet) {
      if (itemSet[s][0]>100) displaySet.push([s, itemSet[s][0],itemSet[s][1]])
    }
    displaySet.sort((a, b) => b[2]/b[1] - a[2]/a[1])
  }
  return displaySet
}

export default calcItemSet