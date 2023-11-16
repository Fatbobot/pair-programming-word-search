const reverseStr = (str) => {
    const strArr = str.split('');
    const reverseStrArr = strArr.reverse();

    return reverseStrArr.join('');
};

const transpose = (matrix) => {
    const result = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          result.push([matrix[i][j]]);
        } else {
          result[j].push(matrix[i][j]);
        }
      }
    }
    return result;
  };
  
const wordSearch = (letters, word) => {
  const reverseWord = reverseStr(word);
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  const letters2 = transpose(letters);

  const horizontalJoin2 = letters2.map(ls => ls.join(''));
  for (let l of horizontalJoin2) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  return false;
};

words = [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
]

module.exports = wordSearch;

// CONSOLE OUTPUT