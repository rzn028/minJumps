/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function (arr) {
  
  const map = arr.reduce((acc, num, index) => {
    acc[num] = acc[num] || [];
    acc[num].push(index);
    return acc;
  }, {});

  let current = [0];
  const visited = {
    0: true,
  };

  let jumps = 0;

  while (current.length > 0) {
    const next = [];
    const push = (index) => {
      if (index > 0 && index < arr.length && !visited[index]) {
        visited[index] = true;
        next.push(index);
      }
    }
    for (const index of current) {
      if (index === arr.length - 1) {
        return jumps;
      }
      push(index + 1);
      push(index - 1);
      const indices = map[arr[index]] || [];
      for (const index2 of indices) {
        push(index2);
      }
      delete map[arr[index]];
    }
    jumps += 1;
    current = next;
  }
  return jumps;
};

const main = () => {
  const arr = [100,-23,-23,404,100,23,23,23,3,404];
  console.log(minJumps(arr));
}

main();
