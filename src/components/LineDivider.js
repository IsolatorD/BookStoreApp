import React from 'react'
import {
  View
} from 'react-native'
import { COLORS } from '../constants'

const LineDivider = ({ color, line }) => (
  <View
    style={{
      width: 1,
      paddingVertical: line ? line : 18
    }}
  >
    <View
      style={{
        flex: 1,
        borderLeftColor: color ? color : COLORS.lightGray,
        borderLeftWidth: 1
      }}
    ></View>
  </View>
)

export default LineDivider