import styles from './GrayBlock.module.scss'

const GrayBlock = ({children, ...props}) => {
    return (
        <div {...props} className={styles.block}>
            {children}
        </div>
    );
};

export default GrayBlock;