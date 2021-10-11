import React, {useState,useEffect} from 'react';
import {View, Text, Button, StyleSheet,TextInput,StatusBar,TouchableOpacity, Touchable} from 'react-native';

const DataResult = (props) => { 
    const {title, value} = props;
    return ( 
        <View style={styles.value}> 
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text> 
        </View>
    );
} 

const Factor = () => {

    const [aV,setAv] = useState(null);
    const [total, setTotal ] = useState(null);
    const [errorMessage, setErrorMessage ] = useState('');

    const calculate = () => {
    reset()
    if(!aV || aV < 0)
    {
        setErrorMessage('Valor incorrecto 🤬');
        return;
    }
    else
    {
        const resultO = function (n) {
            let total = 1; 
            for (i=1; i<=n; i++) {
                total = total * i; 
            }
            return total; 
        };
        const result1 = resultO(aV);
        console.log(resultO);
        setTotal({
            Total: result1.toFixed(2),
        });
    }
};

    const reset = () => {
        setErrorMessage('');
        setTotal(null);
    }

    const Resolution = (props) => {
        const {total,errorMessage} = props;
        return (<View>
            { total && (
                <View style={styles.boxResult}> 
                    <DataResult title="Total:" value={` ${total.Total}`} />
                </View>
            )}
            <View> 
                <Text style={styles.error}>{errorMessage}</Text> 
            </View>
        </View>)
    }
        return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Variable" 
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setAv(e.nativeEvent.text)}
            />
            <Resolution 
                total = {total}
                errorMessage = {errorMessage}
            />
            <TouchableOpacity onPress={calculate}>
                <View style={styles.Button}>
                    <Text style={styles.text}>Calcular 😀</Text>
                </View>
            </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ff7700',
    },
    text:{
        color:'white',
        fontSize:30,
    },
    input:{
        // margin: 10,
        height: 50, 
        backgroundColor:'#fff', 
        borderWidth: 1, 
        borderColor:'#eab676',
        borderRadius: 5,  
        marginRight: 5, 
        marginLeft: -5, 
        marginBottom: 10, 
        color: '#000', 
        paddingHorizontal: 20,
        width: '60%', 
        fontSize:30,
    },
    Button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#3baccc',
    },
    value: { 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        margin:5,
        fontSize: 30,
    },
    error: { 
        textAlign: 'center', 
        color: '#f00',
        fontWeight: 'bold', 
        fontSize: 20, 
    },
    boxResult: { 
        padding: 30,
        fontSize: 30,
    }, 
})

export default Factor;