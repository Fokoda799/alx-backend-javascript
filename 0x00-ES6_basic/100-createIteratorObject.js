export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let allEmployeeNames = [];

  for (const department in allEmployees) {
    allEmployeeNames = allEmployeeNames.concat(allEmployees[department]);
  }

  const iterator = {
    index: 0,
    next: function() {
      if (this.index < allEmployeeNames.length) {
        const employee = allEmployeeNames[this.index];
        this.index++;
        return { value: employee, done: false };
      } else {
        return { done: true };
      }
    }
  };

  iterator[Symbol.iterator] = function() {
    return this;
  };

  return iterator;
}
