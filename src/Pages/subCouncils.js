import React from 'react';
import Popup from 'reactjs-popup';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';

import './../Pages/style/subcouncils.css';

// import psmscLogo from "../res/psmsc.png";
import litLogo from "../res/lit.png";
import culturalLogo from "../res/cultural.png";
import hobbyLogo from "../res/hobby.png";
import photoLogo from "../res/photo.png";

const PopupExampleCultural = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
      <div className="popupWindow">
        The Cultural Sub Council of USAC is the soul of art, it's something that makes it possible for Harcourtians to come up to something magnificent and exciting. Dance, Drama and Dedication ! We find it all over here.
        <br></br>
        Let it be regular basis events or cultural fest Adhyaay, it is responsible for just about every other event taking place in the university. The sub council has an orchestra of its own which is fully managed by students.
        Ours is an attempt to capture the vibrant persona of the students by offering them a platform to showcase their inner musicians, dancers, actors, painters, writers, photographers, and dreamers.
      </div>
    </Popup>
);
const PopupExampleLit = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
        <div className="popupWindow">
            Clubs in Literary sub-Council are open to all individuals of HBTU kanpur. Every club holds interactive sessions, activities, and competitions throughout the year. Apart from this  Literary sub-council also organizes special events on festive occasions, DJ nights, Jamming nights, Bonefire, and other possible events to create a vibrant atmosphere in the college.
            <br></br>
            We are a bunch of motivated individuals who believe that acollege should have its equal share of fun & frolic along with the case studies.
        </div>
    </Popup>
);
// const PopupExamplePSMSC = () => (
//     <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
//       <div className="popupWindow">
//             PSMSC or Print and Social Media Sub Council is one of the sub-councils under University's Student Activity Council (USAC) that comes up university's newsletter. PSMSC's newsletter is one of the only 4 newsletters to be published
//             and distributed by any academic institution in printed format, including IITs
//             and doon school. It was established to enhance the skills and knowledge of the students and to maintain an active platform for the bigger community i.e. the University itself
//       </div>
//     </Popup>
// );
const PopupExampleHobby = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
      <div className="popupWindow">
        Hobbies are practised for interest and enjoyment, rather than financial reward. Engaging in a hobby can lead to acquiring substantial skills, knowledge, and experience. However, personal fulfilment is the aim.
        <br></br>
        So, HBTU introduced a hobby sub-council that not only instructs children on how to be creative but also to apply that creativity in life.
        <br></br>
         What are hobbies for some people are professions for others. Generally speaking, the person who does something for fun, not remuneration, is called an amateur (or hobbyist), as distinct from a professional.
      </div>
    </Popup>
);
const PopupExamplePhoto = () => (
    <Popup trigger={<button className='butt'><i>i</i></button>} position="center">
      <div className="popupWindow">
        <i>"The photo that you took with your camera is the imagination you want to create with reality" ~ Scott Lorenzo</i>
        <br></br>
        &emsp;The Photography subcouncil envisages a vision comprising an ebullition of every possible activity, that will help community here to pursue engrossment in photography. 
        <br></br>
        &emsp;Can you still remember the wrinkles on a face you saw in a market... wrinkles that speak of a lifetime, deep eyes you would give a life to see again ? The club gives you a means to make these moments last.. forever
      </div>
    </Popup>
);

const sponsors = () => {
    return(
        <section className='sectionStyle mainSection'>
            <br></br>
            <p style={{color: "rgb(255, 251, 242)", fontSize: "40px", fontWeight: "bold", textAlign: "center",}}>Sub-councils</p>
            <br /><br /><br />
            <center>
            <div style={{width: "80vw", height: "100%",}}>
                {/* <div className='subCouncilCard'>
                    <div>
                        <center>
                            <img src={culturalLogo} alt='Cultural SubCouncil Logo' style={{height: "250px", marginTop: "20px"}} />
                        </center>
                    </div>
                    <div className='subCouncilAbout'>
                    The Cultural Sub Council of USAC is the soul of art, it's something that makes it possible for Harcourtians to come up to something magnificent and exciting. Dance, Drama and Dedication ! We find it all over here.
                    <br></br>
                    Let it be regular basis events or cultural fest Adhyaay, it is responsible for just about every other event taking place in the university. The sub council has an orchestra of its own which is fully managed by students.
                    Ours is an attempt to capture the vibrant persona of the students by offering them a platform to showcase their inner musicians, dancers, actors, painters, writers, photographers, and dreamers.
                    </div>
                </div>
                <div className='subCouncilCard'>
                    <div>
                        <center>
                            <img src={litLogo} alt='Literary SubCouncil Logo' style={{height: "250px", marginTop: "20px"}} />
                        </center>
                    </div>
                    <div className='subCouncilAbout'>
                    Clubs in Literary sub-Council are open to all individuals of HBTU kanpur. Every club holds interactive sessions, activities, and competitions throughout the year. Apart from this  Literary sub-council also organizes special events on festive occasions, DJ nights, Jamming nights, Bonefire, and other possible events to create a vibrant atmosphere in the college.
                    <br></br>
                    We are a bunch of motivated individuals who believe that acollege should have its equal share of fun & frolic along with the case studies.
                    </div>
                </div>
                <div className='subCouncilCard'>
                    <div>
                        <center>
                            <img src={psmscLogo} alt='PSMSC Logo' style={{height: "250px", marginTop: "20px"}} />
                        </center>
                    </div>
                    <div className='subCouncilAbout'>
                        PSMSC or Print and Social Media Sub Council is one of the sub-councils under University’s Student Activity Council (USAC) that comes up university's newsletter. PSMSC's newsletter is one of the only 4 newsletters to be published
                        and distributed by any academic institution in printed format, including IITs
                        and doon school. It was established to enhance the skills and knowledge of the students and to maintain an active platform for the bigger community i.e. the University itself
                    </div>
                </div>
                <div className='subCouncilCard'>
                    <div>
                        <center>
                            <img src={hobbyLogo} alt='Hobby SubCouncil Logo' style={{height: "250px", marginTop: "20px"}} />
                        </center>
                    </div>
                    <div className='subCouncilAbout'>
                    Hobbies are practised for interest and enjoyment, rather than financial reward. Engaging in a hobby can lead to acquiring substantial skills, knowledge, and experience. However, personal fulfilment is the aim.
                    <br></br>
                    So, HBTU introduced a hobby sub-council that not only instructs children on how to be creative but also to apply that creativity in life.
                    <br></br>
                    What are hobbies for some people are professions for others. Generally speaking, the person who does something for fun, not remuneration, is called an amateur (or hobbyist), as distinct from a professional.
                    </div>
                </div>
                <div className='subCouncilCard'>
                    <div>
                        <center>
                            <img src={photoLogo} alt='Photography SubCouncil Logo' style={{height: "250px", marginTop: "20px"}} />
                        </center>
                    </div>
                    <div className='subCouncilAbout'>
                        <i>"The photo that you took with your camera is the imagination you want to create with reality" ~ Scott Lorenzo</i>
                        <br></br>
                        &emsp;The Photography subcouncil envisages a vision comprising an ebullition of every possible activity, that will help community here to pursue engrossment in photography. 
                        <br></br>
                        &emsp;Can you still remember the wrinkles on a face you saw in a market... wrinkles that speak of a lifetime, deep eyes you would give a life to see again ? The club gives you a means to make these moments last.. forever

                    </div>
                </div> */}
                <div className='subCouncilCard2'>
                    <div className='subCouncilLogo'>
                        <img src={culturalLogo} alt='Cultural SubCouncil Logo' style={{height: "100%", borderRadius: "50%",}} />
                        <PopupExampleCultural />
                    </div>
                    <div className='subCouncilLogo'>
                        <img src={litLogo} alt='Cultural SubCouncil Logo' style={{height: "100%", borderRadius: "50%",}} />
                        <PopupExampleLit />
                    </div>
                    {/* <div className='subCouncilLogo'>
                        <img src={psmscLogo} alt='Cultural SubCouncil Logo' style={{height: "100%", borderRadius: "50%",}} />
                        <PopupExamplePSMSC />
                    </div> */}
                </div>
                <br /><br /><br /><br />
                <div className='subCouncilCard2'>
                    <div className='subCouncilLogo'>
                        <img src={hobbyLogo} alt='Cultural SubCouncil Logo' style={{height: "100%", borderRadius: "50%",}} />
                        <PopupExampleHobby />
                    </div>
                    <div className='subCouncilLogo'>
                        <img src={photoLogo} alt='Cultural SubCouncil Logo' style={{height: "100%", borderRadius: "50%",}} />
                        <PopupExamplePhoto />
                    </div>
                </div>
                
            </div>
            </center>
            
        </section>
    )
}

export default sponsors;
