function SearchResult({ createdAt, author, title, url, points, numComments }) {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const yearsAgo = now.getFullYear() - createdAtDate.getFullYear();

    return (
        <div className="result">
            <h2><a href={url}>{title}</a></h2>
            <ul className="resultProps">
                <li className="resultProp">{points} points</li> |
                <li className="resultProp">{author}</li> |
                <li className="resultProp">{yearsAgo} years ago</li> |
                <li className="resultProp">{numComments} comments</li>
            </ul>
        </div>
    );
}

export default SearchResult;