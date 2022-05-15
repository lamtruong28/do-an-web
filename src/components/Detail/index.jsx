import './main.css';
import Detail_images from './images-detail/detail_1.jpg'


export default function (){

    const Detail_list = [
        Detail_images
    ]

    return(
        <div className='Detail_product'>
            <div className='Detail_product_list'>
                <div className='Detail_product_list-item'>
                    <div className='Detail_product_list-item-images'>
                        <div className='Detail_product_list-item-images-c1'>
                            <img className='Detail_product_list-item-images-sup' src={Detail_images} alt = 'shoe' />
                        </div>
                    </div>

                    <div className='nav-sup'></div>

                    <div className='Detail_product_list-item-content'>
                        <div className='Detail_product_list-item-content-padding'>
                            <div className='Detail_product_list-item-content-c2'>
                                <span>Giày Jordan 1 Low Paris Trắng Xám,
                                JD1 Low Paris Cổ Thấp Gót Xanh Thời Trang Hot Hit 2021
                                </span>
                            </div>

                            <div className='Detail_product_list-item-content-c3'>
                                <div className='Detail_product_list-item-content-start'>
                                    <p>4.8</p>
                                </div>
                                <div className='Detail_product_list-item-content-evaluate'>
                                    <p>46</p>
                                    <span>Đáng Giá</span>
                                </div>
                                <div className='Detail_product_list-item-content-sold'>
                                    <p>1.7k</p>
                                    <span>Đã Bán</span>
                                </div>
                            </div>

                            <div className='Detail_product_list-item-content-c4'>
                                <div className='Detail_product_list-item-content-price'>
                                    <div className='Detail_product_list-item-content-price-cost'>
                                        <p className='cost'>350.000</p>
                                        <p>175.000 - 180.000</p>
                                        <p>Giảm 50%</p>
                                    </div>
                                </div>
                            </div>

                            <div className='Detail_product_list-item-content-c5'>
                                <div className='Detail_product_list-item-content-table'>
                                    <p>Màu Sắc</p>
                                    <div className='Detail_product_list-item-content-table-button'>
                                        <button>
                                            Màu đen
                                        </button>
                                    </div>
                                </div>

                                <div className='Detail_product_list-item-content-size'>
                                    <p>Size</p>
                                    <div className='Detail_product_list-item-content-full_size'>
                                        <button>37</button>
                                        <button>38</button>
                                        <button>39</button>
                                        <button>40</button>
                                        <button>41</button>
                                        <button>42</button>
                                        <button>43</button>
                                        <button>Vớ</button>
                                    </div>
                                </div>

                                <div className='Detail_product_list-item-content-number'>
                                    <p>Số Lượng</p>
                                    <div className='Detail_product_list-item-content-number-c2'>
                                        <button> - </button>
                                        <input value={1}/>
                                        <button> + </button>
                                    </div>
                                </div>

                                <div className=''>

                                </div>
                            </div>

                            <div className='Detail_product_list-item-content-c6'>
                                <button className='Detail_product_list-item-content-add'>
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                                <button className='Detail_product_list-item-content-buy'> Mua Ngay </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}