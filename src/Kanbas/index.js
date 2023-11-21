import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Signup from "../users/signup";
import Account from "../users/account";
import UserTable from "../users/table";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const URL = "http://localhost:4000/api/courses";
   const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
   const [course, setCourse] = useState({
     name: "New Course",      number: "New Number",
     startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
   };
   const deleteCourse = async (course_id) => {
            const response = await axios.delete(
                `${URL}/${course_id}`
            );
            setCourses(courses.filter((c) => c._id !== course_id));
        };
    const updateCourse = async () => {
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
    };
  useEffect(() => {
    findAllCourses();
  }, []);
    return(
      <Provider store={store}>
         <div className="d-flex">
            <div className="col">
               <div className="row">
                  <Nav/>
                  <h1>Kanbas</h1>
               </div>
               <div className="row justify-content-start">
                  <div className="col-1">
                     <KanbasNavigation />
                  </div>
                  <div className="col-11">
                     <div>
                        <Routes>
                           <Route path="/" element={<Navigate to="Dashboard" />} />
                           <Route path="Account" element={<Account />} />
                           <Route path="Account/:id" element={<Account />} />
                           <Route path="Signin" element={<Signin />} />
                           <Route path="Signup" element={<Signup />} />
                           <Route path="/admin/users" element={<UserTable />} />
                           <Route path="Dashboard" element={<Dashboard
                                                            courses={courses}
                                                            course={course}
                                                            setCourse={setCourse}
                                                            addNewCourse={addNewCourse}
                                                            deleteCourse={deleteCourse}
                                                            updateCourse={updateCourse}/>} />
                           <Route path="Courses/:courseId/*" element={<Courses />} />
                           <Route path="Calendar" element={<h1>Calendar</h1>} />
                           <Route path="Inbox" element={<h1>Inbox</h1>} />
                           <Route path="History" element={<h1>History</h1>} />
                           <Route path="Studio" element={<h1>Studio</h1>} />
                           <Route path="Commons" element={<h1>Commons</h1>} />
                           <Route path="Help" element={<h1>Help</h1>} />
                        </Routes>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Provider>
    );
 }
 export default Kanbas