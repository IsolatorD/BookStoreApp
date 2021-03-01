import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native'
// Components
import BarButton from '../components/BarButton'
import LineDivider from '../components/LineDivider'

import { COLORS, FONTS, SIZES, icons, images, Dummy } from '../constants/'

const Home = ({ navigation }) => {

  const [profile, setProfile] = useState(Dummy.profile)
  const [myBooks, setMyBooks] = useState(Dummy.myBooks)
  const [categories, setCategories] = useState(Dummy.categories)
  const [selectedCategory, setSelectedCategory] = useState(1)

  const renderHeader = (profile) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center'
        }}
      >
        {/* Grettings */}
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              marginRight: SIZES.padding
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3
              }}
            >
              Good Morning
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h2
              }}
            >
              {profile.name}
            </Text>
          </View>
        </View>
        {/* Points */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              <Image
                source={icons.plus}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3
              }}
            >
              {profile.point} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderButtonSection = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: SIZES.padding
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius
          }}
        >
          {/* Claim */}
          <BarButton
            icon={icons.claim}
            text={'Claim'}
            onPress={() => console.log('Press claim')}
          />
          {/* Divider */}
          <LineDivider />
          {/* Get point */}
          <BarButton
            icon={icons.point}
            text={'Get Point'}
            onPress={() => console.log('Press get point')}
          />
          {/* Divider */}
          <LineDivider />
          {/* My Card */}
          <BarButton
            icon={icons.card}
            text={'My Card'}
            onPress={() => console.log('Press my card')}
          />
        </View>
      </View>
    )
  }

  const renderMyBookSection = (myBooks) => {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('BookDetail', { book: item })}
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding: 0,
            marginRight: SIZES.radius,
          }}
        >
          {/* Book cover */}
          <Image
            source={item.bookCover}
            resizeMode='cover'
            style={{
              width: 180,
              height: 250,
              borderRadius: 20
            }}
          />
          {/* Book info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={icons.clock}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray
              }}
            >
              {item.lastRead}
            </Text>
            <Image
              source={icons.page}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray
              }}
            >
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white
            }}
          >
            My Book
          </Text>
          <TouchableOpacity
            onPress={() => console.log('See more')}
            style={{
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline'
              }}
            >
              See more
            </Text>
          </TouchableOpacity>
        </View>
        {/* Books */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </View>
    )
  }

  const renderCategoryHeader = () => {
    const renderItem = ({ item }) => {
      
      return (
        <TouchableOpacity
          onPress={() => setSelectedCategory(item.id)}
          style={{
            flex: 1,
            marginRight: SIZES.padding
          }}
        >
          {
            selectedCategory == item.id &&
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white
              }}
            >
              {item.categoryName}
            </Text>
          }
          {
            selectedCategory != item.id &&
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.lightGray
              }}
            >
              {item.categoryName}
            </Text>
          }
        </TouchableOpacity>
      )
    }
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding
        }}
      >
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    )
  }

  const renderCategoryData = () => {
    let books = []
    let selectedCategoryBooks = categories.filter(book => book.id == selectedCategory)
    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books
    }

    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            marginVertical: SIZES.base
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('BookDetail', { book: item })}
            style={{
              flex: 1,
              flexDirection: 'row'
            }}
          >
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode='cover'
              style={{
                width: 100,
                height: 150,
                borderRadius: 10
              }}
            />
            
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius
              }}
            >
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h3,
                    color: COLORS.white
                  }}
                >
                  {item.bookName}
                </Text>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.lightGray
                  }}
                >
                  {item.author}
                </Text>
              </View>
              {/* Book info */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius
                }}
              >
                <Image
                  source={icons.pageFilled}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius
                  }}
                >
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius
                  }}
                >
                  {item.readed}
                </Text>
              </View>
              {/* Genre */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.base
                }}
              >
                {
                  item.genre.includes('Adventure') &&
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.lightGreen
                      }}
                    >
                      Adventure
                    </Text>
                  </View>
                }
                {
                  item.genre.includes('Romance') &&
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.lightRed
                      }}
                    >
                      Romance
                    </Text>
                  </View>
                }
                {
                  item.genre.includes('Drama') &&
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.lightBlue
                      }}
                    >
                      Drama
                    </Text>
                  </View>
                }
              </View>
            </View>
          </TouchableOpacity>
          {/* Bookmark button */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              position: 'absolute',
              top: 5,
              right: 15
            }}
          >
            <Image
              source={icons.bookmark}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray
              }}
            />
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          data={books}
        />
      </View>
    )
  }

  return (
    <SafeAreaView
      style={style.container}
    >
      {/* Header */}
      <View
        style={{
          height: 200
        }}
      >
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body */}
      <ScrollView
        style={{
          marginTop: SIZES.radius
        }}
      >
        {/* Books section */}
        <View
          style={{}}
        >
          {renderMyBookSection(myBooks)}
        </View>
        {/* Categories section */}
        <View
          style={{
            marginTop: SIZES.padding
          }}
        >
          <View>
            {renderCategoryHeader()}
          </View>
          <View>
            {renderCategoryData()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  }
})

export default Home