import React, { useState } from 'react'

export default function ToggleBtn() {
    const [toggle, setToggle] = useState(false)
    function toggleButton() {

        setToggle(!toggle)
    }
    return (
        <div className='py-3'>
            <button
                className='px-6 py-1.5 my-2 bg-green-300 border border-pink-300 rounded-lg'
                onClick={toggleButton}
            >
                {
                    toggle ? "Off" : "On"
                }
            </button>
            <p>{toggle ? "Button is off" : "Button is on"}</p>
        </div>
    )
}
