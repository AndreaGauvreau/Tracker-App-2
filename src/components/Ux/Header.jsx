import React from 'react'
import Logo from '../Lib/Logo'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="headercomponents">
        <Logo />
        <div className="profil">
          Andréa
          <img
            src="https://thispersondoesnotexist.com/image"
            alt="profilpics"
          />
        </div>
      </div>
    </header>
  )
}
