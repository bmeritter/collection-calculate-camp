function create_updated_collection(collection_a, object_b) {
  return collection_a.map(item => {
    if (object_b.value.indexOf(item.key) !== -1) {
      return {key: item.key, count: item.count - parseInt(item.count / 3)};
    }
    return item;
  });
}

module.exports = create_updated_collection;
