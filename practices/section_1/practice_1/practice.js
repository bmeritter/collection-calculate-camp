function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(item => {
    if (collection_b.indexOf(item) !== -1) {
      return item;
    }
  });
}

module.exports = collect_same_elements;
