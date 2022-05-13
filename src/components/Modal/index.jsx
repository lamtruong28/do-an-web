import { useDispatch, useSelector } from 'react-redux';
import './modal.css';
import { modalSlice } from './modalSlice';
import { modalSelector } from '../../redux/selectors';

export default function ({ children }) {
    const dispatch = useDispatch();
    const isShow = useSelector(modalSelector);
    const handleClickModal = () => {
        dispatch(modalSlice.actions.closeModal());
    }
    return (
        <>
            {
                isShow &&
                <div
                    className={'modal d-flex-center'}
                    onClick={handleClickModal}
                >
                    {children}
                </div>
            }
        </>
    )
}