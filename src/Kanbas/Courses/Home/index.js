import "../index.css";
import ModuleList from "../Modules/ModuleList";
import { FaEllipsisV } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="row">
        <div className="col-8">
            <div className="d-flex gap-2 flex-row justify-content-end mb-4">
              <button className="btn btn-secondary">Collapse all</button>
              <button className="btn btn-secondary">View Progress</button>
              <div className="dropdown">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Publish All
                  </a>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Publish All</a></li>
                  </ul>
              </div>
              <button className="btn btn-danger">Module</button>
              <button className="btn btn-secondary"><FaEllipsisV /></button>
          </div>
          <hr/>
          <ModuleList />
        </div>
        <div className="col-4">
          <div className="d-none d-xxl-block ms-4 px-3">
                <h2>Status</h2>
                <h2>Course Status</h2>
                <button className="btn btn-secondary">Unpublish</button>
                <button className="btn btn-success">Publish</button>
                <ul className="my-2">
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">Import Existing Content</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">Import from Commons</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">Choose Home Page</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">View Course Stream</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">New Announcements</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">New Analytics</a></li>
                    <li className="list-group-item list-group-item-secondary"><a href="#" className="wd-links-course-status">View Course Notifications</a></li>
                </ul>
                <h2>Comming Up</h2>
                <hr/>
                <div className="d-flex flex-row-reverse">
                    <a href="#" className="wd-links-calendar">View Calendar</a>
                </div>
                <ul className="list-group wd-calendar">
                    <li className="list-group-item"><a href="#" className="wd-links-calendar">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                    <li className="list-group-item"><a href="#" className="wd-links-calendar">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                    <li className="list-group-item"><a href="#" className="wd-links-calendar">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;