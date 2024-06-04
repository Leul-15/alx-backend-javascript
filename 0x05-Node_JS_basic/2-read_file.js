const fs = require('fs');

const countStudents = function(dataPath) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroup = {};
  const dbFieldName = fileLines[0].split(',');
  const studentPropName = dbFieldName.slice(0, dbFieldName.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroup).includes(field)) {
      studentGroup[field] = [];
    }
    const studentEntries = studentPropName
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroup[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroup)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroup)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
