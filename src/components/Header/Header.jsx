import '../Header/Header.scss'
import HeaderLogo from '../../assets/svg/Logo.svg'
import HeaderLinkedin from '../../assets/svg/LinkedIn.svg'
import HeaderX from '../../assets/svg/X.svg'
import HeaderGithub from '../../assets/svg/Github.svg'
import HeaderSun from '../../assets/svg/Sun.svg'


function Header() {
    return(
        <>
        <header className='header'>
            <div className="container">
                <div className="header-wrap">
                    <ul className='header-list'>
                        <li className='header-item'>
                            <img src={HeaderLogo} alt="" />
                        </li>
                        <li className='header-item'>
                            <a className='header-link' href="">About</a>
                        </li>
                        <li className='header-item'>
                            <a className='header-link' href="">Work</a>
                        </li>
                        <li className='header-item'>
                            <a className='header-link' href="">Notebook</a>
                        </li>
                        <li className='header-item'>
                            <a className='header-link' href="">Contact</a>
                        </li>
                    </ul>
                    <ul className='header-link-list'>
                        <li className='header-link-list'>
                            <img src={HeaderLinkedin} alt="" />
                        </li>
                        <li className='header-link-list'>
                            <img src={HeaderX} alt="" />
                        </li>
                        <li className='header-link-list'>
                            <img src={HeaderGithub} alt="" />
                        </li>
                        <li className='header-link-list'>
                            <span className='line'></span>
                        </li>
                        <li className='header-link-list'>
                            <img src={HeaderSun} alt='' />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header