import '../End/End.scss'
import Send from '../../assets/svg/Send.svg'

function End() {
    return(
        <>
        <section className='end'>
            <div className="end-wrap">
                <div className="end-text-box">
                    <h2 className='end-title'>Let’s work together</h2>
                    <p className='end-text'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
                </div>
                <button className='end-btn'><img src={Send} alt="" /> Get in touch</button>
            </div>
        </section>
        </>
    )
}

export default End