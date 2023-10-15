import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";
// import { Agenda, AgendaEntry } from "react-native-calendars";
import { Agenda, AgendaEntry, AgendaList } from "react-native-calendars";
import events from "../../assets/data/events.json";
import React from "react";

export default function TabOneScreen() {
  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>No events for this date. Enjoy your day!</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        // showOnlySelectedDayItems when showing only selcted date based on booking event
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "900",
    fontVariant: ["small-caps"],
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    color: "#555",
  },
});
