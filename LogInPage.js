import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, ImageBackground, StatusBar, TextInput,TouchableOpacity, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { CheckBox } from 'react-native-elements';

export default function LoginPage({ navigation }) {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [isSelected, setSelection] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleLogin = () => {
	  if (userId === 'user' && password === '1') {
		navigation.navigate('Home', {
		  username: userId,
		  email: password, // Replace with the actual email data
		});
	  } else {
		setErrorMessage('Incorrect username or password');
	  }
	};
	
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView>
        <ImageBackground source={require('./assets/bg1.jpg')} style={styles.bg_img}>
			<Text style={styles.intro}>Welcome to Smart Home</Text>
        </ImageBackground>
		<View style={styles.Mbox}>
		<View style={styles.box}>
			<Text style={styles.lgnMsg}>Login</Text>
			<View style={styles.lgnbox}>
				<View style={styles.logocircle}>
            		<FontAwesomeIcon icon={faHome} size={50} color="#9154f7" />
          		</View>
				<View style={styles.inputContainer}>
					<View style={styles.icon}>
              			<FontAwesomeIcon icon={faUser} size={20} color="#9154f7"  />
					</View>
              		<TextInput style={styles.inputbox} placeholder="User ID" onChangeText={(text) => setUserId(text)} />
            	</View>
            	<View style={styles.inputContainer}>
					<View style={styles.icon}>
              			<FontAwesomeIcon icon={faLock} size={20} color="#9154f7"  />
					</View>
              		<TextInput style={styles.inputbox} placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            	</View>
				<View style={styles.optnbox}>
					<View style={styles.chkbox}>
						<CheckBox title="Remind me" checked={isSelected} onPress={() => setSelection(!isSelected)}/>
					</View>
					<TouchableOpacity >
						<Text style={styles.fgtPwd}>ForgetPassword?</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.lgnbtn}>
           			<Button title="Login" onPress={handleLogin} color='#9154f7' />
          		</View>
			</View>
			{errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
		</View>
		</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
	backgroundColor:'#fffff',
	justifyContent:'center',
	height:'auto',
  },
  bg_img: {
    height: Dimensions.get('window').height * 0.3,
  },
  intro:{
	textAlign:'left',
	fontSize:26,
	color:"#ffffff",
	marginTop:150,
	marginLeft:15,
	fontWeight:'bold',
  },
  Mbox:{
	height: Dimensions.get('window').height-Dimensions.get('window').height * 0.3,
	backgroundColor:"#fff"
  },
  box:{
	backgroundColor:"#fff",
	borderRadius: 50,
	bottom:30,
	alignItems:'center',
	paddingTop:50,
	flex:1,
	
  },
  lgnMsg:{
	fontSize:36,
	textAlign:'center',
	paddingBottom:30,
	fontWeight:'bold',
  },
  lgnbox:{
	borderColor: "#9426ff",
	borderWidth: 3,
	width: Dimensions.get('window').width-80,
	
	borderRadius:40,
	alignItems:'center',
	paddingTop:10,
  },
  logocircle:{
	width: 60,
	height: 60,
	borderRadius: 40,
	borderWidth: 2,
	borderColor: "#9154f7",
	alignItems:'center',
	marginBottom: 50,
	top:20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
	marginTop:10,
	borderColor:"#9624ff",
	borderWidth:1,
	height: 35,
	width:35,
	alignItems:'center',
	paddingTop:5,
  },
  inputbox:{
	borderColor: "#9426ff",
	height: 40,
	width: 200,
	borderWidth: 1,
	top:5,
	paddingLeft:10,
  },
  optnbox:{
	marginBottom:30,
  },
  chkbox:{
	marginRight:100,
	width:150
  },
  fgtPwd:{
    textDecorationLine:'underline',
    color:'skyblue',
	marginLeft:160,
	bottom:40,
  },
  lgnbtn: {
	marginTop: 10,
	bottom:45,
	width:250,
  },
  errorMessage:
  {
	color:'red',
  }
 
});
