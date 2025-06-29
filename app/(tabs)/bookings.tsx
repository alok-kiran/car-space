import { combine, tw } from '@/utils/tailwind';
import { ScrollView, Text, View } from 'react-native';

export default function BookingsScreen() {
  return (
    <View style={combine(tw.flex1, tw.bgWhite)}>
      <View style={combine(tw.p4, { paddingTop: 48 })}>
        <Text style={combine(tw.textBlack, tw.text2xl, tw.fontBold, tw.textCenter)}>
          My Bookings
        </Text>
      </View>
      
      <ScrollView style={tw.flex1}>
        <View style={combine(tw.p4, tw.itemsCenter, tw.justifyCenter, { minHeight: 400 })}>
          <Text style={combine(tw.textBlack, tw.textLg, tw.textCenter)}>
            📅 Your bookings will appear here
          </Text>
          <Text style={combine(tw.textGray600, tw.textCenter, tw.mt2)}>
            Book your first car to get started
          </Text>
        </View>
      </ScrollView>
    </View>
  );
} 