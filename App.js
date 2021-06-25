import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar />
        {/* MENU */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Header</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Header</Text>
            <Text>Header</Text>
            <Text>Header</Text>
          </View>
        </View>
        {/* MENU */}

        {/* GAMBAR MENU */}
        <ScrollView
          style={styles.box}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text>Scroll View Horizontal Gambar Menu</Text>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
          <View style={styles.boxCard}>
            <Text>HAHJKSDHJKAHDHALKDJ</Text>
          </View>
        </ScrollView>
        {/* GAMBAR MENU */}

        {/* INPUT SEARCH */}
        <View>
          <Text>Text Input Untuk Search</Text>
        </View>
        {/* INPUT SEARCH */}

        {/* MENU 1 */}
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Meet Sociaty</Text>
            <Text>Learn</Text>
          </View>
          <ScrollView
            style={[styles.box]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
            <View style={styles.boxCard}>
              <Text>HAHJKSDHJKAHDHALKDJ</Text>
            </View>
          </ScrollView>
        </View>
        {/* MENU 1 */}

        {/* MENU 2 */}
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Rating</Text>
            <Text>See all</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
            <View style={styles.boxMenu}>
              <Text>Menu</Text>
            </View>
          </ScrollView>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
            <View style={styles.boxRating}>
              <Text>GAMBAR DATA</Text>
            </View>
          </ScrollView>
        </View>
        {/* MENU 2 */}

        {/* MENU 3 */}
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Perks</Text>
            <Text>See All</Text>
          </View>
          <View>
            <View style={styles.box}>
              <View>
                <Text>Gambar gambnar</Text>
              </View>
              <View>
                <Text>Judul</Text>
                <Text>Harga</Text>
                <Text>TouchableOpacity</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View>
                <Text>Gambar gambnar</Text>
              </View>
              <View>
                <Text>Judul</Text>
                <Text>Harga</Text>
                <Text>TouchableOpacity</Text>
              </View>
            </View>
          </View>
        </View>
        {/* MENU 3 */}

        {/* MENU 4 */}
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Journal</Text>
            <Text>See All</Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
              <View style={styles.cardJournal}>
                <Text>Text</Text>
                <Text>Background Image</Text>
                <Text>Badge</Text>
                <Text>Profil</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* MENU 4 */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: height * 0.05,
    paddingBottom: height * 0.075,
    paddingHorizontal: 10,
  },
  box: {
    height: 250,
    width: width * 0.95,
    borderWidth: 1,
  },
  boxCard: {
    height: 200,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
  },
  boxMenu: {
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  boxRating: {
    height: 350,
    width: 150,
    borderWidth: 1,
  },
  cardJournal: {
    height: 150,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
  },
});
