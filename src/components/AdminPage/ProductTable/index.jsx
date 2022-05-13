import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formSlice from '../../../redux/formSlice';
import { fetchProducts, destroyProduct } from '../../../redux/productSlice';
import { productsSelector } from '../../../redux/selectors';
import Modal from '../../Modal';
import { modalSlice } from '../../Modal/modalSlice';
import SpinnerModal from '../../Modal/SpinnerModal';
import Spinner from '../../Spinner';
import './productTable.css';

export default function () {
    const dispatch = useDispatch();
    const { products, status } = useSelector(productsSelector);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleRomveProduct = (id) => {
        const result = confirm("Bạn có chắc chắn muốn xóa sản phẩm?");
        if (result) {
            dispatch(destroyProduct(id));
            dispatch(fetchProducts());
        }
    }

    const handleEditProduct = (product) => {
        dispatch(formSlice.actions.dataEditFormPayload(product));
        dispatch(formSlice.actions.showEditForm());
        dispatch(modalSlice.actions.openModal());
    }

    return (
        <>
            {
                status === 'loading' ? <SpinnerModal><Spinner /></SpinnerModal> :
                    <div className="container mt-16">
                        <h1 className='text-center mb-8'>Danh sách sản phẩm</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Description</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.length > 0 && products.map(product => (
                                        <tr key={product?._id}>
                                            <td>{product?.name}</td>
                                            <td>{product?.description}</td>
                                            <td>{product?.price}</td>
                                            <td>{product?.image}</td>
                                            <td className='text-center'>
                                                <button
                                                    className='btn btn-sm btn-outline-primary me-8'
                                                    onClick={() => handleEditProduct(product)}
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button
                                                    className='btn btn-sm btn-outline-danger me-8'
                                                    onClick={() => handleRomveProduct(product._id)}
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};