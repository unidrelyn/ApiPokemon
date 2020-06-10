import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import styles from './styles';

const PokeCard = ({name, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'black'}} onPress={() => navigation.navigate('Pokemon', {name})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Image source={require(`../../assets/pokemon/${name}.png`)} 
                        style={styles.pokeImage}/>
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard;
