import React from 'react'
import cat1 from '../images/category-1.png'
import cat2 from '../images/category-2.png'
import cat3 from '../images/category-3.png'
import cat4 from '../images/category-4.png'

const Category = () => {
  return (
    <div>
      <section className="category" id="category">

        <h1 className="heading">Shop by <span>Our Category</span></h1>

        <div className="box-container">

          <div className="box">
            <h3>vegitables</h3>
            <p>upto 50% off</p>
            <img src={cat1} alt=""/>
              <a href="#" className="btn">Shop now</a>
          </div>
          <div className="box">
            <h3>juice</h3>
            <p>upto 44% off</p>
            <img src={cat2} alt=""/>
              <a href="#" className="btn">Shop now</a>
          </div>
          <div className="box">
            <h3>meat</h3>
            <p>upto 35% off</p>
            <img src={cat3} alt=""/>
              <a href="#" className="btn">Shop now</a>
          </div>
          <div className="box">
            <h3>fruite</h3>
            <p>upto 12% off</p>
            <img src={cat4} alt=""/>
              <a href="#" className="btn">Shop now</a>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Category