import '../Me/Me.scss'
import Iam from '../../assets/img/me.jpg'
import Desk from '../../assets/img/desk.png'
import Shelf from '../../assets/img/shelf.png'
import Tech from '../../assets/img/tech.png'

function Me() {
    return(
        <>
        <section className='me'>
            <h2 className='me-title'>Get to know me</h2>
            <ul className='me-list'>
                <li style={{Padding: '60px 127px 39px 154px'}} className='me-item'>
                    <h4 className='me-list-title'>About me</h4>
                    <p className='me-list-text'>Who I am and what I do</p>
                    <img style={{borderRadius: '35%'}} src={Iam} alt="" width={254} height={294} />
                </li>
                <li className='me-item'>
                    <h4 className='me-list-title'>Notebook</h4>
                    <p className='me-list-text'>My thoughts, insights, and reflections</p>
                    <img style={{objectFit: 'cover'}} src={Desk} alt="" width={254} height={294} />
                </li>
                <li className='me-item'>
                    <h4 className='me-list-title'>Bookshelf</h4>
                    <p className='me-list-text'>Books and pieces of wisdom I’ve enjoyed reading</p>
                    <img style={{objectFit: 'cover'}} src={Shelf} alt="" width={254} height={294} />
                </li>
                <li className='me-item'>
                    <h4 className='me-list-title'>Tech Stack</h4>
                    <p className='me-list-text'>The dev tools, apps, devices, and games I use and play.</p>
                    <img style={{objectFit: 'cover'}} src={Tech} alt="" width={254} height={294} />
                </li>
            </ul>
        </section>
        </>
    )
}

export default Me