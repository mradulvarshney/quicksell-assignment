import React, { useState } from 'react'
import '../assets/css/navbar.css'

const Navbar = ({ handleSortChange, sortOption, handleGroupingSortChange, groupingOption }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav>
            <div className="nav" onClick={toggleMenu}>
                <div style={{ border: "1px solid #95989d", display: "inline", padding: "5px", marginLeft: "20px" }}>
                    <i className="fas fa-sliders-h fa-rotate-180" style={{ color: "#616365", marginRight: "10px" }}></i>
                    Display
                    <i className="fas fa-regular fa-chevron-down" style={{marginLeft: "10px"}}></i>
                </div>
            </div >

            <div className={`menuContainer ${isMenuOpen ? 'menu-open' : 'menu-close'}`}>
                <div div className="sub-menuContainer" >
                    <span className="menuTitle">Grouping</span>
                    <select name="" id="grouping" value={groupingOption} onChange={(e) => handleGroupingSortChange(e.target.value)}>
                        <option className="options" value="status">
                            Status
                        </option>
                        <option className="options" value="user">
                            User
                        </option>
                        <option className="options" value="priority">
                            Priority
                        </option>
                    </select>
                </div>
                <div className="sub-menuContainer" >
                    <span className="menuTitle">Ordering</span>
                    <select name="" id="ordering" value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
                        <option className="options" value="priority">
                            Priority
                        </option>
                        <option className="options" value="title">
                            Title
                        </option>
                    </select>
                </div>
            </div>
        </nav >
    )
}

export default Navbar