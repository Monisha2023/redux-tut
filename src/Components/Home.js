import React from 'react'
function Home(props) {
    console.warn("home", props);
    return (
        <div>

            <h1> Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.gadgets360.com/mobiles/reviews/iphone-12-pro-max-price-in-india-vs-iphone-12-pro-review-camera-battery-life-apple-2329400" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ name: "i-phone 12", price: 1000 })}>Add To Cart</button>
                
                
                    <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div >
    )
}
export default Home;