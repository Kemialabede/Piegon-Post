import { renderHook } from '@testing-library/react-hooks';
import SinglePost from '../pages/article/[id]';

describe('SearchBox ', () => {
    test('renders without crashing', () => {
        renderHook(() => SinglePost());
    });
});
