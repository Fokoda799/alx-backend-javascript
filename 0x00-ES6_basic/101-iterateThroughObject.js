export default function iterateThroughObject(reportWithIterator) {
  let str;
  let i = 0;
  for (let employe of reportWithIterator) {
    if ( i === 0){
      str = employe;
    } else {
      str = str + " | " + employe;
    };
    i++;
  };

  return str;
};
