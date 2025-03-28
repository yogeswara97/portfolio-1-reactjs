import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
    const [colorMode, setColorMode] = useLocalStorage(
        'color-theme',
        () => {
            // Check system preference
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
    );

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        colorMode === 'dark'
            ? bodyClass.add(className)
            : bodyClass.remove(className);
    }, [colorMode]);

    return [colorMode, setColorMode];
};

export default useColorMode;
