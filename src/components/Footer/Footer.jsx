import '../Footer/Footer.scss'
import Logo from '../../assets/svg/Logo.svg'

function Footer() {
    return(
        <>
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-logo-wrap">
                        <img style={{marginBottom: '16px'}} src={Logo} alt="" width={92} height={60} />
                        <p className='footer-logo-text1'>Thanks for stopping by ッ</p>
                        <p className='footer-logo-text2'>© 2023 Eihab Khan. All Rights Reserved.</p>
                    </div>
                    <div className="footer-list-wrap">
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <a className='footer-link-top' href="">Links</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">About</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Work</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Tech Stack</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Contact</a>
                            </li>
                        </ul>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <a className='footer-link-top' href="">Elsewhere</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Email</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">LinkedIn</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">GitHub</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Twitter</a>
                            </li>
                            <li className='footer-item'>
                                <a className='footer-link' href="">Discord</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer