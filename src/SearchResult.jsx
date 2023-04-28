function SearchResult({ createdAt, author, title, url, points, numComments, commentsUrl, authorUrl }) {
    return (
        <>
            <h2>{title}</h2>
            <a href={url}>{url}</a>
            <a href={commentsUrl}>{points} points</a>
            <a href={authorUrl}>{author}</a>
            <a href={commentsUrl}>{new Date(createdAt).toLocaleDateString()}</a>
            <a href={commentsUrl}>{numComments} comments</a>
        </>
    );
}

export default SearchResult;