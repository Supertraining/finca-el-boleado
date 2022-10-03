# TIENDA FINCA EL BOLEADO.

## Descripción general

    - Es una SPA e-commerce  que permite a los usuarios adquirir cualquier producto ofrecido por la bodega. Consistirá en una vista general de todos los productos para que el usuario obtenga un pantallazo de la variedad de productos ofrecidos. Se cuenta, ademas, con la posibilidad de obtener una vista por categoría para facilitar la selección. Finalmente una vez elegido el producto y clickeando sobre el mismo se podrá obtener información detallada y, la posibilidad de adquirir la cantidad que se desee siempre y cuando cuente con stock disponible. 
### Features 

    - Vista Principal: Se observan todos los productos y su valor. Puede elegir una categoría en el menu de navegación para acelerar la búsqueda de productos o clickear sobre el icono del carrito.
    - Detalle del producto: Seleccionando el producto en la vista principal recibirá un detalle del mismo ademas de la posibilidad de seleccionar la cantidad deseada del producto (Siempre que haya Stock disponible) y agregarla a su carrito de compras. En la parte inferior de la vista contara con dos botones que le permitirán "terminar la compra" llevándolo a su carrito o "seguir comprando" que lo llevara a la pagina principal de la tienda, para seleccionar otros productos. 
    - En el carrito se puede observar un detalle de la potencial compra, con la cantidad solicitada de cada producto, el valor del mismo, un subtotal por item y finalmente el monto total de su compra. En caso de haber seleccionado un producto de manera errónea, podrá ser eliminado de manera individual con el botón "eliminar" que encuentra dentro de la vista del mismo. O en caso de querer eliminar el total de los items seleccionados se cuenta con el botón "Vaciar carrito". Por último la vista cuenta con un formulario que valida y recoge los datos del usuario para generar un orden de compra y asi finalizar el proceso. 
### Extra features 

    - El carrito de comprar se almacena en el LocalStorage permitiendo mantener su vigencia aun con el cierre del navegador.
    - Si se confirma la compra se descontará la cantidad de productos ordenados, del stock en la base de datos. En caso de agotarse el stock se leerá en la vista principal un mensaje sobre el producto que el mismo esta sin stock. Por otra parte, mientras dure la sesión los stock de los productos se irán modificando dinámicamente de acuerdo a que cantidad de los mismos se van agregando al carrito, para lograr esta característica se utiliza el sesionStorage para almacenar momentáneamente los cambios de stock intrasesión pero que no afectaran los stock de la base de datos hasta que se confirme la compra. 
## Objetivo 

    - Dar a conocer nuestra bodega y nuestros productos y abrir un canal de venta digital.
## Framework 

    - Bootstrap
## Versionado

    - [GitHub](https://github.com/)
## Estado del proyecto

    - En crecimiento. 
## Autor

    - Desarrollado por Maranga Matías 

Octubre, 2022.