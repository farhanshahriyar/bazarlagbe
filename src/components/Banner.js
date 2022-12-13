import React from 'react'
import banner1 from '../images/banner-1.jpg'
import banner2 from '../images/banner-2.jpg'

const Banner = () => {
    return (
        <div>
            <section className="banner-container">
                <div className="banner">
                    <img src={banner1} alt=""/>
                        <div className="content">
                            <h3>special offer</h3>
                            <p>upto 45% off</p>
                            <a href="#" className="btn">check out</a>
                        </div>
                </div>
                <div className="banner">
                    <img src={banner2} alt=""/>
                        <div className="content">
                            <h3>limited offer</h3>
                            <p>upto 50% off</p>
                            <a href="#" className="btn">check out</a>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Banner