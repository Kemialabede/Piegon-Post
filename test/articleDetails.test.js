import { renderHook } from '@testing-library/react-hooks';
import ArticleDetails from '../components/ArticleDetails/ArticleDetails';
import { render } from '@testing-library/react';
import router, { useRouter } from 'next/router';

describe('ResultsProductPage', () => {
    it('renders - display mode list', () => {
        renderHook(() => ArticleDetails());
        render(<ArticleDetails />);
    });
});
