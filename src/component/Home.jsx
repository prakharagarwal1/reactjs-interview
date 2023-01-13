import React, { useState } from "react";
import HomeList from "./HomeList";

const Home = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [DOB, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [experience, setExp] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [id, setIDValue] = useState(0);

  const addRecord = () => {
    let idValue = 0;
    if (id) {
      idValue = id;
    } else {
      idValue = Math.random();
    }

    let newRecord = {
      id: idValue,
      fName,
      lName,
      DOB,
      designation,
      profileImage,
      experience,
    };

    let currentRecords = [...studentData, newRecord];
    setStudentData(currentRecords);

    setFname("");
    setLname("");
    setDob("");
    setDesignation("");
    setProfileImage("");
    setExp("");
    alert("New Record Added");
  };

  const editRecord = (idValue) => {
    let { id, fName, lName, DOB, designation, profileImage, experience } =
      studentData.filter((x) => x.id === idValue)[0];

    setFname(fName);
    setLname(lName);
    setDob(DOB);
    setDesignation(designation);
    setProfileImage(profileImage);
    setExp(experience);
    setIDValue(id);
    return false;
  };
  const deleteRecord = (id) => {
    if (window.confirm("Do you really want to Delete Record?")) {
      let newfilteredData = studentData.filter((x) => x.id !== id);
      setStudentData(newfilteredData);
    }
  };

  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          value={fName}
          onChange={(e) => setFname(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter First Name"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Last Name</label>
        <input
          value={lName}
          onChange={(e) => setLname(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <div className="form-check">
        <label for="exampleInputPassword1">DOB</label>
        <input
          value={DOB}
          onChange={(e) => setDob(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <div className="form-check">
        <label for="exampleInputPassword1">Designation</label>
        <input
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <div className="form-check">
        <label for="exampleInputPassword1">Profile Image</label>
        <input
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <div className="form-check">
        <label for="exampleInputPassword1">Experience</label>
        <input
          value={experience}
          onChange={(e) => setExp(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Last Name"
        />
      </div>
      <button
        type="button"
        onClick={() => addRecord()}
        className="btn btn-primary"
      >
        Submit
      </button>
      <HomeList
        studentData={studentData}
        editRecord={editRecord}
        deleteRecord={deleteRecord}
      />
    </form>
  );
};

export default Home;
