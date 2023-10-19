import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import "../../index.css";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from 'react-icons/fa';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="row">
      <div className="col-8">
        <div class="d-flex gap-2 flex-row justify-content-end mb-4 align-items-center">
          <FaCheckCircle color="green" />
          <h6 className="wd-font-heading">Published</h6>
          <button className="btn btn-secondary"><FaEllipsisV /></button>
        </div>
        <div className="col">
          <hr />
        </div>
        <h2>Assignment Name</h2>
        <input value={assignment.title}
              className="form-control mb-2" />
        <div class="float-end">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-secondary">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger me-2 mx-2">
            Save
          </button>
        </div>
      </div>
      <div className="col-8">
        <hr />
      </div>
    </div>
  );
}


export default AssignmentEditor;