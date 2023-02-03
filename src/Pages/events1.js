import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

// import Events0 from './events0';
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

const events1 = () => {

    const _event1 = ({ children }) => (
      <div>
        <h1>Caricature</h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Civil deptt.</h5>
        <p>Invoke your creative side and weave a story utilising just one equipment; a cartoon strip</p>
      </div>
    );
    const _event2 = ({ children }) => (
      <div>
        <h1>Voice of HBTU</h1>
        <h4>Council : Cultural</h4>
        <h5>Venue : BE/FT Lawn</h5>
        <p>Knockout kind of competition. Round 1 will be eliminatory in nature. Results will be declared at the end of the first round.Selected candidates will move to the second round ,showcasing magic of their voice to become the voice of HBTU.</p>
      </div>
    );
    // const _event3 = ({ children }) => (
    //   <div>
    //     <h1>Patrakar</h1>
    //     <h4>Council : PSMSC</h4>
    //     <h5>Venue : East Campus</h5>
    //     <p>Television journalism event where students will be asked to report news and they have to shoot a video of themselves.</p>
    //   </div>
    // );
    const _event4 = ({ children }) => (
      <div>
        <h1>3- Legged Race</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Tennis Lwan</h5>
        <p>Presenting you the race on three legs. Yes ever imagined two persons with three legs, each participants' (team of 2) one leg is tied together and they need to race with other opponents to cross the finish line. </p>
      </div>
    );
    const _event5 = ({ children }) => (
      <div>
        <h1>Gully Cricket </h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Tennis Lawn</h5>
        <p>Simple cricket with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)</p>
      </div>
    );
    const _event6 = ({ children }) => (
      <div>
        <h1>The Ultimate Guide To Fantasy Land</h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Civil Deptt.</h5>
        <p>Present your favourite location from a book/movie</p>
      </div>
    );
    const _event7 = ({ children }) => (
      <div>
        <h1>Living on the Edge</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : BE/FT Hall</h5>
        <p>An event which tests your all round strength in every field. It includes task doing capability ,your emotional and external strength ,intelligence and knowledge .Participants are allowed to participate in solo and need to clear all the stages to proceed further. </p>
      </div>
    );
    const _event8 = ({ children }) => (
      <div>
        <h1>Kho-Kho</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Tennis Lawn</h5>
        <p>Presenting you all, one of the traditional Indian game "Kho-Kho". It is played by two teams, with twelve players out of which nine enter the field who sit on their knees (Chasing Team), and three extra (Defending Team) who try to avoid being touched by members of the other opposing team. The team that takes the shortest time to touch all the opponents in the field, wins. So be ready with your call of "KHO" and Let the other team on their knees.</p>
      </div>
    );
    const _event9 = ({ children }) => (
      <div>
        <h1>Sumo wrestling </h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Portico</h5>
        <p>Introducing to you all the most popular game of Japan. Yes, your guess is right "Sumo Wrestling". Show your strength by letting or putting your opponent down by touching any part of the body other than feet on the ground. Don't miss this opportunity to show your strength and prove yourself as a sumo wrestler of our college .</p>
      </div>
    );
    const _event10 = ({ children }) => (
      <div>
        <h1>Talent Fiesta</h1>
        <h4>Council : Cultural</h4>
        <h5>Venue : Auditorium</h5>
        <p>Time span of 2 minutes,students showcase their talents which will not include foul or obscene element.</p>
      </div>
    );
    const _event11 = ({ children }) => (
      <div>
        <h1>Act La Book</h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Civil deptt.</h5>
        <p>Dumb charades book version. Book title will be given to one team and the opponent team/teams will have to guess the title.</p>
      </div>
    );
    const _event12 = ({ children }) => (
      <div>
        <h1>Ad Making </h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Online</h5>
        <p>“Washing powder nirma, washing powder nirma” you will definitely be familiar with this rhyming and that's what makes an ad catchy and joyous so, Want to try something new and make your own ad ??? </p>
      </div>
    );
    const _event13 = ({ children }) => (
      <div>
        <h1>BGMI Arena</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Online</h5>
        <p>Come and show your talent in gaming if that's what you are fond of. Beat your opponent in your particular game of interest and finally the title is all yours. </p>
      </div>
    );
    const _event14 = ({ children }) => (
      <div>
        <h1>Race Through Hurdles </h1>
        <h4>Council : Technical Event</h4>
        <h5>Venue : BE/FT Lawn</h5>
        <p>A pathway consisting of obstacles in which the robot race will be held.</p>
      </div>
    );
    const _event15 = ({ children }) => (
      <div>
        <h1>Fandom Quiz </h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Auditorium</h5>
        <p>Participants will have to answer diverse questions from different Fandoms</p>
      </div>
    );
    const _event16 = ({ children }) => (
      <div>
        <h1>Awakenings</h1>
        <h4>Council : Cultural</h4>
        <h5>Venue : HBTU Canteen</h5>
        <p>DJ canteen </p>
      </div>
    );
    const _event17 = ({ children }) => (
      <div>
        <h1>Tradeck <button className='registrationButton'><a href='https://forms.gle/SA1cTg5eWSeCSzn66' target='_blank' rel="noopener noreferrer">Register now</a></button></h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Auditorium</h5>
        <p>It would be a 5 day portfolio management event in which the participants need to register into moneybhai.com and they will be managing portfolio of worth Rs.1 crore. They can trade only in stocks</p>
      </div>
    );
    const _event18 = ({ children }) => (
      <div>
        <h1>Mock Parliament </h1>
        <h4>Council : Literary</h4>
        <h5>Venue : Auditorium</h5>
        <p>Mock Parliament is a simulation of the parliamentary proceedings. This is to make students get the elite feeling of representing a state of the country and appreciate the parliamentary procedure for one day.</p>
      </div>
    );
    const _event19 = ({ children }) => (
      <div>
        <h1>Musical Chairs </h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Portico</h5>
        <p>Music, Fizz and Salsa, a perfect blend of La Fiesta. The Hobby Sub-council of HBTU thereby presents you Musical Chairs. A game where swiftness, gets matched with music. Gear up folks, let's get ready to Sizzle your Salsa moves and your swift legs, to be the ultimate musical chair champion.</p>
      </div>
    );
    const _event20 = ({ children }) => (
      <div>
        <h1>Expresso</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Nescafe</h5>
        <p>It is an event which amplifies and tests your marketing skills. Participants(team of 4) will be provided with a product which they need to sell to the given list of persons provided .The team with the most selling points wins. </p>
      </div>
    );
    const _event21 = ({ children }) => (
      <div>
        <h1>Murder Mystery </h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Portico</h5>
        <p>Ever played Criminal Case ? or thought of enacting the role of Madam Maloney waiting for the lamb to be slaughtered ? Well HSC brings you the ample opportunity to solve all those criminal cases</p>
      </div>
    );
    const _event22 = ({ children }) => (
      <div>
        <h1>Question only and Word jam </h1>
        <h4>Council : Literary</h4>
        <h5>Venue : BE/FT Lawn</h5>
        <p>A combination of two fun events. Questions only, in which participants have to answer in the form of questions only, any other form of sentence will lead to elimination. Word Jam, in which participants will given a word and they'll have to present a 1 minute speech on the assigned word.</p>
      </div>
    );
    const _event23 = ({ children }) => (
      <div>
        <h1>Gully Football</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Tennis Lawn</h5>
        <p>Dribbling on a level ground is a thing, and dribbling amongst all the hassle of potholes and people and corners is another. If dribbling flows in your blood, penalty shootouts give you an adrenaline rush, then without wasting a moment put on your football studs and come for a gully match. Sounds strange?? Gully Football is the new trend guys, Gully Cricket is a forlorn affair now. Showing up in teams would be to your advantage.</p>
      </div>
    );
    const _event24 = ({ children }) => (
      <div>
        <h1>Quirky Kalam </h1>
        <h4>Council : Literary</h4>
        <h5>Venue : BE/FT Lawn</h5>
        <p>Students would be provided with a piece of paper and will be asked to write a 'Weird Poem'. The rules will be simple. A poem that has no rhythm and no rhyming qualifies as a weird poem. Students can write any random, creative and weird composition.</p>
      </div>
    );
    const _event25 = ({ children }) => (
      <div>
        <h1>Beg-Borrow-Steal</h1>
        <h4>Council : Hobby</h4>
        <h5>Venue : Tennis Lawn</h5>
        <p>Participants (team of 4) will be provided with a list of some objects which they need to collect in a given time slot. The team with the maximum points and minimum time wins.</p>
      </div>
    );
    const _event26 = ({ children }) => (
      <div>
        <h1>Junk War</h1>
        <h4>Council : Technical Event</h4>
        <h5>Venue : EC Hall</h5>
        <p>Creating useful product out of the waste material.</p>
      </div>
    );
    const _event27 = ({ children }) => (
      <div>
        <h1>One -minute Film Competition</h1>
        <h4>Council : Technical Event</h4>
        <h5>Venue : Online</h5>
        <p>Creating one minute video in which theme will be given on the spot.</p>
      </div>
    );
    const _event28 = ({ children }) => (
      <div>
        <h1>Cultural Night (EDM)</h1>
        <h4>Council : Cultural</h4>
        <h5>Venue : Open Air Stage</h5>
        <p>A night packed with zest and joyful performances across various fields of arts i.e. music and dance along with surprise element of DJ performance.</p>
      </div>
    );

    return(
        <section className='eventStyle2 mainSection'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            <span className='eventPageSpaces'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <span className='eventPageBRs'>
              <br></br><br></br>
            </span>
            <span>
                <span className='dayChooserStyle'>
                <Link className='link' to="/Events0">Day 1</Link>
                </span>
                <span className='choosedDayStyle'>
                    Day 2
                </span>
                <span className='dayChooserStyle'>
                <Link className='link' to="/Events2">Day 3</Link>
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme}>
                    <Events>
                        
                    <TextEvent date="9:00" card={_event1} />
                    <TextEvent date="9:00" card={_event2} />
                    {/* <TextEvent date="9:00" card={_event3} /> */}
                    <TextEvent date="9:00" card={_event4} />
                    <TextEvent date="9:00" card={_event5} />
                    <TextEvent date="10:00" card={_event6} />
                    <TextEvent date="10:00" card={_event7} />
                    <TextEvent date="10:00" card={_event8} />
                    <TextEvent date="10:00" card={_event9} />
                    <TextEvent date="10:00" card={_event10} />
                    <TextEvent date="11:00" card={_event11} />
                    <TextEvent date="12:00" card={_event12} />
                    <TextEvent date="12:00" card={_event13} />
                    <TextEvent date="12:00" card={_event14} />
                    <TextEvent date="12:30" card={_event15} />
                    <TextEvent date="12:30" card={_event16} />
                    <TextEvent date="12:30" card={_event17} />
                    <TextEvent date="1:30" card={_event18} />
                    <TextEvent date="2:00" card={_event19} />
                    <TextEvent date="2:00" card={_event20} />
                    <TextEvent date="4:00" card={_event21} />
                    <TextEvent date="4:00" card={_event22} />
                    <TextEvent date="4:00" card={_event23} />
                    <TextEvent date="5:00" card={_event24} />
                    <TextEvent date="5:00" card={_event25} />
                    <TextEvent date="5:00" card={_event26} />
                    <TextEvent date="5:00" card={_event27} />
                    <TextEvent date="7:00" card={_event28} />

                </Events>
            </Timeline>
            </div>
        </section>
    )
}

export default events1