import { Link, useParams, useLocation } from "react-router-dom";
import "../index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", 
  "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div class="d-none d-lg-block">
      <div className="list-group wd-courses" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-items ${pathname.includes(link) && "active"}`}>
              <div className="wd-links-courses">
                {link}
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default CourseNavigation;
