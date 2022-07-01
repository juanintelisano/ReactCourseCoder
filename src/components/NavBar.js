import{ NavLink } from "react-router-dom"


const Nav = ({inHeader, navcl}) => {
        

    return (
            <nav className={navcl}>
                <h3></h3>
                <div className="links">
                    <NavLink to="/categoria/Home">{inHeader?"Home": "Home"}</NavLink>
                    <NavLink to="/categoria/Shopp">{inHeader?"Shopp": "Shopp"}</NavLink>
                    <NavLink to="/categoria/Contact">{inHeader?"Contact": "Contact"}</NavLink>
                    <NavLink to="/categoria/base">{inHeader?"base": "base"}</NavLink>
                    <NavLink to="/categoria/medium">{inHeader?"medium": "medium"}</NavLink>
                    <NavLink to="/categoria/premium">{inHeader?"premium": "premium"}</NavLink>
                    <span className="material-symbols-outlined">shopping_cart
                </span>
                </div>
            </nav>
    )
} 

export default Nav

