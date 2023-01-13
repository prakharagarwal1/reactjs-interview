import React from "react";

const HomeList = ({ studentData, editRecord, deleteRecord }) => {
  return (
    <>
      <table border="1">
        <tr>
          <td>S.NO</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Experience</td>
          <td>Designation</td>
          <td>Profile Image</td>
          <td>DOB</td>
          <td>Edit Record</td>
          <td>Delete Record</td>
        </tr>
        {studentData &&
          studentData.length > 0 &&
          studentData.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.fName}</td>
                <td>{data.lName}</td>
                <td>{data.experience}</td>
                <td>{data.designation}</td>
                <td>
                  <image
                    src={data.profileImage}
                    height="400"
                    width="400"
                    alt="No Image Found"
                  ></image>
                </td>
                <td>{data.DOB}</td>
                <td>
                  <button onClick={() => editRecord(data.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteRecord(data.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default HomeList;
