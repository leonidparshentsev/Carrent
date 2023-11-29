import styles from './PriceOverview.module.scss'

const PriceOverview = ({car, daysCount, additionalCost}) => {
    return (
        <div className={styles.overview__block}>
            <h5 className={styles.block__title}>
                <span>Your total rental price</span>
                <span>
                    $ {(car?.price * daysCount + (additionalCost || 0)).toFixed(2)}
                </span>
            </h5>
            <p className={styles.block__text}>
                <span>Rental period</span>
                <span>
                    {daysCount}
                    {daysCount > 1 ? ' days' : ' day'}
                </span>
            </p>
        </div>
    );
};

export default PriceOverview;