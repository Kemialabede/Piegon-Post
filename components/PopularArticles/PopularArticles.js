import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Spinner } from 'evergreen-ui';
import PhotoCard from '../common/PhotoCard/PhotoCard';
import styles from '../../styles/PopularArticles.module.scss';

const PopularArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios
            .get(
                'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=lnAjXZ7KM3ox9Fw10CUJPnIcz7xbs0Wp'
            )
            .then((res) => (setArticles(res.data.results), setLoader(false)));
    }, []);

    const Image = articles.map((i) => i.media.map((item) => item['media-metadata'][1].url));

    return (
        <div className={styles.Container}>
            <div className={styles.Heading}>
                <h1>PiGEON</h1>
            </div>
            {loader ? (
                <div className={styles.Loader}>
                    <Spinner size={70} />
                </div>
            ) : (
                <div className={styles.articleContainer}>
                    {articles &&
                        articles.map((item, index) => (
                            <div className={styles.articleWrapper} key={item.id}>
                                <div className={styles.innerWrap}>
                                    <PhotoCard src={Image[index][0]} />
                                    <div className={styles.Caption}>
                                        <h2 className={styles.Title}>{item.title}</h2>
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
            )}
        </div>
    );
};

export default PopularArticles;
