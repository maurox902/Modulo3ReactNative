import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Separator from '../atoms/Separator';
import axios from 'axios';



const ListAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function fetchalbums() {
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

      setAlbums(albumnsData);
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchalbums();
  }, []);

  return (
    <View style={styles.container}>
      {loaded ? (
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getAlbumDetail(`${item.id}`)}>
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
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
});

function getAlbumDetail(id) {
  alert('Presionaste el Album con ID: ' + id);
}

export default ListAlbums;
