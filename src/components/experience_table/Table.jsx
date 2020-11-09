import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "./Item";
import "./table.css";

const Table = () => {
  const [values, setValues] = useState({
    experiences: [],
  });

  const { experiences } = values;

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = () => {
    axios({
      method: "GET",
      url: `http://localhost:3002/api/v1/experience`,
    })
      .then((res) => {
        if (res.data.status === "success") {
          setValues({ experiences: res.data.data });
        }
      })
      .catch((err) => {
        setValues({ ...values, error: err });
      });
  };

  return (
    <div
      className="container-fluid align-items-center justify-content-center d-flex"
      style={{ marginTop: "5rem" }}
    >
      <div className="col-md-12">
        <div className="card ">
          <div className="card-header">
            <h4 className="text-center">Experience</h4>
            <Link
              to="/addExp"
              type="button"
              className="btn btn-outline-success float-right"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-plus"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="card-block text-xs-center">
            <div id="grid">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ID</th>
                      <th scope="col">JobTitle</th>
                      <th scope="col">Company</th>
                      <th scope="col">Summary</th>
                      <th scope="col">StartDate</th>
                      <th scope="col">FinishDate</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experiences.map((exp, i) => (
                      <Item
                        key={i}
                        num={i}
                        id={exp._id}
                        jobTitle={exp.jobTitle}
                        company={exp.company}
                        summary={exp.summary}
                        startDate={exp.startDate}
                        finishDate={exp.finishDate}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
