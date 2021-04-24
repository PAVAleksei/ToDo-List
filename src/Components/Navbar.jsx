import { NavLink } from 'react-router-dom'


export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ToDo List</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' exact>
              Главная
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to='/about'>
              Информация
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
