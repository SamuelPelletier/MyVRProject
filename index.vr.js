import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
  MediaPlayerState,
  VideoControl
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
	this.test = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
  }
  render() {
    return (
      <View>
	    <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [-1, 1, -5]}],
      }}>
		<Video
			style={{height: 3, width: 4}}
          playerState={this.state.playerState}
			source={[
            asset('wait.webm'),
          ]}
        />
		 <VideoControl
       style={{height: 0.2, width: 4}}
       playerState={this.state.playerState} />
      </View>
	  
	    <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [-1, 4, 5]}, {rotateY : 180}],
      }}>
		<Video
			style={{height: 3, width: 4}}
          playerState={this.test.playerState}
			source={[
            asset('wait.webm'),
          ]}
        />
		 <VideoControl
       style={{height: 0.2, width: 4}}
       playerState={this.test.playerState} />
      </View>
	  
	  <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [-5,8, 0]}, {rotateY : 90}],
      }}>
		<Video
			style={{height: 3, width: 4}}
          playerState={this.state.playerState}
			source={[
            asset('wait.webm'),
          ]}
        />
		 <VideoControl
       style={{height: 0.2, width: 4}}
       playerState={this.state.playerState} />
      </View>
	  
	  <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [5, 10.2, 0]}, {rotateY : -90}],
      }}>
		<Video
			style={{height: 3, width: 4}}
          playerState={this.state.playerState}
			source={[
            asset('wait.webm'),
          ]}
        />
		 <VideoControl
       style={{height: 0.2, width: 4}}
       playerState={this.state.playerState} />
      </View>
	  </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
