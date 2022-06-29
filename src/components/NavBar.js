import{ NavLink } from "react-router-dom"


const Nav = ({inHeader, navcl}) => {
        

    return (
            <nav className={navcl}>
                <h3></h3>
                <div className="links">
                    <NavLink to="/categoria/Home">{inHeader?"Home": "Home"}</NavLink>
                    <NavLink to="/categoria/Shopp">{inHeader?"Home": "Shopp"}</NavLink>
                    <NavLink to="/categoria/Contact">{inHeader?"Home": "Contact"}</NavLink>
                    <NavLink to="/category/base">{inHeader?"Home": "base"}</NavLink>
                    <NavLink to="/category/medium">{inHeader?"Home": "medium"}</NavLink>
                    <NavLink to="/category/premium">{inHeader?"Home": "premium"}</NavLink>

                    <span className="material-symbols-outlined">shopping_cart
                </span>
                </div>
            </nav>
    )
} 

export default Nav

