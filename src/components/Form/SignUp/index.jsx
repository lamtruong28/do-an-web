import { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkSymbol } from '../../../services';
import '../form.css';

export default function () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPass, setVerifyPass] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showVerifyPass, setShowVerifyPass] = useState(false);
    const handleClickSignUp = async (e) => {
        e.preventDefault();
        if (!userName && !password && !verifyPass) return;
        console.log({ userName, password, verifyPass })

    }
    return (
        <main>
            <div className='form-wrapper d-flex-center'>
                <div className="form-wrap w-50 rounded p-32">
                    <h2 className='fw-normal text-center mb-16'>Đăng ký tài khoản mới:</h2>
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
                        <div className="form__item mt-16">
                            <input
                                className='w-100 item-input rounded'
                                type={showVerifyPass ? 'text' : 'password'}
                                name="password"
                                required
                                placeholder=' '
                                value={verifyPass}
                                // onChange={(e) => setVerifyPass(checkSymbol(e.target.value))}
                                onChange={(e) => console.log(e.target.value)}
                                onKeyDown={(e) => checkSymbol(e)}
                            />
                            <span className='item-label rounded'>Xác nhận mật khẩu *</span>
                            <span className='show-password' onClick={() => setShowVerifyPass(!showVerifyPass)}>
                                {
                                    !showVerifyPass ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                                }
                            </span>
                        </div>
                        <button
                            className={(userName && password) ? 'mt-16 btn btn-primary' : 'mt-16 btn btn-primary disable'}
                            type='submit'
                            onClick={handleClickSignUp}
                        >Đăng ký</button>
                    </form>
                    <hr className='mt-16 mb-16' />
                    <p className='text-no-account'>Đã có tài khoản? <Link to='/sign-in'>Đăng nhập</Link></p>
                </div>
            </div>
        </main>
    )
};