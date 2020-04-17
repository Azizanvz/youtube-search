import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = {videosList : [], selectedVideo : null};

    componentDidMount(){
        this.onSearchSubmit('covid-19');
    }

    onSearchSubmit = async (term) => { // make a get request to the youtube API using axios 

        const response = await youtube.get('/search', { // we have axios.create() in a separate file
            params: {
                q: term
            }
        })

        this.setState({ // we update state using with response
            videosList : response.data.items, // list of videos
            selectedVideo : response.data.items[0] // we set a default video to be selected
        });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    }

    
    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/> 
                I have {this.state.videosList.length} videos.
                <div className="ui grid">
                    <div className="ui row">
                        <div className="nine wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} /> {/* video that has been selected to play with a title and description */}
                        </div>
                        <div className="seven wide column">
                            <VideoList videos={this.state.videosList} onVideoSelect={this.onVideoSelect} /> {/* contains a list of videos for the term that has been searched */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;