import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ProfileCircle, DirectInbox, Ticket} from 'iconsax-react-native';
import {fontType, colors} from './../../theme';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Action />
        <Text
          style={{
            marginHorizontal: 15,
            marginBottom: 10,
            fontFamily: fontType['Pjs-Bold'],
            fontSize: 16,
            color: colors.black(),
          }}>
          Your chats
        </Text>
        <Chats />
      </ScrollView>
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Chat</Text>
    </View>
  );
};

const Action = () => {
  return (
    <View style={action.container}>
      <Text
        style={{
          ...action.text,
          color: 'black',
          fontFamily: fontType['Pjs-Bold'],
          fontSize: 15,
        }}>
        Quick actions
      </Text>
      <View style={action.cardContainer}>
        <TouchableOpacity style={action.card}>
          <DirectInbox variant="Bold" size={40} color="orange" />
          <Text style={action.text}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={action.card}>
          <Ticket variant="Bold" size={40} color="green" />
          <Text style={action.text}>Help tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Chats = () => {
  return (
    <TouchableOpacity style={chat.container}>
      <ProfileCircle size="46" color={colors.blue(0.6)} variant="Bulk" />
      <View style={chat.content}>
        <Text style={{...chat.text}}>Zainul</Text>
        <Text style={{...chat.text, fontFamily: fontType['Pjs-Regular']}}>
          20/11/2023
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.grey(0.4),
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    color: 'black',
  },
});

const action = StyleSheet.create({
  container: {
    width: 300,
    padding: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  card: {
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 14,
    color: colors.grey(),
  },
});

const chat = StyleSheet.create({
  container: {
    height: 80,
    marginHorizontal: 15,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    elevation: 6,
    borderRadius: 10,
    marginBottom: 30,
  },
  card: {
    marginHorizontal: 15,
  },
  content: {
    top: -5,
    width: '80%',
    padding: 10,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black(0.9),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
  },
});
