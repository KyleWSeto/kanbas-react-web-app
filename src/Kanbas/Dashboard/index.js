import { Link } from "react-router-dom";
import db from "../Database";
import { FaClipboard } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="container-fluid pe-3 wd-dashboard">
      <div>
          <h2>Dashboard</h2>
          <hr/>
      </div>
      <h1>Published Courses (3)</h1>
      <div className="d-flex flex-row flex-wrap">
        {db.courses.map((course) => (
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
                <FaClipboard />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;