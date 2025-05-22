import { Header } from '@/components/scaffold/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="pt-16">
                <Outlet />
            </main>
        </>
    );
};

export default App;
