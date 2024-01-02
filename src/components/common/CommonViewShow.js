import React, { createContext, useState, useContext, useEffect } from 'react';

const CommonViewContext = createContext();

export const CommonViewProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showView = () => {
        setIsVisible(true);
    };

    const hideView = () => {
        setIsVisible(false);
        setNewTimeout();
    };

    const setNewTimeout = () => {
        // Set a new timeout for 1 minute (60000 milliseconds)
        setTimeout(() => {
            showView();
        }, 60000);
    };

    // Initial setup: Show the view when the app starts
    useEffect(() => {
        showView();
    }, []);


    return (
        <CommonViewContext.Provider value={{ isVisible, showView, hideView }}>
            {children}
        </CommonViewContext.Provider>
    );
};

export const useCommonView = () => {
    const context = useContext(CommonViewContext);
    if (!context) {
        throw new Error('useCommonView must be used within a CommonViewProvider');
    }
    return context;
};