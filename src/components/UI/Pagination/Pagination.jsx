import styles from './Pagination.module.scss'
import Button from '../Button/Button';

const Pagination = ({
    count,    
    currentPage,
    setCurrentPage 
    }) => {

    return (
        <div className={styles.pagination}>
            {
                Array(count).fill(0).map((_, index) => {
                    return (
                        <Button 
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            green={currentPage === index + 1 ? true : false}
                            style={{width: '4rem', marginRight: '.5rem'}}
                            >{index + 1}</Button>
                    )
                })
            }
        </div>
    );
};

export default Pagination;