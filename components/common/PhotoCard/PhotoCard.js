import PropTypes from 'prop-types';
import styles from '../../../styles/Common.module.scss';

const PhotoCard = ({ src }) => (
    <div className={styles.CardWrapper}>
        <img src={src} alt="card" />
    </div>
);

PhotoCard.propTypes = {
    src: PropTypes.string.isRequired
};

export default PhotoCard;
