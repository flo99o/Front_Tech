import React, { useState } from "react";
//components
import Button from "../components/Button";
import Hero from "../components/Hero";
//Editor
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateAd = () => {
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);

  const handlechange = (e) => {
      console.log(e.target.value);
  }
  return (
    <div className="createAd">
      <Hero title={"Créer une offre"} subtitle={""} />
      <div className="form-box">
        <form action="" className="createAd-form">
          <div className="createAd-form__inner">
            <p className="createAd-form__block">
              <label for="title">Titre de l'annonce</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Donner un titre à votre annonce"
              />
            </p>
            <p className="createAd-form__block">
              <label for="name-compagny">Nom de l'entreprise</label>
              <input
                type="text"
                name="name-compagny"
                id="name-compagny"
                placeholder="Tape le nom de l'entreprise"
              />
            </p>
            <p className="createAd-form__block">
              <label for="description">Description de l'entreprise</label>
              <textarea
                name="compagny"
                id="description"
                placeholder="Ecrivez une courte description de votre entreprise"
                onChange={handlechange}
              />
            </p>
            <p className="createAd-form__block">
              <label for="position">Description du poste</label>
              <textarea
                name="position"
                id="position"
                placeholder="Ecrivez une description du poste"
              />
            </p>
            <p className="createAd-form__block">
              <label for="profile">Profil recherché</label>
              <textarea
                name="profile"
                id="profile"
                placeholder="Décrivez les prérequis pour le poste"
              ></textarea>
            </p>
            <p className="createAd-form__block">
              <label for="supervisor">Responsable</label>
              <input
                type="text"
                id="supervisor"
                name="supervisor"
                placeholder="Le nom de la personne à contacter"
              />
            </p>
            <p className="createAd-form__block">
              <label for="wage">Salaire :</label>
              <input
                type="range"
                id="wage"
                name="wage"
                min="0"
                max="10000"
                value="1500"
              />
            </p>
            <p className="createAd-form__block">
              <label for="deadline">Date limite de candidature</label>
              <input type="date" name="deadline" id="deadline" />
            </p>
            <Button className={"btn"} value={"Créer l'offre"} />
          </div>
        </form>
      </div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello From CKEditor 5 !</p>"
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default CreateAd;
