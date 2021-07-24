import { renderHook } from '@testing-library/react-hooks';
import MyApp from '../pages/_app';

describe('App', () => {
    it('renders without crashing', () => {
        renderHook(() => MyApp(<div />, ''));
    });
});
