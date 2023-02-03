import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

// import Events1 from './events1';
// import Events0 from './events0';

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
  }
);

const events2 = () => {

  const _event1 = ({ children }) => (
    <div>
      <h1>Turn Coats</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : Auditorium</h5>
      <p>This would be a fight against us. Participants will be given a debating statement and will have to present both, for and against statements, with full vigour.</p>
    </div>
  );
  const _event2 = ({ children }) => (
    <div>
      <h1>High Five</h1>
      <h4>Council : Cultural</h4>
      <h5>Venue : BE/FT Lawn</h5>
      <p>Five events comprising of bursting ballon, goal post,Blindman Swag,Identify me and He-me.</p>
    </div>
  );
  const _event3 = ({ children }) => (
    <div>
      <h1>Lemon Spoon Race</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Tennis Lawn</h5>
      <p>Presenting you the one of the interested event of the day. Participants will be provided a spoon and a lemon and they need to race with each other balancing the lemon on spoon and spoon being hold in the mouth.</p>
    </div>
  );
  const _event4 = ({ children }) => (
    <div>
      <h1>Gully Cricket</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Tennis Lawn</h5>
      <p>Simple cricket with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)</p>
    </div>
  );
  const _event5 = ({ children }) => (
    <div>
      <h1>Living On the Edge</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Tennis Lawn</h5>
      <p>An event which tests your all round strength in every field. It includes task doing capability ,your emotional and external strength ,intelligence and knowledge .Participants are allowed to participate in solo and need to clear all the stages to proceed further. </p>
    </div>
  );
  const _event6 = ({ children }) => (
    <div>
      <h1>Dum Laga Key Haisha</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : ASCPC Lawn</h5>
      <p>Participants (team of 6) are provided with a rope with a line of reference. The team who drags the opposite team in their area wins and proceed further for the final round. Don't forget to plant your feet and pull until your last breath.</p>
    </div>
  );
  const _event7 = ({ children }) => (
    <div>
      <h1>Minute To Win it</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Portico</h5>
      <p>"Life passes by in a jiffy, now is all you have." You feel you are a champion in wordplay, showcase it on the stage of Minute to Win where a minute is all you have to present your opinion and seek agreement. Go ahead grab the opportunity and win against your colleagues, if you can.</p>
    </div>
  );
  const _event8 = ({ children }) => (
    <div>
      <h1>Poetry (Theme Based)</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : Auditorium</h5>
      <p>Participants will have to present poems inspired from the theme given to them in either Hindi or English.</p>
    </div>
  );
  const _event9 = ({ children }) => (
    <div>
      <h1>BGMI Arena </h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Online</h5>
      <p>Come and show your talent in gaming if that's what you are fond of. Beat your opponent in your particular game of interest and finally the title is all yours.</p>
    </div>
  );
  const _event10 = ({ children }) => (
    <div>
      <h1>Awakenings</h1>
      <h4>Council : Cultural</h4>
      <h5>Venue : HBTU Canteen</h5>
      <p>DJ canteen event.</p>
    </div>
  );
  const _event11 = ({ children }) => (
    <div>
      <h1>Ideathon</h1>
      <h4>Council : Technical Events</h4>
      <h5>Venue : Drawing Hall</h5>
      <p>Case Study Challenge -Submitting an abstract.</p>
    </div>
  );
  // const _event12 = ({ children }) => (
  //   <div>
  //     <h1>Samvaad</h1>
  //     <h4>Council : PSMSC</h4>
  //     <h5>Venue : Auditorium</h5>
  //     <p>In collaboration with various media houses a talk event can be organized which will focus on the overall personality development of an individual.</p>
  //   </div>
  // );
  const _event13 = ({ children }) => (
    <div>
      <h1>Latte Vs Cappucino</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : Civil Deptt.</h5>
      <p>The format will be somewhat similar to debating ( not traditional). Different fandoms will be pitted against each other fighting who's better (movies, books, all inclusive)</p>
    </div>
  );
  const _event14 = ({ children }) => (
    <div>
      <h1>Mr and Mrs Litterati</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : BE/FT Seminar Hall</h5>
      <p>The winners of all the events under Literary Sub-Council will get the chance to participate in this event. There will be a series of competitions leading to a final interview with the Student Secretaries of Literary Sub-Council. The winner here would be declared as Mr Literati and Miss Literati</p>
    </div>
  );
  const _event15 = ({ children }) => (
    <div>
      <h1>Dash Race(Squid Game)</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Tennis Lawn</h5>
      <p>It is an multi tasking event race. It consist of various stages which includes various fun and awesome tasks to complete the race. It will be one of the most awaited event of the day.</p>
    </div>
  );
  const _event16 = ({ children }) => (
    <div>
      <h1>Quirky Crossover</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : BE/FT Seminar Hall</h5>
      <p>A crossover event in which a personality from a different universe enters a different universe. Participants are supposed to write/speak/act in accordance</p>
    </div>
  );
  const _event17 = ({ children }) => (
    <div>
      <h1>Beat The Street</h1>
      <h4>Council : Cultural</h4>
      <h5>Venue : Auditorium</h5>
      <p>Beat the Street is basically a Face OFF event in which students will perform live in front of crowded audience and compete with each other.</p>
    </div>
  );
  const _event18 = ({ children }) => (
    <div>
      <h1>Gully Football</h1>
      <h4>Council : Hobby</h4>
      <h5>Venue : Tennis Lawn</h5>
      <p>Dribbling on a level ground is a thing, and dribbling amongst all the hassle of potholes and people and corners is another. If dribbling flows in your blood, penalty shootouts give you an adrenaline rush, then without wasting a moment put on your football studs and come for a gully match. Sounds strange?? Gully Football is the new trend guys, Gully Cricket is a forlorn affair now. Showing up in teams would be to your advantage.</p>
    </div>
  );
  const _event19 = ({ children }) => (
    <div>
      <h1>Cultural Night</h1>
      <h4>Council : Cultural</h4>
      <h5>Venue : Open Air Stage</h5>
      <p>OPEN</p>
    </div>
  );
  const _event20 = ({ children }) => (
    <div>
      <h1>Spell Bee</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : online</h5>
      <p>Spell out the word.</p>
    </div>
  );
  const _event21 = ({ children }) => (
    <div>
      <h1>MayMay Maniac</h1>
      <h4>Council : Literary</h4>
      <h5>Venue : online</h5>
      <p>Mene wars</p>
    </div>
  );

    return(
        <section className='eventStyle3 mainSection'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            <span className='eventPageSpaces'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span className='eventPageBRs'>
              <br></br><br></br>
            </span>
            <span>
                <span className='dayChooserStyle' >
                    <Link className='link' to="/Events0">Day 1</Link>
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events1">Day 2</Link>
                </span>
                <span className='choosedDayStyle'>
                    Day 3
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme} opts="inline-evts">
                    <Events>

                        <TextEvent date="9:00" card={_event1} />
                        <TextEvent date="9:00" card={_event2} />
                        <TextEvent date="9:00" card={_event3} />
                        <TextEvent date="9:00" card={_event4} />
                        <TextEvent date="10:00" card={_event5} />
                        <TextEvent date="10:00" card={_event6} />
                        <TextEvent date="10:00" card={_event7} />
                        <TextEvent date="11:00" card={_event8} />
                        <TextEvent date="12:00" card={_event9} />
                        <TextEvent date="12:30" card={_event10} />
                        <TextEvent date="12:30" card={_event11} />
                        {/* <TextEvent date="1:00" card={_event12} /> */}
                        <TextEvent date="1:00" card={_event13} />
                        <TextEvent date="2:00" card={_event14} />
                        <TextEvent date="4:00" card={_event15} />
                        <TextEvent date="4:00" card={_event16} />
                        <TextEvent date="4:00" card={_event17} />
                        <TextEvent date="4:00" card={_event18} />
                        <TextEvent date="4:00" card={_event19} />
                        <TextEvent date="TBD" card={_event20} />
                        <TextEvent date="TBD" card={_event21} />

                </Events>
            </Timeline>
            </div>
        </section>
    )
}

export default events2