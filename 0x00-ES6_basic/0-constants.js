const taskFirst = () => {
  var task = 'I prefer const when I can.';
  return task;
};

export function getLast() {
  return ' is okay';
}

let taskNext = ()=> {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
};

export default { taskFirst, taskNext };