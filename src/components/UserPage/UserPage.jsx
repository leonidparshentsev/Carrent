'use client'
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import styles from './UserPage.module.scss'
import CarPreview from '../CarPreview/CarPreview';
import data from '../../../public/DB.json'

const UserPage = () => {

    const userAccountState = useSelector(state => state.userAccount);
    
    if(!userAccountState.isAuthorized) redirect('/');

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
                            car={data.cars[order.carId - 1]} 
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