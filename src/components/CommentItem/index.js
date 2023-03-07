import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onDeleteBtn, toggleLikeBtn} = props
  const {id, name, comment, isLiked, randomColor, date} = commentDetails

  const dateTime = formatDistanceToNow(date)

  const onDelete = () => {
    onDeleteBtn(id)
  }

  const toggleBtn = () => {
    toggleLikeBtn(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="items-con">
      <div>
        <div className="upper">
          <div className={`initial ${randomColor}`}>
            <p className="initial-txt">{name[0].toUpperCase()}</p>
          </div>
          <div>
            <div className="title-section">
              <p className="name">{name}</p>
              <p className="time">{dateTime} ago</p>
            </div>
            <p className="com">{comment}</p>
          </div>
        </div>
        <div className="btn-section">
          <button onClick={toggleBtn} type="button" className="like-btn">
            <img src={likeImg} alt="like" className="like-img" /> Like
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="del-btn"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="del-icon"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
