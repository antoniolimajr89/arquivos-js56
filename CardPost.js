import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

export default class CardPost extends Component {
    // Salvar o state inicial
    constructor(props) {
        super()

        this.state = {
            foto: props.foto
        }
    }

    like = () => {
        // E usar o setState pra atualizar
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({
            foto: fotoAtualizada
        })
    }

    render() {

        const foto = this.state.foto
        // ## Desafio: Chavear os corações de acordo com o likeada

        return (
            <View style={ styles.container } >
                <View style={ styles.header }>
                    <Image
                        style={ styles.headerAvatar }
                        source={ { uri: foto.urlPerfil } } />
                    <Text style={ styles.headerTitle  } >@{ foto.loginUsuario }</Text>
                    {/* Reservado para o menu */}
                </View>
                <Image
                    style={ styles.cardPostImage }
                    source={ { uri: foto.urlFoto } } />

                <View style={ styles.footer }>
                    <TouchableOpacity
                        onPress={ this.like } 
                        >
                        <Image
                            source={ require('../assets/s2.png')  }
                            style={ styles.likeButton }
                        />
                        <Image
                            source={ require('../assets/s2-checked.png')  }
                            style={ styles.likeButton }
                        />
                    </TouchableOpacity>
                    <Text>Descrição da fotinha</Text>
                </View>
            </View>
        )
    }
}

const larguraTotal = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    header: { padding: 15, flexDirection: 'row', alignItems: 'center' },
    headerAvatar: { width: 50, height: 50, borderRadius: 50 },
    likeButton: { width: 50, height: 50 },
    headerTitle: { marginLeft: 10 },
    cardPostImage: { width: larguraTotal, height: larguraTotal },
    footer: { padding: 15 }
})
