import React from 'react'
import SpotifyPlayer from 'react-spotify-player'


export default function Album(props) {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  const uris = {
    "SOCIAL CUES": "spotify:album:2VuZJsJBPLwg9BeQFQle8G",
    "UNPEELED": "spotify:album:4zpN41aGAYPWX3dzE19rH7",
    "MELOPHOBIA": "spotify:album:4EK8gtQfdVsmDTji7gBFlz",
    "TELL ME I'M PRETTY": "spotify:album:0nW0w37lrQ87k7PLZvC4qJ",
    "THANK YOU HAPPY BIRTHDAY": "spotify:album:0WizSRN8LuMWhliou9PFlg",
    "CAGE THE ELEPHANT": "spotify:album:7H814Cg8HV0qpoMheYbhNn"
  }

  return (
    < div >
      <div className="music-header">
        {props.title}
      </div>
      <SpotifyPlayer
        uri={uris[props.title]}
        size={size}
        view={view}
        theme={theme}
      />
    </div >
  )
}
