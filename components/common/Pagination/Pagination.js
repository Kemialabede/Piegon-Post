import styles from '../../../styles/Common.module.scss';

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={styles.PaginationWrapper}>
            <ul>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={currentPage === number && styles.isActive}
                        aria-hidden>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
