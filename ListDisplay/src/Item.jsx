import React from 'react'

const Item = ({title,thumbnail,category,price}) => {
  return (
    <div>
    <img src={thumbnail} alt="" />
    <h2>{title}</h2>
    <p>{category}</p>
    <p>{price}</p>
    <button>Buy</button>
    </div>
  )
}

export default Item