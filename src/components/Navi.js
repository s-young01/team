import React from 'react';
import "./Navi.scss";

const Navi = () => {
    return (
        <nav>
            <h1>logo</h1>
            <ul className='navmenu'>
                <li>
                    <span>HOME</span>
                </li>
                <li>
                    <span>최신영화</span>
                    <div className='innermenu'>
                        <ul>
                            <li>현재 상영작</li>
                            <li>개봉 예정작</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>추천영화</span>
                    <div className='innermenu'>
                        <ul>
                            <li>이달의 추천 영화</li>
                            <li>장르별 추천 영화</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <span>최신영화</span>
                </li>
                <li>
                    <span>커뮤니티</span>
                    <div className='innermenu'>
                        <ul>
                            <li>공지사항</li>
                            <li>자유 게시판</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navi;