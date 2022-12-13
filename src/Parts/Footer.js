import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>Bazar Lagbe?</a>
                        <p>Bazar Lagbe has stores in Dhaka, Chattogram, Khulna, Sylhet, Gazipur, and Narayanganj. We believe that our neighborhood people should not have to spend hours in traffic, weather, or lines to buy eggs or other necessities. Bazar Lagbe delivers everything you need to your door for free.</p>
                        <div className="share">
                            <a href="#" className="btn fab fa-facebook-f"></a>
                            <a href="#" className="btn fab fa-twitter"></a>
                            <a href="#" className="btn fab fa-instagram"></a>
                            <a href="#" className="btn fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div className="box">
                        <h3>our location</h3>
                        <div className="links">
                            <a href="#">Dhaka</a>
                            <a href="#">Chittagong</a>
                            <a href="#">Sylhet</a>
                            <a href="#">Gazipur</a>
                            <a href="#">Narayanganj</a>
                        </div>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <div className="links">
                            <a href="#">Home</a>
                            <a href="#">Category</a>
                            <a href="#">Product</a>
                            <a href="#">Deal</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div className="box">
                        <h3>download app</h3>
                        <div className="links">
                            <a href="#">Google Play</a>
                            <a href="#">Window</a>
                            <a href="#">App Store</a>
                        </div>
                    </div>

                </div>

                <h1 className="credit"> created by <span>Md Farhan Shahriyar </span> | all rights reserved! </h1>

            </section>
        </div>
    )
}

export default Footer