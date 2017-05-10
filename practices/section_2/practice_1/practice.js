function count_same_elements(collection) {
  let result = [];
  collection.forEach(item => {
    let exit = result.find(r => r.key === item);
    if (exit) {
      exit.count++;
    } else {
      result.push({key: item, count: 1});
    }
  });
  return result;
}

module.exports = count_same_elements;
