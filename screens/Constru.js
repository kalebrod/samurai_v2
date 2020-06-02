import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Background from '../components/Background';
import Header from '../components/Header';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

class Constru extends Component{
    constructor(props){
        super(props);
        this.state = {
            progress:'',
        }
    }
    render(){
        const {navigate} = this.props.navigation;
        return (

                <Background style={{flex:1}}>
                    <Title style={styles.title}>Habla Facil!</Title>
                    <Header>Estamos em construçāo...</Header>
                    <Paragraph>
                        Esta pagina esta ainda em construçāo :( mas para que nāo se sinta triste deixamos esta imagen de um lindo gatinho
                    </Paragraph>
                    <View style={styles.contimage}>
                        <Image 
                            style={styles.image}
                            source={require('../assets/images/construction.jpg')}
                        />
                    </View>
                </Background>

        )

    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:40,
        color:'#d40c0c',
    },
    image: {
        width: '100%',
        height: undefined,
        borderRadius: 10,
        aspectRatio:1,
    },
    contimage: {
        flex:1,
        padding:20,
        width:'100%',
    },
});
export default Constru;