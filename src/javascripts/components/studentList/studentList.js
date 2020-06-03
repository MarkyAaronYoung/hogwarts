// todo
// get all students
// display all of them
// profit
// loop over a collection of things and printToDom
import utils from '../../helpers/utils';
import studentData from '../../helpers/data/studentData';

const createStudentList = () => {
  const allStudents = studentData.getStudents();
  let domString = '<ul class="student-list">';
  // could also do studentData.getStudents().forEach():

  allStudents.forEach((student) => {
    domString += `<li>${student.name}</li>`;
  });

  domString += '</ul>';

  utils.printToDom('#all-students', domString);
};

export default { createStudentList };
