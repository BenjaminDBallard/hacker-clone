import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

function SearchResult({ createdAt, author, title, url, points, numComments }) {
  const upVote = <FontAwesomeIcon icon={faArrowUp} />;
  const downVote = <FontAwesomeIcon icon={faArrowDown} />;
  const comment = <FontAwesomeIcon icon={faMessage} />;

  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const yearsAgo = now.getFullYear() - createdAtDate.getFullYear();
  const monthsAgo = now.getMonth() - createdAtDate.getMonth();
  const daysAgo = now.getDay() - createdAtDate.getDay();
  const hoursAgo = now.getHours() - createdAtDate.getHours();
  const minutesAgo = now.getMinutes() - createdAtDate.getMinutes();
  const secondsAgo = now.getSeconds() - createdAtDate.getSeconds();
  const [totalPoints, setTotalPoints] = useState();
  let count = points;

  useEffect(() => {
    let postPoints = points;
    setTotalPoints(postPoints);
  }, [points]);

  let post = 0;
  let cont = "";

  function postedAt() {
    if (yearsAgo === 0) {
      if (monthsAgo === 0) {
        if (daysAgo === 0) {
          if (hoursAgo === 0) {
            if (minutesAgo === 0) {
              post = secondsAgo;
              cont = "seconds ago";
            } else if (minutesAgo === 1) {
              post = minutesAgo;
              cont = "minute ago";
            } else {
              post = minutesAgo;
              cont = "minutes ago";
            }
          } else if (hoursAgo === 1) {
            post = hoursAgo;
            cont = "hour ago";
          } else {
            post = hoursAgo;
            cont = "hours ago";
          }
        } else if (daysAgo === 1) {
          post = daysAgo;
          cont = "day ago";
        } else {
          post = daysAgo;
          cont = "days ago";
        }
      } else if (monthsAgo === 1) {
        post = monthsAgo;
        cont = "month ago";
      } else {
        post = monthsAgo;
        cont = "months ago";
      }
    } else if (yearsAgo === 1) {
      post = yearsAgo;
      cont = "year ago";
    } else {
      post = yearsAgo;
      cont = "years ago";
    }
    return [post, cont];
  }

  const time = postedAt();
  // console.log(time);

  const handleLike = () => {
    count = points;
    if (totalPoints === points) {
      setTotalPoints((count += 1));
    } else {
      setTotalPoints(points);
    }
  };

  const handleDislike = () => {
    count = points;
    if (totalPoints === points) {
      setTotalPoints((count -= 1));
    } else {
      setTotalPoints(points);
    }
  };

  return (
    <div className="result">
      <div className="pointBox">
        <button
          onClick={handleLike}
          className={`${totalPoints === count + 1 ? "smIconUp" : "smIcon"}`}
        >
          {upVote}
        </button>
        <h4
          className={`${totalPoints === count - 1 ? "down" : "normal"} ${
            totalPoints === count + 1 ? "up" : "normal"
          }`}
        >
          {totalPoints}
        </h4>
        <button
          onClick={handleDislike}
          className={`${totalPoints === count - 1 ? "smIconDown" : "smIcon"}`}
        >
          {downVote}
        </button>
      </div>
      <a href={url}>
        <div className="cardContent">
          <div className="sign">
            <h5 className="signProp">
              Posted by {author} {time[0]} {time[1]}
            </h5>
            <h3 className="cardTitle">{title}</h3>
          </div>
          <button className="resultProp">
            {comment} {numComments} comments
          </button>
        </div>
      </a>
    </div>
  );
}

export default SearchResult;
