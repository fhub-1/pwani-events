import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import event from "../assets/data/event.json";
import users from "../assets/data/users.json";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function ModalScreen() {
  const onJoin = () => {};

  //cutting user to short to 3
  const displayUsers = users.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color="black" />{" "}
        {new Date(event.date).toDateString()}
      </Text>

      <View style={styles.footer}>
        <View style={styles.users}>
          {/* use avater joing the event? */}
          {displayUsers.map((user, index) => (
            <Image
              key={user.id}
              source={{ uri: user.avatarUrl }}
              style={[
                styles.userAvatar,
                {
                  transform: [
                    {
                      translateX: index * -25,
                    },
                  ],
                },
              ]}
            />
          ))}
          <View
            style={[
              styles.userAvatar,
              {
                transform: [
                  {
                    translateX: 20 * displayUsers.length,
                  },
                ],
              },
            ]}
          >
            <Text>+{users.length - displayUsers.length}</Text>
          </View>
        </View>

        <CustomButton text="Join event" onPress={onJoin} />
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
  users: {
    flexDirection: "row",
  },
  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    margin: 2,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignItems: "center",
  },
});
