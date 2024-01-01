import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MinuteView = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every minute
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 10000); // 60000 milliseconds = 1 minute

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Get the current screen name
    // const currentScreen = navigation.dangerouslyGetState()?.routes?.[0]?.state?.routeNames?.[0];

    // Conditionally render MinuteView based on the current screen
    // if (currentScreen === 'Home' || currentScreen === 'Settings') {
    return (
        <View>
            <Text>{`Current Time: ${currentTime.toLocaleTimeString()}`}</Text>
            {/* Add your view content here */}
            <View style={{ backgroundColor: 'gray', width: 40, height: 40 }}>
            </View>
        </View>
    );
    // }

    // return null; // Don't render MinuteView on other screens
};

export default MinuteView;