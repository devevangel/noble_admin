import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const CreateStack = () => {
  const [values, setValues] = useState({
    name: "",
    percentage: "",
    lastWeek: "",
    lastMonth: "",
    error: "",
    redirectTo: false,
    loading: false,
  });

  const { name, percentage, lastWeek, lastMonth, redirectTo, loading } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3002/api/v1/techStack`,
      data: {
        name,
        percentage,
        lastWeek,
        lastMonth,
      },
    })
      .then((res) => {
        if ((res.data.status = "success")) {
          setValues({
            ...values,
            name: "",
            percentage: "",
            lastWeek: "",
            lastMonth: "",
            loading: false,
            redirectTo: true,
          });
        }
      })
      .catch((err) => {
        setValues({ ...values, error: err });
      });
  };

  const handleChange = (name) => (event) => {
    event.preventDefault();
    setValues({ ...values, [name]: event.target.value });
  };

  const showLoading = () => {
    if (loading) {
      return (
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  };

  const redirectUser = () => {
    if (redirectTo) {
      return <Redirect to="/" />;
    }
  };

  const form = () => (
    <div className="mb-5 d-flex justify-content-center">
      <div className="card mt-5 md-2" style={{ width: "30rem" }}>
        <center>{showLoading()}</center>
        <h5 className="card-header text-center text">Create TechStack</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="text">Tech name</label>
              <input
                type="text"
                className="form-control"
                placeholder="tech name goes here..."
                required=""
                value={name}
                onChange={handleChange("name")}
              />
            </div>
            <div className="form-group">
              <label className="text">Skill percentage</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter skill percentage"
                required=""
                value={percentage}
                onChange={handleChange("percentage")}
              />
            </div>
            <div className="form-group">
              <label className="text">Percentage lastweek</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter skill percentage lastweek"
                required=""
                value={lastWeek}
                onChange={handleChange("lastWeek")}
              />
            </div>
            <div className="form-group">
              <label className="text">Percentage lastmonth</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter skill percentage lastmonth"
                required=""
                value={lastMonth}
                onChange={handleChange("lastMonth")}
              />
            </div>
          </form>
          <center>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-outline-secondary text"
            >
              Share
            </button>
          </center>
        </div>
      </div>
    </div>
  );

  return (
    <div className="parent">
      {redirectUser()}
      {form()}
    </div>
  );
};

export default CreateStack;
