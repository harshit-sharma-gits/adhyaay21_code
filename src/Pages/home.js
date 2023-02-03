import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import '../App.css';

import back from "../Components/assets/DSC_4894.jpg";
import adhyaay_logo from "../res/ADHYAAY_LOGO_WHITE.png";
import adhyaay_logo_whitered from "../res/ADHYAAY WHITERED.png"

const home = () => {
    const homeStyle = {
        height: '100vh',
        backgroundImage: `url(${back})`,
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const aboutStyle = {
        height: '600px',
        width: '100%',
        backgroundColor: 'black',
        backgroundImage:
            "url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/xl.svg'), url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/sm.svg')",
    };
    return (
        <section>
            <center>
                <div style={homeStyle} className="d-flex align-items-center justify-content-center landingPage">
                    <Image overflow="hidden" src={adhyaay_logo} rounded className="mainPageAdhyaayLogo" />
                    <Button variant="outline-danger" size="lg">
                        <a style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }} href='https://forms.gle/gw85LfXQxULWfHQa7' target='_blank' rel="noopener noreferrer">Register Now</a>
                    </Button>
                </div>
                <div style={aboutStyle}>
                    <div className='aboutStyleGrid'>
                        <div className='aboutStyleGridText'>
                            <h1>About</h1>
                            <br></br>
                            <p>ADHYAAY is the annual literary-cum-cultural fest of HBTU.
                                It is expected that ADHYAAY'21 will have 10,000+ footfalls and hence it will be larger than ever.<br></br>
                                <br />
                                A total of 3 days into Adhyaay will witness various events coming from all the sub-councils of HBTU.
                                ADHYAAY brings the combined list of events from cultural, literary, hobby and photography sub-councils into one bracket
                            </p>
                        </div>
                        <div className='aboutStyleGridPic'>
                            <Image overflow="hidden" src={adhyaay_logo_whitered} rounded style={{ height: "200px", width: "230px", }} className="adhyaayLogo" />
                        </div>
                    </div>
                </div>
            </center>
            {/* <Footer /> */}
        </section>
    )
}

export default home