import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import Heading from '../components/Heading';
import LatestWorkouts from '../components/LatestWorkouts';
import ExercisesLibrary from '../components/ExercisesLibrary';
import Goals from '../components/Goals';
import InviteFriends from '../components/InviteFriends';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import Levels from '../components/Levels';
import LatestPosts from '../components/LatestPosts';
import FeaturedProducts from '../components/FeaturedProducts';

const auth = getAuth();

export default function Home(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const [userDisplayName, setUserDisplayName] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDisplayName(user.displayName);
        setIsLoaded(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={Styles.HomeScreen}>
          {isLoaded && userDisplayName ? (
            <Text style={{ fontSize: 20, marginVertical: 20, textAlign: 'left', marginLeft: 25 }}>
              Welcome back, {userDisplayName}
            </Text>
          ) : null}
          <InviteFriends />

          <Heading title="Popular Reads" button={() => onChangeScreen('posts')} />
          <LatestPosts />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}