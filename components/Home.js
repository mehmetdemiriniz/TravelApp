import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    FlatList,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import React from 'react'

import discoverData from '../assets/data/discoverData';
import activitiesData from '../assets/data/activitiesData';
import learnMoreData from '../assets/data/learnMoreData';
import COLORS from '../assets/colors';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

Feather.loadFont();
Entypo.loadFont();

export default function Home({navigation}) {

    const discoverDataItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item})}>

                <ImageBackground
                    source={item.image}
                    resizeMode='cover'
                    style={styles.discoverItemImage}
                    imageStyle={{
                    borderRadius: 20
                }}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" color={COLORS.white} size={18}/>
                        <Text style={styles.discoverItemLocationtext}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivitiesCategory = ({item}) => {
        return (
            <View style={styles.activitiesDataCategoryWrapper}>
                <Image source={item.image}/>
                <Text style={styles.activitiesDataCategoryText}>{item.title}</Text>
            </View>
        )
    }

    const renderLearnMoreItem = ({item}) => {
        return (
            <TouchableOpacity>
                <ImageBackground
                    imageStyle={{
                    borderRadius: 20
                }}
                    source={item.image}
                    style={styles.learnMoreItemImage}>
                    <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* header menu  */}
                <SafeAreaView>
                    <View style={styles.header}>
                        <Feather name="menu" size={24} color={COLORS.black}/>
                        <Image
                            source={require('../assets/images/person.png')}
                            style={styles.headerImage}/>
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discover}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverTabMenu}>
                        <Text
                            style={[
                            styles.discoverTabMenuText, {
                                color: COLORS.orange
                            }
                        ]}>All</Text>
                        <Text style={styles.discoverTabMenuText}>Destinations</Text>
                        <Text style={styles.discoverTabMenuText}>Cities</Text>
                        <Text style={styles.discoverTabMenuText}>Experiences</Text>
                    </View>

                    <View style={styles.discoverImages}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={discoverData}
                            renderItem={discoverDataItem}
                            keyExtractor={item => item.id}></FlatList>
                    </View>
                </View>

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesCategory}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={activitiesData}
                            renderItem={renderActivitiesCategory}
                            keyExtractor={item => item.id}/>
                    </View>
                </View>

                {/* Learn More */}
                <View style={styles.learnMore}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <FlatList
                        data={learnMoreData}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={renderLearnMoreItem}
                        keyExtractor={item => item.id}/>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    headerImage: {
        width: 52,
        height: 52,
        borderRadius: 10
    },

    discover: {
        marginTop: 10,
        paddingHorizontal: 20
    },

    discoverTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: COLORS.black,
        fontWeight: '700'
    },
    discoverTabMenu: {
        marginTop: 15,
        flexDirection: 'row'
    },
    discoverTabMenuText: {
        marginRight: 30,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: COLORS.gray
    },

    discoverImages: {
        marginTop: 20
    },
    discoverDataItemWrapper: {},

    discoverItemImage: {
        width: 170,
        height: 250,
        borderRadius: 20,
        justifyContent: 'flex-end',
        marginRight: 20
    },

    discoverItemTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        fontWeight: '700',
        paddingHorizontal: 10
    },

    discoverItemLocationWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 10
    },
    discoverItemLocationtext: {
        color: COLORS.white,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        marginLeft: 5
    },
    activitiesWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    activitiesTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: COLORS.black,
        fontWeight: '700'
    },
    activitiesCategory: {
        marginTop: 10
    },
    activitiesDataCategoryWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    activitiesDataCategoryText: {
        marginTop: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: COLORS.gray
    },
    learnMore: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    learnMoreTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: COLORS.black,
        fontWeight: '700'
    },
    learnMoreItemImage: {
        marginTop: 10,
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        borderRadius: 20,
        marginRight: 20
    },
    learnMoreItemTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        fontWeight: '700',
        paddingHorizontal: 10,
        marginBottom: 20
    }
});
