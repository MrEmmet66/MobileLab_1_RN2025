import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"
import NewsItem from "../components/NewsItem"

export const MainScreen = () => {
    const templateNewsItem = {
        title: 'Новина',
        date: '01.01.2021',
        text: 'Текст новини',
        imageUrl: 'https://fakeimg.pl/150x150'
    }
    
    const news = Array(10).fill(templateNewsItem)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Новини</Text>
            <ScrollView style={styles.scrollView}>
                {news.map((newsItem, index) => (
                    <NewsItem 
                        key={index}
                        title={newsItem.title}
                        date={newsItem.date}
                        text={newsItem.text}
                        imageUrl={newsItem.imageUrl}
                        onPress={() => console.log(newsItem.title)}
                    />
                ))}
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    scrollView: {
        marginVertical: 10,
    },
    header: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})