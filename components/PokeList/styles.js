//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#003A70',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#003A70',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: '#000',
        height: 50,
        width: 50
    }
})

export default styles;