import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passwordItem'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, deleteItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords();
    }, [focused])

    async function handleDelete(item) {
        const passwords = await deleteItem("@pass", item)
        setListPasswords(passwords)
        alert("Senha removida!")
    }

    return(
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12}}>*Pressione para excluir a senha</Text>
                <FlatList 
                    style={{flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item) }
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDelete(item)}/> }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        fontSize: 22
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})