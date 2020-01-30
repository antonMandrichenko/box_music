import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import { Audio } from 'expo-av'
import Play from "./Play";
import {setIsEnabledAsync} from "expo-av/build/Audio/AudioAvailability";

const audioBookPlaylist = [
    {
        title: 'Majestic Jukebox Radio',
        uri:
            'http://uk3.internet-radio.com:8405/live',
    },
    {
        title: 'SOUL CENTRAL RADIO',
        uri:
            'http://uk6.internet-radio.com:8179/;stream',
    },
    {
        title: 'Smooth Jazz Global HD',
        uri: 'http://uk3.internet-radio.com:8021/;stream',
    },
    {
        title: 'Smooth Jazz Florida',
        uri:
            'http://us4.internet-radio.com:8266/;stream',
    },

]

const TrackPlayerComponent = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackInstance, setPlaybackInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [volume, setVolume] = useState(1.0);
    const [isBuffering, setIsBuffering] = useState(false);
    // state = {
    //     isPlaying: false,
    //     playbackInstance: null,
    //     currentIndex: 0,
    //     volume: 1.0,
    //     isBuffering: false
    // }

    const setAudio = async () => {
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

                loadAudio()
            } catch (e) {
                console.log(e)
            }
    }
    useEffect(() => {
        setAudio();
    } ,[]);

    // async componentDidMount() {
    //     try {
    //         await Audio.setAudioModeAsync({
    //             allowsRecordingIOS: false,
    //             interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //             playsInSilentModeIOS: true,
    //             interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    //             shouldDuckAndroid: true,
    //             staysActiveInBackground: true,
    //             playThroughEarpieceAndroid: true
    //         })
    //
    //         this.loadAudio()
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const loadAudio = async () => {

        try {
            const playbackInstance = new Audio.Sound()
            const source = {
                uri: audioBookPlaylist[currentIndex].uri
            }

            const status = {
                shouldPlay: isPlaying,
                volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
            await playbackInstance.loadAsync(source, status, false)
            setPlaybackInstance(playbackInstance)
        } catch (e) {
            console.log(e)
        }
    }
    // async loadAudio() {
    //     const {currentIndex, isPlaying, volume} = this.state
    //
    //     try {
    //         const playbackInstance = new Audio.Sound()
    //         const source = {
    //             uri: audioBookPlaylist[currentIndex].uri
    //         }
    //
    //         const status = {
    //             shouldPlay: isPlaying,
    //             volume
    //         }
    //
    //         playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
    //         await playbackInstance.loadAsync(source, status, false)
    //         this.setState({playbackInstance})
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const onPlaybackStatusUpdate = (status) => {
        setIsBuffering(status.isBuffering)
    }
    // onPlaybackStatusUpdate = status => {
    //     this.setState({
    //         isBuffering: status.isBuffering
    //     })
    // }


    const handlePlayPause = async () => {
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

        setIsPlaying(!isPlaying)
    }

    // handlePlayPause = async () => {
    //     const { isPlaying, playbackInstance } = this.state
    //     isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
    //
    //     this.setState({
    //         isPlaying: !isPlaying
    //     })
    // }
    const handlePreviousTrack = async () => {
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            currentIndex < audioBookPlaylist.length - 1 && currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(audioBookPlaylist.length - 1)
            await loadAudio()
        }
    }
    // handlePreviousTrack = async () => {
    //     let { playbackInstance, currentIndex } = this.state
    //     if (playbackInstance) {
    //         await playbackInstance.unloadAsync()
    //         currentIndex < audioBookPlaylist.length - 1 && currentIndex !== 0 ? (currentIndex -= 1) : (currentIndex = audioBookPlaylist.length - 1)
    //         this.setState({
    //             currentIndex
    //         })
    //         this.loadAudio()
    //     }
    // }
    const handleNextTrack = async () => {
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            currentIndex < audioBookPlaylist.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)

            await loadAudio()
        }
    }
    // handleNextTrack = async () => {
    //     let { playbackInstance, currentIndex } = this.state
    //     if (playbackInstance) {
    //         await playbackInstance.unloadAsync()
    //         currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
    //         this.setState({
    //             currentIndex
    //         })
    //         this.loadAudio()
    //     }
    // }
    const renderFileInfo = () => {
        return playbackInstance ? (
            <View style={styles.trackInfo}>
                <Text style={[styles.trackInfoText, styles.largeText]}>
                    {audioBookPlaylist[currentIndex].title}
                </Text>
            </View>
        ) : null
    }
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
                    <TouchableOpacity onPress={handlePreviousTrack}>
                        <FontAwesome5 name="backward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                    <Play isPlaying={isPlaying} handlePlayPause={handlePlayPause} styles={styles}/>
                    <TouchableOpacity onPress={handleNextTrack}>
                        <FontAwesome5 name="forward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                </View>
                {renderFileInfo()}
            </View>
        )
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

export default TrackPlayerComponent;