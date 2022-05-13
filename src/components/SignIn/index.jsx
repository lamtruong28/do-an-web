import { useState } from 'react';
import { handleLogin } from '../../app/api';
import './signIn.css';

export default function () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = async (e) => {
        e.preventDefault();
        if (!userName && !password) return;
        const user = await handleLogin({ userName, password });
        console.log(user.userName)
        if (user.userName)
            alert('welcome')
    }
    return (
        <main>
            <div className='sign-in-wrapper d-flex-center'>
                <div className="sign-in-wrap w-50 rounded p-32">
                    <h2 className='fw-normal text-center mb-16'>Login</h2>
                    <p>Chào mừng bạn đến với cửa hàng của chúng tôi. Đăng nhập ngay để trải nghiệm.</p>
                    <form className='sign-in-form'>
                        <div className="sign-in__item mt-16">
                            <input
                                className='w-100 item-input rounded'
                                type="text"
                                name="userName"
                                placeholder=' '
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <span className='item-label rounded'>Tên đăng nhập *</span>
                        </div>
                        <div className="sign-in__item mt-16">
                            <input
                                className='w-100 item-input rounded'
                                type="password"
                                name="password"
                                required
                                placeholder=' '
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='item-label rounded'>Mật khẩu *</span>
                        </div>
                        <button
                            className={(userName && password) ? 'mt-16 btn btn-primary' : 'mt-16 btn btn-primary disable'}
                            type='submit'
                            onClick={handleClickLogin}
                        >Đăng nhập</button>
                    </form>
                    <hr className='mt-16 mb-16' />
                    <p className='text-no-account'>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
                </div>
            </div>
        </main>
    )
};