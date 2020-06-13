import React,{Component} from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    Image, 
    Dimensions,
    TouchableOpacity
} from 'react-native'

import {theme} from '../core/theme'

const CarouselItem = ({item,props}) => {
    
    return (
        <View style={styles.cardView}>
            <TouchableOpacity
                onPress={()=> props.navigation.navigate(item.aula)}
            >
                <Image style={styles.image} source={{uri: item.url}}/>
            </TouchableOpacity>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: 350,
        height: 300,
        backgroundColor: 'white',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        padding: 10,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    itemTitle: {
        color: theme.colors.secondary,
        fontSize: 22,
        fontWeight: "bold",
        marginBottom:5,
        elevation: 5
    },
    itemDescription: {
        color: theme.colors.secondary,
        fontSize: 12,
        elevation: 5
    }
})

export default CarouselItem