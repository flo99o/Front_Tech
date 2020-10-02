import React from 'react'

const Category = (props) => {
    return (
        <div className="category">
        <h2 className="heading-secondary--main">{props.name}</h2>
        <span className="droplist">&#x2304;</span>
      </div>
    )
}

export default Category
