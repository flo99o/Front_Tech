import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import JobList from "../components/JobList";

const JobPage = () => {
  const title = "Full Stack développeur";
  return (
    <div className="jobPage">
      <Hero title={title} />
      <div className="container">
        <JobList />
        <div className="jobpage__content">
          <div className="jobPage__description">
            <h6>Job description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              veritatis labore eos nihil consectetur fugiat harum adipisci.
              Fugiat velit molestias quidem ipsa, tempora nisi autem delectus
              repellat? Perferendis, saepe praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              deleniti perspiciatis voluptatem quisquam itaque modi quasi
              cupiditate sequi fuga aliquam laboriosam vero voluptates, nostrum
              nemo? Recusandae provident aliquam fuga eveniet.
            </p>
          </div>
          <div className="jobPage__prerequisite">
            <h6>Pré Requis</h6>
            <ul>
              <li>Expérience de plus de 2 ans</li>
              <li>Maitrise React et Nodejs</li>
              <li>Autonome et proactive</li>
              <li>Appétence pour le design</li>
              <li>Sait travailler sous la pression</li>
              <li>Bac +3</li>
              <li>Peut fournir des référence</li>
            </ul>
          </div>
          <div className="side-bar">
            <div className="widget">
              <div className="inner">
                <Button className={"btn btn--grey"} value={"Sauvegarder"} />
                <Button className={"btn"} value={"Postuler"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
