import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import StudentsList from "./components/StudentsList/StudentsList";
import { data } from "./data.js";
import Filter from "./components/Filter/Filter";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import { Route } from "react-router-dom";

function App() {
  const [students, setStudents] = useState(data);
  const [textFilter, setTexFilter] = useState("");

  const addSudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <Header addSudent={addSudent} setTexFilter={setTexFilter} />
      <Route
        path="/studentslist"
        render={() => (
          <StudentsList students={students} textFilter={textFilter} />
        )}
      />

      <Route exact path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route
        path="/studentdetails/:myid"
        render={(defaultProps) => (
          <StudentDetails {...defaultProps} students={students} />
        )}
      />
    </div>
  );
}

export default App;
