import Item from "./Item";
import PropTypes from 'prop-types'

const ItemList = ({ productos }) => {
  
    return (
        <>
            {
                productos.map((el) => {
                    return (
                        <div key={el.id} className="border rounded p-3 m-2 d-flex flex-column cards">
                            <Item id={el.id} img={el.picture} titulo={el.title} tipo={el.tipo} valor={el.precio} stock={el.stock} />
                        </div>
                    )
                })
            }
        </>
    )
};
ItemList.propTypes = {
    productos: PropTypes.arrayOf(Object)
}
export default ItemList