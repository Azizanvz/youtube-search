import React from 'react';

const VideoDetail = (props) => {


    //const videoSrc = "https://www.youtube.com/embed/" + props.selectedVideo.videoId;

    if (props.selectedVideo != null) {
        const videoSrc = "https://www.youtube.com/embed/" + props.selectedVideo.id.videoId;
        return (
            <div>
                <div className="ui embed" data-source="youtube" data-id="FBuIBaDSOa4" data-placeholder="/images/image-16by9.png">
                    <iframe width="560" height="315" 
                        src={videoSrc}
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
                    <p>{props.selectedVideo.snippet.description}</p>
                </div>
            </div>
        )
    }

    return null;
    
}

export default VideoDetail;