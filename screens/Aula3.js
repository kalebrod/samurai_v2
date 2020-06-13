import React, {Component,memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    AntDesign,
    Fontisto,
    Entypo, 
} from '@expo/vector-icons';

import Background from '../components/Background';
import Header from '../components/Header';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

import {theme} from '../core/theme'

var score = 0;
const Stack =  createStackNavigator();

function Teoria({navigation,fathernav}){
    return (
        <View style={{flex:1}}>
            <View style={styles.spacer}></View>
            <Background>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                >
                <View style={styles.header}>
                    <Title style={{color:'red',fontSize:25}}>Habla Facil!</Title>
                </View>
                    <Header>Sem Fronteiras</Header>
                    <Paragraph>
                        Em esta aula, vamos aprender um pouco sobre os diferentes países que existem no nosso planeta. Vamos a aprender um novo vocabulário para poder comunicarmos em um mundo donde não existem fronteiras.
                    </Paragraph>
                    <Header>Gramatica</Header>
                    <Paragraph>
                        Os <Text style={{fontWeight:'bold'}}>sustantivos</Text> em espanhol são ademais podem ser classificados em:
                    </Paragraph>
                    <Paragraph>
                        <Text style={{fontWeight:'bold'}}>Substantivo próprio</Text> (sustantivo propio):
                    </Paragraph>
                    <Paragraph>
                        São palavras que indicam os nomes de pessoas e lugares (estados, cidades, países) e são escritas com letra inicial maiúscula.
                    </Paragraph>
                    <View>
                        <Text style={styles.stext}>Exemplo</Text>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/><Text style={{fontStyle:'italic'}}>Brasil</Text>
                        </Paragraph>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/> <Text style={{fontStyle:'italic'}}>Luísa</Text>
                        </Paragraph>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/><Text style={{fontStyle:'italic'}}>España</Text>
                        </Paragraph>
                    </View>
                    <Text style={{fontSize:16,marginBottom: 10}}>
                        <Text style={{fontWeight:'bold'}}>Substantivo primitivo</Text> (sustantivo primitivo):
                    </Text>
                    <Paragraph style={{marginBottom: 5}}>
                        Diferentemente do substantivo comum, os individuais expressam singularidade, ou seja, nomeiam algo de modo singular.
                    </Paragraph>
                    <View>
                        <Text style={styles.stext}>Exemplo</Text>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/><Text style={{fontStyle:'italic'}}>El pan</Text>  (o pão)
                        </Paragraph>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/><Text style={{fontStyle:'italic'}}>La calle</Text> (a rua)
                        </Paragraph>
                        <Paragraph>
                            <Entypo name="dot-single" size={18} color="black"/><Text style={{fontStyle:'italic'}}>El humano</Text> (o humano)
                        </Paragraph>
                    </View>

                    <Header>Vocabulario</Header>
                    <Paragraph>
                        Palavras que vamos a aprender:
                    </Paragraph>
                    
                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Viaje  -  Viagem</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " Mi hermano se fue de viaje " 
                        </Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Região  -  Región</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " Esta es una región muy bonita "
                        </Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Rua  -  Calle</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " Estamos a dos calles de la casa de Juan "
                        </Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Ferias - Vacaciones</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " Me fui a España de vacaciones el año pasado "
                        </Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Delicioso  -  Gostoso</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " La comida de este restaurante estaba deliciosa "
                        </Text>
                    </View>

                    <View style={{marginVertical:10}}>
                        <Text style={styles.text}>Diversión  -  Diversão</Text>
                        <Text style={{
                            textAlign:'center',
                            fontStyle:'italic',
                            fontSize:15,
                        }}>
                            " Nuestro viaje fue muy divertido "
                        </Text>
                    </View>

                    <View style={styles.navspace}></View>
                </ScrollView>
                <View style={styles.bview}>
                    <Button onPress={()=> fathernav('Home')}> 
                        <AntDesign name="leftcircle" size={24} color="black" />
                    </Button>
                    <Button onPress={()=> navigation.navigate('Perguntas')}> 
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </Button>
                </View>
            </Background>
        </View>
    );
}


function Perguntas({navigation}){
    return (
        <Background>
            <View style={styles.view}>
                <Header>Testar conhecimentos</Header>
                <Paragraph style={{textAlign:'center'}}> 
                    Se estiver pronto clique em começar.
                    Lembrese que não vai poder voltar ate terminar!
                </Paragraph>
                <Paragraph style={{fontStyle:'italic'}}>Buena suerte!</Paragraph>
                <Button 
                    style={{color:'black'}}
                    onPress={()=> navigation.navigate('p1')}
                    dark={true}
                    color="grey"
                >
                    <Text style={{color:theme.colors.primary}}>Començar </Text>
                    <Fontisto name="checkbox-active" size={14} color={theme.colors.primary} />
                </Button>
            </View>
        </Background>
    );
}

function p1({navigation}){
    return (
        <View style={styles.view}>
            <Text style={styles.qtext}>Pergunta 1</Text>
            <Text style={styles.qtext}>
                Qual é o significado de <Text style={{fontWeight:'bold'}}>"vacaciones"</Text>
            </Text>
            <Button 
                style={{marginVertical:10}}
                onPress={()=> answerHandler(false,'p2',navigation)}>
                Lápis
            </Button>
            <Button
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'p2',navigation)}>
                Região
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(true,'p2',navigation)}>
                Ferias
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'p2',navigation)}>
                Casa
            </Button>
        </View>
    );
}
function p2({navigation}){
    return (
        <View style={styles.view}>
            <Text style={styles.qtext}>Pergunta 2</Text>
            <Text style={styles.text}>
                Complete a seguinte frase:
            </Text>
            <Text style={styles.qtext}>Hoy me ____ en el parque</Text>
            <Button 
                style={{marginVertical:10}}
                onPress={()=> answerHandler(false,'p3',navigation)}>
                Profesor
            </Button>
            <Button
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'p3',navigation)}>
                Corrí
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'p3',navigation)}>
                Hable
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(true,'p3',navigation)}>
                Divertí
            </Button>
        </View>
    );
}
function p3({navigation}){
    return (
        <View style={styles.view}>
            <Text style={styles.qtext}>Pergunta 3</Text>
            <Text style={styles.qtext}>
                Que significa a seguinte imagen:
            </Text>
            <View style={styles.contimage}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/travel.jpg')}/>
            </View>
            <Button 
                style={{marginVertical:10}}
                onPress={()=> answerHandler(true,'conclu',navigation)}>
                Viaje
            </Button>
            <Button
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'conclu',navigation)}>
                Pais
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'conclu',navigation)}>
                Casa
            </Button>
            <Button 
                style={{marginVertical:10}} 
                onPress={()=> answerHandler(false,'conclu',navigation)}>
                Ciudad
            </Button>
        </View>
    );
}

function conclusion({navigation}){
    if (score <= 2){
        return(
            <View style={styles.view}>
                <Header>Mais sorte na proxima!</Header>
                
                <Text style={styles.ntext}>Você errou muitas perguntas ):</Text>
                <Text style={styles.ntext}>Mas você pode melhorar!</Text>           
                <Paragraph style={{marginTop:15}}>
                    <Text style={styles.ntext}>Recomendamos você a refazer a aula e tentar novamente</Text>
                </Paragraph>
                <Button 
                    onPress={()=> answerHandler(false,'Home',navigation)}>
                    <Text>Voltar</Text>
                </Button>
            </View>
        );
    }else{
        return(
            <View style={styles.view}>
                <Header>Parabens!</Header>
                <Text style={styles.ntext}>Você completou a lição</Text>
                <Paragraph style={{marginTop:15}}>
                    <Text style={styles.ntext}>  Sintase livre de refazer a lição, mais aulas proximamente!    </Text>
                </Paragraph>
                <Button 
                    onPress={()=> answerHandler(false,'Home',navigation)}>
                    <Text>Voltar</Text>
                </Button>
            </View>
        );
    }
}

function answerHandler(answer,next,navigation){
    if (answer){
        score +=1;
    }

    if (next=='Home'){
        score = 0;
    }

    navigation.navigate(next);
}

class Aula3 extends Component{
    constructor(props){
        super(props);
    }
    render (){
        const {navigate} = this.props.navigation
        return(
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="Home">
                        {props => <Teoria {...props} fathernav={navigate}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Perguntas" component={Perguntas} />
                    <Stack.Screen name="p1" component={p1} />
                    <Stack.Screen name="p2" component={p2} />
                    <Stack.Screen name="p3" component={p3} />
                    <Stack.Screen name="conclu" component={conclusion}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    spacer:{
        backgroundColor:'whitesmoke',
        height:34,
    },
    navspace:{
        height:100,
    },

    header:{
        flex:1,
        alignItems:'center',
        textAlignVertical:'center',
        backgroundColor:'#f2f2f2',
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },  
    bview:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        position:"absolute",
        bottom:0,
        backgroundColor:'#f2f2f2',
    },
    text:{
        fontSize:20,
        textAlign:'center',
        fontStyle:'italic',
    },
    ntext:{
        fontSize:16,
        textAlign:'center',
        fontStyle:'italic',
    },
    qtext:{
        fontSize:20,
        textAlign:'center',
        fontStyle:'italic',
        marginBottom:10,
    },
    stext:{
        fontSize:16,
    },
    image: {
        width: '100%',
        height: undefined,
        borderRadius: 10,
        padding:20,
        height:200,
    },
    contimage: {
        padding:20,
        width:'100%',
        height:200,
        marginBottom:30,
    },
})

export default memo(Aula3)
