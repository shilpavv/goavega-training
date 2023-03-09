import Axios from "axios";
import React from "react";
export default function AddStudent() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const url="http://127.0.0.1:1337/api/students"
  const handleSubmit=(e:any)=>{
    e.preventDefault()
     Axios.post(url,{
      data:{
      name:name,
      email:email,
      grade:grade
      }
  })
  .then((res)=>console.log('posting data',res))
    .catch(err=>console.log(err))
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
        <h2>ADD Student</h2>
        <div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name"> Name</label>
            </div>
            <div className="col-75">
              <input
                type="name"
                value={name}
                id="name"
                name="name"
                placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="grade">Grade</label>
          </div>
          <div className="col-75">
            <input
              type="grade"
              id="grade"
              name="grade"
              value={grade}
              placeholder="Enter grade"
              onChange={(e)=>setGrade(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <input type="submit" value="Submit" />
      </div>
    </form>
    </>
  );
}
