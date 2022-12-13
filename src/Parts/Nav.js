import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className="header-1">

                <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>Bazar Lagbe?</a>

                <form action="" className="search-box-container">
                    <input type="search" id="search-box" placeholder="search products here..."/>
                        <label for="search-box" className="fas fa-search"></label>
                </form>

            </div>

            <div className="header-2">

                <div id="menu-bar" className="fas fa-bars"></div>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#category">Category</a>
                    <a href="#product">Product</a>
                    <a href="#deal">Deal</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-user-circle"></a>
                </div>

            </div>
        </div>
    )
}

export default Nav