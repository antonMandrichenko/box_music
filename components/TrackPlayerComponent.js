import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import { Audio } from 'expo-av'

const audioBookPlaylist = [
    {
        title: 'Hamlet - Act I',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri:
            'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
        imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    },
    {
        title: 'Hamlet - Act II',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri:
            'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
    },
    {
        title: 'Hamlet - Act III',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
    },
    {
        title: 'Hamlet - Act IV',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri:
            'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
    },
    {
        title: 'Hamlet - Act V',
        author: 'William Shakespeare',
        source: 'Librivox',
        uri:
            'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
    }
]

export default class App extends React.Component {
    state = {
        isPlaying: false,
        playbackInstance: null,
        currentIndex: 0,
        volume: 1.0,
        isBuffering: false
    }
    async componentDidMount() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            })

            this.loadAudio()
        } catch (e) {
            console.log(e)
        }
    }
    async loadAudio() {
        const {currentIndex, isPlaying, volume} = this.state

        try {
            const playbackInstance = new Audio.Sound()
            const source = {
                uri: audioBookPlaylist[currentIndex].uri
            }

            const status = {
                shouldPlay: isPlaying,
                volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
            await playbackInstance.loadAsync(source, status, false)
            this.setState({playbackInstance})
        } catch (e) {
            console.log(e)
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        })
    }

    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

        this.setState({
            isPlaying: !isPlaying
        })
    }

    handlePreviousTrack = async () => {
        let { playbackInstance, currentIndex } = this.state
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
            this.setState({
                currentIndex
            })
            this.loadAudio()
        }
    }

    handleNextTrack = async () => {
        let { playbackInstance, currentIndex } = this.state
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
            this.setState({
                currentIndex
            })
            this.loadAudio()
        }
    }
    renderFileInfo() {
        const { playbackInstance, currentIndex } = this.state
        return playbackInstance ? (
            <View style={styles.trackInfo}>
                <Text style={[styles.trackInfoText, styles.largeText]}>
                    {audioBookPlaylist[currentIndex].title}
                </Text>
                <Text style={[styles.trackInfoText, styles.smallText]}>
                    {audioBookPlaylist[currentIndex].author}
                </Text>
                <Text style={[styles.trackInfoText, styles.smallText]}>
                    {audioBookPlaylist[currentIndex].source}
                </Text>
            </View>
        ) : null
    }
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: 5,
                      width: '100%'
                    }}
                >
                    <TouchableOpacity onPress={this.handlePreviousTrack}>
                        <FontAwesome5 name="backward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer} onPress={this.handlePlayPause}>
                        {this.state.isPlaying ? (
                            <FontAwesome5
                                name="pause"
                                size={16}
                                color="#3D425C"
                                style={{marginLeft: 3}}
                            />
                        ) : (
                            <FontAwesome5
                                name="play"
                                size={16}
                                color="#3D425C"
                                style={{marginLeft: 3}}
                            />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleNextTrack}>
                        <FontAwesome5 name="forward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                </View>
                {this.renderFileInfo()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    playButtonContainer: {
        backgroundColor: "#FFF",
        borderColor: "rgba(93, 63, 106, 0.2)",
        borderWidth: 8,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        shadowColor: "#5D3F6A",
        shadowRadius: 30,
        shadowOpacity: 0.5
    },
    trackInfo: {
        padding: 10,
    },
    trackInfoText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        color: 'rgb(171, 174, 208)'
    },
    largeText: {
        fontSize: 22
    },
    smallText: {
        fontSize: 16
    },
    control: {
        margin: 20
    },
    controls: {
        flexDirection: 'row'
    }
})
