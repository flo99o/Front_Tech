import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterBar = () => {
const [getValuesFilter, setGetValuesFilter] = useState([]
  )
  
  useEffect(() => {
    const getValuesFilter = async () => {
      const url = `http://localhost:5000/users/getValuesFilter`;
      const result = await axios.get(url);
      setGetValuesFilter(result.data);
    };
    getValuesFilter();
  }, []);

  return (
    <section className="filterBar">
      <div className="job-search">
        <form action="" className="job-search__form">
          <div className="job-search__filter">
            <select name="job" id="job-select">
              <option value="" selected disabled hidden>Métier</option>
              {getValuesFilter.map((item, index) => (
                <option key={index} value={item.title}>{item.title}</option>
              ))}
            </select>
            <select name="location" id="location-select">
              <option value="" selected disabled hidden>Lieu</option>
              {getValuesFilter.map((item, index)  => (
                <option key={index} value={item.ville}>{item.ville}</option>
              ))}
            </select>
            <select name="compagn" id="compagny-select">
              <option value="" selected disabled hidden>Entreprise</option>
              {getValuesFilter.map((item, index)  => (
                <option key={index} value={item.compagny_name}>{item.compagny_name}</option>
              ))}
            </select>
            <input className="job-search__btn btn" type="submit" value="Rechercher"/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterBar;
