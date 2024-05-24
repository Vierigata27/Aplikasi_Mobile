import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.text}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteTask}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.statusButton]} onPress={() => toggleCompleted(task.id)}>
                    <Text style={styles.buttonText}>{task.completed ? 'Completed' : 'Incomplete'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    text: {
        flex: 1,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButton: {
        backgroundColor: '#ff6b6b',
    },
    statusButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
