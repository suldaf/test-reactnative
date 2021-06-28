import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

import Carousel from "react-native-snap-carousel";
import { Card } from "react-native-shadow-cards";

const { width, height } = Dimensions.get("window");

const dataImage = [
  {
    title: "Social Distancing",
    id: 1,
    image: require("./assets/social-distancing.png"),
  },
  {
    title: "Kumpulan Game",
    id: 2,
    image: require("./assets/logo-game.png"),
  },
  {
    title: "Playable",
    id: 3,
    image: require("./assets/logo-playable.png"),
  },
];
const dataSociaty = [
  {
    title: "GadgetIn.",
    id: 1,
    image: require("./assets/Gadgetin-Logo.png"),
    type: "Technology",
    reputation: "88,9%",
    influence: "99,0%",
    level: 999,
    verify: true,
  },
  {
    title: "iTechLife",
    id: 2,
    image: require("./assets/logo-itechlife.png"),
    type: "Technology",
    reputation: "85,9%",
    influence: "90,0%",
    level: 999,
    verify: true,
  },
  {
    title: "JWestBros",
    id: 3,
    image: require("./assets/logo-jwestbros.png"),
    type: "Food & Drink",
    reputation: "80,0%",
    influence: "99,0%",
    level: 999,
    verify: true,
  },
  {
    title: "Rachel Goddard",
    id: 4,
    image: require("./assets/logo-rachel.png"),
    type: "Shopping",
    reputation: "88,9%",
    influence: "99,0%",
    level: 999,
    verify: true,
  },
];
const dataRating = [
  {
    title: "GadgetIn.",
    id: 1,
    image: require("./assets/Gadgetin-Logo.png"),
    review: "1008686",
    desc: "lorem ipsum",
    date: "Today, 5:30pm",
    word: "Here Goes The User's Shoutout Message",
    name: "Rating_Parameter",
    rating: "4.5",
  },
  {
    title: "iTechLife",
    id: 2,
    image: require("./assets/logo-itechlife.png"),
    review: "1008686",
    desc: "lorem ipsum",
    date: "Today, 5:30pm",
    word: "Here Goes The User's Shoutout Message",
    name: "Rating_Parameter",
    rating: "4.5",
  },
  {
    title: "JWestBros",
    id: 3,
    image: require("./assets/logo-jwestbros.png"),
    review: "1008686",
    desc: "lorem ipsum",
    date: "Today, 5:30pm",
    word: "Here Goes The User's Shoutout Message",
    name: "Rating_Parameter",
    rating: "4.5",
  },
  {
    title: "Rachel Goddard",
    id: 4,
    image: require("./assets/logo-rachel.png"),
    review: "1008686",
    desc: "lorem ipsum",
    date: "Today, 5:30pm",
    word: "Here Goes The User's Shoutout Message",
    name: "Rating_Parameter",
    rating: "4.5",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  function renderItem({ item, index }) {
    return (
      <Card
        style={{
          width: width * 0.85,
          height: height * 0.25,
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={6}
      >
        <TouchableOpacity
          onPress={() => {
            Alert.alert(`${item.id}`, `${item.title}`);
          }}
        >
          <Image
            source={item.image}
            style={{ width: width * 0.75, height: height * 0.225 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Card>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <StatusBar />
        {/* MENU */}
        <Card
          style={[
            styles.marginBetweenItem,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              width,
              position: "absolute",
              top: 30,
              height: 35,
              alignItems: "center",
              // height: height * 0.1,
            },
          ]}
          elevation={5}
          cornerRadius={0}
        >
          <View>
            <Image
              source={require("./assets/logo-socialights.png")}
              style={{ width: 175, height: 25 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={[styles.marginRight]}>
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.marginRight]}>
              <MaterialCommunityIcons
                name="account-arrow-right-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.marginRight]}>
              <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Card>
        {/* MENU */}

        {/* GAMBAR MENU */}

        <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            // borderWidth: 1,
            marginTop: height * 0.03,
          }}
        >
          <Carousel
            data={dataImage}
            renderItem={renderItem}
            layout={"default"}
            itemWidth={width * 0.85}
            sliderWidth={width}
            horizontal={true}
            firstItem={Math.floor(dataImage.length / 2)}
            contentContainerCustomStyle={{ paddingVertical: 15 }}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={3500}
            enableMomentum={false}
            lockScrollWhileSnapping={true}
            loop={true}
            nestedScrollEnabled={true}
          />
        </View>
        {/* GAMBAR MENU */}

        {/* INPUT SEARCH */}
        <View
          style={{
            paddingVertical: 10,
            // borderWidth: 1,
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#0f0f0f",
              fontSize: 26,
              // textAlign: "left",
            }}
            placeholder={"Search anything"}
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        </View>
        {/* INPUT SEARCH */}

        {/* MENU 1 */}
        <View>
          <View
            style={{
              backgroundColor: "#F2F2F2",
              position: "absolute",
              width,
              marginHorizontal: -15,
              paddingHorizontal: 10,
              paddingTop: 25,
              height: height * 0.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Meet Sociaty
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: "#E33F89", fontSize: 18, fontWeight: "bold" }}
                >
                  Learn
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              nestedScrollEnabled={true}
              horizontal={true}
              data={dataSociaty}
              renderItem={({ item, index }) => {
                return (
                  <View key={item.id} style={{ marginHorizontal: 25 }}>
                    <View
                      style={{
                        height: 150,
                        width: 250,
                        backgroundColor: "rgb(0,0,0)",
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        source={item.image}
                        resizeMode="stretch"
                        style={{ height: 75, width: 125 }}
                      />
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        width: width * 0.5,
                        height: 175,
                        backgroundColor: "#ffffff",
                        borderRadius: 10,
                        top: 120,
                        left: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            // justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 22,
                              marginRight: 10,
                            }}
                          >
                            {item.title.length > 10
                              ? item.title.substring(0, 8) + "..."
                              : item.title}
                          </Text>
                          <Text>
                            {item.verify ? (
                              <MaterialIcons
                                name="verified"
                                size={24}
                                color="#67D2E1"
                              />
                            ) : null}
                          </Text>
                        </View>
                        <TouchableOpacity>
                          <AntDesign name="adduser" size={35} color="#A6A6A6" />
                        </TouchableOpacity>
                      </View>
                      <Text style={{ color: "#4D4D4D", top: -10 }}>
                        {item.type}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                            {item.reputation}
                          </Text>
                          <Text>Reputation</Text>
                        </View>
                        <View>
                          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                            {item.influence}
                          </Text>
                          <Text>Influence</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: 5,
                          left: 12.5,
                        }}
                      >
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <View>
                            <Ionicons
                              name="fast-food"
                              size={20}
                              color="white"
                              style={{
                                height: 28,
                                width: 28,
                                borderRadius: 28,
                                textAlign: "center",
                                backgroundColor: "#F8A20C",
                                textAlignVertical: "center",
                              }}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            alignItems: "center",
                            left: -5,
                          }}
                        >
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30,
                              backgroundColor: "#ffffff",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Fontisto
                              name="motorcycle"
                              size={20}
                              color="white"
                              style={{
                                height: 28,
                                width: 28,
                                borderRadius: 28,
                                textAlign: "center",
                                backgroundColor: "#FFD400",
                                textAlignVertical: "center",
                              }}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            alignItems: "center",
                            left: -10,
                          }}
                        >
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30,
                              backgroundColor: "#ffffff",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <MaterialCommunityIcons
                              name="city-variant"
                              size={20}
                              color="white"
                              style={{
                                height: 28,
                                width: 28,
                                borderRadius: 28,
                                textAlign: "center",
                                backgroundColor: "#7CCA2E",
                                textAlignVertical: "center",
                              }}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            alignItems: "center",
                            left: -15,
                          }}
                        >
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30,
                              backgroundColor: "#ffffff",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <View
                              style={{
                                height: 28,
                                width: 28,
                                borderRadius: 28,
                                textAlign: "center",
                                backgroundColor: "#40B967",
                              }}
                            >
                              <Image
                                source={require("./assets/logo-metal-finger.png")}
                                style={{
                                  height: 28,
                                  width: 28,
                                  borderRadius: 28,
                                }}
                                resizeMode="contain"
                              />
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 30,
                            backgroundColor: "#ffffff",
                            justifyContent: "center",
                            alignItems: "center",
                            left: -20,
                          }}
                        >
                          <View
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 30,
                              backgroundColor: "#ffffff",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Entypo
                              name="laptop"
                              size={20}
                              color="white"
                              style={{
                                height: 28,
                                width: 28,
                                borderRadius: 28,
                                textAlign: "center",
                                backgroundColor: "#B78AD0",
                                textAlignVertical: "center",
                              }}
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 5,
                        }}
                      >
                        <Text style={{ color: "#4D4D4D" }}>Glossy Goddess</Text>
                        <Text style={{ color: "#4D4D4D" }}>
                          Lv.{item.level}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        {/* MENU 1 */}

        {/* MENU 2 */}
        <View
          style={[
            styles.marginAbsolute,
            {
              backgroundColor: "#E6E6E6",
              width,
              marginLeft: -15,
              paddingHorizontal: 10,
              paddingTop: 25,
              paddingBottom: 15,
            },
          ]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Ratings</Text>
            <Text
              style={{ color: "#E33F89", fontSize: 18, fontWeight: "bold" }}
            >
              See all
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <TouchableOpacity style={styles.boxMenu}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>SPORTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>SNACKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                AUTOMOTIVES
              </Text>
            </TouchableOpacity>
          </ScrollView>

          <FlatList
            nestedScrollEnabled={true}
            horizontal={true}
            data={dataRating}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 15,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Card
                    style={{
                      backgroundColor: "#ffffff",

                      width: 250,
                      height: 300,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    elevation={5}
                  >
                    <View style={{ height: 150, width: 200 }}>
                      <Image
                        source={require("./assets/logo-flag.png")}
                        style={{ position: "absolute", zIndex: 100, top: 25 }}
                      />
                      <Image
                        source={item.image}
                        style={{
                          height: 150,
                          width: 200,
                          backgroundColor: "#a0a0a0",
                        }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          position: "absolute",
                          zIndex: 101,
                          top: 30,
                          left: 12.5,
                          fontWeight: "bold",
                        }}
                      >
                        +SC 300M
                      </Text>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#000000",
                            marginRight: 5,
                          }}
                        >
                          {item.rating}
                        </Text>
                        <Image
                          source={require("./assets/logo-star.png")}
                          style={{ height: 20, width: 20 }}
                        />
                      </View>
                      <Text>
                        (
                        {item.review.length > 4
                          ? item.review.substring(0, 3) + "K"
                          : item.review}{" "}
                        Reviews)
                      </Text>
                      <Text
                        style={{
                          marginTop: 15,

                          fontSize: 12,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                        {item.desc}
                      </Text>
                    </View>
                  </Card>
                  <View
                    style={{
                      height: 175,
                      width: 250,
                      backgroundColor: "#CFD521",
                      paddingHorizontal: 5,
                      paddingTop: 10,
                    }}
                  >
                    <Text style={{ color: "#f0f0f0" }}>{item.date}</Text>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: 24,
                        marginTop: 10,
                      }}
                    >
                      "{item.word}"
                    </Text>
                    <Text style={{ color: "#f0f0f0" }}>
                      Shoutout on {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{ height: 27, width: 27, borderRadius: 27 }}
                        >
                          <Image
                            source={require("./assets/daffa.jpg")}
                            style={{ height: 25, width: 25, borderRadius: 25 }}
                          />
                        </View>
                        <View
                          style={{
                            height: 27,
                            width: 27,
                            borderRadius: 27,
                            left: -5,
                          }}
                        >
                          <Image
                            source={require("./assets/daffa.jpg")}
                            style={{ height: 25, width: 25, borderRadius: 25 }}
                          />
                        </View>
                        <View
                          style={{
                            height: 27,
                            width: 27,
                            borderRadius: 27,
                            left: -10,
                          }}
                        >
                          <Image
                            source={require("./assets/daffa.jpg")}
                            style={{ height: 25, width: 25, borderRadius: 25 }}
                          />
                        </View>
                      </View>
                      <Text style={{ color: "#f0f0f0" }}>
                        User & 10 Other agree{" "}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
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
              nestedScrollEnabled={true}
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
    paddingHorizontal: 15,
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
    justifyContent: "center",
    alignItems: "center",
    width: 150,
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
  marginRight: {
    marginRight: 7.5,
  },
  marginBetweenItem: {
    marginBottom: 15,
  },
  marginAbsolute: {
    marginTop: height * 0.5,
  },
});
