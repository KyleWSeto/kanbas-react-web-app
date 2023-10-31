import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { FaClipboard } from 'react-icons/fa';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div className="container-fluid pe-3 wd-dashboard">
      <div>
          <h2>Dashboard</h2>
          <hr/>
      </div>
      <div className="w-25">
        <h1>Published Courses (3)</h1>
        <ul className="list-group py-4">
          <li className="list-group-item py-4">
            <div className="float-end">
                <button className="btn btn-success m-1" onClick={addNewCourse} >
                  Add
                </button>
                <button className="btn btn-primary m-1" onClick={updateCourse} >
                  Update
                </button>
            </div>
            <h5>Course</h5>
            <input value={course.name} className="form-control my-1" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control my-1" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control my-1" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control my-1" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div className="card wd-width-card wd-margin-card">
            <img src="../images/blue.png"
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item wd-links-course-name">
                  {course.name}
                </Link>
                </h5>
                <p className="card-text">
                    {course.number} {course._id}<br/>
                    {course.startDate}
                </p>
                <div>
                  <FaClipboard />
                  <div className="float-end d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-warning me-md-2"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;