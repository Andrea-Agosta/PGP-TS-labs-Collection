import Modal from "../Modal/Modal";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <a className="navbar-brand fs-2" href="/">❤️ &nbsp; Puppies</a>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <Modal typeBody={"addPuppy"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar