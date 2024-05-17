import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {CarContext} from './CarContext';

export default function CarCountComponent(){
    const { carros } = useContext(CarContext)
    const [ CarCount, setCarCount ] = useState[0];

    useEffect( () =>{
        setCarCount(carros.lenght);
    }, [carros] )


    return 
        <View>
            <Text style={estilo.titulo}>{CarCount} </Text>
        </View>
    }
