import { renderHook } from '@testing-library/react-hooks';
import Article from '../pages';

describe('App', () => {
    it('renders without crashing', () => {
        renderHook(() => Article());
    });
});
