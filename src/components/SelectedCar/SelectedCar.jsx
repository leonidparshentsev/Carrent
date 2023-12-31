import styles from './SelectedCar.module.scss'
import GrayBlock from '../UI/GrayBlock/GrayBlock';
import initial from '../../../public/DB.json'
import ImageWithLoader from '../UI/ImageWithLoader/ImageWithLoader';

const SelectedCar = ({car}) => {
    const carList = initial.cars;

    return (
        <GrayBlock>
            <h2 className={styles.main_title}>Your selection</h2>
            <div className={styles.image}>
                <ImageWithLoader 
                    src={`/images/models/${carList[car.id - 1].type}/${carList[car.id - 1].model}.png`} alt="Selected car" fill sizes='100%'
                />
            </div>
            <h4 className={styles.model_title}>{carList[car.id - 1].model}</h4>
            <div className={styles.overview}>
                <h3 className={styles.overview__title}>Performance overview</h3>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Vehicle</h5>
                    <p className={styles.block__text}>
                        <span>Vehicle Subtotal</span>
                        <span>$ {carList[car.id - 1].price}</span>
                    </p>
                    <p className={styles.block__text}>
                        <span>Unlimited kilometers</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Protection and extras</h5>
                    <p className={styles.block__text}>
                        <span>Third party insurance</span>
                        <span>Inclusive</span>
                    </p>
                    <p className={styles.block__text}>
                        <span>Registration Fee / Road Tax</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>Taxes & Fees</h5>
                    <p className={styles.block__text}>
                        <span>VAT</span>
                        <span>Inclusive</span>
                    </p>
                </div>
                <div className={styles.overview__block}>
                    <h5 className={styles.block__title}>
                        <span>Your total price</span>
                        <span>$ {carList[car.id - 1].price}</span>
                    </h5>
                </div>
            </div> 
        </GrayBlock>
    );
};

export default SelectedCar;