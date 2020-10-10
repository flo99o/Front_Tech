import React from 'react'

const Category = ({name}) => {
    return (
        <div className="category">
        <h2 className="heading-secondary--main">{name}</h2>
        <span className="droplist">&dArr;</span>
      </div>
    )
}

export default Category
