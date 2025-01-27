import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#1F1E25',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 10,
    },
    name:{
        color: '#FFF',
        flex:1,
        padding: 16,
        fontSize: 16,
    },
    buttonText:{
    color: '#FFF',
    fontSize: 24
    },
    button:{
     width: 56,
     height: 56,
        borderRadius: 10,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
  },
})