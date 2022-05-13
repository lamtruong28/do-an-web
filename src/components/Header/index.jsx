import { Link } from 'react-router-dom';
import './header.css';

export default function () {
    return (
        <header>
            <Link to='sign-in' className="btn btn-primary">Login</Link>
        </header >
    )
}