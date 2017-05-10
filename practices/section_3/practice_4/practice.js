const countKey = (collection_a) => {
  let result = [];
  collection_a.forEach(item => {
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
};

function create_updated_collection(collection_a, object_b) {
  let result = countKey(collection_a);
  return result.map((item) => {
    let exit = object_b.value.find(v => item.key === v);
    if (exit) {
      item.count -= parseInt(item.count / 3);
    }
    return item;
  });


}

module.exports = create_updated_collection;
