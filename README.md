# object-deep-clone

This package allows to create a deep clone of your object

## Installation

```sheel
$ npm install @gunlayer/object-deep-copy
```

## Example

```javascript
import deepCopy from '@gunlayer/object-deep-copy';

const obj1 = { a: { b: 'string' } }; // initial value of your object
const obj2 = deepCopy(obj1); // create a copy of obj1

obj1.a.b = 'changed value'; // update obj1

console.log(obj1);
console.log(obj2);
```

This will print:

```javascript
{
  a: {
    b: 'string';
  }
}
{
  a: {
    b: 'changed value';
  }
}
```

## API

### `deepCopy(object)`

- `object`: The object that you want to copy.
