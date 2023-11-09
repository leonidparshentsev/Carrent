import React, { useRef } from 'react';

const useScrollTo = () => {

    const ref = useRef();
    const scrollToRef = () => {
        ref.current.scrollIntoView();
    }

    return [ref, scrollToRef];
};

export default useScrollTo;