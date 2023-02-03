import React from 'react';
import Navi from './Navi';
import './Header.scss';
import { CgSearch } from "react-icons/cg";

const Header = () => {
    
    return (
        <header>
            <Navi/>
            <h1>logo</h1>
            <div className='searchbox'>
                <input placeholder='search...'/>
                <button>
                    <CgSearch className='searchicon'/>
                </button>
            </div>
            <ul className='membermenu'>
                <li>로그인</li>
                <span>|</span>
                <li>회원가입</li>
            </ul>
        </header>
    );
};

export default Header;