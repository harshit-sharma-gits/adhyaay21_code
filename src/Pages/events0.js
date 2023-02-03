import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

// import Events1 from './events1';
// import Events2 from './events2';

import {
    Timeline,
    Events,
    TextEvent,
    themes,
    createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#f7141b',
    },
    marker: {
      borderColor: '#f7141b',
    },
    timelineTrack: {
      backgroundColor: '#f7141b',
    },
  });

const events0 = () => {

    const _event1 = ({ children }) => (
        <div>
          <h1>Xposure</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Reel making competition</p>
        </div>
    );
    const _event2 = ({ children }) => (
        <div>
          <h1>Pixels</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Best shot of the day.</p>
        </div>
    );
    const _event3 = ({ children }) => (
        <div>
          <h1>Glam Shot</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Model Shot</p>
        </div>
    );
    const _event4 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event5 = ({ children }) => (
        <div>
          <h1>Take A Shelf</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Selfie With Senior & Selfie with Group</p>
        </div>
    );
    const _event6 = ({ children }) => (
        <div>
          <h1>Photowar</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Best Of Adhyaay</p>
        </div>
    );
    const _event7 = ({ children }) => (
        <div>
          <h1>Montage</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Movie Making</p>
        </div>
    );
    const _event8 = ({ children }) => (
        <div>
          <h1>Face Painting</h1>
          <h4>Council : Cultural</h4>
          <h5>Venue : BE/FT Lawn</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event9 = ({ children }) => (
        <div>
          <h1>Selective Declamation</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>The participants will be provided with the speech, they have to imitate it like an original orator.</p>
        </div>
    );
    // const _event10 = ({ children }) => (
    //     <div>
    //       <h1>Patrakar</h1>
    //       <h4>Council : Photography</h4>
    //       <h5>Venue : East Campus</h5>
    //       <p>Television journalism event where students will be asked to report news and they have to shoot a video of themselves.</p>
    //     </div>
    // );
    const _event11 = ({ children }) => (
        <div>
          <h1>Sack Race</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Tennis Lawn</h5>
          <p>It is a fun event in which participants need to race with other opponents but with the legs inside a sack. The first one to cross the finish line wins.</p>
        </div>
    );
    const _event12 = ({ children }) => (
        <div>
          <h1>Gully Cricket</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Tennis Lawn</h5>
          <p>Simple cricket with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)</p>
        </div>
    );
    const _event13 = ({ children }) => (
        <div>
          <h1>Soda Pop</h1>
          <h4>Council : Cultural</h4>
          <h5>Venue : BE/FT Lawn</h5>
          <p>An enthralling event where a table will be intact</p>
        </div>
    );
    const _event14 = ({ children }) => (
        <div>
          <h1>Pehchaan Kaun</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Portico</h5>
          <p>If you have met with your seniors and interacted with them properly you will have a good control over the game "Pehchan Kaun". Show your skills by identifying our respected seniors of 3rd Year and Final Year.</p>
        </div>
    );
    const _event15 = ({ children }) => (
        <div>
          <h1>Art Exhibition</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Garden Of Bliss</h5>
          <p>Participating in every event without enjoying the art exhibition, is fruitless so soothe your eyes with creative and imaginative talent that tacitly divulge all the emotions.</p>
        </div>
    );
    const _event16 = ({ children }) => (
        <div>
          <h1>Shark Tank Mania</h1>
          <h4>Council : Technical Event</h4>
          <h5>Venue : BE/FT Hall</h5>
          <p>A pitch making competition, the project ideas must be based on IT field</p>
        </div>
    );
    const _event17 = ({ children }) => (
        <div>
          <h1>Minute To Win It</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Portico</h5>
          <p>"Life passes by in a jiffy, now is all you have." You feel you are a champion in wordplay, showcase it on the stage of Minute to Win where a minute is all you have to present your opinion and seek agreement. Go ahead grab the opportunity and win against your colleagues, if you can.</p>
        </div>
    );
    const _event18 = ({ children }) => (
        <div>
          <h1>Word A Tale</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>Time to test your team’s coordinating ability. Teams have to frame a meaningful story. The catch is: team members can utter only one word at a time, sequentially.</p>
        </div>
    );
    const _event19 = ({ children }) => (
        <div>
          <h1>Treasure Hunt</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Portico</h5>
          <p>The celebration is not over without an exciting round of treasure hunt. Let's wake up a hidden scavenger inside you and hone your analytical skills by participating in this event. Hunt the unrivalled treasures around you and intensify the mystique of treasure hunt.</p>
        </div>
    );
    const _event20 = ({ children }) => (
        <div>
          <h1>Living On The Edge</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Tennis Lawn</h5>
          <p>An event which tests your all round strength in every field. It includes task doing capability ,your emotional and external strength ,intelligence and knowledge .Participants are allowed to participate in solo and need to clear all the stages to proceed further. </p>
        </div>
    );
    const _event21 = ({ children }) => (
        <div>
          <h1>BGMI Arena</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Online</h5>
          <p>Come and show your talent in gaming if that's what you are fond of. Beat your opponent in your particular game of interest and finally the title is all yours. </p>
        </div>
    );
    const _event22 = ({ children }) => (
        <div>
          <h1>Graffiti</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : Behind Auditorium</h5>
          <p>Ever thought of showing your creativity on the walls. Well school and colleges will punish you but we'll not. What are you waiting for? Join hands and paint the theme of your choice. Its a win-win situation, even if you lose the artist in you wins.</p>
        </div>
    );
    const _event23 = ({ children }) => (
        <div>
          <h1>Scribble And What's The Word</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>Scribble: An individual will walk up to the whiteboard and draw a figure that is the closest match to the word given to him/her and others will naturally have to decipher the given word.   Whats the word: The participants will be provided with a description of a word and they are supposed to guess the word</p>
        </div>
    );
    const _event24 = ({ children }) => (
        <div>
          <h1>Café Crosstalk</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>The motive of this one is to find out “What will Aslan from Chronicles and Dumbledore from Hogwarts” talk about. Inspired from cosplay, either costume or name tags can be used to differentiate who's who</p>
        </div>
    );
    const _event25 = ({ children }) => (
        <div>
          <h1>Awakenings</h1>
          <h4>Council : Cultural</h4>
          <h5>Venue : HBTU Canteen</h5>
          <p>A DJ canteen events</p>
        </div>
    );
    const _event26 = ({ children }) => (
        <div>
          <h1>MELA Quiz</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>Participants will have to answer questions from a diverse pool of topics from Music, Entertainment, Literature and Arts.</p>
        </div>
    );
    const _event27 = ({ children }) => (
        <div>
          <h1>Math Quiz</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Civil Deptt.</h5>
          <p>Participants will have to answer questions from Mathematics.</p>
        </div>
    );
    const _event28 = ({ children }) => (
        <div>
          <h1>Andhvishwas</h1>
          <h4>Council : Hobby</h4>
          <h5>Venue : ASCPC Lawn</h5>
          <p>In this ,a person of one team will be blind folded and with the instructions given by the rest of the team will perform the given activity. So, if you trust your teammates then must show the co-ordination of your team and prove yourself the best team.</p>
        </div>
    );
    const _event29 = ({ children }) => (
        <div>
          <h1>Shayari Bantar</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>This is healthy fight between two teams who will be respectfully roasting each other through their Shayaris.</p>
        </div>
    );
    const _event30 = ({ children }) => (
        <div>
          <h1>Open Mic</h1>
          <h4>Council : Cultural</h4>
          <h5>Venue : BE/FT Lawn</h5>
          <p>An open Mic competition </p>
        </div>
    );
    const _event31 = ({ children }) => (
        <div>
          <h1>Book-O-Holmes</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : BE/FT Hall</h5>
          <p>Participants have to figure out which location or thing in college is associated with the given genre/fandom</p>
        </div>
    );
    const _event32 = ({ children }) => (
        <div>
          <h1>Kavya Sandhya</h1>
          <h4>Council : Literary</h4>
          <h5>Venue : Auditorium</h5>
          <p>The evening comprising of an admired panel of poets who in turn create a enthralling environment by reciting their euphonious creations and making the audience delve into the depth of verses.</p>
        </div>
    );

    return(
        <section className='eventStyle1 mainSection'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            <span className='eventPageSpaces'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span className='eventPageBRs'>
              <br></br><br></br>
            </span>
            <span>
                <span className='choosedDayStyle'>
                    Day 1
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events1">Day 2</Link>
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events2">Day 3</Link>
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme}>
                    <Events>
                        
                        <TextEvent date="TBD" card={_event1} />
                        <TextEvent date="TBD" card={_event2} />
                        <TextEvent date="TBD" card={_event3} />
                        <TextEvent date="TBD" card={_event4} />
                        <TextEvent date="TBD" card={_event5} />
                        <TextEvent date="TBD" card={_event6} />
                        <TextEvent date="TBD" card={_event7} />
                        <TextEvent date="8:30" card={_event8} />
                        <TextEvent date="9:00" card={_event9} />
                        {/* <TextEvent date="9:00" card={_event10} /> */}
                        <TextEvent date="9:00" card={_event11} />
                        <TextEvent date="9:00" card={_event12} />
                        <TextEvent date="9:00" card={_event13} />
                        <TextEvent date="9:00" card={_event14} />
                        <TextEvent date="9:00" card={_event15} />
                        <TextEvent date="10:00" card={_event16} />
                        <TextEvent date="10:00" card={_event17} />
                        <TextEvent date="11:00" card={_event18} />
                        <TextEvent date="11:00" card={_event19} />
                        <TextEvent date="11:00" card={_event20} />
                        <TextEvent date="12:00" card={_event21} />
                        <TextEvent date="12:00" card={_event22} />
                        <TextEvent date="12:00" card={_event23} />
                        <TextEvent date="1:00" card={_event24} />
                        <TextEvent date="1:00" card={_event25} />
                        <TextEvent date="2:00" card={_event26} />
                        <TextEvent date="3:00" card={_event27} />
                        <TextEvent date="4:00" card={_event28} />
                        <TextEvent date="4:00" card={_event29} />
                        <TextEvent date="4:00" card={_event30} />
                        <TextEvent date="5:00" card={_event31} />
                        <TextEvent date="7:00" card={_event32} />

                </Events>
            </Timeline>
            </div>
        </section>
    )
}

export default events0