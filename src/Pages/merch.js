import React from 'react';
import Popup from 'reactjs-popup';
import './style/merch.css';
import img1 from "../res/vipPass1.jpeg"
import img2 from "../res/normalPass.jpeg"
import img from "../Components/assets/merch.jpeg"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const PopupNormal = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
        <div className="popupWindow">
            Price : 999/-
        </div>
    </Popup>
);
const PopupVip = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
        <div className="popupWindowPass">
            Price : 1999/-
            <br />
            VIP Perks!
        </div>
    </Popup>
);

const merch = () => {
    return (
        <div>
            <div className="mainSection">
                <p className='passesText'>
                    <h3>Not from HBTU?</h3>
                    <h2>Need Passes for Celebrity Night & EDM Night?</h2>
                    <h3>Don't Worry! We got you covered!</h3>
                    <i><h3>Book Yours Now!</h3></i>
                </p>
                <br />
                <div className='container0'>
                    <Card className="bg-dark card1">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Normal Pass &nbsp; <PopupNormal /></Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text> */}
                            <Button variant="primary"><a style={{textDecoration: "none", color: "white"}} href="https://forms.gle/ANQuT7V6Enj8kySx9" target="_blank" rel="noopener noreferrer">BUY NOW</a></Button>
                        </Card.Body>
                    </Card>
                    <Card className="bg-dark card1">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>VIP Pass &nbsp; <PopupVip /></Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text> */}
                            <Button variant="primary"><a style={{textDecoration: "none", color: "white"}} href="https://forms.gle/ANQuT7V6Enj8kySx9" target="_blank" rel="noopener noreferrer">BUY NOW</a></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr></hr>
            <div class="container1">
                <img src={img} alt="Avatar" class="image" />
                <div class="overlay">
                    <div class="text2">
                        <p>For the discerning fashionista. We bring out the best for you. T-shirts for ADHYAAY'21 with fascinating colour combos, affordability and of course elegance are of that level that can never be put off. An indispensable possession for the discerning. An outfit you will cherish always. Kick-off your hesitations and come up with your demands because we are made from you. Never be bothered about the size. We have you camouflaged. It just cannot be as serene as this. Authentic style never dies. Try it, wear it, love it.
                            So what's the wait for?<br />
                            Register yourselves right now through the G-form link attached to book yours.</p>
                        <h3><strong>Regards,<br />Cultural Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                        <Button variant="danger" size="lg">
                            <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://forms.gle/tK1fBcWhpjHfkiuc7' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                        </Button><br /><br />
                    </div>
                </div>
            </div>
            <div class="text1">
                <p>For the discerning fashionista. We bring out the best for you. T-shirts for ADHYAAY'21 with fascinating colour combos, affordability and of course elegance are of that level that can never be put off. An indispensable possession for the discerning. An outfit you will cherish always. Kick-off your hesitations and come up with your demands because we are made from you. Never be bothered about the size. We have you camouflaged. It just cannot be as serene as this. Authentic style never dies. Try it, wear it, love it.
                    So what's the wait for?<br />
                    Register yourselves right now through the G-form link attached to book yours.</p><br />
                <h3><strong>Regards,<br />Cultural Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                <Button variant="danger" size="lg">
                    <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://forms.gle/tK1fBcWhpjHfkiuc7' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                </Button>
            </div>
        </div>
    )
}

export default merch