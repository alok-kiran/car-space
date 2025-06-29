import { combine, tw } from '@/utils/tailwind';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const popularModels = [
    {
      title: 'Sedan',
      description: 'Perfect for city driving',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop'
    },
    {
      title: 'SUV',
      description: 'Ideal for family trips',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop'
    },
    {
      title: 'Luxury',
      description: 'Experience ultimate comfort',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop'
    }
  ];

  const cheapestOptions = [
    {
      title: 'Compact Car',
      price: 'Starting at $25/day',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop'
    },
    {
      title: 'Economy Car',
      price: 'Starting at $20/day',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop'
    }
  ];

  return (
    <View style={combine(tw.flex1, tw.bgWhite)}>
      <SafeAreaView style={tw.flex1}>
        {/* Header */}
        <View style={combine(tw.flexRow, tw.itemsCenter, tw.justifyBetween, tw.p4, { paddingBottom: 8 })}>
          <View style={{ width: 48 }} />
          <Text style={combine(tw.textBlack, tw.textLg, tw.fontBold, tw.textCenter)}>
            Rent a car
          </Text>
          <View style={{ width: 48 }} />
        </View>

        {/* Search Bar */}
        <View style={combine(tw.px4, { paddingVertical: 12 })}>
          <View style={combine(tw.flexRow, tw.itemsCenter, tw.roundedXl, { backgroundColor: '#F2F2F7', height: 48 })}>
            <View style={combine(tw.itemsCenter, tw.justifyCenter, { paddingLeft: 16, paddingRight: 8 })}>
              <Text style={{ color: '#8E8E93', fontSize: 20 }}>🔍</Text>
            </View>
            <TextInput
              placeholder="Search for a car"
              placeholderTextColor="#8E8E93"
              style={combine(tw.flex1, tw.textBlack, tw.textBase, { paddingRight: 16 })}
            />
          </View>
        </View>

        <ScrollView style={tw.flex1} showsVerticalScrollIndicator={false}>
          {/* Popular Models Section */}
          <Text style={combine(tw.textBlack, tw.fontBold, tw.px4, { fontSize: 22, paddingTop: 20, paddingBottom: 12 })}>
            Popular models
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          >
            {popularModels.map((model, index) => (
              <TouchableOpacity 
                key={index}
                style={combine(tw.flexCol, { minWidth: 240 })}
              >
                <View 
                  style={combine(tw.roundedXl, tw.overflow, { 
                    width: 240, 
                    height: 135, 
                    backgroundColor: '#F2F2F7'
                  })}
                >
                  <Image 
                    source={{ uri: model.image }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ paddingTop: 16 }}>
                  <Text style={combine(tw.textBlack, tw.textBase, tw.fontMedium)}>
                    {model.title}
                  </Text>
                  <Text style={combine(tw.textGray600, tw.textSm, { marginTop: 4 })}>
                    {model.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Cheapest Options Section */}
          <Text style={combine(tw.textBlack, tw.fontBold, tw.px4, { fontSize: 22, paddingTop: 20, paddingBottom: 12 })}>
            Cheapest options
          </Text>

          <View style={tw.p4}>
            {cheapestOptions.map((option, index) => (
              <TouchableOpacity 
                key={index}
                style={combine(tw.flexRow, tw.itemsCenter, tw.justifyBetween, tw.roundedXl, { 
                  marginBottom: 16, 
                  gap: 16 
                })}
              >
                <View style={combine(tw.flexCol, tw.flex1, { gap: 4 })}>
                  <Text style={combine(tw.textBlack, tw.textBase, tw.fontBold)}>
                    {option.title}
                  </Text>
                  <Text style={combine(tw.textGray600, tw.textSm)}>
                    {option.price}
                  </Text>
                </View>
                <View 
                  style={combine(tw.roundedXl, tw.overflow, { 
                    width: 120, 
                    height: 80, 
                    backgroundColor: '#F2F2F7'
                  })}
                >
                  <Image 
                    source={{ uri: option.image }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Bottom spacing for tab bar */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
