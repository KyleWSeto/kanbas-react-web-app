import db from "../../Kanbas/Database";
import "./index.css";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const URL = "http://localhost:4000/api/courses";
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  return (
    <div className="col">
      <div className="row">
        <div className="d-flex align-items-center">
          <FaBars color="red"/>
            <nav className="d-flex align-items-center">
              <Link to="Home"
                className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                style={{ textDecoration: 'none' }}
              >
                <h1 className="mx-2 wd-color-course">{course.number}</h1>
              </Link>
              <span className="breadcrumb-arrow">&gt;</span>
              <Routes>
                <Route path="/" element={<h1 className="mx-2">Home</h1>} />
                <Route path="Home" element={<h1 className="mx-2">Home</h1>} />
                <Route path="Modules" element={<h1 className="mx-2">Modules</h1>} />
                <Route path="Assignments" element={<h1 className="mx-2">Assignments</h1>} />
                <Route
                  path="Assignments/:assignmentId"
                  element={<h1 className="mx-2">Assignment Editor</h1>}/>
                <Route path="Grades" element={<h1 className="mx-2">Grades</h1>} />
              </Routes>
           </nav>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-2">
          <CourseNavigation />
        </div>
        <div className="col-10">
          <div className="row">
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor/>}/>
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;