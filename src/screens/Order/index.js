import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowRight2,
  Wallet3,
  ArrowDown2,
  TickCircle,
} from 'iconsax-react-native';
import {fontType, colors} from './../../theme';
import {download} from './../../assets/Images';

export default function Order() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Content */}
      <ScrollView>
        <Categories />
        <Filter />
        <Direct />
        <History />
      </ScrollView>
      {/* End Content */}
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Order</Text>
      <TouchableOpacity>
        <Image source={download} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const Categories = () => {
  return (
    <View style={categories.container}>
      <TouchableOpacity
        style={{
          ...categories.card,
          borderBottomWidth: 2,
          borderColor: 'green',
        }}>
        <Text style={{...categories.title, color: 'black'}}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={categories.card}>
        <Text style={categories.title}>Ongoing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={categories.card}>
        <Text style={categories.title}>Scheduled</Text>
      </TouchableOpacity>
    </View>
  );
};

const Filter = () => {
  return (
    <View style={filter.container}>
      <View style={filter.itemContainer}>
        <TouchableOpacity style={filter.item}>
          <Text style={filter.text}>GoSend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={filter.item}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text style={filter.text}>Status</Text>
            <ArrowDown2 size="19" color={colors.black(0.7)} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Direct = () => {
  return (
    <TouchableOpacity style={direct.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Wallet3 color="#04BBCC" variant="Bold" size={30} />
        <Text style={direct.text}>GoPay transactions</Text>
      </View>
      <ArrowRight2 color={colors.black(0.7)} variant="Linear" size={20} />
    </TouchableOpacity>
  );
};

const History = () => {
  return (
    <TouchableOpacity style={history.container}>
      <View style={history.card}>
        <Text style={{...history.text, color: colors.black(0.6)}}>
          20 Nop, 08:11
        </Text>
        <View style={history.content}>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#34dc9b',
              borderRadius: 15,
            }}
          />
          <View>
            <View
              style={{
                width: 250,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{...history.text, fontSize: 16}}>
                SMAN 1 Kepanjen
              </Text>
              <Text
                style={{
                  ...history.text,
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 14,
                  marginRight: 10,
                }}>
                Rp70.000
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: 'row',
                gap: 5,
              }}>
              <TickCircle size="20" color="green" variant="Bold" />
              <Text style={{...history.text, color: colors.black(0.6)}}>
                Package delivered
              </Text>
            </View>
          </View>
        </View>
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
  icon: {
    top: 8,
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    color: 'black',
  },
});

const categories = StyleSheet.create({
  container: {
    width: 300,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 90,
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontFamily: fontType['Pjs-ExtraBold'],
    fontSize: 16,
    color: colors.grey(),
  },
});

const filter = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  title: {
    color: 'black',
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 20,
  },
  itemContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  item: {
    height: 33,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.grey(0.3),
    backgroundColor: colors.grey(0.1),
  },
  text: {
    paddingVertical: 3,
    color: colors.black(0.7),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
  },
});

const direct = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey(0.3),
    backgroundColor: colors.grey(0.1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.black(0.8),
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 15,
  },
});

const history = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey(0.5),
  },
  card: {
    marginHorizontal: 15,
  },
  content: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 15,
  },
  text: {
    color: colors.black(0.9),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 13,
  },
});
