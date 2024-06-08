import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { RunMainContext } from '../MainContext';


export default function Header() {
  let { user, setUser } = useContext(RunMainContext)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-secondary ">
        <Container>
          <Navbar.Brand href="#home" className='text-white fw-bold'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#playQuiz"><Link to={'/play-quize'} className='text-white fw-bold text-decoration-none'>Play Quiz</Link></Nav.Link>
              <Nav.Link href="#addQuiz" >
                <Link to={'/add-quize'} className='text-white fw-bold text-decoration-none'>Add Quiz</Link></Nav.Link>
            </Nav>
            {

              user === '' ?
              < Nav >
              <Nav.Link ><Link to={'/'} className='text-white fw-bold text-decoration-none'>Log in</Link></Nav.Link>
              <Nav.Link eventKey={2} href="#memes" >
                <Link to={'/register'} className='text-white fw-bold text-decoration-none'>Register</Link>
              </Nav.Link>
            </Nav>

          :

          < Nav >
              <Nav.Link className='text-white fw-bold text-decoration-none' onClick={()=>{
                setUser('')
                // setTotalQue(0)
                }}>Logout</Nav.Link>
              <Nav.Link eventKey={2} href="#memes" >
                {/* <Link to={'/register'} className='text-white fw-bold text-decoration-none'>Register</Link> */}
              </Nav.Link>
            </Nav>


            }

        </Navbar.Collapse>
      </Container>
    </Navbar >

    </>
  )
}
