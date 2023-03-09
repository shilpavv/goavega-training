import Link from "next/link";
import Axios from "axios";
import React from "react";
export const getStaticProps = async () => {
  const url = "api/students";
  const res = await fetch(url);
  const students = await res.json();
  return {
    props: {
      students,
    },
  };
};

function handleDelete (id: any )  {
  Axios.delete(`http://127.0.0.1:1337/api/students/${id}`)
    .then((res) =>
     console.log("deleted data", res))
    .catch((err) => console.log(err));
};
const Student = ({ students }: any) => {
  console.log("dataaaaa", students);
  return (
    <>
      <h1>Student</h1>
      <div className="card ">
        {students.data.map((student: any) => (
          <div>
            <h3>NAME:{student.attributes.name}</h3>
            <h3>EMAIL:{student.attributes.email}</h3>
            <h3>GRADE:{student.attributes.grade}</h3>
            <Link href={"/students/" + student.id} key={student.id}>
              <div></div>
            </Link>
            <button onClick={(e) => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Student;
