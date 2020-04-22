import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.name}>{result.Title}</Text>
            <Text>Year of Release: {result.Year}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 14
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18

    }
});

export default ResultsDetail;