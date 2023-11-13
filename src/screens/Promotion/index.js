import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ArrowRight2, DiscountShape} from 'iconsax-react-native';
import {fontType, colors} from './../../theme';

export default function Promotion() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <SmallCard />
        <PromoCode />
        <PromoCategory />
      </ScrollView>
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Promo</Text>
    </View>
  );
};

const SmallCard = () => {
  return (
    <View style={smallCard.container}>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>11</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 13,
            }}>
            Vouchers
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 11,
            }}>
            5 Expiring Soon
          </Text>
        </View>
        <View style={{...smallCard.line, backgroundColor: 'orange'}} />
      </TouchableOpacity>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>0</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 12,
            }}>
            Subscriptions
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 12,
            }}>
            Active now
          </Text>
        </View>
        <View
          style={{...smallCard.line, backgroundColor: 'rgb(209, 6, 182)'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>0</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 13,
            }}>
            Missions
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 12,
            }}>
            In Progress
          </Text>
        </View>
        <View
          style={{...smallCard.line, backgroundColor: 'rgb(6, 189, 209)'}}
        />
      </TouchableOpacity>
    </View>
  );
};

const PromoCode = () => {
  return (
    <TouchableOpacity style={promoCode.container}>
      <View style={{...promoCode.content, width: 260}}>
        <DiscountShape size="28" color="rgb(240, 146, 5)" variant="Bold" />
        <Text style={promoCode.text}>Got a promo code? Enter here</Text>
      </View>
      <View style={promoCode.content}>
        <ArrowRight2 size="16" color={colors.grey(1)} />
      </View>
    </TouchableOpacity>
  );
};

const PromoCategory = () => {
  return (
    <View style={promoCategory.container}>
      <Text style={promoCategory.title}>Promo you can't resist</Text>
      <View style={promoCategory.itemContainer}>
        <TouchableOpacity
          style={{
            ...promoCategory.itemSmall,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <Text
            style={{
              ...promoCategory.text,
              color: 'white',
              fontFamily: fontType['Pjs-Bold'],
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>GoFood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>Gopay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>Promo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    height: 60,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    color: 'black',
  },
});

const smallCard = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: 8,
    width: 100,
    height: 90,
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
  },
  line: {
    marginTop: 3,
    width: 80,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});

const promoCode = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 30,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 14,
  },
});

const promoCategory = StyleSheet.create({
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
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemSmall: {
    height: 30,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 30,
  },
  text: {
    paddingVertical: 3,
    color: 'black',
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
  },
});
