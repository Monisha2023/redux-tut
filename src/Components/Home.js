import React from 'react'
function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />

            </div>
            <h1> Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.gadgets360.com/mobiles/reviews/iphone-12-pro-max-price-in-india-vs-iphone-12-pro-review-camera-battery-life-apple-2329400" />
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;