import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
} from 'react-native';
import {
  FontAwesomeIcon
} from '@fortawesome/react-native-fontawesome';
import {
  faToggleOn,
  faToggleOff,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';

const Switch = ({ switchName, toggleState, onTogglePress, onEditPress }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedSwitchName, setEditedSwitchName] = useState(switchName);

  const handleEditSubmit = () => {
    onEditPress(editedSwitchName);
    setIsEditModalVisible(false);
  };

  return (
    <View style={styles.switch}>
      <View style={styles.switchHeader}>
      <Text style={{ color: '#fff', fontSize: 18 }}>{switchName}</Text>
        <TouchableOpacity style={styles.dropdownIcon} onPress={() => setIsEditModalVisible(true)}>
          <FontAwesomeIcon icon={faCaretDown} size={20} color="#fff" />
        </TouchableOpacity>
        <Modal visible={isEditModalVisible} animationType="slide" transparent={true}>
          <View style={styles.btnbox}> 
          <View style={styles.editModal}>
            <Text style={{ color: '#000', fontSize: 16 }}>Enter Switch Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Switch Name"
              value={editedSwitchName}
              onChangeText={(text) => setEditedSwitchName(text)}
            />
            <Button title="Submit" onPress={handleEditSubmit} color="#cd938c" />
          </View>
          </View>
        </Modal>
      </View>
      <View style={styles.switchBody}>
        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 20 }}>
          {toggleState ? 'ON' : 'OFF'}
        </Text>
        <TouchableOpacity style={styles.toggleIcon} onPress={onTogglePress}>
          <FontAwesomeIcon
            icon={toggleState ? faToggleOn : faToggleOff}
            size={50}
            color={toggleState ? '#f0538a' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function RoomPage({ route, navigation }) {
  const { headerTitle } = route.params;
  const initialSwitchNames = ['Switch1', 'Switch2', 'Switch3', 'Switch4'];
  const [switchNames, setSwitchNames] = useState(initialSwitchNames);
  const [toggleStates, setToggleStates] = useState(Array(initialSwitchNames.length).fill(false));

  const toggleSwitch = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
    // Add logic for switching on/off
  };

  const handleEditSwitchName = (editedName, index) => {
    const newSwitchNames = [...switchNames];
    newSwitchNames[index] = editedName;
    setSwitchNames(newSwitchNames);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#010920" />
      <ScrollView>
        <View style={styles.allSwitch}>
          <TouchableOpacity style={styles.switch1} onPress={() => setToggleStates(Array(switchNames.length).fill(true))}>
            <Text style={{ color: '#fff' }}>ON ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switch1} onPress={() => setToggleStates(Array(switchNames.length).fill(false))}>
            <Text style={{ color: '#fff' }}>OFF ALL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switches}>
          {switchNames.map((switchName, index) => (
            <Switch
              key={index}
              switchName={switchName}
              toggleState={toggleStates[index]}
              onTogglePress={() => toggleSwitch(index)}
              onEditPress={(editedName) => handleEditSwitchName(editedName, index)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010920',
  },
  allSwitch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  switch1: {
    width: 100,
    height: 40,
    backgroundColor: '#f0538a',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switches: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    backgroundColor: '#2D3D67',
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  switchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownIcon: {
    padding: 5,
  },
  editModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
    height: 200,
  },
  textInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
    color: '#000',
  },
  toggleIcon: {
    marginLeft: 10,
  },
  btnbox:{
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
