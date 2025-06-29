import { combine, tw } from '@/utils/tailwind';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const carBrands = [
    { name: 'BMW', logo: '🚗', count: '15 cars' },
    { name: 'Mercedes', logo: '🚙', count: '12 cars' },
    { name: 'Audi', logo: '🚗', count: '18 cars' },
    { name: 'Tesla', logo: '⚡', count: '8 cars' },
    { name: 'Toyota', logo: '🚗', count: '22 cars' },
    { name: 'Honda', logo: '🚗', count: '16 cars' },
  ];

  const featuredCars = [
    {
      name: 'BMW M3',
      price: '$150/day',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      type: 'Sport'
    },
    {
      name: 'Tesla Model S',
      price: '$120/day',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
      type: 'Electric'
    }
  ];

  return (
    <View style={combine(tw.flex1, tw.bgWhite)}>
      <SafeAreaView style={tw.flex1}>
        {/* Header */}
        <View style={combine(tw.p4, { paddingTop: 20 })}>
          <Text style={combine(tw.textBlack, tw.text2xl, tw.fontBold, tw.textCenter)}>
            Explore Cars
          </Text>
        </View>

        <ScrollView style={tw.flex1} showsVerticalScrollIndicator={false}>
          {/* Car Brands Section */}
          <View style={tw.px4}>
            <Text style={combine(tw.textBlack, tw.fontBold, { fontSize: 20, marginBottom: 16 })}>
              Browse by Brand
            </Text>
            
            <View style={combine(tw.flexRow, { gap: 12, flexWrap: 'wrap' })}>
              {carBrands.map((brand, index) => (
                <TouchableOpacity
                  key={index}
                  style={combine(
                    tw.p4,
                    tw.roundedLg,
                    tw.itemsCenter,
                    { backgroundColor: '#F2F2F7', width: '48%' }
                  )}
                >
                  <Text style={combine(tw.textLg, { marginBottom: 8 })}>{brand.logo}</Text>
                  <Text style={combine(tw.textBlack, tw.fontMedium)}>{brand.name}</Text>
                  <Text style={combine(tw.textGray600, tw.textSm)}>{brand.count}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Featured Cars Section */}
          <View style={combine(tw.px4, { marginTop: 32 })}>
            <Text style={combine(tw.textBlack, tw.fontBold, { fontSize: 20, marginBottom: 16 })}>
              Featured Cars
            </Text>
            
            {featuredCars.map((car, index) => (
              <TouchableOpacity
                key={index}
                style={combine(
                  tw.p4,
                  tw.roundedXl,
                  tw.mb4,
                  { backgroundColor: '#F2F2F7' }
                )}
              >
                <View style={combine(tw.flexRow, { gap: 16 })}>
                  <View 
                    style={combine(tw.roundedLg, tw.overflow, { 
                      width: 100, 
                      height: 80, 
                      backgroundColor: '#E5E5EA'
                    })}
                  >
                    <Image 
                      source={{ uri: car.image }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={combine(tw.flex1, tw.justifyBetween)}>
                    <View>
                      <Text style={combine(tw.textBlack, tw.fontBold, tw.textLg)}>
                        {car.name}
                      </Text>
                      <Text style={combine(tw.textGray600, tw.textSm)}>
                        {car.type}
                      </Text>
                    </View>
                    <View style={combine(tw.flexRow, tw.justifyBetween, tw.itemsCenter)}>
                      <Text style={combine(tw.textBlack, tw.fontBold)}>
                        {car.price}
                      </Text>
                      <View style={combine(tw.flexRow, tw.itemsCenter, { gap: 4 })}>
                        <Text style={combine(tw.textGray600)}>⭐</Text>
                        <Text style={combine(tw.textGray600, tw.textSm)}>
                          {car.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
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
