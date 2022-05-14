import './footer.css';
import footer_images from './images-footer/footer_2.jpg';

export default function () {

    const Footer_item = [
        footer_images
    ]

    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className='footer_container-header'>
                    <div className='footer_container-header-list'>
                        <img src= {Footer_item} alt = "shoe" />
                        <p>Shoes Store là sự lựa chọn hoàn hảo của bạn</p>
                    </div>
                </div>
                <div className='footer_container-content'>
                    <ul className='footer_container-content-ul'>

                        <li className='footer_container-content-li'>
                            <i class="fa-brands fa-facebook i-facebook"></i>
                        </li>

                        <li className='footer_container-content-li'>
                            <i class="fa-brands fa-instagram i-instagram"></i>
                        </li>

                        <li className='footer_container-content-li'>
                            <i class="fa-brands fa-youtube i-youtube"></i>
                        </li>

                        <li className='footer_container-content-li'>
                            <i class="fa-brands fa-twitter-square i-twitter"></i>
                        </li>

                        <li className='footer_container-content-li'>
                            <i class="fa-brands fa-tiktok i-tiktok"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='footer_content'>
                <div className='footer_content-information'>
                    <span>Chất Lượng</span>

                    <p>Shoes Store đảm bảo chất lượng cho tất cả
                     sản phẩm bán tại Store bằng chính sách bảo hành vĩnh viễn.</p>

                    <span>Phục Vụ</span>

                    <p>Store cam kết chất lượng phục vụ tốt nhất , chuyên nghiệp nhất cho 
                    mọi khách hàng bằng chính sách hoàn tiền và tặng quà nếu nhân viên
                    phục vụ quý khách không chu đáo.</p>

                    <span>Hỗ Trợ</span>

                    <p>Nếu Bạn gặp rắc rối về sản phẩm hay chất lượng dịch vụ của Store , hãy gọi ngay số
                    0900 988 775.</p>

                </div>

                <div className='footer_content-information-c2'>
                    <p>Đặt Hàng Toàn Quốc</p>
                    <p><i class="fa-solid fa-square-phone"></i> 1900 633 349</p>
                    <h3>Thông Tin</h3>
                    <ul>
                        <li><i class="fa-solid fa-angle-right"></i> Giới thiệu về Store</li>
                        <li><i class="fa-solid fa-angle-right"></i> Tuyển dụng</li>
                        <li><i class="fa-solid fa-angle-right"></i> Quy chế hoạt dộng</li>
                        <li><i class="fa-solid fa-angle-right"></i> Chính sách và quy định</li>
                    </ul>
                </div>

                <div className='footer_content-information-c3'>
                    <h3>CSKH</h3>
                    <p>Góp ý / Chăm Sóc Khách Hàng</p>

                    <h3>FAQ</h3>
                    <ul>
                        <li><i class="fa-solid fa-angle-right"></i> Vận chuyển</li>
                        <li><i class="fa-solid fa-angle-right"></i> Chính sách đổi trả</li>
                        <li><i class="fa-solid fa-angle-right"></i> Chính sách bảo hành</li>
                    </ul>
                </div>
                    
            </div>
            <div className='footer_license'>
                <p>© 2022 - Bản quyền thuộc về Nhóm Bán Giày</p>
            </div>
        </footer>
    )
}
