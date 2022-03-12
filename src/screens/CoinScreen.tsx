import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-paper";
import { useCoinStats } from "../hook/useCoinStats";

export function CoinScreen() {
  const [visible, setVisible] = useState(false);
  const { data } = useCoinStats();
  const { isLoading, isError, refetch } = useCoinStats();

  function handleRandomImage() {
    setVisible(true);
    refetch();
  }
  return (
    <>
      <SafeAreaView style={styles.bg}>
        <ScrollView style={styles.bg}>
          <View style={styles.container}>
            <Text style={styles.mainTitle}>CoinApp 🚀</Text>
            <StatusBar style="auto" />
          </View>

          <View style={styles.title}>
            <Text style={styles.textBeforeButton}>
              You can follow your favorite Coin here ➡️
            </Text>
          </View>

          <View>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[0].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[0].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[0].rank.replace('"', "").replace('"', ""))}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[0].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[1].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[1].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[1].rank.replace('"', "").replace('"', ""))}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[1].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[2].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[2].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[2].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[3].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[3].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[3].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[3].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[4].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[4].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[4].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[5].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[5].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[5].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[6].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[6].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[6].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[6].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>

            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[7].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[7].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[7].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[7].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[8].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[8].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[8].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[8].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[9].name).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[9].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[9].rank).replace('"', "").replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {parseInt(
                  JSON.stringify(data[9].price)
                    .replace('"', "")
                    .replace('"', "")
                ).toFixed(2)}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[10].name)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[10].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[10].rank)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[11].name)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[11].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[11].rank)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[12].name)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[12].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[12].rank)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
            <Card style={styles.images}>
              <Text style={styles.font}>
                {" "}
                NAME :{" "}
                {JSON.stringify(data[13].name)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                SYMBOLE :{" "}
                {JSON.stringify(data[13].symbol)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                RANK :{" "}
                {JSON.stringify(data[13].rank)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font}>
                {" "}
                PRICE :{" "}
                {JSON.stringify(data[4].price)
                  .replace('"', "")
                  .replace('"', "")}
                €
              </Text>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#737373",
    alignItems: "center",
    paddingTop: 75,
  },
  mainTitle: {
    color: "#BFDBFE",
    fontSize: 25,
    fontWeight: "bold",
  },
  font: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F2937",
  },
  bg: {
    backgroundColor: "#737373",
  },
  title: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#737373",
  },
  textBeforeButton: {
    fontSize: 32,
    fontWeight: "900",
    color: "#BFDBFE",
    marginHorizontal: "5%",
  },
  images: {
    borderRadius: 10,
    height: 100,
    width: 250,
    marginHorizontal: "10%",
    marginVertical: "3%",
    backgroundColor: "#BFDBFE",
    padding: "3%",
  },
});
