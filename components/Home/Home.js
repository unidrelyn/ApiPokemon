import React, { PureComponent } from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

class Home extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button 
                color="#FFCB05"
                title="Go to Poke List"
                onPress={() => navigation.navigate('PokeList')}
            />
        )
    })

    render() {
        return (
            <View style={styles.homeDiv}>
                <Image source={require('../../assets/pokemon/Pokemon.png')}
                    style={styles.homePageImage} />
                <Text style={styles.header}>Welcome to Pokemon</Text>
            </View>
        )
    }
}

export default Home;