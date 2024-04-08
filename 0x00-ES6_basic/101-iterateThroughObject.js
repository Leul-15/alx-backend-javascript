const iterateThroughObject = (reportWithIterator) => {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee}|`;
  }

  if (result.length > 0) {
    result = result.slice(0, -1);
  }

  return result;
};

export default iterateThroughObject;
