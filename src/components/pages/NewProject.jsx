import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    //initialize cost and services

    project.cost = 0;
    project.services = [];

    fetch("https://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(project),
    })
      .then(
        ((resp) => resp.json()).then((data) => {
          console.log(data);
          //redirect
          history.push("./projects", {
            message: "projeto criado com sucesso!",
          });
        })
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>NewProject</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
