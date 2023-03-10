import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = [
    "Kelvin",
    "Oliveira",
    "Romão",
    "Silva",
    "Kevellin",
    "Kauan",
    "Silvania",
    "Marcio",
    "Raimunda",
    "Camila",
    "Ariane",
    "Adriana",
    "Felipe",
    "Mari",
    "Helo",
  ];

  const [participantList, setParticipantList] = useState<string[]>([]);
  const [participant, setParticipant] = useState<string>("");
  const [data, setData] = useState<object>({});

  async function handleSubmitParticipant() {
    const newData = {
      participantName: participant,
      rede: "Taga",
      descendencia: "DKS",
    };
    setData(newData);
  }

  function handleParticipantAdd() {
    if (participantList.includes(participant)) {
      return Alert.alert("Erro", "Usuário já existe");
    }

    setParticipantList((prevState) => [...prevState, participant]);
    setParticipant("");

    return Alert.alert("Feito", `${participant} está na lsita.`);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipantList((prevstate) =>
            prevstate.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2023</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipant}
          value={participant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participantList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ningúem chegou ainda? Adicione participantes na sua lista de
            presença
          </Text>
        )}
      />
      <View>
        <TouchableOpacity>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
