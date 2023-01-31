import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'


function Header() {

    const { user, logout } = useAuth0()

    console.log(user)
    return (
        <div className='header_container'>
            <div className='header_left'>
                <Link to='/'>
                    <img className='header_image' src='https://seeklogo.com/images/M/messages-ios-logo-8204B75A8E-seeklogo.com.png' />
                </Link>

                <div className='search_box'>
                    <SearchIcon className='search_icon' />
                    <input type='text' placeholder="Search User" />
                </div>
            </div>
            <div className='header_right'>
                <Button style={{ border: 'none' }} variant='outlined'>
                    HI, {user?.given_name}
                </Button>
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        HOME
                    </Button>
                </Link>

                <Link style={{ textDecoration: 'none' }} to='/about-us'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        ABOUT US
                    </Button>
                </Link>

                {/* <Link style={{ textDecoration: 'none' }} to='/profile'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        PROFILE
                    </Button>
                </Link> */}
                <Button style={{ border: 'none' }} variant='outlined'>
                    DARK MODE
                </Button>
                <Button
                    style={{ backgroundColor: '#2775B1', color: 'white' }}
                    variant='outlined'
                    onClick={() => logout({
                        returnTo: window.location.origin
                    })}
                >
                    LOGOUT
                </Button>
            </div>

        </div>
    )
}

export default Header