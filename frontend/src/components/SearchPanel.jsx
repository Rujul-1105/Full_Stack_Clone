import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import VehiclePanel from './Vehicle_Panel';

const SearchPanel = (props) => {

    const locations = [
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
        "24B, lorem ipsum dolor sit amet elit, sed et dolore magna aliqua.",
    ]

    return (
        <>
            {
                locations.map(function (elem, idx) {

                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><FaLocationArrow /></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }






        </>
    )
}

export default SearchPanel