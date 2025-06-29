import { combine, tw } from '@/utils/tailwind';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  const menuItems = [
    { title: 'Profile Settings', icon: '👤' },
    { title: 'Payment Methods', icon: '💳' },
    { title: 'Trip History', icon: '📋' },
    { title: 'Help & Support', icon: '❓' },
    { title: 'Settings', icon: '⚙️' },
  ];

  return (
    <View style={combine(tw.flex1, tw.bgWhite)}>
      <View style={combine(tw.p4, { paddingTop: 48 })}>
        <Text style={combine(tw.textBlack, tw.text2xl, tw.fontBold, tw.textCenter)}>
          Account
        </Text>
      </View>
      
      <ScrollView style={tw.flex1}>
        <View style={tw.p4}>
          {/* Profile Section */}
          <View style={combine(tw.flexRow, tw.itemsCenter, tw.p4, { marginBottom: 24, backgroundColor: '#F2F2F7' }, tw.roundedXl)}>
            <View style={combine(tw.p4, tw.roundedFull, { backgroundColor: '#E5E5EA' })}>
              <Text style={combine(tw.text2xl)}>👤</Text>
            </View>
            <View style={combine(tw.ml4, tw.flex1)}>
              <Text style={combine(tw.textBlack, tw.textLg, tw.fontBold)}>
                John Doe
              </Text>
              <Text style={combine(tw.textGray600, tw.textSm)}>
                john.doe@email.com
              </Text>
            </View>
          </View>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={combine(
                tw.flexRow,
                tw.itemsCenter,
                tw.p4,
                tw.mb2,
                tw.roundedLg,
                { backgroundColor: '#F2F2F7' }
              )}
            >
              <Text style={combine(tw.textLg, tw.mr4)}>{item.icon}</Text>
              <Text style={combine(tw.textBlack, tw.flex1, tw.fontMedium)}>
                {item.title}
              </Text>
              <Text style={combine(tw.textGray600, tw.textLg)}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
} 