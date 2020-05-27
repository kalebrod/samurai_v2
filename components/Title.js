import React, {Component,memo } from 'react';
import {StyleSheet,Text,ActivityIndicator} from 'react-native';
//import {Font} from 'expo';
import * as Font from 'expo-font';

class Title extends Component{
    constructor(props){
        super(props)

        this.state = {
            fontsLoaded: true,
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Pacifico': require('./../assets/fonts/pacifico.ttf')
        })
        this.setState({ fontsLoaded:false })
    }

    render(){
        if(this.state.fontsLoaded){
            return <ActivityIndicator/>
        }
        return (
            <Text style={[styles.title, this.props.style]}> 
                {this.props.children}
            </Text>
        )
    }
}


const styles = StyleSheet.create({
    title:{
        fontFamily:'Pacifico',
        //fontSize:40,
        //color:'#d40c0c',
    }
});

export default memo(Title);