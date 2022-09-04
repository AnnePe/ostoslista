import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,FlatList,Image,Button} from 'react-native';

let texti;

export default function App() {

  const [text, setText] = useState(''); //textinput
  const [data, setData] = useState([]);//flatlist component

  const buttonPressedAdd = () => { 
    const texti= text;//tehdään lokaali muuttuja että synkronoituu oikein
    console.log(texti);
    const plussa= [...data,{key:texti}];//spread funktio,ensin vanhat elementit, ja sitten lisätään key:text(syöttökentän teksti)
    setData(plussa);
    console.log(plussa);
    setText('');
     
  };
  const buttonPressedClear = () => { 
    const plussa= ([]);//spread funktio,ensin vanhat elementit, ja sitten lisätään key:text(syöttökentän teksti)
    setData(plussa);
  //  console.log(plussa);
      
  };

  return (
    <View style={styles.container}>
         <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
        <TextInput placeholder='Mitä ostetaan?'  style={styles.input} onChangeText={text => setText(text)} value={text}/>
        
      <View style={styles.button2}>
          <View style={styles.button}>
             <Button onPress={buttonPressedAdd} title="Add" />
          </View>
          <View style={styles.button}>
            <Button onPress={buttonPressedClear} title="Clear" />
          </View>
      </View>
      <Text style={{ fontSize: 20, color: 'blue' }}> Shopping List</Text>
      <FlatList style={styles.list} 
        data={data}
        renderItem={({ item }) => 
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
       />    
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    margin:10,
    },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin:10,
   
    },
    button2: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      
      },
  image : {
    marginTop:30,
    marginBottom:30,
    width: 250,
    height: 100
  },
  input : {
    width:'50%'  , 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:10,
    padding: 5,
    margin:10,
    textDecorationLine: 'underline',
  },
});
