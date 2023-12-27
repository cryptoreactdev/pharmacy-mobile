import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { Avatar, List } from 'react-native-paper';
import moment from 'moment';
import { map } from 'lodash';

const InviteFriends = ({ onPressItem }) => {
  const items = [
    {
      id: 1,
      title: 'Get Free $50',
      description: 'Invite your friends to Infrea',
      image: 'https://via.placeholder.com/150', // Placeholder image URL for the first item
      date: new Date(),
    },
    {
      id: 2,
      title: '30% off',
      description: 'text text',
      image: 'https://via.placeholder.com/150', // Placeholder image URL for the second item
      date: new Date(),
    },
  ];

  return (
    <View style={styles.container}>
      {map(items, (item, i) => (
        <TouchableScale
          key={i}
          activeOpacity={1}
          onPress={() => onPressItem(item.id, item.title)}
          activeScale={0.98}
          tension={100}
          friction={10}
          style={styles.itemContainer}
        >
          <List.Item
            key={i}
            title={item.title}
            titleStyle={styles.title}
            activeOpacity={1}
            titleNumberOfLines={2}
            description={moment(item.date).fromNow()}
            underlayColor="transparent"
            rippleColor="transparent"
            left={(props) => <Avatar.Image size={70} style={styles.avatar} source={{ uri: item.image }} />}
            right={(props) => (
              <List.Icon
                {...props}
                icon="chevron-right"
                style={styles.rightIcon}
              />
            )}
          />
        </TouchableScale>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    marginLeft: 20,
  },
  itemContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  avatar: {
    marginRight: 10,
  },
  rightIcon: {
    alignSelf: 'center',
    opacity: 0.3,
    marginBottom: 30,
  },
});

export default InviteFriends;
