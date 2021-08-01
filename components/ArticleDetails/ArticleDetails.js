import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'evergreen-ui';
import styles from '../../styles/ArticleDetails.module.scss';
import style from './../../styles/Common.module.scss';

const ArticleDetails = () => {
    const router = useRouter();
    const [article, setArticle] = useState([]);
    const [loader, setLoader] = useState();
    const data = router && router.query;

    useEffect(() => {
        axios
            .get(
                'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=lnAjXZ7KM3ox9Fw10CUJPnIcz7xbs0Wp'
            )
            .then((res) => (setArticle(res.data.results), setLoader(false)));
    }, []);

    const Image = article.map((i) => i.media.map((item) => item['media-metadata'][2].url));

    return (
        <div>
            <div className={styles.Header}>
                <a href="/">NY TIMES</a>
            </div>
            {loader ? (
                <div className={style.Loader}>
                    <Spinner size={70} />
                </div>
            ) : (
                <div data-test-id="testArticle">
                    {article &&
                        article.map((item, index) => {
                            if (Number(data.id) === Number(item.id))
                                return (
                                    <div className={styles.Wrapper}>
                                        <h2 className={styles.Title}>{item.title}</h2>
                                        <img
                                            src={Image[index][0]}
                                            width="auto"
                                            height="auto"
                                            alt="article"
                                        />
                                        <p className={styles.Abstract}>{item.abstract}</p>
                                        <ul className={styles.List}>
                                            {item.des_facet.map((i) => (
                                                <li key={i}>{i}</li>
                                            ))}
                                        </ul>
                                        <p>
                                            For more information.
                                            <a href={item.url} style={{ color: 'blue' }}>
                                                Click here
                                            </a>
                                        </p>
                                        <div className={styles.authorInfoWrapper}>
                                            <div className={styles.authorInfo}>
                                                <p>
                                                    Source:
                                                    {item.source}
                                                </p>
                                                <p>
                                                    By:
                                                    {item.byline}
                                                </p>
                                                <p>
                                                    Published:
                                                    {item.published_date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                </div>
            )}
        </div>
    );
};

export default ArticleDetails;
