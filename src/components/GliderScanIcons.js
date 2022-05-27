import Popup from 'reactjs-popup'
import React from 'react'
import './GliderScanIcons.css'
import { AiOutlineMenu } from 'react-icons/ai'
// import { MdDashboard, MdAddLocation, MdLocationOn, MdPeopleAlt } from 'react-icons/md'
// import { FaCalendarDay } from 'react-icons/fa'
// import { RiVirusFill } from 'react-icons/ri'
// import { IoMdBriefcase } from 'react-icons/io'
import Attendence from './Attendence'
import Sidebar from './Sidebar'
import MiniDrawer from './MiniDrawer'


import Profile from "./Profile"

function GliderScanIcons() {



    return (
        <>
            <nav className='nav-header'>
                <div className='menu-container'>
                    <div>
                        <Popup trigger={
                            <button className='menu-button' type='button' >
                                <AiOutlineMenu className='menu-icon' />
                            </button>
                        }
                        >
                            <Sidebar />
                        </Popup>


                    </div>
                    <h3 className='glieder-heading'>Glieder Scan</h3>
                </div>
                <div className='menu-container'>
                    <h4 className='user-name'>Hi Admin</h4>
                    <Popup trigger={
                        <button type="button" className='profile-logo-btn'>
                            <img src='https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png' alt='profile' className='profile-logo' />
                        </button>
                    }
                        postition="top left"
                    >
                        <Profile />
                    </Popup>
                </div>
            </nav>

            <div className='body-container' >
                {/* <div className='component-section'> */}
                {/* <MiniDrawer /> */}
                    {/* <Attendence /> */}
                {/* </div> */}
            </div>



        </>



    )
}

export default GliderScanIcons
