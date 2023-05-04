import React, { useState } from "react";


// eslint-disable-next-line react/prop-types
function Dropdown2({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ["Home", "Work ", "Mobile", " Fax", "Other"];


    return (

        <>
         <div className="dropdown2">
            <div className="dropdown2-btn" onClick={(e) =>
                setIsActive(!isActive)} > {selected}
                <i className="fas fa-angle-down"></i>
            </div>

            {isActive && (
                <div className="dropdown2-content">

                    {options.map((option) => (
                        // eslint-disable-next-line react/jsx-key
                        <div onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                        }}
                            className="dropdown2-item"
                        >
                            {option}
                        </div>

                    ))}
                </div>)}
        </div>
        </>

    )
}

export default Dropdown2