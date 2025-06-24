import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock GraphQL
vi.mock('@apollo/client', () => ({
    ApolloClient: vi.fn(),
    InMemoryCache: vi.fn(),
    createHttpLink: vi.fn(),
    from: vi.fn(),
    setContext: vi.fn(),
    useQuery: vi.fn(),
    useMutation: vi.fn(),
    gql: vi.fn(),
}));

// Mock React Router
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
        useParams: () => ({}),
        useLocation: () => ({ pathname: '/', search: '', hash: '' }),
        Link: ({ children, to }: { children: React.ReactNode; to: string }) =>
            React.createElement('a', { href: to }, children),
    };
});

// Mock Redux
vi.mock('react-redux', async () => {
    const actual = await vi.importActual('react-redux');
    return {
        ...actual,
        useSelector: vi.fn(),
        useDispatch: () => vi.fn(),
    };
});

// Mock GSAP
vi.mock('gsap/dist/ScrollSmoother', () => ({
    ScrollSmoother: {
        create: vi.fn(() => ({
            kill: vi.fn(),
        })),
    },
}));

// Mock Framer Motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) =>
            React.createElement('div', props, children),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
