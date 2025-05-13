import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './auth/components/LoginForm/LoginForm';
import { RegisterForm } from './auth/components/RegisterForm/RegisterForm';
import CharacterList from './components/CharacterList/CharacterList';

import './App.css';

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">SWAPI App</h1>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/characters" element={<CharacterList />} />
            </Routes>
        </div>
    );
}

export default App;
