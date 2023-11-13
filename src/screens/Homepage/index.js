import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Clock,
  SearchNormal1,
  ProfileCircle,
  Wallet3,
  CardSend,
  MoreCircle,
  Star1,
  Home,
  CloseCircle,
  DiscountShape,
  NoteFavorite,
  Message,
} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {
  sprite,
  box,
  bill,
  more,
  scooter,
  shopping,
  spoon,
  shop,
  car,
  foto,
  logo,
} from '../../assets/Images';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SearchNormal1
            color={colors.black()}
            variant="Linear"
            size={24}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchbar}
            placeholder="Cari layanan"
            onChangeText={this.updateSearch}
          />
          <ProfileCircle
            color="green"
            variant="Bold"
            size={40}
            style={styles.profileIcon}
          />
        </View>
      </View>
      <ScrollView>
        <Image source={sprite} style={styles.image} />
        <Payment />
        <Main />
        <Rating />
      </ScrollView>
    </View>
  );
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3
        color="#00819F"
        variant="Bold"
        size={30}
        style={payment.wallet}
      />
      <TouchableOpacity style={payment.debit}>
        <Text style={payment.saldo}>Rp24.223</Text>
        <Text style={payment.coin}>0 Coins</Text>
      </TouchableOpacity>
      <TouchableOpacity style={payment.pay}>
        <CardSend color="#00819F" variant="Bold" size={25} />
        <Text style={payment.payText}>Bayar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={payment.history}>
        <Clock color="#00819F" variant="Bold" size={25} />
        <Text style={payment.payText}>Riwayat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={payment.more}>
        <MoreCircle color="#00819F" variant="Bold" size={25} />
        <Text style={payment.payText}>Lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <TouchableOpacity style={home.background}>
          <Image source={scooter} style={home.icon} />
          <Text style={home.itemText}>GoRide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={car} style={home.icon} />
          <Text style={home.itemText}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={spoon} style={home.icon} />
          <Text style={home.itemText}>GoFood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={box} style={home.icon} />
          <Text style={home.itemText}>GoSend</Text>
        </TouchableOpacity>
      </View>
      <View style={home.rowContainer}>
        <TouchableOpacity style={home.background}>
          <Image source={shopping} style={home.icon} />
          <Text style={home.itemText}>GoMart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={bill} style={home.icon} />
          <Text style={{...home.itemText, fontSize: 10}}>GoTagihan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={shop} style={home.icon} />
          <Text style={home.itemText}>GoShop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home.background}>
          <Image source={more} style={home.icon} />
          <Text style={home.itemText}>Lainnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Rating = () => {
  return (
    <View style={rating.container}>
      <Text style={rating.title}>Kasih Rating Dulu Yuk!</Text>
      <View style={rating.konten}>
        <View style={rating.header}>
          <Image source={logo} style={{height: 25, width: 90}} />
          <CloseCircle color="#000000" variant="Linear" size={25} />
        </View>
        <ScrollView horizontal>
          <View style={{marginRight: 20}}>
            <Image source={foto} style={{...rating.driver}} />
          </View>
          <View>
            <Text style={{...rating.teks, fontSize: 16, fontWeight: 'bold'}}>
              Kasih Rating ke Driver?
            </Text>
            <Text style={rating.teks}>Domino Pizza - Dinoyo Malang</Text>
            <Text style={rating.teks}>8 Okt 19:27</Text>
          </View>
        </ScrollView>
        <View horizontal style={rating.rate}>
          <TouchableOpacity>
            <Star1 color="#ffdc26" variant="Linear" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Star1 color="#ffdc26" variant="Linear" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Star1 color="#ffdc26" variant="Linear" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Star1 color="#ffdc26" variant="Linear" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Star1 color="#ffdc26" variant="Linear" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Menu = () => {
  return (
    <View style={menu.container}>
      <View style={menu.item}>
        <Home
          style={{color: colors.AmericanGreen(0.6)}}
          variant="Bold"
          size={25}
        />
        <Text>Beranda</Text>
      </View>
      <View style={menu.item}>
        <DiscountShape
          style={{color: colors.AmericanGreen(0.6)}}
          variant="Bold"
          size={25}
        />
        <Text>Promo</Text>
      </View>
      <View style={menu.item}>
        <NoteFavorite
          style={{color: colors.AmericanGreen(0.6)}}
          variant="Bold"
          size={25}
        />
        <Text>Pesanan</Text>
      </View>
      <View style={menu.item}>
        <Message
          style={{color: colors.AmericanGreen(0.6)}}
          variant="Bold"
          size={25}
        />
        <Text>Chat</Text>
      </View>
    </View>
  );
};

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 35,
  },
  background: {
    width: 55,
    height: 55,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    alignItems: 'center',
    //marginHorizontal: 15,
  },
  icon: {
    top: 10,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  itemText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: 'auto',
    height: 130,
    objectFit: 'cover',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '85%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 280,
  },
});

const payment = StyleSheet.create({
  container: {
    top: -30,
    marginHorizontal: 20,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10, // Meningkatkan nilai ini akan membuat bayangan lebih terlihat
    },
    shadowOpacity: 1, // Meningkatkan nilai ini akan membuat bayangan lebih tebal
    shadowRadius: 10, // Meningkatkan nilai ini akan membuat bayangan lebih menyebar
    elevation: 5, // Ini berlaku hanya untuk Android
  },
  wallet: {
    justifyContent: 'center',
    top: 15,
    left: 20,
  },
  saldo: {
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    justifyContent: 'center',
    left: 25,
  },
  pay: {
    justifyContent: 'center',
    left: 70,
  },
  payText: {
    left: -5,
    fontSize: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  history: {
    justifyContent: 'center',
    left: 85,
  },
  more: {
    justifyContent: 'center',
    left: 95,
  },
});

const rating = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  konten: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    width: '100%',
    height: 190,
    borderRadius: 14,
    borderColor: '#282c34',
    borderWidth: 0.4,
    padding: 15,
  },
  driver: {
    width: 60,
    height: 70,
  },
  teks: {
    fontSize: 13,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 10,
  },
});

const menu = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    gap: 15,
    elevation: 1,
  },
  item: {
    marginTop: 5,
    alignItems: 'center',
    gap: 5,
  },
});
