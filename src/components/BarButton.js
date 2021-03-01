import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'

import { COLORS, SIZES, FONTS } from '../constants/'

const BarButton = ({ icon, text, onPress }) => (
  <TouchableOpacity
    style={{
      flex: 1
    }}
    onPress={onPress}
  >
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        source={icon}
        resizeMode='contain'
        style={{
          width: 30,
          height: 30
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.body3,
          color: COLORS.white
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableOpacity>
)

export default BarButton