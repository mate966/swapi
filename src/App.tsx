import { Outlet } from 'react-router-dom';
import { Curtain } from '@/components/scaffold/Curtain';
import { useAppSelector } from '@/hooks/useRedux/useRedux';
import { RootState } from '@/store';

import { Intro } from '@/components/scaffold/Intro';
import { Header } from '@/components/scaffold/Header';
import { Footer } from '@/components/scaffold/Footer';

import SmoothScroll from '@/components/utils/SmoothScroller';

import '@/utils/plugins';
import '@/styles/main.scss';

const App = () => {
    const isCurtainVisible = useAppSelector((state: RootState) => state.global.isCurtainVisible);

    return (
        <>
            <Header />

            <div className="app">
                <SmoothScroll>
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </SmoothScroll>
            </div>

            <Curtain isVisible={isCurtainVisible} />
            <Intro />
        </>
    );
};

export default App;
