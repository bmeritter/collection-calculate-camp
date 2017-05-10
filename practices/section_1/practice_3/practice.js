function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(item => {
    if (object_b.value.indexOf(item) !== -1) {
      return item;
    }
  });
}

module.exports = collect_same_elements;
