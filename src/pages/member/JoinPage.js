import React from 'react';
import './Join.scss';

const JoinPage = () => {
    return (
        <div className='inner'>
            <h2>회원가입</h2>
            <table className='member_table'>
                <tbody>
                    <tr>
                        <td><span>아이디</span></td>
                        <td>
                            <input name='m_id' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td><span>비밀번호</span></td>
                        <td>
                            <input name='m_pass' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td><span>비밀번호 확인</span></td>
                        <td>
                            <input name='m_passch' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td><span>닉네임</span></td>
                        <td>
                            <input name='m_nickname' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td><span>이메일</span></td>
                        <td>
                            <input name='m_email' type='text'/> @
                            <select>
                                <option>google.com</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><span>생년월일</span></td>
                        <td>
                            <input name='m_y' type='text'/>
                            <input name='m_m' type='text'/>
                            <input name='m_d' type='text'/>
                        </td>
                    </tr>
                    <tr>
                        <td><span>성별</span></td>
                        <td>
                            남 <input name='m_gender' type='radio' />
                            여 <input name='m_gender' type='radio'/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button>가입하기</button>
                            <button>취소</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JoinPage;