import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { productsSelector } from "../../redux/selectors";
import Product from '../Product/';
import Modal from '../Modal/SpinnerModal';
import Spinner from '../Spinner';

export default function () {
    const dispatch = useDispatch();
    const { products, status } = useSelector(productsSelector);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <main className='container'>
            <h1>Danh sách sản phẩm</h1>
            {
                status === 'loading' ? <Modal><Spinner /></Modal> :
                    <div className='mt-32 row'>
                        {
                            products?.map(product => (
                                < Product key={product?._id} product={product} />
                            ))
                        }
                    </div>
            }
        </main>
    )
}