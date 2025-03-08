import { Text, View, FlatList, Image, StyleSheet, Dimensions } from "react-native"

export const GalleryScreen = () => {
    const templateGalleryItem = {
        title: 'Зображення',
        imageUrl: 'https://fakeimg.pl/400x400'
    }

    const galleryItems = Array(10).fill(templateGalleryItem)
    return (
        <View style={styles.container}>
            <FlatList
                data={galleryItems}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image 
                            source={{ uri: item.imageUrl }} 
                            style={styles.image} 
                        />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
    },
    itemContainer: {
        width: width / 2 - 15,
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
    },
    title: {
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    listContent: {
        padding: 10,
    }
});