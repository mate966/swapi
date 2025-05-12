import './App.css';
import { RegisterForm } from './auth/components/RegisterForm';

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">SWAPI App</h1>
            <RegisterForm />
        </div>
    );
}

export default App;
