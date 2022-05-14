import { Link } from 'react-router-dom';
import './header.css';
import logo from './img/main_logo.png';

export default function () {
    return (
<<<<<<< HEAD
        <header>
            <Link to='sign-in' className="btn btn-primary">Login</Link>
=======
        <header class="header">
            <div class="container">
                <nav class="header__navbar">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item header__navbar--separate">
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-solid fa-house-fire"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Sản phẩm bán chạy
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sản phẩm bán chạy cho nữ
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sản phẩm bán chạy cho nam
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header__navbar-item header__navbar--separate">
                            <a href="" class="header__navbar-icon-link">
                                <i class="header__navbar-icon fa-brands fa-shopify"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Giày nam
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Giày thể thao nam
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Dép nam
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sandal nam
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="header__navbar-icon fa-brands fa-shopify"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Giày nữ
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Dép nữ
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sandal nữ
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Giày cao gót
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Giày thể thao nữ
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header__navbar-item header__navbar--separate">
                            <a href="" class="header__navbar-icon-link">
                                <i class="header__navbar-icon fa-solid fa-bag-shopping"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Ba lô - Túi xách
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Ba lô laptop, du lịch, thời trang
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Túi đeo chéo
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-solid fa-socks"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Phụ Kiện
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Vớ
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Chai vệ sinh giày
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Dây giày
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Đế lót
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="header__navbar-list">
                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-solid fa-bolt-lightning"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Sale
                            </a>
                            <ul class="header__sub-nav">
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sale 79k nam
                                    </a>
                                </li>
                                <li class="header__sub-nav-item">
                                    <i class="header__subnav-icon fa-solid fa-caret-right"></i>
                                    <a href="" class="sub-nav-item-link">
                                        Sale 79k nữ
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-solid fa-circle-question"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Hỗ trợ
                            </a>
                        </li>

                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="header__navbar-icon fa-solid fa-bell"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Thông Báo
                            </a>
                        </li>

                        <li class="header__navbar-item header__navbar--separate">
                            <a href="" class="header__navbar-item-link header__navbar--separate">Đăng Ký</a>
                        </li>

                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-icon-link">
                                <i class="header__navbar-icon fa-solid fa-user"></i>
                            </a>
                            <a href="" class="header__navbar-item-link">
                                Đăng Nhập
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="header-with-search">
                    <div class="header-with-search">
                        <div id="header__logo">
                            <img src={logo} alt="Logo cua trang web" class="header__logo-img" />
                        </div>
                        <div class="header__search">
                            <input type="text" class="header__search-input" placeholder="Tìm sản phẩm, thương hiệu hay danh mục mong muốn " />
                            <button class="header__search-btn">
                                <i class="header__search-btn-icon fas fa-search"></i>
                            </button>
                        </div>
                        <div class="header__cart">
                            <i class="header__cart-icon fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> master
        </header>
    )
}