import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	Button,
} from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
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
						class="link-secondary"
						style={{ textDecoration: 'none' }}
					>
						Down the Reddit Hole
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<NavDropdown title="Visit Wonderland" id="basic-nav-dropdown">
							<NavDropdown.Item href="/">Recent</NavDropdown.Item>
							<NavDropdown.Item href="/til">TIL</NavDropdown.Item>
							<NavDropdown.Item href="/explain">ELI5</NavDropdown.Item>
							<NavDropdown.Item href="/memes">Memes</NavDropdown.Item>
							<NavDropdown.Item href="/programhumor">
								Programmer Humor
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
