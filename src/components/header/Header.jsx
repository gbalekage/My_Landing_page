import React from 'react'
import "./Header.css"

const Header = () => {

    

  return (
    <header className="header">
        <nav className="nav container">
            <a href="#" className='nav__logo'>Gael</a>

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className='nav__link active__link'>
                            <i className="uil uil-estate nav__icon"></i> Accieul
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className='nav__link'>
                            <i className="uil uil-user nav__icon"></i> Apropos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className='nav__link'>
                            <i className="uil uil-file-alt nav__icon"></i> Compétences
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className='nav__link'>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className='nav__link'>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close"></i>
            </div>

            <div className="nav__theme">
                <i class="uil uil-moon"></i>
            </div>

            <div className="nav__toggle">
                <i className="uil uil-apps"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header