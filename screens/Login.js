import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button'

import Background from '../components/Background';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Title from '../components/Title';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            id:'',
            senha:'',
        };
    }
    static navigationOptions ={
        headerShown: false,
    };
    _onPressHandler(){
        Keyboard.dismiss();
        this.loadingButton.showLoading(true);
        // mock
        fetch('https://samurai-v1.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                senha: this.state.senha
            }) })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {            
                this.loadingButton.showLoading(false);
                this.props.navigation.navigate('Home',{responseJson});
                //console.log(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                alert(JSON.stringify(error));
                console.error(error);
                this.loadingButton.showLoading(false);
            });
    }
    render(){
        const {navigate} = this.props.navigation
        return (
            
            <Background style={{flex:1}} behavior='padding'>
                <Title style={styles.title}>Habla Facil!</Title>
                <Header>Bem-vindo</Header>
                <TextInput 
                    label='Usuario'
                    onChangeText={(id)=> this.setState({id})}
                    value = {this.state.id}
                    autoCapitalize='none'
                    returnKeyType="next"
                />
                <TextInput 
                    //style={styles.tinput} 
                    label='Senha'
                    onChangeText={(senha)=> this.setState({senha})}
                    value = {this.state.senha}
                    returnKeyType="done"
                    secureTextEntry
                />

                <View style={styles.button}>
                    <AnimateLoadingButton
                        ref={c => (this.loadingButton = c)}
                        
                        width={341}
                        height={40}
                        
                        title= "Log In"
                        titleFontSize={15}
                        
                        titleColor="rgb(255,255,255)"
                        backgroundColor="#4ecdc4"
                        borderRadius={4}
                        onPress = {this._onPressHandler.bind(this)}
                        />
                </View>
                
                <View style={styles.row}>
                    <Text style={styles.label}>Não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigate('Register')}>
                    <Text style={styles.link}>Criar uma</Text>
                    </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: '#ff6b6b',
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    button:{
        marginVertical: 10,
    },  
});

export default Login