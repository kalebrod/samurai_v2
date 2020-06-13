import React, {Component,memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Carousel from '../components/Carousel';

import {theme} from '../core/theme';
import {aulas} from '../appdata/data';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.navigation.getParam('responseJson').id,
            nome: props.navigation.getParam('responseJson').nome,
            progress: props.navigation.getParam('responseJson').progress,   
        }
        
    }

    static navigationOptions ={
        headerShown: false,
    };

    render(){
        const {navigate} = this.props.navigation
        return(
          <View style={{flex:1}}> 
              <View style={styles.spacer}></View>
              <View style={styles.header}>
                
                <Text style={styles.header_title}>{this.state.nome}</Text>
                  <Image
                    source={require('../assets/images/profile.jpg')}
                    style={styles.profile_pic}
                  />
              </View>
      
              <Background >
                  <Title style={styles.title}>Habla Facil!</Title>
                  <View style={styles.containerTop}>
                      <Header>Bem-Vindo</Header>
                      <Text style={styles.text}>Seleccione uma aula para continuar</Text>
                      <View style={styles.container_carousel}>
                            <Carousel data={aulas} props={this.props} />
                      </View>  
                      <View style={styles.divider} />
                      <View>
                          <Header>Tip do dia</Header>
                          <Paragraph style={{fontStyle: 'italic',textAlign:'center'}}>" Quédate en casa, así no te pones en peligro y practicas tu español "</Paragraph>
                      </View>               
                  </View>
            </Background>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
      fontSize:40,
      color:'#d40c0c',
      marginBottom:10,
    },
    spacer:{
      height:34,
      backgroundColor:'white',
    },
    header:{
      alignItems:'center',

      justifyContent:'flex-end',
      height:60,
      backgroundColor:'white',
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'lightgrey',
      paddingRight:15,

    },
    profile_pic:{
      width: 35, 
      height: 35, 
      borderRadius: 35 / 2,
      borderWidth:2,
      borderColor:'#4ecdc4',
      padding: 5,
      marginLeft:10,
    },
    header_title:{
      fontSize:20,
      color: theme.colors.secondary,
      fontStyle: 'italic',
    },
    containerTop:{
        flex:1,
        justifyContent:'flex-start',
        width:'100%'
    },
    divider:{
      width:'100%',
      borderBottomColor: theme.colors.secondary,
      borderBottomWidth:0.5,
      marginVertical:10, 
    },
    text:{
      fontSize:16,
      marginBottom:20,
    },
    container_carousel:{
      //flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      //backgroundColor:'red',
      paddingBottom: 15,
      // borderBottomColor: '#ff6b6b',
      // borderBottomColor: 'lightgrey',
      // borderBottomWidth:1, 
    },
})

export default memo(Home);

