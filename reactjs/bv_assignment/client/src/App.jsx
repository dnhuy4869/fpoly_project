import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';

function App() {
    return (
        <div className="">
            <div className="bg-dark text-white py-3 px-4">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-info" href="#">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link text-info" href="#">User List</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exact path="/" element={<AddForm />} />
                <Route exact path="/list" element={<UserList />} />
                <Route path="/edit/:id" element={<EditForm />} />
            </Routes>
        </div>
    );
}

export default App;
