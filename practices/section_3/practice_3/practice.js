function create_updated_collection(collection_a, object_b) {
  let result = [];
  collection_a.forEach(item => {
    let exit = result.find(r => r.key === item);
    if (exit) {
      exit.count++;
    } else {
      result.push({key: item, count: 1});
    }
  });
  return result.map(item => {
    if (object_b.value.indexOf(item.key) !== -1) {
      return {key: item.key, count: item.count - parseInt(item.count / 3)};
    }
    return item;
  });
}

module.exports = create_updated_collection;
