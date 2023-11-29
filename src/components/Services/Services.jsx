import styles from './Services.module.scss'
import ServicesBlock from '../ServicesBlock/ServicesBlock';

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.main__title}>
                        Our services
                    </h2>
                    <ServicesBlock imageSide='left' content={content[0]}/>
                    <ServicesBlock imageSide='right' content={content[1]}/>
                    <table className={styles.table}>
                        <caption className={styles.caption}>
                            The privilege program
                        </caption>
                        <thead className={styles.table__head}>
                            <tr className={styles.table__row}>
                                <th> </th>
                                <th className={styles.head__header}>1 day and more</th>
                                <th className={styles.head__header}>1 week and more</th>
                                <th className={styles.head__header}>1 month and more</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table__body}>
                            <tr className={styles.table__row}>
                                <th className={styles.row__header}>Sedan</th>
                                <td className={styles.row__cell}>Price from $ 16</td>
                                <td className={styles.row__cell}>Price from $ 14</td>
                                <td className={styles.row__cell}>Price from $ 12</td>
                            </tr>
                            <tr className={styles.table__row}>
                                <th className={styles.row__header}>Suv</th>
                                <td className={styles.row__cell}>Price from $ 22</td>
                                <td className={styles.row__cell}>Price from $ 20</td>
                                <td className={styles.row__cell}>Price from $ 18</td>
                            </tr>
                            <tr className={styles.table__row}>
                                <th className={styles.row__header}>Premium</th>
                                <td className={styles.row__cell}>Price from $ 30</td>
                                <td className={styles.row__cell}>Price from $ 28</td>
                                <td className={styles.row__cell}>Price from $ 26</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>            
        </section>
    );
};

const content = [
    {
        title: 'For bussiness',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae aspernatur qui et voluptatibus sint similique laudantium repellendus ea perspiciatis ut expedita maxime laboriosam maiores unde explicabo vero sit libero, nulla pariatur quae consequuntur? Recusandae ex distinctio aspernatur deserunt ut tenetur maxime vel consequuntur praesentium, provident saepe, quibusdam ipsum nam autem atque exercitationem possimus?',
        img: '/images/svg/bussines.svg',
    },
    {
        title: 'Car replacement',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae aspernatur qui et voluptatibus sint similique laudantium repellendus ea perspiciatis ut expedita maxime laboriosam maiores unde explicabo vero sit libero, nulla pariatur quae consequuntur? Recusandae ex distinctio aspernatur deserunt ut tenetur maxime vel consequuntur praesentium, provident saepe, quibusdam ipsum nam autem atque exercitationem possimus? Consequatur itaque aspernatur omnis hic maiores deleniti error ab perferendis, molestias consectetur expedita? Animi adipisci consequuntur provident officiis!',
        img: '/images/svg/replacement.svg',
    },
];

export default Services;