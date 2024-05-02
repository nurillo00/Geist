import '../Hero/Hero.scss'
import Me from '../../assets/img/me.jpg'

function Hero() {
    return(
        <>
        <section className='hero'>
            <div className="hero-wrap">
                <div className="hero-text-box">
                    <h1 className='hero-title'><span className='hero-person'>My</span> Team 🧑‍💻😎</h1>
                    <p className='hero-text'>A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.</p>
                    <div className="btn-wrap">
                        <button className='btn1'>See my resume</button>
                        <button className='btn2'>Get in touch</button>
                    </div>
                </div>
                <img style={{objectFit: 'cover', borderRadius: '50%'}} src={Me} alt="" width={300} height={300} />
            </div>
        </section>
        </>
    )
}

export default Hero