import { renderHook } from '@testing-library/react-hooks';
import PopularArticles from '../components/PopularArticles/PopularArticles';

describe('SearchBox ', () => {
    test('renders without crashing', () => {
        const { result } = renderHook(() => PopularArticles());

        expect(result.current.props.children[1].children).toBe();
    });
});