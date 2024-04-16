import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './style';
import { Participant } from "../../components/participant";

export function Home() {

    const [participants , setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('')


    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome")
        }

        setParticipants (prevState => [...prevState, participantName]);
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        
         Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter( Participant => Participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Event Name
            </Text>
            <Text style={styles.eventDate}>
                friday, 19 Juny of 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant's name"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantName}
                    value= {participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove (item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                       No one arrived at the event? Add elements!
                    </Text>
                )}
            />

        </View>
    )
};