import './card.css';
export default function ({ product }) {
    return (
        <div className='col'>
            <div className='card rounded'>
                <div className='card-header' title={product?.name}>
                    <img src={product?.attachment} alt='item' className='image rounded' />
                </div>
                <div className='card-body'>
                    <div className='ps-4 pe-4'>
                        <p className='name' title={product?.name}>{product?.name}</p>
                        <span className='desc mt-4'>{product?.description}</span>
                    </div>
                    <div className='price-wrap mt-8 d-flex-center-y justify-content-between ps-4 pe-4'>
                        <span className={product?.promotion ? 'price disable' : 'price'}>
                            {product?.price}<sup>đ</sup>
                        </span>
                        {
                            product?.promotion &&
                            <span className='promotion'>
                                {product.promotion}<sup>đ</sup>
                            </span>
                        }
                        <span className='sold'>
                            Đã bán {product?.sold}
                        </span>
                    </div>
                </div>
                <div className='card-footer text-center pt-4 pb-16 ps-16 pe-16 d-flex-center-y justify-content-between'>
                    <button className='btn-view-detail btn btn-sm btn-outline-primary'> Xem chi tiết</button>
                    <button className='btn-add-cart btn btn-sm btn-outline-primary'>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div >
    );
};