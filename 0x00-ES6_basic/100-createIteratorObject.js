export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  };
}
