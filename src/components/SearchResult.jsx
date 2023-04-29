import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

function SearchResult({ createdAt, author, title, url, points, numComments }) {

    const upVote = <FontAwesomeIcon icon={faArrowUp} />
    const downVote = <FontAwesomeIcon icon={faArrowDown} />
    const comment = <FontAwesomeIcon icon={faMessage} />

    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const yearsAgo = now.getFullYear() - createdAtDate.getFullYear();

    return (
        <a href={url}>
            <div className="result">
                <div className="pointBox">
                    <button className='smIcon'>{upVote}</button>
                    <h4>{points}</h4>
                    <button className='smIcon'>{downVote}</button>
                </div>
                <div className="cardContent">
                    <div className="sign">
                        <h5 className="signProp">Posted by {author} {yearsAgo} years ago</h5>
                        <h3 className="cardTitle">{title}</h3>
                    </div>
                    <button className="resultProp">{comment} {numComments} comments</button>
                </div>
            </div>
        </a>
    );
}

export default SearchResult;