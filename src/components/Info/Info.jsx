import '../Info/Info.scss'
import Info1 from '../../assets/img/info1.png'
import Info2 from '../../assets/img/info2.png'
import Info3 from '../../assets/img/info3.png'
import InfoMobile1 from '../../assets/img/info-mobile1.png'
import InfoMobile2 from '../../assets/img/info-mobile2.png'
import InfoMobile3 from '../../assets/img/info-mobile3.png'
import Arrow from '../../assets/svg/Right.svg'


function Info() {
    return (
        <>
            <section className='info'>
                <h2 className='info-title'>Selected Work</h2>
                <ul className='info-list'>
                    <li className='info-item'>
                        <div className="info-wrap">
                            <div className="info-text-box">
                                <img className='info1' src={Info1} alt="" />
                                <h2 className='info-list-title'>Subbi –– The free subscriptions manager</h2>
                                <p className='info-list-text'>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                                <button className='info-list-btn'>Download App <img src={Arrow} alt="" /></button>
                            </div>
                            <img src={InfoMobile1} alt="" />
                        </div>
                    </li>
                    <li className='info-item'>
                        <div className="info-wrap">
                            <div className="info-text-box">
                                <img className='info1' src={Info2} alt="" width={70} height={70} />
                                <h2 className='info-list-title'>React Documentation</h2>
                                <p className='info-list-text'>With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.</p>
                                <button className='info-list-btn'>Visit Site <img src={Arrow} alt="" /></button>
                            </div>
                            <img src={InfoMobile2} alt="" />
                        </div>
                    </li>
                    <li className='info-item'>
                        <div className="info-wrap">
                            <div className="info-text-box">
                                <img className='info1' src={Info3} alt=""  width={70} height={70}/>
                                <h2 className='info-list-title'>Storybook Documentation</h2>
                                <p className='info-list-text'>This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.</p>
                                <button className='info-list-btn'>Visit Site <img src={Arrow} alt="" /></button>
                            </div>
                            <img src={InfoMobile3} alt="" />
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Info