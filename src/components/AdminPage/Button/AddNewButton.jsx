import './btnAddNew.css';
import { useDispatch } from 'react-redux';
import { modalSlice } from '../../Modal/modalSlice';
export default function AddNewButton() {
    const dispatch = useDispatch();
    return (
        <button
            className="btn btn-primary btn-add-new"
            onClick={() => dispatch(modalSlice.actions.openModal())}
        >
            <i className="fa-solid fa-plus"></i>
        </button >
    )
}