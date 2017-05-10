function collect_same_elements(collection_a, object_b) {
  let result = [];
  collection_a.filter(item => {
    if (object_b.value.indexOf(item.key) !== -1) {
      result.push(item.key);
    }
  });
  return result;
}

module.exports = collect_same_elements;
