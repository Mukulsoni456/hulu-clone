import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import HomeIcon from '@mui/icons-material/Home';    
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';    
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';    
import SearchIcon from '@mui/icons-material/Search';
import logoImage from '.././hulu-assets/logoImage.png';
import './header.css'
function Header() {
    return (
        <div className='container'>
            <div className='header_icons'>
                <div className='header_icon'>
                   <i><HomeIcon></HomeIcon></i> 
                   <p>Home</p>
                </div>
                <div className='header_icon'>
                   <i><BoltIcon></BoltIcon></i> 
                   <p>Trending</p>
                </div>
                <div className='header_icon'>
                   <i><DomainVerificationIcon></DomainVerificationIcon></i> 
                   <p>Verified</p>
                </div>
                <div className='header_icon'>
                   <i><LibraryAddCheckIcon></LibraryAddCheckIcon></i> 
                   <p>Collections</p>
                </div>
                <div className='header_icon'>
                   <i><SearchIcon ></SearchIcon></i> 
                   <p>Search</p>
                </div>
            </div>
            <div className='logo'>
                <img src={logoImage}></img>
            </div>
        </div>
    )
}

export default Header
