import './signIn.css';

export default function () {
    return (
        <main>
            <div className='sign-in-wrapper d-flex-center'>
                <div className="sign-in-wrap w-50 rounded">
                    <h2>Login</h2>
                    <p>Chào mừng bạn đến với cửa hàng của chúng tôi. Đăng nhập ngay để trải nghiệm.</p>
                    <form className='sign-in-form'>
                        <div className="">
                            <span>Tên đăng nhập:</span>
                            <input className='w-100' type="text" name="userName" />
                        </div>
                        <div className="">
                            <span>Mật khẩu:</span>
                            <input className='w-100' type="password" name="password" id="sign-in-password" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
};