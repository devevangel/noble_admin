import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import TechStackTable from "./components/tech_table/Table";
import ProjectsTable from "./components/project_table/Table";
import ExperienceTable from "./components/experience_table/Table";
import CreateStack from "./components/forms/CreateStack";
import CreateProject from "./components/forms/CreateProject";
import CreateExperience from "./components/forms/CreateExperience";
import EditStack from "./components/forms/EditStack";
import EditProject from "./components/forms/EditProject";
import EditExperience from "./components/forms/EditExperience";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={TechStackTable} />
        <Route exact path="/projects" component={ProjectsTable} />
        <Route exact path="/experience" component={ExperienceTable} />
        <Route exact path="/addStack" component={CreateStack} />
        <Route exact path="/addProject" component={CreateProject} />
        <Route exact path="/addExp" component={CreateExperience} />
        <Route exact path="/editStack" component={EditStack} />
        <Route exact path="/editProject" component={EditProject} />
        <Route exact path="/editExp" component={EditExperience} />
      </Switch>
    </HashRouter>
  );
}

export default App;
