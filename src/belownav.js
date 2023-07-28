import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar, faDollarSign, faChevronDown, faSignal, faFilter } from '@fortawesome/free-solid-svg-icons';
import "./belownav.css";

import { useEffect, useState } from 'react';

export default function BelowNav({ setSelectedItem }) {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetch("https://finishedit007.onrender.com/data")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (searchTerm === "") {
      setFilteredEvents(events); 
    } else {
      setFilteredEvents(events.filter((event) =>
        event.heading.toLowerCase().includes(lowerCaseSearchTerm)
      ));
    }
  }, [searchTerm, events]);

  useEffect(() => {
    setSelectedItem(filteredEvents);
  }, [filteredEvents, setSelectedItem]);





    return(
        <div className="belownav">
          <div className="filter-sort">
            <FontAwesomeIcon icon={faFilter} />
          </div>  
          <div className="input">
            <FontAwesomeIcon icon={faSearch} />
            <input
          placeholder="search events..."
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
          </div>
          <div className='products'>
             <div className='product'>
                <p>Popular</p>
             </div>
             <div className='recent'>
                <p>Recent</p>
             </div>
             <div className='event'>
                <p>Event deadline</p>
             </div>
          </div>
          <div className='dateyear'>
             <FontAwesomeIcon icon={faCalendar} />
             <input type='date' placeholder='Jan 6 - Jan 13' />
          </div>
          <div className='fee'>
            <FontAwesomeIcon icon={faDollarSign} />
            <p>Fee</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className='eventmode'>
            <FontAwesomeIcon icon={faSignal} />
            <p>Event Mode</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        
        </div>
    )
}