import { GoSignIn } from "react-icons/go";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";


function Header() {
  const expand = "lg";

  return (

    <>
    <header className="w-full shadow-sm border-b bg-white" >

     
      <div className="w-full bg-white border-b py-3">
        <Container className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="logo-circle">logo</div>
            <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
              سامانه تحلیل علم‌سنجی و ارزیابی دانشگاهی
            </h1>
          </div>

        
          <button className="login-button d-none d-lg-flex">
            <GoSignIn className="me-2 svgIcon" />
            ورود
          </button>
        </Container>
      </div>

      <Navbar 
        expand={expand}
        className="bg-[#0cf3e0] py-2 border-b"
        key={expand}
      >
        <Container fluid >

          
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

         
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
           className="offcanvas-custom"

          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                منوی سامانه
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav  className="flex-grow-1 justify-content-start gap-4 text-left">

                <Nav.Link href="#">خانه</Nav.Link>
                <Nav.Link href="#">پژوهشگران</Nav.Link>
                <Nav.Link href="#">اعضای هیئت علمی</Nav.Link>
                <Nav.Link href="#">نشریات علمی</Nav.Link>
                <Nav.Link href="#">درباره سامانه</Nav.Link>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          

        </Container>
      </Navbar>
    </header>

    </>
  );
}

export default Header;
