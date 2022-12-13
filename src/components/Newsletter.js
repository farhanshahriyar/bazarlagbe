import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h3>subscribe us for latest updates</h3>

            <form action="">
                <input class="box" type="email" placeholder="enter your email" />
                <input type="submit" value="subscribe" class="btn" />
            </form>
        </div>
    )
}

export default Newsletter