const splitString = (item) => {
  let tmp = item.split('-');
  if (tmp.length !== 2) {
    tmp = tmp[0].split(':');
  }
  if (tmp.length !== 2) {
    let tmp1 = [];
    tmp1.push(tmp[0].replace(/[^a-z]/g, ''));
    tmp1.push(tmp[0].replace(/[^0-9]/g, ''));
    tmp = tmp1;
  }
  return tmp;
};

function count_same_elements(collection) {
  let result = [];
  collection.forEach(item => {
    let tmp = splitString(item);
    let exit = result.find(r => r.name === tmp[0]);
    let summary = parseInt(tmp[1]) || 1;
    if (exit) {
      exit.summary += summary;
    } else {

      result.push({name: item[0], summary: summary});
    }
  });
  return result;
}

module.exports = count_same_elements;
