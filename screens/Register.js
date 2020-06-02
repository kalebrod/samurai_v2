import React, {Component} from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    View, 
    Text, 
    Keyboard,
    Alert,
} 
from 'react-native';

import AnimateLoadingButton from 'react-native-animate-loading-button'

import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
import Title from '../components/Title';
import {theme} from '../core/theme';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            email: '',
            senha: '',
            nome: '',
            };
      }
    
    static navigationOptions = {
        headerShown: false,
    };
    _onPressHandler = async () =>{
        Keyboard.dismiss();
        this.loadingButton.showLoading(true);

        if(this.state.id == ""){
            Alert.alert(
                'Cadastro Invalido!',
                'Tente novamente....',
                [{text:'Ok'}],
                {cancelable:false}
            );
            this.loadingButton.showLoading(false);
        }else{

            fetch('https://samurai-v1.herokuapp.com/api/register', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id:this.state.id,
                    email:this.state.email,
                    senha:this.state.senha,
                    nome:this.state.nome
                })
            }).then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                this.loadingButton.showLoading(false);
                if(responseJson.message == 'FAILED'){
                    Alert.alert(
                        'Cadastro Invalido!',
                        'Tente novamente....',
                        [{text:'Ok'}],
                        {cancelable:false}
                        );
                        this.props.navigation.navigate('Register');
                    }else{
                        this.props.navigation.navigate('Login');
                    }
                }).catch((error) =>{
                    console.error(error);
                    this.loadingButton.showLoading(false);
                });
            }
        }
            
    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <Background style={{flex:1}} behavior='padding'>
                <Title style={styles.title}>Habla Facil!</Title>
                <Header>Criar conta</Header>
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                        
                <TextInput
                    label="Usuario"
                    onChangeText={(id) => this.setState({id})}
                    returnKeyType="next"
                    value={this.state.name}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />
        
                <TextInput
                    label="Nome"
                    onChangeText={(nome) => this.setState({nome})}
                    returnKeyType="next"
                    value={this.state.name}
                    error=''
                    errorText=''
                    autoCapitalize="none"
                />

                <TextInput
                    label="Senha"
                    onChangeText={(senha) => this.setState({senha})}
                    returnKeyType="done"
                    value={this.state.password}
                    error=''
                    errorText=''
                    secureTextEntry
                />
                <View style={styles.button}>
                    <AnimateLoadingButton
                        ref={c => (this.loadingButton = c)}
                        
                        width={332}
                        height={40}
                        
                        title= "Cadastrar-se!"
                        titleFontSize={15}
                        
                        titleColor="rgb(255,255,255)"
                        backgroundColor="#4ecdc4"
                        borderRadius={4}
                        onPress = {this._onPressHandler.bind(this)}
                        />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Já tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigate('Login')}>
                    <Text style={styles.link}>Faça login</Text>
                    </TouchableOpacity>
                </View>
            </Background>
        );
    }
} 

const styles = StyleSheet.create({ 
    title:{
        fontSize:40,
        color:'#d40c0c',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10, 
    },
    link: {
        fontWeight: 'bold',
        color: '#ff6b6b',
    },
    test:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }, 
    button:{
        marginVertical: 10,
    }, 
});
 
export default Register;