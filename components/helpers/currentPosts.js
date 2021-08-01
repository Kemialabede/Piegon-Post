const CurrentPost = (currentPage, postPerPage, articles) => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = articles.slice(indexOfFirstPost, indexOfLastPost);
    return currentPost;
};

export default CurrentPost;
