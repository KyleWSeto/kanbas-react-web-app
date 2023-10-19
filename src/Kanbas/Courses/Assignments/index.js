import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../index.css";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaTablet } from 'react-icons/fa';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="row">
        <div className="col-8">
        <form>
            <div className="d-flex flex-row mb-2">
                <div className="col-4">
                    <input id="search-for-assignments" className="form-control wd-width-assignment" placeholder="Search for Assignments"/>
                </div>
                <div className="col-8 d-grid gap-2 d-md-flex justify-content-end">
                    <button className="btn btn-secondary"><FaPlus />Group</button>
                    <button className="btn btn-danger"><FaPlus />Assignment</button>
                    <button className="btn btn-secondary"><FaEllipsisV /></button>
                </div>
            </div>
        </form>
        <hr/>
        <li className="list-group-item list-group-item-secondary">
            <div className="float-start">
                <FaEllipsisV />
                <FaEllipsisV />
            </div>
            ASSIGNMENTS
            <div className="d-flex gap-2 flex-row float-end align-items-center">
                40% of Total
                <FaPlus />
                <FaEllipsisV />
            </div>
        </li>
        {courseAssignments.map((assignment) => (
          <div>
            <li className="list-group-item d-flex align-items-center wd-border-module">
                <div className="col-1 float-start">
                    <FaEllipsisV />
                    <FaEllipsisV />
                    <FaTablet />
                </div>
                <div className="col-10">
                  <div className="row">
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="list-group-item wd-links-assignments">
                      {assignment.title}
                    </Link>
                  </div>
                  <div className="row">
                    Due: {assignment.due_date} | {assignment.points}pts
                  </div>
                </div>
                <div className="ms-auto">
                    <FaCheckCircle color="green" />
                    <FaEllipsisV />
                </div>
            </li>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;