import React from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle, FaPlus } from 'react-icons/fa';

import db from "../../Database";
import "../index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter(
    (module) => module.course === courseId);
  return (
    <ul className="list-group wd-module">
      {
       modules.map((module, index) => (
         <div className="wd-margin-module">
           <li key={index} className="list-group-item list-group-item-secondary d-flex align-items-center">
              <div className="col-1">
                  <FaEllipsisV />
                  <FaEllipsisV />
              </div>
              <div className="col-10">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </div>
              <div className="float-end">
                  <FaCheckCircle color="green"/>
                  <FaPlus />
                  <FaEllipsisV />
              </div>
            </li>
         </div>
      ))
      }
    </ul>
  );
}
export default ModuleList;