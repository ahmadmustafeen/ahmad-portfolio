import { useState, useEffect, useRef } from 'react';

export const useThrottledMousePosition = (throttle = 16) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const lastCall = useRef(Date.now());

    useEffect(() => {
        const handleMouseMove = (event) => {
            const now = Date.now();
            if (now - lastCall.current >= throttle) {
                const x = (event.clientX / window.innerWidth) * 2 - 1;
                const y = -(event.clientY / window.innerHeight) * 2 + 1;
                setMousePosition({ x, y });
                lastCall.current = now;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [throttle]);

    return mousePosition;
};