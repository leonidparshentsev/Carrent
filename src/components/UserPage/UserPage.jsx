'use client'
import CarPreview from '../CarPreview/CarPreview';
import styles from './UserPage.module.scss'
import initial from '../../../public/DB.json'
import { useSelector } from 'react-redux';

const UserPage = () => {

    const userAccountState = useSelector(state => state.userAccount);

    return (
        <section className={styles.user}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.main__title}>
                        My rentals
                    </h2>
                    {   userAccountState.orders.length > 0 ?
                        userAccountState.orders.map((order, index) => {
                           return <CarPreview inUserAccount 
                            key={`${index}${order.id}`}
                            car={initial.cars[order.carId - 1]} 
                            orderData={order}
                            />
                        })
                        :
                        <h3 className={styles.orders__title}>
                            {`You don't have any active orders`}
                        </h3>
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default UserPage;