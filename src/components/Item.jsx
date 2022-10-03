import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <> {props.stock > 0 ?
      <>
        <Link to={`/item/${props.id}`}>
          <div className='cardsDivImg'>
            <img src={props.img} alt={props.title} className='rounded cardsImg' />
          </div>
        </Link>
        <div className='border rounded p-3 my-2 h-100'>
          <h5>{props.titulo}</h5>
          <p>{props.tipo}</p>
          <p><b>Valor:</b> ${props.valor}</p>
        </div>
      </> :
      <>
        <div className='cardsDivImg'>
          <img src={props.img} alt={props.title} className='rounded cardsImg' />
        </div>
        <div className='border rounded p-3 my-2 h-100'>
          <h5>{props.titulo}</h5>
          <p className='bg-dark text-white rounded p-3'><b>Producto sin stock</b></p>
        </div>
      </>
    }
    </>
  )
}

export default Item