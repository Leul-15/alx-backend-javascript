export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const item of reportWithIterator) {
    employeeNames += item.employee + '|';
  }

  employeeNames = employeeNames.slice(0, -1);

  return employeeNames;
}
