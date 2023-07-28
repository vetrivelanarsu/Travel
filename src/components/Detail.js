import "../styles/Detail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShare, faKaaba, faCalendar, faHeadphones, faSignal, faLocation, faLanguage, faDollarSign, faBaseball } from '@fortawesome/free-solid-svg-icons';
import Tree from "../image/tree.jpg";
import Harvard from "../image/Harvard-Logo.png"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useState } from "react";





export default function Detail({ Individual }) {
  // Check if Individual is an empty object

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
 console.log(selectedDayIndex)
  // Check if Individual is an empty object
  const isIndividualEmpty = Object.keys(Individual).length === 0 && Individual.constructor === Object;

  // Handler for day click
  const handleDaySelect = (index) => {
    setSelectedDayIndex(index);
  };
  return (
    <div className="detail">
      {isIndividualEmpty === false ? (
        <div className="details"> 
          <div className="detail-heading">
            <div className="detail-heading1" > 
              <h2>{Individual.heading}</h2>
            </div>
          
            <div className="iconic">
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faShare} />
              <FontAwesomeIcon icon={faKaaba} />
            </div>
          </div>
          <div className="image-tree">
            <img src={Tree} alt="photo" />
          </div>
          <div className="genre">
            <div className="technology">
              <FontAwesomeIcon icon={faBaseball} />
              <p>Technology</p>
            </div>
            <div className="technology">
              <FontAwesomeIcon icon={faBaseball} />
              <p>Movies</p>
            </div>
            <div className="technology">
              <FontAwesomeIcon icon={faBaseball} />
              <p>Games</p>
            </div>
          </div>

          {/* Grid Structure */}

          <div className="abovegrid">

            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div> 
                <h4>Date and time</h4>
                <p>{Individual.date} {Individual.time}</p>
              </div>
            </div>

            {/* 2 grid */}
            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div> 
                <h4>Speakers</h4>
                <p>{Individual.speaker}</p>
              </div>
            </div>

            {/* 3 grid */}
            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faSignal} />
              </div>
              <div> 
                <h4>Event mode</h4>
                <p>{Individual.eventmode}</p>
              </div>
            </div>
            </div>
            {/* 4 grid */}
        <div className="belowgrid">
            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faLocation} />
              </div>
              <div> 
                <h4>Location</h4>
                <p>{Individual.location}</p>
              </div>
            </div>

            {/* 5 grid  */}
            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faLanguage} />
              </div>
              <div> 
                <h4>Language</h4>
                <p>{Individual.language}</p>
              </div>
            </div>
            {/* 6 grid  */}
            <div className="dateandtime">
              <div className="calender">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div> 
                <h4>Price</h4>
                <p>{`$ ${Individual.fee}`}</p>
              </div>
            </div>
          </div>
          <div className="register">
              <button>Register Event</button>
          </div>

          {/* paragraph */}

          <div className="paragraph">
               <p>Lots of us have home assistants in our homes nowadays. They re very clever. You can get recipes, play
music, control your lights, and so much more with just a simple voice command. But home assistants are just
1 example of an amazing development in technology called artificial intelligence, or AI for short.</p>

                <p>We ve all heard that phrase, and most people could probably give a basic explanation, but who really knows
exactly what it is? Thankfully, this course will give you the insight you need, by explaining exactly what AI is
and how it can be useful day to day.</p>

               <p>By the end of this course, you ll be able to:</p>
               <ul>
                <li>Define artificial intelligence</li>
                <li>Identify different types of artificial intelligence</li>
                <li>Understand how artificial intelligence can be used in our everyday lives</li>
               </ul>

               <p>Why take this course?</p>
               <p>This course is suitable for everyone, particularly those who want to know more about the technology we all
encounter every day. It ll guide you through some of the different types of artificial intelligence, and how
they can be used in our everyday lives in ways you might not even think of.</p>


              <p style={{fontStyle:"bold"}}>Covered in this course:</p>

              <ul>
                <li>What lifelong learning ib</li>
                <li>The benefits of lifelong learning for both individuals and organizationb</li>
                <li>The connection betgeen personal and professional developmenf</li>
                <li>How to create a supportive learning culture in the gorkplacp</li>
                <li>Hog to incorporate lifelong learning into your daily life</li>
               </ul>

          </div>


          <div className="harvard">
            <div>
              <img src={Harvard} alt="harvard" />
           
              <div>
                <p>Harvard University</p>
                <p style={{paddingTop:"0px", marginTop:"0px"}}>Computer science</p>
              </div>
            </div>
              <div className="follow">
                <button>Follow</button>
              </div>
          </div>


          <div className="schedule">
             <h2>Event Schedule</h2>
          </div>

          <div className="days">
  {Individual.days.map((day, index) => (
    <div
      className={`day${index + 1} ${selectedDayIndex === index ? 'selected-day' : ''}`}
      key={index}
      onClick={() => handleDaySelect(index)}
    >
      <h2>Day {day.day}</h2>
      <p>{day.date}</p>
    </div>
  ))}
</div>

          <div className="table-container">
            <TableContainer component={Paper}>
              <Table>
                <TableHead className="tablehead">
                  <TableRow className="tableheadrow">
                    <TableCell>Time</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Speakers</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Individual.days[selectedDayIndex].slots.map((slot, index) => (
                    <TableRow key={index}>
                      <TableCell>{`${slot.time.to} - ${slot.time.from}`}</TableCell>
                      <TableCell>{slot.content}</TableCell>
                      <TableCell>
                         <div className="speaker-info">
                         <img src={slot.speaker.img} alt="Speaker" />
                         <p>{slot.speaker.name}</p>
                         </div>
                     </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="break"></div>

          <div className="feedback">
            <div className="fb1">
               <img src="https://reqres.in/img/faces/7-image.jpg" alt="hello" style={{width:"30px",borderRadius:"50%"}}/>
               <h4 style={{marginBottom:"0px"}}>Esther Howard</h4>
              
            </div>
            <p style={{marginLeft:"50px",fontSize:"12px",marginTop:"0px",marginBottom:"0px",paddingBottom:"0px",top:"10px" , paddingTop:"0px",color:"#98999c"}}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit sed do eiusmod.</p>
            <p style={{marginLeft:"50px",fontSize:"15px",marginTop:"0px", paddingTop:"0px",color:"black"}}>2 Replies</p>
           
          </div>

         
        
        </div>
      ) : (
        <p style={{textAlign:'center'}}>Please Select the List</p> 
      )}
    </div>
  );
}
