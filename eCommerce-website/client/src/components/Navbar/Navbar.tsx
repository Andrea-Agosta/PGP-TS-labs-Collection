import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#"><p className='logo'>F<span>ashion</span><br />S<span>tyle</span><br />S<span>olution</span><br /></p></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className='row'>
            <div className='col-12'>
              <ul className="navbar-nav fw-bold">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Women</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Kids</a>
                </li>
              </ul>
            </div>
            <div className='col-12'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link fs-6" aria-current="page" href="#">Clothing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shoes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Accessories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Brands</a>
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar