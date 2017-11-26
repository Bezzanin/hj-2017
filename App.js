import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TextInput } from 'react-native';
import Layout from './Layout';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class App extends React.Component {
  state = {
    myModule: {axisZ: "9.51", temperature: "26.1 °C", axisX: "-0.13", axisY: "-2.11"}
  }
  render() {
    return (
      <ScrollView style={styles.container}>
         <StatusBar
     barStyle="dark-content"
   />
         <NavBar>
        <NavButton onPress={() => alert('hi')}>
        </NavButton>
        <NavTitle>
          {"Suunto"}
        </NavTitle>
        <NavButton onPress={() => alert('hi')}>
        </NavButton>
      </NavBar>
        <Image
          source={require('./assets/bench-press.gif')}
          style={styles.exerciseImage}
        />
        <Text style={styles.exerciseName}>Bench Press</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput
        style={styles.h2}
        placeholder="60"></TextInput>
        <Text style={styles.h2}>kg</Text>
        </View>
        <Text>
            {this.state.myModule.axisX}
        </Text>
        <Text>
            {this.state.myModule.axisY}
        </Text>
        <Text>
            {this.state.myModule.axisZ}
        </Text>
        <Text>
            {this.state.myModule.temperature}
        </Text>

        <View style={styles.instructionsContainer}>
          <Text style={styles.h1}>Instructions</Text>
          <Text style={styles.paragraph}>
          Lay down on the bench. Then, using your thighs to help raise the dumbbells up.
          </Text>
          <Text style={styles.h1}>Caution</Text>
          <Text style={styles.paragraph}>
          When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you.
          </Text>
          <Text style={styles.h1}>Variations</Text>
          <Text style={styles.paragraph}>
          Another variation of this exercise is to perform it with the palms of the hands facing each other.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseImage: {
    width: Layout.window.width,
    height: 300,
    marginBottom: 16
  },
  exerciseName: {
    color: '#212121',
    marginBottom: 16,
    fontSize: 24,
    marginLeft: 16,
    lineHeight: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  instructionsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CDCDCD'
  },
  h1: {
    color: '#212121',
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  h2: {
    color: '#212121',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  paragraph: {
    color: 'rgba(0,0,0,0.8)',
    marginVertical: 8,
    fontSize: 16,
    lineHeight: 22,
    backgroundColor: 'transparent'
  }
});