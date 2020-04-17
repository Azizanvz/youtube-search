import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => { 

    const { snippet } = props.video; // used destructuring to avoid typing props.video every time

    return (
        <div className="item video-item" onClick={() => props.onVideoSelect(props.video)}> 
            <img className="ui image" src={snippet.thumbnails.default.url} alt={snippet.description} />
            <div className="content">
                <div className="header">{snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;