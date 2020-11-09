import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const CreateProject = () => {
  const [values, setValues] = useState({
    name: "",
    link: "",
    language: "",
    error: "",
    redirectTo: false,
    loading: false,
  });

  const { name, link, language, redirectTo, loading } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `https://lit-cove-89381.herokuapp.com/api/v1/projects`,
      data: {
        name,
        link,
        language,
      },
    })
      .then((res) => {
        if ((res.data.status = "success")) {
          setValues({
            ...values,
            name: "",
            link: "",
            language: "",
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
      return <Redirect to="/projects" />;
    }
  };

  const form = () => (
    <div className="mb-5 d-flex justify-content-center">
      <div className="card mt-5 md-2" style={{ width: "30rem" }}>
        <center>{showLoading()}</center>
        <h5 className="card-header text-center text">Create Project</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="text">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name goes here..."
                required=""
                value={name}
                onChange={handleChange("name")}
              />
            </div>
            <div className="form-group">
              <label className="text">Link</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter skill link"
                required=""
                value={link}
                onChange={handleChange("link")}
              />
            </div>
            <div className="form-group">
              <label className="text">Language</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter language"
                required=""
                value={language}
                onChange={handleChange("language")}
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

export default CreateProject;
