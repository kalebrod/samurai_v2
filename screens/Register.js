import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Background from '../components/Background';
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
    
    sendregister = async () => {
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
            alert(JSON.stringify(responseJson));
            console.log(responseJson);
        }).catch((error) =>{
            console.error(error);
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Background style={{flex:1}} behavior='padding'>
                <Text style={styles.title}>Habla Facil!</Text>
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
                        label="Nome de Usuario"
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
            
    
                <Button mode="contained" onPress={this.sendregister.bind(this)}>
                    Registrar
                </Button>
        
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
        fontFamily:'pacifico',
        fontSize:40,
        color:'#d40c0c',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10, 
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});
 
export default Register;