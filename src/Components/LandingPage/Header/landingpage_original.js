import React from 'react'
import './landingpage.css';
import {useState} from 'react';
import {Link} from "react-router-dom";
import { FaBusAlt } from "react-icons/fa";
import data from '../../Search/busstops.json';
import Bodycontent from '../Body/bodycontent';
import { IoLocationSharp,IoHome } from "react-icons/io5";

const LandingPage=()=>{
      
    //Toggle Logic
    const [activeIndex, setActiveIndex] = useState(0);

    
    const handleToggleClick = (index) => {
        setActiveIndex(index);
        if(index===0){
            console.log("Bus no.");
        }else if(index===1){
            console.log("Bus Route");
        }
    };
    
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [showShowbus, setShowShowbus] = useState(false);

    const sourceonChange = (event) => {
        setSource(event.target.value);
    };
    const destinationonChange = (event) => {
        setDestination(event.target.value);
    };
    const sourceonSearch = (source) => {
        setSource(source);
        console.log("source:", source);
    };
    const destinationonSearch = (destination) => {
        setDestination(destination);
        console.log("destination:", destination);
    };
    const onGo = (source,destination) => {
        // send to backend to - DB
        console.log("source:", source);
        console.log("destination:", destination);
        setShowShowbus(!showShowbus);
    };

  return (<>
        
      <div className="main-cont">

        {/* Toggle Container */}

        {/* IMG */}
        {/* <div className="bus-img">
            <img src={bus}  alt="Himachal Bus" />
        </div> */}

        <div className="main-toggle-cont">

            <div className={`toggle-switch ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleToggleClick(0)}>
                <p className="toggle-text">Bus No.</p>
            </div>
            <div className={`toggle-switch ${activeIndex === 1 ? 'activeroute' : ''}`}
        onClick={() => handleToggleClick(1)}>
                <p className="toggle-text">Bus Route</p>
            </div>

        </div>

        {/* Search Box Container */}
        <div className="sub-cont" style={{ width: activeIndex ? "50%" : "40%", transition: "all 0.3s linear" }}>
            
            <div className="left-items-2" style={{ display: activeIndex ? "none" : "flex", transition: "all 0.2s linear" }}>
                <div className="main-source-cont">
                    <div className="fields source-f-2">
                        <div className="icon-bg"></div>
                        <FaBusAlt className='icons-2'/>
                        <hr className="hr-2" />
                        <input type="text" className="source-input-2" placeholder='BUS ID' value={source} onChange={sourceonChange}/>
                    </div>
                </div>
            </div>
            
            <div className="left-items" style={{ display: activeIndex ? "flex" : "none", transition: "all 0.2s linear" }}>

                <div className="main-source-cont">

                    <div className="fields source-f">
                        <IoLocationSharp className='icons'/>
                        <input type="text" className="source-input" placeholder='Source' value={source} onChange={sourceonChange}/>
                    </div>

                    {/* Source Searchbox Suggestion */}
                    <div className="source-dropdown">
                    {data.bus_stop.filter((item) => {
                        const sourceSearch = source.toLowerCase();
                        const busstop = item.toLowerCase();

                        return (
                            sourceSearch &&
                            busstop.startsWith(sourceSearch) &&
                            busstop !== sourceSearch
                        );
                        }).slice(0, 10).map((item) => (
                        <div onClick={() => sourceonSearch(item)} className="source-dropdown-row" key={item}>
                            {item}
                        </div>
                        ))}
                    </div>
                </div>
                
                <hr className="hr" />        
                
                <div className="main-destination-cont">

                    <div className="fields destination-f">
                        <IoHome className='icons'/>
                        <input type="text" className="destination-input" placeholder='Destination' value={destination} onChange={destinationonChange}/>
                    </div>
                    
                    {/* Destination Searchbox Suggestion */}
                    <div className="destination-dropdown">
                    {data.bus_stop.filter((item) => {
                        const destinationSearch = destination.toLowerCase();
                        const busstop = item.toLowerCase();

                        return (
                            destinationSearch &&
                            busstop.startsWith(destinationSearch) &&
                            busstop !== destinationSearch
                        );
                        }).slice(0, 10).map((item) => (
                        <div onClick={() => destinationonSearch(item)} className="dest-dropdown-row" key={item}>
                            {item}
                        </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="right-items">
                <div className="fields Search-btn">
                <Link to="/buses">
                    <button className="Search" onClick={() => onGo(source,destination)}>Search</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="main-body-cont">
        <Bodycontent/>
    </div>
</>
  )
}

export default LandingPage;