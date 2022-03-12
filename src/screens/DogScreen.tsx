import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { useRandomDog } from "../hook/useRandomDog";

export function DogScreen() {
  const [visible, setVisible] = useState(false);
  const { data } = useRandomDog();
  const { isLoading, isError, refetch } = useRandomDog();

  function handleRandomImage() {
    setVisible(true);
    refetch();
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>DoggoApp 🐶</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.title}>
        <Text style={styles.textBeforeButton}>
          If you want to see a Doggo, click here !✨
        </Text>

        <Image
          style={styles.images}
          source={{
            uri: data.message,
          }}
        />

        <Button style={styles.buttonDoggo} onPress={handleRandomImage}>
          <Text style={styles.textButton}>Doggo</Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8ef6e4",
    alignItems: "center",
    paddingTop: 75,
    height: "25%",
  },
  mainTitle: {
    color: "#9896f1",
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#8ef6e4",
  },
  buttonDoggo: {
    marginTop: 40,
    backgroundColor: "#9896f1",
    borderColor: "black",
  },
  textBeforeButton: {
    fontSize: 32,
    fontWeight: "900",
    color: "#9896f1",
    marginHorizontal: "5%",
  },

  textButton: {
    color: "#fff",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    fontSize: 24,
  },
  images: {
    borderRadius: 10,
    height: 250,
    width: 250,
    marginHorizontal: "20%",
    marginVertical: "10%",
  },
});
