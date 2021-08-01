import { renderHook } from '@testing-library/react-hooks';
import Pagination from '../components/common/Pagination/Pagination';

describe('App', () => {
    it('renders without crashing', () => {
        renderHook(() =>
            Pagination({
                postPerPage: 10,
                totalPosts: 25,
                paginate: 20
            })
        );
    });
});
