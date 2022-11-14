import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList ,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

// import PaginationDot from 'react-native-animated-pagination-dot'
import { SliderBox } from "react-native-image-slider-box";
// const Imageslider =
// [
//     {
//         id: 1,  
//         image: require('../Assets/Home_hero_banner.png')
//       },
//       {
//         id: 2,
//         image: require('../Assets/Home_hero_banner.png')
//       },
//       {
//         id: 3, 
//         image: require('../Assets/Home_hero_banner.png')
//       },
//     ]
const datacourses =
    [
        {
            id: 1,
            title: 'IMPORTANCE OF M...',
            title2: 'critical Care',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 2,
            title: 'IMPROVING ICU O...',
            title2: 'critical Care',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 3,
            title: 'ADVANCED GYNA...',
            title2: 'Surgery',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 4,
            title: 'CAN AI TRANSFOR...',
            title2: 'Surgery',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 5,
            title: 'RECENT UPDATES...',
            title2: 'Covid-19',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 6,
            title: '100 years. of ins...',
            title2: 'Diabetes',
            image: require('../Assets/Home_hero_banner.png')
        },

    ]

const dataOrganization =
    [
        {
            id: 1,
            title: 'Courses by SWEDD',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 2,
            title: 'Courses by MAX',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 3,
            title: 'Courses by Medtronic',
            image: require('../Assets/Home_hero_banner.png')
        },
        {
            id: 4,
            title: 'Courses by DiabAfrica',
            image: require('../Assets/Home_hero_banner.png')
        },
    ]
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Images: [
                require('../Assets/Home_hero_banner.png'),
                require('../Assets/Home_hero_banner.png'),
                require('../Assets/Home_hero_banner.png'),
            ]


        }
    }
    // ImagesSliderList=({ item, index }) =>{
    //   return (
    //         <View style={{alignItems:"center",flexDirection:"row"}}>
    //         <Image style={{height:'90%',width:'100%',borderRadius:7}} source={item.image} />
    //         <View style={{ marginLeft: 20 }}>
    //                       <PaginationDot
    //                           activeDotColor={"#c71585"}
    //                           inactiveDotColor={"red"}
    //                           curPage={item.key - 1}
    //                           maxPage={3}
    //                           sizeRatio={2.0}
    //                       />
    //                   </View>
    //          </View>
    //        )
    // }

    renderList = ({ item, index }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, alignItems: "center", borderRadius: 10, justifyContent: "space-between" }}>
                <Image style={{ height: 80, width: 180, borderRadius: 10 }} source={item.image} />
                <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
                    <Text style={{ justifyContent: "center", color: "black", marginTop: 10, fontSize: 13 }}>{item.title}</Text>
                    <Text style={{ justifyContent: "center", fontSize: 12 }}>{item.title2}</Text>
                </View>
            </View>
        )
    }

    renderOrganizationList = ({ item, index }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, alignItems: "center", borderRadius: 10, justifyContent: "space-between", height: 125, width: 170, }}>
                <View style={{ backgroundColor: "#e8e6e1", height: 115, flexDirection: "column", borderRadius: 10 }}>
                    <Image style={{ height: 80, width: 180, borderRadius: 10 }} source={item.image} />

                    <Text style={{ justifyContent: "center", color: "black", padding: 10 }}>{item.title}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ padding: 10 ,backgroundColor:"white"}}>
                        {/* {/ ----abby---  /} */}
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../Assets/Abby.png')} style={{ height: 50, width: 50 }} />
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontWeight: "bold", color: 'black' }}> Abby Jones</Text>
                                    <Text style={{ flexDirection: "column" }}> Cardiology, NYC, USA</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ paddingRight: 30 }}>
                                    <Icon
                                        name="ellipsis1"
                                        size={20} />
                                </View>
                                <Icon
                                    name="bells"
                                    size={20} />
                            </View>

                        </View>

                        {/* {/ ---Searchbox---  /} */}

                        <View style={styles.container}>
                            <Icon
                                style={styles.icon}
                                name="search1"
                                size={20} />
                            <TextInput
                                style={styles.input}
                                placeholder="Search"
                            // onChangeText={(e) => changeHandler(e)}
                            />
                        </View>


                        {/* {/ ----Image--- /} */}
                        <View style={{ paddingTop: 20, height: 240 }}>
                            {/* <Image source={require('../Assets/Home_hero_banner.png')} style={{height:'100%',width:'100%',borderRadius:7}}/>
                 </View> */}

                            {/* <FlatList
        data={Imageslider}
        renderItem={this.ImagesSliderList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      /> */}
                            <SliderBox
                                style={{ height: '100%', width: '100%', borderRadius: 7 }}
                                images={this.state.Images}
                                // sliderBoxHeight={500}
                                // parentWidth={{width: e.nativeEvent.layout.width}}
                                dotColor={"#c71585"}
                                inactiveDotColor={"red"}
                                dotStyle={{ width: 8, height: 8, borderRadius: 50, marginHorizontal: 0, padding: 10, marginTop: 50 }} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, height: 1.5, width: "100%", backgroundColor: "#ebe8e8" }}></Text>
                        </View>
                        {/* {/ ----Featured Courses----  /} */}

                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15 }}>Featured Courses</Text>
                                <View>
                                    <Icon name="down" color="black" size={20} />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "blue" }}>See all</Text>
                            </View>
                        </View>
                        {/* {/ ----gridView Images---- /} */}
                        <View>
                            <FlatList
                                data={datacourses}
                                renderItem={this.renderList}
                                keyExtractor={(item) => item.id}
                                // keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#ebe8e8", justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, backgroundColor: '#778899', height: 1.5, width: "100%" }}></Text>
                        </View>
                        {/* {/ ----Featured Organization---- /} */}
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15 }}>Featured Organization</Text>
                            <Text style={{ color: "blue" }}>See all</Text>
                        </View>
                        {/* {/ ------grid----- /} */}
                        <View>
                            <FlatList
                                // scrollEnabled={false}

                                data={dataOrganization}
                                renderItem={this.renderOrganizationList}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#ebe8e8", justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, backgroundColor: '#778899', height: 1.5, width: "100%" }}></Text>
                        </View>
                        {/* {/ ----partner---- /} */}
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15 }}>Partners</Text>
                        </View>

                        <View style={{backgroundColor: "pink", minHeight: 160, borderRadius:10,marginLeft:50}}>

                            <View style={{ width: 70,height: 70,top: 75,left: 75,position:'absolute',justifyContent:"flex-start"}}>
                                <Image source={require('../Assets/Home_hero_banner.png')} 
                                style={{ height: 70, width: 70,justifyContent:"flex-start",borderRadius:10 }} />
                            </View>

                            <View style={{padding:10,paddingLeft:50,position:'relative'}}>
                                <Text>Economic community of West Africa</Text>
                                <Text>State ECOWAS</Text>
                                <Text>The Treaty of the Economics</Text>
                                <Text>Community of west African States</Text>
                                <Text>(ECOWAS) is ....read more</Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#ebe8e8", justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, backgroundColor: '#778899', height: 1.5, width: "100%" }}></Text>
                        </View>

                        {/* {/ -----Advertisement---- /} */}
                        <View style={{ marginTop: 20, backgroundColor: "blue", borderRadius: 10, padding: 10, paddingBottom: 20 }}>
                            <Text style={{ color: "white", fontWeight: "bold", paddingBottom: 10 }}>Advertisement layout</Text>
                            <Text style={{ color: "white" }}>Sample advertisement layout</Text>
                            <Text style={{ color: "white" }}>Loream ipsum dolor sit amet</Text>
                            <TouchableOpacity style={{ height: 40, width: 130, marginTop: 10, backgroundColor: "#ebe8e8", justifyContent: "center", alignItems: 'center', borderRadius: 10, marginTop: 20 }}>
                                <Text style={{ color: 'blue' }}>Explore More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#ebe8e8", justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, backgroundColor: '#778899', height: 1.5, width: "100%" }}></Text>
                        </View>

                        {/* {/ ----Testimonial---- /} */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15 }}>Testimonial</Text>
                        </View>

                        <View style={{ marginTop: 10, backgroundColor: "#d84b51", borderRadius: 10, padding: 10, paddingBottom: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../Assets/Abby.png')} style={{ height: 50, width: 50 }} />
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontWeight: "bold", color: "white" }}> Amy Dew</Text>
                                    <Text style={{ flexDirection: "column", color: "white" }}> MLH user</Text>
                                </View>
                            </View>

                            <View style={{ justifyContent: 'flex-start', paddingLeft: 40, paddingTop: 20, paddingBottom: 20 }}>
                                <Text style={{ color: "white" }}>"Lorem ipsum dolor sit amet, consectetur</Text>
                                <Text style={{ color: "white" }}>adipiscing elit, sed do eiusmod tempor</Text>
                                <Text style={{ color: "white" }}>insididunt ut labore st dolore magna aliqua."</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#ebe8e8", justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, backgroundColor: '#778899', height: 1.5, width: "100%" }}></Text>
                        </View>
                        {/* 
{/ -----stay in Touch----- /} */}
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15 }}>Stay in Touch</Text>
                        </View>

                        <View style={{ height: 110, width: "100%", backgroundColor: "#fcf1f0", marginTop: 10, borderRadius: 50, flexDirection: "row" }}>

                            <View style={{ height: 110, width: 100, padding: 15, backgroundColor: "#fae3e1", borderRadius: 50, flexDirection: "row" }}>
                                <Image source={require('../Assets/Abby.png')} style={{ height: 40, width: 40, alignSelf: "center", paddingLeft: 40, marginLeft: 15 }} />

                            </View>
                            <View style={{ marginLeft: 10, paddingTop: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black' }}>Stay in touch with MLH</Text>
                                <Text style={{ fontSize: 12 }}>Subscribe to our newsletter and stay updated.</Text>
                                <TouchableOpacity style={{ height: 40, width: 150, marginTop: 10, backgroundColor: "#d84b51", justifyContent: "center", alignItems: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>Subscribe to newsletter</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ebe8e8',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ebe8e8',
        marginTop: 15,
        height: 45
    },
    input: {
        backgroundColor: '#ebe8e8',
        fontSize: 14,
        width: '85%',
        alignSelf: 'center',
    },
    icon: {
        padding: 10,
        width: '10%',
        alignSelf: 'flex-start',
    },
    
})