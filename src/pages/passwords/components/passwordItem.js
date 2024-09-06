import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function PasswordItem({data, removePassword}){
    return (
        <TouchableOpacity onLongPress={removePassword} style={styles.container}>
            <Text style={{color: "#FFF"}}>{data}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})