import { useEffect, useRef, useState } from 'react';
import styles from './ImageWithLoader.module.scss'
import Loader from '../Loader/Loader';
import Image from 'next/image';
import classNames from 'classnames';

export default function ImageWithLoader({loaderProps, alt, ...imageProps}) {

    const [isLoaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if(ref.current?.complete) {
            setLoaded(true);
        }
    }, [ref]);

  return (
    <>
        {!isLoaded && 
            <Loader 
                className={styles.loader}
                {...loaderProps}
            />
        }
        <Image
            ref={ref}
            onLoad={() => setLoaded(true)}
            className={classNames(styles.image, !isLoaded && styles.hidden)}
            alt={alt}
            {...imageProps}
        />
    </>
  )
}