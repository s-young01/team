import React from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navi/>
            <Link to='/'><h1>logo</h1></Link>
            <div className='searchbox'>
                <input name='search' placeholder='Search...'/>
                <button>
                    <CgSearch className='searchicon'/>
                </button>
            </div>
            <ul className='membermenu'>
                <Link to='login'><li>로그인</li></Link>
                <span>|</span>
                <Link to='join'><li>회원가입</li></Link>
            </ul>
        </header>
    );
};

export default Header;