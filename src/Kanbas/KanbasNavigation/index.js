import { Link, useLocation } from "react-router-dom";
import React from "react";
import { FaUser, FaTable, FaBook, FaCalendar, FaInbox, FaClock, FaPhone, FaShare, FaComment } from 'react-icons/fa';
import "./index.css";
function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div className="d-flex flex-row mb-2">
          <ul className="list-group wd-navigation wd-bg-color-navigation">
              <li className="list-group-items">
                  <img src="../images/northeastern_logo.png" className="img-thumbnail wd-img-northeastern-logo"/>
              </li>
              <Link
                to={`/Kanbas/Account`}
                className={`list-group-items ${pathname.includes(`Account`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                            <FaUser className="wd-color-profile-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                            Account
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Dashboard`}
                className={`list-group-items ${pathname.includes(`Dashboard`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaTable className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Dashboard
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Courses`}
                className={`list-group-items ${pathname.includes(`Courses`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaBook className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Courses
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Calendar`}
                className={`list-group-items ${pathname.includes(`Calendar`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaCalendar className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Calendar
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Inbox`}
                className={`list-group-items ${pathname.includes(`Inbox`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaInbox className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Inbox
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/History`}
                className={`list-group-items ${pathname.includes(`History`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaClock className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              History
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Studio`}
                className={`list-group-items ${pathname.includes(`Studio`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaPhone className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Studio
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Commons`}
                className={`list-group-items ${pathname.includes(`Commons`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaShare className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Commons
                        </div>
                    </div>
                </li>
              </Link>
              <Link
                to={`/Kanbas/Help`}
                className={`list-group-items ${pathname.includes(`Help`) && "active" && "wd-links-navigation"}`}>
                <li className="list-group-items">
                    <div className="row">
                        <div className="col">
                          <FaComment className="wd-color-navigation-icon wd-size-icon"/>
                        </div>
                        <div className="col d-flex justify-content-center wd-links-navigation-name">
                              Help
                        </div>
                    </div>
                </li>
              </Link>
          </ul>
      </div>
  );
}
export default KanbasNavigation;