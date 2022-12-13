import React from 'react'
import prod1 from '../images/product-1.png'
import prod2 from '../images/product-2.png'
import prod3 from '../images/product-3.png'
import prod4 from '../images/product-4.png'
import prod5 from '../images/product-5.png'
import prod6 from '../images/product-6.png'
import prod7 from '../images/product-7.png'
import prod8 from '../images/product-8.png'
import prod9 from '../images/product-9.png'

const Product = () => {
  return (
    <div>
        <section className="product" id="product">

<h1 className="heading">Latest <span>Products</span></h1>

<div className="box-container">

    <div className="box">
        <span className="discount">-33%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod1} alt=""/>
        <h3>organic banana</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-45%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod2} alt=""/>
        <h3>organic tomato</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-52%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod3} alt=""/>
        <h3>organic orange</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-13%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod4} alt=""/>
        <h3>natural mild</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-20%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod5} alt=""/>
        <h3>organic grapes</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-29%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod6} alt=""/>
        <h3>natural almonts</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-55%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod7} alt=""/>
        <h3>organic apple</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-30%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod8} alt=""/>
        <h3>natural butter</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-40%</span>
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={prod9} alt=""/>
        <h3>organic carrot</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="price"> $10.50 <span> $13.20 </span> </div>
        <div className="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1"/>
            <span> /kg </span>
        </div>
        <a href="#" className="btn">add to cart</a>
    </div>

</div>

</section>
    </div>
  )
}

export default Product