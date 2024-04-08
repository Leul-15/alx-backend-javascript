export default function createIteratorObject(report) {
    let employees = [];
    for (let [department, departmentEmployees] of Object.entries(report.allEmployees)) {
        employees.push(...departmentEmployees);
    }
    return employees;
}
