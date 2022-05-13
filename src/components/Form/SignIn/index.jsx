import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogin } from '../../../app/api';
import '../form.css';
import { toast } from 'react-toastify';

export default function () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleClickLogin = async (e) => {
        e.preventDefault();
        if (!userName && !password) return;
        const res = await handleLogin({ userName, password });
        console.log(res)
        if (res?._id) {
            toast.success(`Welcome, ${res.userName}`);
            if (res?.admin)
                navigate('/admin');
            else
                navigate('/');
        }
        else {
            toast.error(res.message);
        }
    }
    return (
        <main>
            <div className='form-wrapper d-flex-center'>
                <div className="form-wrap w-50 rounded p-32">
                    <h2 className='fw-normal text-center mb-16'>Login</h2>
                    <p>Chào mừng bạn đến với cửa hàng của chúng tôi. Đăng nhập ngay để trải nghiệm.</p>
                    <form>
                        <div className="form__item mt-16">
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
                        <div className="form__item mt-16">
                            <input
                                className='w-100 item-input rounded'
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                required
                                placeholder=' '
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='item-label rounded'>Mật khẩu *</span>
                            <span className='show-password' onClick={() => setShowPass(!showPass)}>
                                {
                                    !showPass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                                }
                            </span>
                        </div>
                        <button
                            className={(userName && password) ? 'mt-16 btn btn-primary' : 'mt-16 btn btn-primary disable'}
                            type='submit'
                            onClick={handleClickLogin}
                        >Đăng nhập</button>
                    </form>
                    <hr className='mt-16 mb-16' />
                    <p className='text-no-account'>Bạn chưa có tài khoản? <Link to='/sign-up'>Đăng ký</Link></p>
                </div>
            </div>
        </main>
    )
};