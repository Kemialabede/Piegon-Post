import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Spinner } from 'evergreen-ui';
import PhotoCard from '../common/PhotoCard/PhotoCard';
import styles from '../../styles/PopularArticles.module.scss';
import CurrentPost from '../helpers/currentPosts';
import Pagination from '../common/Pagination/Pagination';

const PopularArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get(
                'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=lnAjXZ7KM3ox9Fw10CUJPnIcz7xbs0Wp'
            );
            setArticles(res.data.results), setLoader(false);
        };
        fetchArticles();
    }, []);

    const Image = articles.map((i) => i.media.map((item) => item['media-metadata'][1].url));

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.Container}>
            <div className={styles.Heading}>
                <h1>NY Times</h1>
            </div>
            {loader ? (
                <div className={styles.Loader}>
                    <Spinner size={70} />
                </div>
            ) : (
                <>
                    <div className={styles.articleContainer}>
                        {CurrentPost &&
                            CurrentPost(currentPage, postPerPage, articles).map((item, index) => (
                                <div className={styles.articleWrapper} key={item.id}>
                                    <div className={styles.innerWrap}>
                                        <PhotoCard src={Image[index][0]} />
                                        <div className={styles.Caption}>
                                            <h2 className={styles.Title}>
                                                {item.title}.{' '}
                                                <Link href={`/article/${item.id}`}>
                                                    <span className={styles.readMore}>
                                                        Read More...
                                                    </span>
                                                </Link>
                                            </h2>
                                            <p className={styles.authorInfo}>
                                                {item.byline}{' '}
                                                <span>
                                                    {' '}
                                                    <img
                                                        src="/assets/icons/calendar.svg"
                                                        width="15px"
                                                        alt="calendar"
                                                    />{' '}
                                                    {item.published_date}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`/article/${item.id}`}>
                                        <img
                                            src={'assets/icons/right-arrow.svg'}
                                            width="20px"
                                            className={styles.arrowIcon}
                                            alt="arrow"
                                        />
                                    </Link>
                                </div>
                            ))}
                    </div>
                    <Pagination
                        postPerPage={postPerPage}
                        totalPosts={articles.length}
                        paginate={onPageChange}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
};

export default PopularArticles;
