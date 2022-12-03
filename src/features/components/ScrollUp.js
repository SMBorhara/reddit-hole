import React from 'react';
import { MDBBtn, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';

const ScrollUp = () => {
	let mybutton;

	window.onscroll = function () {
		mybutton = document.getElementById('btn-back-to-top');
		scrollFunction(mybutton);
	};

	function scrollFunction(mybutton) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = 'block';
		} else {
			mybutton.style.display = 'none';
		}
	}

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<MDBContainer fluid>
			<MDBBtn
				onClick={backToTop}
				id="btn-back-to-top"
				style={{
					position: 'fixed',
					bottom: '40px',
					right: '40px',
					backgroundColor: '#80DEEA',
				}}
				className="mx-2"
				color="#B3E5FC"
				size="lg"
				floating
			>
				<MDBIcon fas icon="angle-double-up" size="lg" />
			</MDBBtn>
		</MDBContainer>
	);
};

export default ScrollUp;
