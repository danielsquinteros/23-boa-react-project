import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to={'/'}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/users'}>Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Menu