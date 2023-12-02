import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import EditForm from './components/EditForm';

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ContactForm />} />
                    <Route exact path="/list" element={<ContactList />} />
                    <Route path="/edit/:id" element={<EditForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
