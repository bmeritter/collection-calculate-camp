function collect_same_elements(collection_a, collection_b) {
  let result = [];
  collection_a.filter(item => {
    collection_b.forEach(b => {
      if (b.indexOf(item) !== -1) {
        result.push(item);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
