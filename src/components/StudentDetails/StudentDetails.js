import React, { useEffect, useState } from "react";

const StudentDetails = ({ match, students }) => {
  const [student, setStudent] = useState({});

  const findStudent = () => {
    setStudent(students.find((el) => el.id === match.params.myid));
  };

  useEffect(() => {
    findStudent();
  }, []);

  console.log(match.params.myid);
  return (
    <div>
      <h1>Student details</h1>

      {/* <button onClick={() => findStudent()}>Show details</button> */}
      <h2> Name : {student.firstName}</h2>
    </div>
  );
};

export default StudentDetails;
