import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import omdb from '../api/omdb';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await omdb.get(`/?apikey=20445c1b&t=${id}`);
        console.log(response.data);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <ScrollView style={styles.scroll}>
            <Image
                source={{ uri: result.Poster }}
                style={styles.image}
            />
            <Text style={styles.title}>{result.Title}</Text>
            <Text style={styles.tag}>
                Year of Release: <Text style={styles.res}>{result.Year}</Text>
            </Text>
            <Text style={styles.tag}>
                Director: <Text style={styles.res}>{result.Director}</Text>
            </Text>
            <Text style={styles.tag1}>
                Cast: <Text style={styles.res}>{result.Actors}</Text>
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: imageWidth,
        resizeMode: 'contain'
    },
    title: {
        paddingTop: 5,
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    tag: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 7
    },
    tag1: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 35
    },
    res: {
        fontWeight: 'normal',
    }
});

export default ResultsShowScreen;