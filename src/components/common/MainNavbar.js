import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function MainNavbar({ menus }) {
  let location = useLocation();
  const getMenuItem = (index, menu) => {
    return (
      <Link
        key={index}
        className={
          "nav-link" + " " + (location.pathname === menu.link ? "active" : "")
        }
        to={menu.link}
      >
        {menu.name}
        {location.pathname == menu.link ? (
          <div className="menu-marker"></div>
        ) : (
          ""
        )}
      </Link>
    );
  };
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="">Kritik</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menus.map((menu, index) => getMenuItem(index, menu))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
