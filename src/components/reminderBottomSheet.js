import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ReminderCardContent from './homescreencards/reminderCard';
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
const { width, height } = Dimensions.get("window");
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";


const ReminderBottomSheet = ({ refBottomSheet, onClose }) => {
    const handleSheetChanges = useCallback((index) => {
        if (index < 0) {
            onClose();
        }
    }, []);


    return (
        <BottomSheet
            ref={refBottomSheet}
            style={{
                borderRadius: 24,
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 24,
                elevation: 15,
            }}
            // initialSnap={0}
            // snapPoints={height > 700 ? ["50%", "70%"] : ["60%", "80%"]}
            onChange={handleSheetChanges}
            snapPoints={["50%", "70%"]}
            enablePanDownToClose
            index={-1}
        >
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: height > 700 ? responsiveFontSize(2.2) : responsiveFontSize(2.8),
                        fontWeight: '700',
                        marginTop: 8
                    }}>
                    Treatment Reminder
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2.2),
                        fontWeight: '400',
                        marginTop: 8
                    }}>
                    Treatment Reminder
                </Text>
                <ReminderCardContent />
            </View>
        </BottomSheet>
    );
};

const styles = {
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4, // For Android shadow
    },
};

export default ReminderBottomSheet;