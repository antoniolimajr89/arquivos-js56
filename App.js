import React, {Component} from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

export default class App extends Component {
  render() {
    const larguraTotal = Dimensions.get('screen').width
    const fotos = [
      { usuario: 'omariosouto', url: 'https://placehold.it/1000x1000' },
      { usuario: 'seila', url: 'https://placehold.it/1000x1000' },
    ]

    return (
      <View style={ { backgroundColor: 'red' } } >
        {
          fotos.map(function(foto) {
            // console.warn(foto.usuario)
            return (
              <View>
                <Text>@{ foto.usuario }</Text>
                <Image
                  style={ { width: larguraTotal, height: larguraTotal } }
                  source={ { uri: foto.url } } />
              </View>
            )
    
          })
        }
      </View>
    );
  }
}
