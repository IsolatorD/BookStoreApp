import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native'

import LineDivider from '../components/LineDivider'

import {COLORS, SIZES, FONTS, icons, images} from '../constants/'

const BookDetail = ({ route, navigation }) => {

  const [book, setBook] = useState(null)
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1)
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0)

  const indicator = new Animated.Value(0)

  useEffect(() => {
    const { book } = route.params
    setBook(book)
  }, [book])


  const renderBookInfoSection = () => {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={book.bookCover}
          resizeMode='cover'
          style={styles.absolute}
        />
        {/* Color overlay */}
        <View
          style={[
            styles.absolute,
            {
              backgroundColor: book.backgroundColor
            }
          ]}
        >
        </View>
        {/* Navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end'
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: SIZES.base
            }}
          >
            <Image
              source={icons.backArrow}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: book.navTintColor
              }}
            >
              Book Detail
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: SIZES.base
            }}
          >
            <Image
              source={icons.more}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end'
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View
          style={{
            flex: 5,
            paddingTop: SIZES.padding2,
            alignItems: 'center'
          }}
        >
          <Image
            source={book.bookCover}
            resizeMode='contain'
            style={{
              flex: 1,
              width: 150,
              height: 'auto'
            }}
          />
        </View>

        {/* Book name and author */}
        <View
          style={{
            flex: 1.8,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: book.navTintColor
            }}
          >
            {book.bookName}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: book.navTintColor
            }}
          >
            {book.author}
          </Text>
        </View>
        
        {/* Book info */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding2,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Rating */}
          <View
            style={{
              flex: 1,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white
              }}
            >
              {book.rating}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white
              }}
            >
              Rating
            </Text>
          </View>
          {/* Divider */}
          <LineDivider color={COLORS.lightGray2} line={5} />
          {/* Pages */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingHorizontal: 4,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white,
              }}
            >
              {book.pageNo}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white
              }}
            >
              Number of Page
            </Text>
          </View>
          {/* Divider */}
          <LineDivider color={COLORS.lightGray2} line={5} />
          {/* Language */}
          <View
            style={{
              flex: 1,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white
              }}
            >
              {book.language}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white
              }}
            >
              Language
            </Text>
          </View>
        </View>
      </View>
    )
  }

  const renderBookDescription = () => {

    const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ?
      scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight
      : scrollViewVisibleHeight

    const difference = scrollViewVisibleHeight > indicatorSize ?
      scrollViewVisibleHeight - indicatorSize : 1
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: SIZES.padding
        }}
      >
        {/* Custom ScrollBar */}
        <View
          style={{
            width: 4,
            height: '100%',
            backgroundColor: COLORS.gray1
          }}
        >
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.lightGray4,
              transform: [
                {
                  translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight)
                  .interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }}
          />
        </View>
        {/* Description */}
        <ScrollView
          contentContainerStyle={{
            paddingLeft: SIZES.padding2
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height)
          }}
          onLayout={({ nativeEvent: { layout: { x, y, width, height }}}) => {
            setScrollViewVisibleHeight(height)
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {y: indicator} } }],
            { useNativeDriver: false }
          )}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding
            }}
          >
            Description
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.lightGray
            }}
          >
            {book.description}
          </Text>
        </ScrollView>
      </View>
    )
  }

  const renderBookButton = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}
      >
        {/* Bookmark */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={icons.bookmark}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.lightGray2
            }}
          />
        </TouchableOpacity>
        {/* Start Reading */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white
            }}
          >
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (book) {
    return (
      <View
        style={styles.container}
      >
        {/* Book cover section */}
        <View
          style={{
            flex: 4
          }}
        >
          {renderBookInfoSection()}
        </View>
        {/* Description */}
        <View
          style={{
            flex: 2
          }}
        >
          {renderBookDescription()}
        </View>
        {/* Buttons */}
        <View
          style={{
            height: 70,
            marginBottom: 30
          }}
        >
          {renderBookButton()}
        </View>
      </View>
    )
  } else {
    return <View></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default BookDetail