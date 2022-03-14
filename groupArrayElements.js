/**
 * @dev split original array to N small arrays
 *      [1, 2, 3, 4, 5] / 3 => [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 *      Length Match = 5 = 2 * 2 + 1 * 1 = maxLength * 2 + minLength * 1
 */
const groupArrayElements = function (originalAry, splitLength) {
  const smallAryMinEleCount = Math.floor(originalAry.length / splitLength);
  const maxLengthAryCount = originalAry.length % splitLength;

  // array index to create new sub array
  let nextStepIndex = smallAryMinEleCount + (maxLengthAryCount ? 1 : 0);
  let result = [];
  for (let i = 0; i < Math.max(originalAry.length, splitLength); i++) {
    if (i < nextStepIndex) {
      // if still need to fill last sub array
      if (!result[result.length - 1]) result.push([]); // create empty ary
      result[result.length - 1].push(originalAry[i]);
    } else {
      // if need to add new sub array
      result.push(originalAry[i] ? [originalAry[i]] : []);
      nextStepIndex +=
        smallAryMinEleCount + (result.length > maxLengthAryCount ? 0 : 1);
    }
  }

  return result;
};

export default groupArrayElements;
