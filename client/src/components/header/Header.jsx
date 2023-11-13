import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { addDays } from 'date-fns';
import { useNavigate } from "react-router-dom";


import "./Header.css";


function Header({type}) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
      });

      const navigate = useNavigate();

      const handleOption = (name, operation) => {
            setOptions(prev=>{
                return {
                    ...prev, 
                    [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
                };
            });
        }

        const handleSearch = () => {
            navigate("/hotels", {state: { destination, date, options } });
        }


  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
            </div>
            { type !== "list" &&
            <>
            <h1 className="headerTitle">inLOBBY.com your travel friend!!! </h1>
            <p className="headerDesc">Connect US and enjoy your travel with our service</p>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerSerchIcon" />
                    <input 
                        type="text" 
                        placeholder="Where are you going?" 
                        className="headerSearchInput"
                        onChange={e=>setDestination(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerSerchIcon" />
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        className="date"
                        minDate={new Date()}
                    />}

                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerSerchIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton"onClick={()=> handleOption("adult", "dec")}>-</button>
                                    <span className="otionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("adult", "inc")}>+</button>
                                </div>  
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=> handleOption("children", "dec")}>-</button>
                                    <span className="otionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("children", "inc")}>+</button>
                                </div>
                                
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=> handleOption("room", "dec")}>-</button>
                                    <span className="otionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption("room", "inc")}>+</button>
                                </div>
                                
                            </div>
                        </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>

            </div>
            </>}
        </div>
    </div>
  )
}

export default Header