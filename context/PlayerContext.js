import React, {useContext, useEffect, useState} from "react";

const PlayerContext = React.createContext();
import {Audio} from "expo-av";
import {radioPlaylist} from "../api/RadioPlaylist";

const PlayerProvider = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackInstance, setPlaybackInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [volume, setVolume] = useState(1.0);
    const [isBuffering, setIsBuffering] = useState(false);

    const setAudio = async () => {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: false
            });

             loadAudio();
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        setAudio();
    }, []);

    const loadAudio = async () => {
        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: radioPlaylist[currentIndex].uri
            };

            const status = {
                shouldPlay: isPlaying,
                volume
            };

            playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            setPlaybackInstance(playbackInstance);
        } catch (e) {
            console.log(e);
        }
    };

    const onPlaybackStatusUpdate = status => {
        setIsBuffering(status.isBuffering);
    };

    const handlePlayPause = async () => {
        isPlaying
            ? await playbackInstance.pauseAsync()
            : await playbackInstance.playAsync();
        setIsPlaying(!isPlaying);
    };

    const handlePreviousTrack = async () => {
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < radioPlaylist.length - 1 && currentIndex !== 0
                ? setCurrentIndex(currentIndex - 1)
                : setCurrentIndex(radioPlaylist.length - 1);
            await loadAudio();
        }
    };

    const handleNextTrack = async () => {
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < radioPlaylist.length - 1
                ? setCurrentIndex(currentIndex + 1)
                : setCurrentIndex(0);

            await loadAudio();
        }
    };
    const handleCurrentTrack = async (index) => {
        setIsPlaying(!isPlaying);
        if(isPlaying) {
            await playbackInstance.pauseAsync()
            if (await playbackInstance.playAsync()) {
                await playbackInstance.unloadAsync();
                setCurrentIndex(index);
                await loadAudio();
            }
        } else {
            await playbackInstance.unloadAsync();
            setCurrentIndex(index);
            await loadAudio();
        };
    };
    return (
        <PlayerContext.Provider
            value={{
                setAudio,
                loadAudio,
                onPlaybackStatusUpdate,
                handlePlayPause,
                handlePreviousTrack,
                handleNextTrack,
                handleCurrentTrack,
                isPlaying,
                playbackInstance,
                currentIndex
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
export default PlayerContext;

export { PlayerProvider };
