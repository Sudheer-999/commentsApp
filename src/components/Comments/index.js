import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsList = []

// Write your code here

class Comments extends Component {
  state = {count: 0, name: '', comment: '', commentDetailsList: commentsList}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onAddCommentBtn = event => {
    event.preventDefault()

    const randomColor =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 6)]

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      randomColor,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentDetailsList: [...prevState.commentDetailsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentDetailsList: prevState.commentDetailsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteBtn = id => {
    const {commentDetailsList} = this.state
    const filteredResults = commentDetailsList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({commentDetailsList: filteredResults})

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count, name, comment, commentDetailsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">Comments</h1>
        <div className="sub-con">
          <form className="comment-section">
            <p className="desc">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={this.onNameChange}
              className="name-input"
            />
            <textarea
              type="textarea"
              rows="6"
              cols="31"
              placeholder="Your Comment"
              value={comment}
              onChange={this.onCommentChange}
              className="comment-input"
            />
            <button
              type="button"
              className="btn"
              onClick={this.onAddCommentBtn}
              onSubmit={this.onAddCommentBtn}
            >
              Add Comment
            </button>
          </form>
          <div className="comment-img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
          </div>
        </div>
        <hr className="hor-line" />
        <p className="count-item">
          <span className="count">{count}</span> Comments
        </p>
        <ul className="comments-con">
          {commentDetailsList.map(eachItem => (
            <CommentItem
              commentDetails={eachItem}
              onDeleteBtn={this.onDeleteBtn}
              toggleLikeBtn={this.toggleLikeBtn}
              colorDetails={initialContainerBackgroundClassNames}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
