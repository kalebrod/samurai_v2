import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Animated } from 'react-native'
import { NativeModules } from "react-native";

import CarouselItem from './CarouselItem'

const Carousel = ({ data,props }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, 370)
    const [dataList, setDataList] = useState(data)

    if (data && data.length) {
        return (
            <View style={{width:370}}>
                <FlatList
                    data={data}    
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} props={props}/>
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX} } }]
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    NativeModules.DevSettings.reload();
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel;