function subArray(items, current, range) {
  var limitedRange = Math.min(range, items.length - 1); // Prevent range exceeding items.length -1

  if (current < 0 || current >= items.length) { // If the current index exceeds the bounds of the array
    return [];
  }

  return [].concat(
    current - limitedRange < 0 ? items.slice(current - limitedRange) : [], // Append items from end of array
    items.slice(Math.max(0, current - limitedRange), Math.min(items.length, current + limitedRange + 1)),
    current + limitedRange >= items.length ? items.slice(0, (current + limitedRange) - items.length + 1) : [], // Prepent items from the beginning of the array
  );
}

module.exports = subArray;
