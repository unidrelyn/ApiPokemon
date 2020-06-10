import React, { PureComponent } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const api = 'https://pokeapi.co/api/v2/pokemon';

export default class PokeList extends PureComponent {
    state = {
        pokeList: [],
        loading: true
    }

    async componentDidMount() {
        const pokemon = await fetch(api)
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });
        this.setState({pokeList: pokemon.results, loading: false});
    }

    /*ImagePoke = (data) => {
        console.log(data.item.name);
        let pokeImg = `require('../../assets/pokemon/${data.item.name}.png')`;
        console.log(pokeImg);
        return <Image source={pokeImg} style={styles.pokeImage}/>
    }*/
     
    renderItem(data) {
        let pokeImg = `require('../../assets/pokemon/${data.item.name}.png')`;
        console.log(pokeImg);
        return (
            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                <View  style={styles.listItemContainer}>
                    <Text style={styles.pokeItemHeader}>{data.item.name}</Text>
                    <Image source={require('../../assets/pokemon/charmander.png')} style={styles.pokeImage}/>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { pokeList, loading } = this.state;
        return (
        <View>
        {!loading ? (
            <FlatList
                data={pokeList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.name} />
        ) : (<ActivityIndicator />)}
        </View>
        )
    }
}