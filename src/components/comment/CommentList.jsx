import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem.jsx'
// import './CommentList.css'

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    static propTypes = {
      comments:PropTypes.array.isRequired,
    };

    render() {
        const {comments,deleteComment} = this.props;
        const display = comments.length===0? 'block':'none';
        return <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className="list-group">
            {
                comments.map((item,i)=>
                <CommentItem key={i} item={item}  index={i}></CommentItem>
              )
            }
          </ul>
        </div>
    }
}
