import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

function Home() {
  const participants = ['Rodrigo', 'Renato', 'Larissa', 'Ana', 'Isa', 'Ronaldo', 'Maka', 'Zoio', 'Roberta', 'Diana'];

  function handleParticipantAdd() {
    if (participants.includes("Renato")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
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
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
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
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda?? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

      {/* Exemplo usando a ScrollView 

          <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView> */}

    </View>
  );
}

export { Home }