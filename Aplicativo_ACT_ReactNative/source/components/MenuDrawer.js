import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

export default class MenuDrawer extends React.Component{
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    
    render() {
        return(
            <View styles={styles.continer}>
                <View style={styles.topImage}>
                    <Image style={styles.image} source={require('../images/informationappscreen/act.png')} />
                </View>
                
                <View style={styles.bottomLinks}>
                    {this.navLink('Principal', 'Principal')}
                    {this.navLink('Sobre o Aplicativo', 'Sobre o Aplicativo')}
                    {this.navLink('Sobre os Responsáveis', 'Sobre os Responsáveis')}
                    {this.navLink('Sobre o Projeto', 'Sobre o Projeto')}
                    {this.navLink('Política e Termos', 'Política e Termos')}
                </View>

                <View style={styles.footer}>
                    <Text style={styles.description}>ACT</Text>
                    <Text style={styles.version}>v1.3.0</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    topImage: {
        height: Dimensions.get('window').width * 0.45,
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        backgroundColor: '#FFF'
    },
    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').width * 0.5
    },
    bottomLinks: {   
        height: Dimensions.get('window').width * 1.16,
        backgroundColor: '#FFF',
        paddingTop: 10
    },
    link: {
        color: 'gray',
        fontSize: 15,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    footer: {
        height: Dimensions.get('window').width * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
        color: 'gray'
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray'
    }
})