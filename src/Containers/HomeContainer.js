import { connect } from 'react-redux';
import {addToCart, removeFromCart} from '../Services/Actions/actions.js';
import Home from '../Components/Home';
const mapStateToProps=state=>({
data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
addToCartHandler:data=>dispatch(addToCart(data)),
removeFromCartHandler:data=>dispatch(removeFromCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)




//export default Home;