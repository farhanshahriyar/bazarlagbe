import React from 'react'
import Nav from '../Parts/Nav'
import home1 from '../images/home-img.png'
const Header = () => {
    return (
        <div>
            {/* nav part */}
            <Nav></Nav>
            {/* Home Part */}
            <section class="home" id="home">

                <div class="image">
                    <img src={home1} alt=""/>
                </div>

                <div class="content">
                    <span>Fresh and Organic</span>
                    <h4>Products Catering to Your Everyday Needs</h4>
                    <a href="#" class="btn">Get Started</a>
                </div>
            </section>
        </div>
    )
}

export default Header