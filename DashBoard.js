
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image, Modal,TextInput,Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faHome, faUtensils, faBed, faBook, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
  
import { Picker } from '@react-native-picker/picker';

export default function DashBoard({ navigation }) {
	const [rooms, setRooms] = useState([]);
	const [roomName, setRoomName] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState('SelectRoom');
	const iconNames = ['Home', 'Kitchen', 'Bed', 'Book', 'LaptopHouse'];
	const roomNames = ['Living Room', 'Kitchen', 'Bed Room', 'Study Room', 'Office'];
  
	const toggleModal = () => {
	  setIsModalVisible(!isModalVisible);
	};
  
	const handleNavigationPress = () => {

	};
  
	const addRoom = () => {
	  if (selectedValue !== 'SelectRoom' && roomName.trim() !== '') {
		const selectedRoomIndex = roomNames.indexOf(selectedValue);
  
		if (selectedRoomIndex !== -1) {
		  const newRoom = {
			roomName,
			selectedRoom: selectedValue,
			iconName: iconNames[selectedRoomIndex],
		  };
  
		  setRooms([...rooms, newRoom]);
      setRoomName('');
		  toggleModal();
		}
	  }
	};

	const handleRoomPress=(roomName)=>{
		navigation.navigate('Room', { headerTitle: roomName });
	}
  
	const displayRoom = () => {
		return rooms.map((room, index) => (
		  <TouchableOpacity
			key={index}
			style={[
			  styles.room,
			  selectedValue === room.selectedRoom ? { borderColor: '#f0538a' } : null,
			]}
			onPress={() => handleRoomPress(room.roomName)}
		  >
			<View style={styles.roomlogo}>
			  {getFontAwesomeIcon(room.iconName)}
			</View>
			<Text style={{color:'#fff',textAlign:'center',paddingTop:10,fontSize:20}}>{room.roomName}</Text>
		  </TouchableOpacity>
		));
	  };
	  
	  const getFontAwesomeIcon = (iconName) => {
		switch (iconName) {
		  case 'Home':
			return <FontAwesomeIcon icon={faHome} size={30} style={styles.icon} />;
		  case 'Kitchen':
			return <FontAwesomeIcon icon={faUtensils} size={30} style={styles.icon} />;
		  case 'Bed':
			return <FontAwesomeIcon icon={faBed} size={30} style={styles.icon} />;
		  case 'Book':
			return <FontAwesomeIcon icon={faBook} size={30} style={styles.icon} />;
		  case 'LaptopHouse':
			return <FontAwesomeIcon icon={faLaptopHouse} size={30} style={styles.icon} />;
		  default:
			return null;
		}
	  };
	  
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#010920" />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.navIcon} onPress={handleNavigationPress}>
            <FontAwesomeIcon icon={faBars} size={25} color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.profileLogo}>
            <FontAwesomeIcon icon={faUser} size={25} color="#9154f7" />
          </View>
        </View>
        <View style={styles.intro}>
        <Text style={styles.h1}>Hello Tharun</Text>
        <Text style={styles.h5}>Welcome to Home</Text>  
        </View>  
        <View style={styles.roomHead}>
        	<Text style={styles.h2}>Your Room</Text>
			<View style={styles.addBtnOut}>
				<TouchableOpacity style={styles.addBtnIn} onPress={toggleModal}>
					<Text style={{color:'#fff'}}>Add room</Text>
				</TouchableOpacity>
			</View>
        </View>
        <View style={styles.rooms}>
        {displayRoom()}
        </View>
		<Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.btnbox}>
          <View style={styles.modal}>
            <Text style={{ color: '#000', fontSize: 16 }}>Select Room</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={styles.picker}
            >
              {roomNames.map((room, index) => (
                <Picker.Item key={index} label={room} value={room} />
              ))}
            </Picker>
            <Text style={{ color: '#000', fontSize: 16 }}>Enter Room Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Room Name"
              onChangeText={(text) => setRoomName(text)}
            />
            <View style={styles.addRoomBtn}>
              <Button title="Submit" onPress={addRoom} color="#cd938c" />
            </View>
          </View>
        </View>
      </Modal>
    	</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010920',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  navIcon: {
    padding: 10,
  },
  profileLogo: {
    marginRight: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 25,
    padding: 5,
  },
  intro:{
    paddingBottom:20,
  },
  h1: {
    color: '#fff',
    fontSize: 32,
    marginLeft: 20,
    paddingBottom: 3,
  },
  h2:{
    color: '#fff',
    fontSize: 28,
    marginLeft: 20,
    paddingBottom: 3,
  },
  h5: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20,
  },
  roomHead:{
	flex: 1,
	flexDirection:'row',
	justifyContent:'space-between',
	paddingBottom:10,
  },
  addBtnOut:{
	alignItems:'flex-end',
	marginEnd:20,
  },
  addBtnIn:{
	width:100,
	height:40,
	backgroundColor:'#f0538a',
	borderRadius:30,
	alignItems:'center',
	justifyContent:'center',
  },
  rooms: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  room: {
    alignItems:'center',
    height: 150,
    width:170,
    backgroundColor: '#2D3D67',
    marginBottom: 20,
    borderRadius:20,
    marginLeft:10,
    marginRight:10,
    borderWidth:3,
    borderColor:'#2D3D67',
    justifyContent:'center',

  },
  roomlogo:{
    marginRight: 10,
    borderWidth: 1.5,
    borderRadius: 30,
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#FFC000',
  },
  btnbox:{
	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal:{
	backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  icon:{
	color: '#fff',
  }
});

