const createDeepObjectCopy = (obj) => {
  if (obj && typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    const copy = {};
    for (let key in obj) {
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
        ? (copy[key] = createDeepCloneObjectCopy(obj[key]))
        : (copy[key] = obj[key]);
    }
    return copy;
  } else {
    throw new Error('is not an object');
  }
};
export default createDeepObjectCopy;
