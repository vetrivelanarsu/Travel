import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/List.css';

export default function List({ selectedItem, setIndividual }) {
  const handleClick = (item) => {
    setIndividual(item);
  };

  return (
    <div className='list'>
      {selectedItem.length > 0 ? (
        selectedItem.map((item) => (
          <div key={item.id} className='box' onClick={() => handleClick(item)}>
            <div className='heading1'>
              <h3>{item.heading}</h3>
            </div>
            <div className='belowheading'>
              <div className='location'>
                <FontAwesomeIcon icon={faLocation} />
                <p style={{ paddingLeft: "5px" }}>{item.location}</p>
              </div>
              <div className='date'>
                <FontAwesomeIcon icon={faCalendar} />
                <p style={{ paddingLeft: "5px" }}>{item.date}</p>
              </div>
              <div className='times'>
                <FontAwesomeIcon icon={faClock} />
                <p style={{ paddingLeft: "5px" }}>{item.time}</p>
              </div>
            </div>
            <div className='footer'>
              <div className='footer-image'>
                <img src={item.avatar} alt={item.speaker} />
              </div>
              <div className='footer-name'>
                <h4>{item.speaker}</h4>
                <p>Publication</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No List Found</p>
      )}
    </div>
  );
}
