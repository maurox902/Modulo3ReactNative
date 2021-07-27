import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Separator from './atoms/Separator';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

export default class ListAlbumsClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      loaded: false,
    };
  }

  async fetchAlbumes() {
    try {
      const albumsResult = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      const photoResult = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      const albumnsData = albumsResult.data.map(album => ({
        ...album,
        photo: photoResult.data.filter(photo => photo.id === album.id),
      }));

      this.setState({albums: albumnsData});
      this.setState({loaded: true});
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchAlbumes();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? (
          <FlatList
            data={this.state.albums}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  Actions.detail({
                    titulo: `${item.title}`,
                    foto: `${item.photo[0].url}`,
                  })
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.image}
                    source={{uri: item.photo[0].thumbnailUrl}}
                  />
                  <Text
                    category="s1"
                    style={{
                      color: '#000',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={Separator}
          />
        ) : (
          <>
            <ActivityIndicator color="#000" />
            <Text>Loading...</Text>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
});
