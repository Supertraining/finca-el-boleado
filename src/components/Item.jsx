import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const Item = ({stock, id, img, titulo, tipo, valor}) => {

  return (
    <> {stock > 0 ?
      <>
        <Link to={`/item/${id}`}>
          <div className='cardsDivImg'>
            <img src={img} alt={titulo} className='rounded cardsImg' />
          </div>
        </Link>
        <div className='border rounded p-3 my-2 h-100 w-100'>
          <h5>{titulo}</h5>
          <p>{tipo}</p>
          <p><b>Valor:</b> ${valor}</p>
        </div>
      </> :
      <>
        <div className='cardsDivImg'>
          <img src={img} alt={titulo} className='rounded cardsImg' />
        </div>
        <div className='border rounded p-3 my-2 h-100'>
          <h5>{titulo}</h5>
          <p className='bg-dark text-white rounded p-3'><b>Producto sin stock</b></p>
        </div>
      </>
    }
    </>
  )
}
Item.propTypes = {
  stock:PropTypes.number.isRequired, 
  id:PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  titulo:PropTypes.string.isRequired,
  tipo:PropTypes.string.isRequired,
  valor:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
export default Item