import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './img/main_logo.png';

export default function () {
    const dispatch = useDispatch();
    const { userId } = useSelector(userSelector);
    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar--separate">
                            <a href="" className="header__navbar-icon-link">
                                <i className="fa-solid fa-house-fire"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Sản phẩm bán chạy
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sản phẩm bán chạy cho nữ
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sản phẩm bán chạy cho nam
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="header__navbar-item header__navbar--separate">
                            <a href="" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-brands fa-shopify"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Giày nam
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Giày thể thao nam
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Dép nam
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sandal nam
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-brands fa-shopify"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Giày nữ
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Dép nữ
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sandal nữ
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Giày cao gót
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Giày thể thao nữ
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="header__navbar-item header__navbar--separate">
                            <a href="" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-solid fa-bag-shopping"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Ba lô - Túi xách
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Ba lô laptop, du lịch, thời trang
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Túi đeo chéo
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                <i className="fa-solid fa-socks"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Phụ Kiện
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Vớ
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Chai vệ sinh giày
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Dây giày
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Đế lót
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                <i className="fa-solid fa-bolt-lightning"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Sale
                            </a>
                            <ul className="header__sub-nav">
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sale 79k nam
                                    </a>
                                </li>
                                <li className="header__sub-nav-item">
                                    <i className="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" className="sub-nav-item-link">
                                        Sale 79k nữ
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                <i className="fa-solid fa-circle-question"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Hỗ trợ
                            </a>
                        </li>

                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                <i className="header__navbar-icon fa-solid fa-bell"></i>
                            </a>
                            <a href="" className="header__navbar-item-link">
                                Thông Báo
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-icon-link">
                                {
                                    userId ?
                                        <i className="header__navbar-icon fa-solid fa-arrow-right-from-bracket"></i>
                                        :
                                        <i className="header__navbar-icon fa-solid fa-user"></i>
                                }
                            </a>
                            <Link to="sign-in" className="header__navbar-item-link ms-4">
                                {
                                    userId ? 'Đăng xuât' : 'Đăng nhập'
                                }
                            </Link>

                        </li>
                    </ul>
                </nav>
                <div className="header-with-search">
                    <div className="header-with-search">
                        <div id="header__logo">
                            <img src={logo} alt="Logo cua trang web" className="header__logo-img" />
                        </div>
                        <div className="header__search">
                            <input type="text" className="header__search-input" placeholder="Tìm sản phẩm, thương hiệu hay danh mục mong muốn " />
                            <button className="header__search-btn">
                                <i className="header__search-btn-icon fas fa-search"></i>
                            </button>
                        </div>
                        <div className="header__cart">
                            <i className="header__cart-icon fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}