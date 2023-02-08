import { Link } from "react-router-dom"

function Userdetail(){

    return(


        <section className="home-page">
            <div className="navbar">
                <ul className="nav-ul">
                    <li className="nav-li"><Link to='/profile'>Your Profile</Link></li>
                    <li className="nav-li"><Link to='/'>Sign Out</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Userdetail;