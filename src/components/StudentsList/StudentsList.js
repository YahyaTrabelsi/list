import React from "react";
import StudentCard from "../StudentCard/StudentCard";
import "./students.css";

const StudentsList = ({ textFilter, students }) => {
  return (
    <div className="students">
      {students
        .filter((student) =>
          student.firstName.toUpperCase().startsWith(textFilter.toUpperCase())
        )
        .map((student) => (
          <StudentCard student={student} />
        ))}
    </div>
  );
};

export default StudentsList;
