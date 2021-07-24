import { renderHook } from '@testing-library/react-hooks';
import PopularArticles from '../components/PopularArticles/PopularArticles';

describe('SearchBox ', () => {
    test('renders without crashing', () => {
        const { result } = renderHook(() => PopularArticles());

        expect(result.current.props.children[1].children).toBe();
        console.log(result.all[0].props.children[1]._owner);
    });
});

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '',
            pathname: '',
            query: '',
            asPath: ''
        };
    }
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
    route: '/article',
    pathname: '/article',
    query: 56677868789899,
    asPath: ''
}));
