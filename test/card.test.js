import { renderHook } from '@testing-library/react-hooks';
import PhotoCard from '../components/common/PhotoCard/PhotoCard';

describe('SearchBox ', () => {
    test('renders without crashing', () => {
        renderHook(() => PhotoCard({src: ''}));
    });
});
