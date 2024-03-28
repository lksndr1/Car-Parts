import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Car Parts</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Contacts</li>
                <li>Profile</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
