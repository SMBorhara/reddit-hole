import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../app/store';

const NavBarComp = () => {
	const allPosts = useSelector(selectAllPosts);
	// let search = (term) => {
	// 	console.log(allPosts);
	// };

	// let inputHandler = (e) => {
	// 	var lowerCase = e.target.value.toLowerCase();
	// 	// TODO: Make search page
	// };
	return (
		<Navbar bg="purple" expand="lg" variant="light">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src="https://i.gifer.com/XEDA.gif"
						width="75"
						height="75"
						className="bunny"
						alt="Hopping Bunny"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/til">TIL</Nav.Link>
						<NavDropdown title="More" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/explain">ELI5</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/memes">Memes</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/programhumor">
								Programmer Humor
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					{/* <Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							onChange={inputHandler}
						/>
						<Button variant="outline-success">Search</Button>
					</Form> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBarComp;
