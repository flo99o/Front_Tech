import React from "react";

const FilterBar = () => {
  return (
    <section className="filterBar">
      <div className="job-search">
        <form action="" className="job-search__form">
          <div className="job-search__filter">
            <select name="job" id="job-select">
              <option value="">--Choisissez un métier--</option>
              <option value="Designer">Designer</option>
              <option value="Développeur Front-end">Développeur Front-end</option>
            </select>
            <select name="location" id="location-select">
              <option value="">--Choisissez un lieu--</option>
              <option value="75000">Paris</option>
              <option value="94000">Ivry-sur-seine</option>
            </select>
            <select name="compagn" id="compagny-select">
              <option value="">--Choisissez une entreprise--</option>
              <option value="BNP">BNP</option>
              <option value="Développeur Front-end">Développeur Front-end</option>
            </select>
            <input type="submit" value="Rechercher"/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterBar;
