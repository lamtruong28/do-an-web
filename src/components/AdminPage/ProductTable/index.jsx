import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/productSlice';
import { productsSelector } from '../../../redux/selectors';
import './productTable.css';

export default function () {
    const dispatch = useDispatch();
    const { products, status } = useSelector(productsSelector);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div className="container mt-16">
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
                                    <button className='btn btn-sm btn-outline-primary me-8'>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger me-8'>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};