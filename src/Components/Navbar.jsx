import * as Icon from "react-bootstrap-icons";
const Navbar = ({ setCategory, category }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge fw-normal badge-md fs-4">
            <Icon.Globe />
            <span className="ms-1">NewsMag</span>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ cursor: "pointer" }}>
            {["general", "technology", "business", "health", "science", "sports", "entertainment"].map((item) => (
              <li className="nav-item" key={item}>
                <div className={`nav-link ${category === item && "active"}`} onClick={() => setCategory(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
