import Modal from '../Modal';
import './admin.css';
import AddNewButton from './Button/AddNewButton';
import FormAddProduct from './FormAddProduct';
import ProductTable from './ProductTable';

export default function () {
    return (
        <div className="admin">
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <ProductTable />
            <AddNewButton />
            <Modal>
                <FormAddProduct />
            </Modal>
        </div>
    )
};