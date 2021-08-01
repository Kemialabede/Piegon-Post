import { renderHook } from '@testing-library/react-hooks';
import CurrentPost from '../components/helpers/currentPosts';

describe('App', () => {
    it('renders without crashing', () => {
        renderHook(() => CurrentPost());
        expect(CurrentPost(1, 5, [{}])).toEqual([{}]);
    });
});
