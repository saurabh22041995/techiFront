import React from 'react'

function Header() {
    return (
        <div className="container p-4 nav_head">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link nav_link" href="#">Signin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav_link" href="#">Signup</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link nav_link" href="#">Signout</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
