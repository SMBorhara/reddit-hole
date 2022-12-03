import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { MDBNavbar, MDBContainer } from 'mdb-react-ui-kit';

import '../generalformat.css';

const NavBar = () => {
	return (
		<div>
			<MDBNavbar
				bg="light"
				expand="lg"
				light
				style={{ backgroundColor: '#e3f2fd' }}
			>
				<MDBContainer fluid>
					<Navbar.Brand href="#">
						<Nav.Link href="/wonderland">
							<img
								className="bunny"
								src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
								alt="rabbit wearing sunglasses"
								width="75"
								height="75"
							/>
						</Nav.Link>
						<Nav.Link
							href="/"
							className="link-secondary"
							style={{ textDecoration: 'none' }}
							id="homeLink"
						>
							Down the Reddit Hole
						</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="ms-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<NavDropdown title="Visit Wonderland" id="basic-nav-dropdown">
								<NavDropdown.Item className="dropList" href="/">
									Recent
								</NavDropdown.Item>
								<NavDropdown.Item className="dropList" href="/til">
									TIL
								</NavDropdown.Item>
								<NavDropdown.Item className="dropList" href="/explain">
									ELI5
								</NavDropdown.Item>
								<NavDropdown.Item className="dropList" href="/memes">
									Memes
								</NavDropdown.Item>
								<NavDropdown.Item className="dropList" href="/programhumor">
									Programmer Humor
								</NavDropdown.Item>
								<NavDropdown.Item
									className="dropList"
									href="https://www.reddit.com/"
								>
									Fall Further
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
};

export default NavBar;
