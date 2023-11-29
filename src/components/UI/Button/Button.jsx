import styles from './Button.module.scss'

const Button = ({green, children, ...props}) => {

    const styleName = green ? `${styles.button} ${styles.green}` : `${styles.button}`;

    return (
        <button className={styleName} {...props}>
            {children}
        </button>
    );
};

export default Button;