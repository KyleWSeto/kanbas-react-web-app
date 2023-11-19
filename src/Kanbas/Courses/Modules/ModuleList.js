import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { FaEllipsisV, FaCheckCircle, FaPlus } from 'react-icons/fa';

import * as client from "./client";
import "../index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  return (
    <ul className="list-group wd-module">
      <li className="list-group-item">
        <div className="float-end">
          <button className="btn btn-success mx-1" onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-primary mx-1" onClick={handleUpdateModule}>
            Update
          </button>
        </div>
        <input type="text" class="form-control w-50 my-2" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}

        />
        <textarea class="form-control w-50 my-2" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
      {
       modules.filter((module) => module.course === courseId).map((module, index) => (
         <div className="wd-margin-module">
           <li key={index} className="list-group-item list-group-item-secondary d-flex align-items-center">
              <div className="col-1">
                  <FaEllipsisV />
                  <FaEllipsisV />
              </div>
              <div className="col-10">
                <button
                  className="btn btn-success mx-1" onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1" onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button>
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