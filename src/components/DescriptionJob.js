import React from 'react'

const DescriptionJob = (props) => {
    console.log('descriptionJob props: ', props)
    const { id, image, wage, type, title, compagny_name, ville } = props
    return (
        <a key={id} href="" className="job-list__item">
        <div className="job-list__photo">
          <img src={image} />
        </div>
        <div className="job-list__contract">  <span className="salary">{wage}€</span>
     <span className="type">{type}</span>
   </div>
   <div className="job-list__info">
     <h6 className="name-job">{title}</h6>
     <ul className="compagny__info">
       <li className="compagny__name">{compagny_name}</li>
       <li className="compagny__place">{ville}</li>
     </ul>
   </div>
 </a>
    )
}

export default DescriptionJob
