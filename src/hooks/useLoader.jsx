import { useState } from "react";

const useLoader = () => {

    const [loading, setLoading] = useState(false);

    const showLoader = (callback = () => {}) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            callback();
        }, 800);
    };

    return [loading, showLoader];
};

export default useLoader;