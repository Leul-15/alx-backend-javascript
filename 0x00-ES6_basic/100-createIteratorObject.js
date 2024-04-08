export default function createIteratorObject(report) {
   let employee = [];
   for (const [depts, emplys] of Object.entries(report.allEmployees)) {
        for (const emp of emplys) {
            employee.push(emp);
        }
   }
   return employee;
}
