import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/atoms/Input';
import { useSearch } from '@/hooks/useSearch/useSearch';
import { useCompendiumLink } from '@/hooks/useCompendiumLink/useCompendiumLink';
import { SearchResult } from './types';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [query, setQuery] = useState('');
    const { results, loading } = useSearch(query);
    const { navigateToItem } = useCompendiumLink();
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleResultClick = (result: SearchResult) => {
        navigateToItem({ id: result.id, category: result.category });
        onClose();
        setQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-start justify-center pt-20"
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-hidden"
                    >
                        <div className="p-6 border-b">
                            <Input
                                ref={inputRef}
                                placeholder="Search characters, planets, ships..."
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="text-lg"
                            />
                        </div>

                        <div className="max-h-[50vh] overflow-y-auto">
                            {loading && (
                                <div className="p-6 text-center text-gray-500">Searching...</div>
                            )}

                            {!loading && query.length >= 3 && results.length === 0 && (
                                <div className="p-6 text-center text-gray-500">
                                    No results found for "{query}"
                                </div>
                            )}

                            {!loading && results.length > 0 && (
                                <div className="divide-y">
                                    {results.map(result => (
                                        <motion.button
                                            key={`${result.category}-${result.id}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            whileHover={{ backgroundColor: '#f3f4f6' }}
                                            className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                                            onClick={() => handleResultClick(result)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {result.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 capitalize">
                                                        {result.category}
                                                    </p>
                                                </div>
                                                <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                                    {result.category}
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            )}

                            {query.length < 3 && query.length > 0 && (
                                <div className="p-6 text-center text-gray-500">
                                    Type at least 3 characters to start searching
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
