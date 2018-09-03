var test = require('tape');
var subArray = require('./');

test('subArray', function(t) {
  t.deepEqual(subArray(['a', 'b', 'c'], 1, 1), ['a', 'b', 'c']);
  t.deepEqual(subArray(['a', 'b', 'c'], 0, 1), ['c', 'a', 'b']);
  t.deepEqual(subArray(['a', 'b', 'c'], 2, 1), ['b', 'c', 'a']);
  t.deepEqual(subArray(['a', 'b', 'c'], 0, 2), ['b', 'c', 'a', 'b', 'c']);
  t.deepEqual(subArray(['a', 'b', 'c'], 0, 3), ['b', 'c', 'a', 'b', 'c']);

  t.deepEqual(subArray(['a', 'b', 'c'], 0, 4), ['b', 'c', 'a', 'b', 'c']);

  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 1, 1), ['a', 'b', 'c']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 0, 1), ['f', 'a', 'b']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 1), ['b', 'c', 'd']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 3, 1), ['c', 'd', 'e']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 4, 1), ['d', 'e', 'f']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 5, 1), ['e', 'f', 'a']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 6, 1), []); // Out of bounds current indicator results in empty array

  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 1, 2), ['f', 'a', 'b', 'c' ,'d']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 0, 2), ['e', 'f', 'a', 'b' ,'c']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 2), ['a', 'b', 'c', 'd' ,'e']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 3, 2), ['b', 'c', 'd', 'e' ,'f']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 4, 2), ['c', 'd', 'e', 'f' ,'a']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 5, 2), ['d', 'e', 'f', 'a' ,'b']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 6, 2), []); // Out of bounds current indicator results in empty array

  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 5, 20), ['a', 'b', 'c', 'd', 'e', 'f', 'a' ,'b', 'c', 'd', 'e']); // Wraps only once
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 0, 120), ['b', 'c', 'd', 'e', 'f', 'a' ,'b', 'c', 'd', 'e', 'f']); // Wraps only once

  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 0, 0), ['a']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 3, 0), ['d']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 5, 0), ['f']);
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 6, 0), []); // Out of bounds current indicator results in empty array

  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], -1, 0), []); // Out of bounds current indicator results in empty array

  // Negative range results in an empty array
  t.deepEqual(subArray(['a', 'b', 'c', 'd', 'e', 'f'], 0, -1), []);

  t.end();
});
