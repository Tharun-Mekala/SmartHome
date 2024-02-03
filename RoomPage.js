import { StyleSheet, Text, View,StatusBar,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'

export default function RoomPage({ route,navigation  }) {
  const { headerTitle } = route.params;

  React.useLayoutEffect(() => {
    // Set the header title
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation, headerTitle]);
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#010920" />
        <ScrollView>
            <View >

            </View>
        
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010920',
      },
    
})