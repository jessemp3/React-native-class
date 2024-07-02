import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from "react-native";

const DATA1 = [
  {
    id: "1",
    title: "Fundamentos do React Native",
  },
  {
    id: "2",
    title: "Expo e Expo CLI",
  },
  {
    id: "3",
    title: "Estilização com StyleSheet",
  },
];

const DATA2 = [
  {
    id: "1",
    title: "navegação",
  },
  {
    id: "2",
    title: "ScrollView e FlatList",
  },
  {
    id: "3",
    title: "Periféricos",
  },
  {
    id: "4",
    title: "Styled Components",
  },
  {
    id: "5",
    title: "Components e Estilos Globais",
  },
  {
    id: "6",
    title: "Consumo de APIs",
  },
];

type ItemProps1 = { title: string };
type ItemProps2 = { title: string };

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginHorizontal: 30,
        padding:2
      }}>
    </View>
  );
};


const Item1 = ({ title }: ItemProps1) => (
  <View style={styles.item}>
    <Text style={styles.listText}>{title}</Text>
  </View>
);

const Item2 = ({ title }: ItemProps2) => (
  <View style={styles.item2}>
    <Text style={styles.listText}>{title}</Text>
  </View>
);


const Index = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Minha Jornada no React
        </Text>
        <MultilineTextInputExample/>
        <FlatList
          data={DATA1}
          renderItem={({ item }) => <Item1 title={item.title} />}
          keyExtractor={(item) => item.id}
        />
         <FlatList
          data={DATA2}
          renderItem={({ item }) => <Item2 title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:15
  },
  item: {
    backgroundColor: "#00FF9F",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 19,
    borderRadius: 25,
  },
  item2: {
    backgroundColor: "#F64348",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 19,
    borderRadius: 25,
  },
  title:{
    fontSize: 35,
    textAlign: 'center',
    paddingBottom: 0
  },
  listText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Index;
