import React from 'react'

// import { AiOutlineMenu } from 'react-icons/ai'
import { MdDashboard, MdAddLocation, MdLocationOn, MdPeopleAlt } from 'react-icons/md'
import { FaCalendarDay } from 'react-icons/fa'
import { RiVirusFill } from 'react-icons/ri'
import { IoMdBriefcase } from 'react-icons/io'
import Header from './Header'
// import Attendence from './Attendence'

function MenuIcons() {
    return (
        <>
        <div className='icons-column'>
            <MdDashboard className='menu-icon' />
            <FaCalendarDay className='menu-icon' />
            <MdAddLocation className='menu-icon' />
            <MdLocationOn className='menu-icon' />
            <RiVirusFill className='menu-icon' />
            <MdPeopleAlt className='menu-icon' />
            <IoMdBriefcase className='menu-icon' />
        </div>
        </>
    )



}

export default MenuIcons
