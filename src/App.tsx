import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/scaffold/Header/Header';
import { Footer } from './components/scaffold/Footer/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
