function count_same_elements(collection) {
  let result = [];
  collection.forEach(item => {
    let tmp = item.split('-');
    let exit = result.find(r => r.key === tmp[0]);
    let count = parseInt(tmp[1]) || 1;
    if (exit) {
      exit.count += count;
    } else {
      result.push({key: item[0], count: count});
    }
  });
  return result;
}

module.exports = count_same_elements;
