import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar senhas salvas
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        }catch(error){
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    //Salvar senha
    const saveItem = async (key, value) => {
        try{
            let passwords = await getItem(key);

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
            console.log(passwords)
        }catch(error){
            console.log("Erro ao salvar", error)
        }
    }

    //Deletar senha
    const deleteItem = async (key, item) => {
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
            console.log(item)
            
        }catch(error){
            console.log("Erro ao deletar", error)
        }
    }

    return {
        getItem,
        saveItem,
        deleteItem,
    }
}

export default useStorage;