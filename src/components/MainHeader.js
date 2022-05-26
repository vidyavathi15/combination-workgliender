import React from 'react'
import './MainHeader.css'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuIcons from './MenuIcons'
import AllZones from './AllZones/AllZones'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function MainHeader() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
        return <Redirect to='/login'/>
    }

    return (
        <div className='header-container'>

            <nav className='nav-main-header'>
                <div className='nav-main-header-icon-container'>
                    <AiOutlineMenu className='nav-main-header-menu-icon' />
                    <h1 className="glider-scan-main-header"> Glider Scan</h1>
                </div>
                <div className='vinay-profile-container'>
                    <p className='admin-name'>Hi Admin</p>
                    <div className='pop-up-container'>
                        <Popup 
                        
                            trigger={<button className='popup-button'>
                                <img src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653557524/vinay_gbbdmp.png" alt="vinay boyina logo" className="vinay-image" />
                            </button>}
                            position='bottom left'>

                                <div>
                                    <Link style={{textDecoration: 'none'}} to='/profile'>
                                        <p className='nav-main-heading-profile-text'>profile</p>
                                    </Link>
                                    <Link style={{textDecoration: 'none'}} to='/logout'>
                                        <p className='nav-main-heading-profile-text'>logout</p>
                                    </Link>
                                </div>
                        </Popup>
                    </div>
                </div>

            </nav>
            <div className='vinay-container'>
                <MenuIcons />
                <AllZones />
            </div>

        </div>
    )
}

export default MainHeader


