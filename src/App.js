import React from "react";
import './App.css';
import ExcelExportHelper from "./components/ExcelExportHelper";

const DATA = [
  {
    STUDENT_DETAILS: {
      id: 101,
      name: "Suman Kumar",
      parentName: "Suresh Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 75,
      physics: 65,
      chemistry: 72,
      english: 62,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 102,
      name: "Rahul Kumar",
      parentName: "Aatma Ram",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 70,
      physics: 75,
      chemistry: 82,
      english: 72,
      computerScience: 60,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 103,
      name: "Anuj Kumar",
      parentName: "Ashok Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 60,
      physics: 65,
      chemistry: 92,
      english: 77,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 104,
      name: "Suman Kumar",
      parentName: "Suresh Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 75,
      physics: 65,
      chemistry: 72,
      english: 62,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 105,
      name: "Rahul Kumar",
      parentName: "Aatma Ram",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 70,
      physics: 75,
      chemistry: 82,
      english: 72,
      computerScience: 60,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 106,
      name: "Anuj Kumar",
      parentName: "Ashok Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 60,
      physics: 65,
      chemistry: 92,
      english: 77,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 107,
      name: "Suman Kumar",
      parentName: "Suresh Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 75,
      physics: 65,
      chemistry: 72,
      english: 62,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 108,
      name: "Rahul Kumar",
      parentName: "Aatma Ram",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 70,
      physics: 75,
      chemistry: 82,
      english: 72,
      computerScience: 60,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 109,
      name: "Anuj Kumar",
      parentName: "Ashok Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 60,
      physics: 65,
      chemistry: 92,
      english: 77,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 1010,
      name: "Suman Kumar",
      parentName: "Suresh Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 75,
      physics: 65,
      chemistry: 72,
      english: 62,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 1011,
      name: "Rahul Kumar",
      parentName: "Aatma Ram",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",

    },
    MARKS: {
      maths: 70,
      physics: 75,
      chemistry: 82,
      english: 72,
      computerScience: 60,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 1012,
      name: "Anuj Kumar",
      parentName: "Ashok Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",
    },
    MARKS: {
      maths: 60,
      physics: 65,
      chemistry: 92,
      english: 77,
      computerScience: 80,
    },
  },
];

const App = () => {
  return (
    <div className="maindiv">
      <ExcelExportHelper data={DATA} />
    </div>
  );
};

export default App;
