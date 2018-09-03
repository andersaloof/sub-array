# subArray [![Build Status](https://travis-ci.org/andersaloof/sub-array.svg?branch=master)](https://travis-ci.org/andersaloof/sub-array)

Returns a subset of an array, from index + X items before/after the current index, wrapping around if range exceeds the bounds of the array.

## Install

```
$ npm install @andersaloof/sub-array
```

## Why?

Useful when making an "endless" slideshow, as you will get X items in both directions from your current index, wrapping around.

## Usage

**`subArray(items, max, range)`**


### Example code

```js
const subArray = require('@andersaloof/sub-array');

const subset = subArray(['a', 'b', 'c', 'd', 'e'], 2, 1); // Returns the new array ['b', 'c', 'd']
```

## License

MIT
