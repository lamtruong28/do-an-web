import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, fetchProducts } from '../../../redux/productSlice';
import { formSelector } from '../../../redux/selectors';
import { toBase64 } from '../../../services';
import { modalSlice } from '../../Modal/modalSlice';
import './formProduct.css';

export default function () {
    const dispatch = useDispatch();
    const { typeForm, dataPayload } = useSelector(formSelector);
    const [states, setStates] = useState({
        name: '',
        description: '',
        price: '',
        attachment: '',
    })
    const { name, description, price, attachment } = states;

    useEffect(() => {
        if (typeForm === 'edit')
            setStates({
                name: dataPayload.name,
                description: dataPayload.description,
                price: dataPayload.price,
                attachment: dataPayload.attachment,
            });
    }, []);

    const handleChooseImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await toBase64(file);
        console.log(base64);
        setStates({
            ...states,
            attachment: base64,
        })
    }
    const resetStates = () => {
        setStates({
            name: '',
            description: '',
            price: '',
            attachment: '',
        })
    }
    const onchangeInput = (e, payload) => {
        const coppy = { ...states };
        coppy[payload] = e.target.value;
        setStates(coppy);
    }
    const handleCancel = () => {
        dispatch(modalSlice.actions.closeModal());
        resetStates();
    }
    const handleClickBtn = () => {
        if (typeForm === 'addNew')
            dispatch(addProduct(states));
        else {
            const payload = { id: dataPayload._id, ...states };
            dispatch(editProduct(payload));
            dispatch(fetchProducts());
        }
        dispatch(modalSlice.actions.closeModal());
        resetStates();
    }

    return (
        <div className="form-add-product p-32 rounded" onClick={e => e.stopPropagation()}>
            <h1 className='text-center mb-16'>
                {
                    typeForm == 'addNew' ? 'Thêm sản phẩm' : 'Sửa sản phẩm'
                }
            </h1>
            <div className="wrap rounded">
                <div className="position-relative">
                    <input
                        autoFocus
                        className='w-100 p-8'
                        type="text"
                        placeholder=" "
                        value={name}
                        onChange={(e) => onchangeInput(e, 'name')}
                    />
                    <span>Tên sản phẩm:</span>
                </div>
                <div className="position-relative mt-16">
                    <textarea
                        className='w-100 p-8'
                        type="text" placeholder=' '
                        value={description}
                        onChange={(e) => onchangeInput(e, 'description')}
                    ></textarea>
                    <span className='desc'>Mô tả sản phẩm:</span>
                </div>
                <div className="position-relative mt-16">
                    <input
                        className='w-100 p-8 price'
                        type="number"
                        placeholder=" "
                        value={price}
                        onChange={(e) => onchangeInput(e, 'price')}
                    />
                    <span c>Giá:</span>
                </div>
                {
                    attachment &&
                    <div className="attachment-wrap mt-16 mb-2">
                        <div className="attachment-list">
                            <div className="attachment-wrap-item">
                                {
                                    <div className="attachment-item">
                                        <img src={attachment} width='100%' height='100%' alt='' />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="mt-16">
                    <input onChange={handleChooseImage} type="file" id='open-directory' hidden />
                    <label htmlFor='open-directory' className="btn btn-primary">{typeForm === 'addNew' ? 'Chọn hình' : 'Thay đổi hình'}</label>
                </div>
            </div>
            <div className="control mt-8">
                <button
                    className='btn btn-secondary ms-4'
                    onClick={handleCancel}
                >Đóng</button>
                <button
                    className='btn btn-primary ms-4'
                    onClick={handleClickBtn}
                >{typeForm === 'addNew' ? 'Thêm mới' : 'Lưu'}</button>
            </div>
        </div >
    )
};