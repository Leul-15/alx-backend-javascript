import fs from 'fs';

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroup = {};
        const dbFieldName = fileLines[0].split(',');
        const studentPropName = dbFieldName
          .slice(0, dbFieldName.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroup).includes(field)) {
            studentGroup[field] = [];
          }
          const studentEntries = studentPropName
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroup[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroup);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
