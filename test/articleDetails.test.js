import { renderHook } from '@testing-library/react-hooks';
import ArticleDetails from '../components/ArticleDetails/ArticleDetails';
import { render } from '@testing-library/react';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

describe('ArticleDetails', () => {
    it('<ArticleDetails /> ', () => {
        renderHook(() => ArticleDetails());
        const Text = screen.queryByTestId('testArticle');
        expect(Text).toBeDefined();
        render(<ArticleDetails />);
    });
});
