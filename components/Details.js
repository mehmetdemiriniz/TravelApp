import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Details({route, navigation}) {

  const {item} = route.params;

    return (
        <View>
            <SafeAreaView>
                <TouchableOpacity onPress={
                  () => {
                    navigation.goBack();
                  }
                }>
                    <Text>Details</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    )
}
