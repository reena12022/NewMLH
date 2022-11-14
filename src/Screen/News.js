import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList ,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Document extends React.Component {render() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 10 ,backgroundColor:"white"}}>

                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text>News</Text>
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
                    </View>
                    </ScrollView>
                    </SafeAreaView>
    )
}
}



// import React, {Component} from 'react';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
// import { TextInput,ImageBackground,View,ScrollView,Image, StyleSheet,Alert, FlatList, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign'
// import SelectDropdown from 'react-native-select-dropdown'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import image from '../Assets/Background.png'
// export default class Database extends Component {
    
//         state={
//             name: "",
//             email: "",
    
//             password: '',
//             PhoneNo: '',
//             LastName: '',
//             confmpsw: '',
//             submitDisabled: true,
//             errorshow: true,
//             pattern:true,
//             focused1:true,
//             focused2:false,
//             focused3:false,
//             selectedItem1:'',
//             close1:false,

//     myid:0,
//     startid:1,
//             data: null,
//             value0: false,
//             value1: false,
//             value2: true,
//             value3: false,
//             value4: false,
//             lineWidth: 10,
//             mytoken:'',
//             array1: [{  "id": 1,'option1': 'My Dashboard'},
//         {  "id": 2,'option1': 'My cource',},
//         {  "id": 3,'option1': 'Track',},
//        ],
//        array2: [ 1,2,3,
//     ],
//     array3: [ {  "id": 1,'option1': 'IMPORTANCE OF MULTY_SEC...','button1':'DiabAfrica','mode':'Online','Date':'May 25,2022','time':'5:00PM','hours':'2 hours','certifiacte':'Certifiacte','Fees':'Free'},
//     {  "id": 2,'option1': 'IMPORTANCE OF MULTY_SEC...','button1':'DiabAfrica','mode':'Online','Date':'May 25,2022','time':'5:00PM','hours':'2 hours','certifiacte':'Certifiacte','Fees':'Free'},
//     {  "id": 3,'option1': 'IMPORTANCE OF MULTY_SEC...','button1':'DiabAfrica','mode':'Online','Date':'May 25,2022','time':'5:00PM','hours':'2 hours','certifiacte':'Certifiacte','Fees':'Free'},
//     ]


//         }
//         onClick2()
//         {
            
//             this.setState({
             
//                 focused1: true,
//                 focused2: false,
//                 focused3: false
//             })
            
       
        
//     }

//     onClick3()
//     {
        
//         this.setState({
         
//             focused2: true,
//             focused1: false,
//                 focused3: false,
//         })
        
   
    
// }  onClick4()
// {
    
//     this.setState({
//         focused1: false,
//                 focused2: false,
     
//         focused3: true
//     })
    


// }
    
//         getBackgroundColor = () => {
//             let color;
//             if (this.state.myid == 1) {
//                 color = '#8a2be2';
//             }
//              else {
//                 color = '#e6e6fa';
//             }
//             return color;
//         }
//         renderList1=({item})=>{
//             this.state.myid=item.id;
         
          

//                             console.log("this.state.data>>",this.state.startid)

//              return(
              
//                    <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', height:60,width:150,backgroundColor:this.state.myid==this.state.startid?'pink':'blue',margin:9,borderRadius:5}}
//                    onPress={() => this.onClick2()}
//                    >
                      
                      
//                         <Text>{item.option1}</Text>
                      
                       
                                   
       
//                  </TouchableOpacity>
        
//              )
//             }
//             renderList=({item})=>{
//                 this.state.myid=item.id;
             
//                 /* if(item.id == this.state.id1)
//                  {
//                  // console.log("this.state.data>>",this.state.filteredData.id)
//                   this.item.name=this.props.route.params.name
            
            
//                  }*/
    
              
    
//                                 console.log("this.state.data>>",this.state.startid)
    
//                  return(
                  
//                        <View style={{ alignItems:'flex-start',justifyContent:'flex-start',padding:10, height:200,width:'95%',margin:10,borderRadius:5,backgroundColor:'white'}}
                       
//                        >
//                         <View style={{flexDirection:'row',}}>
//                         <Text>VIDEO:</Text>
//                         <Text style={{fontWeight:'600'}}>{item.option1}</Text>
//                         </View>
//                         <View style={{flexDirection:'row',alignItems:'center'}}>
                             
//                         <TouchableOpacity style={{  height:30,width:110,backgroundColor:'#f5f5f5',marginTop:10,alignItems:'center',justifyContent:'center',borderRadius:5,borderWidth:1,borderColor:'gray'}} onPress={() => this.onClick()}>
//              <Text style={{color:'gray'}}>{item.button1}</Text>
//              </TouchableOpacity>  
//                         <Text style={{marginTop:10,marginLeft:19,fontWeight:'600'}}>{item.mode}</Text>
//                         </View>
//                         <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
//                         <Image source={require('../Assets/calender.png')} style={{width:20,height:20,}}/>

//                         <Text style={{marginLeft:10,}}>{item.Date}</Text>
//                         <Image source={require('../Assets/time.png')} style={{width:20,height:20,marginLeft:10}}/>
//                         <Text style={{marginLeft:10,}}>{item.time}</Text>                       
//                          <Image source={require('../Assets/hours.png')} style={{width:20,height:20,marginLeft:10}}/>

//                         <Text style={{marginLeft:10,}}>{item.hours}</Text>
//                         </View>
//                         <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
//                         <Image source={require('../Assets/medal-star.png')} style={{width:20,height:20,}}/>

//                         <Text style={{marginLeft:10,}}>{item.certifiacte}</Text>
//                         <Image source={require('../Assets/card-add.png')} style={{width:20,height:20,marginLeft:10}}/>

//                         <Text style={{marginLeft:10,fontWeight:'600'}}>{item.Fees}</Text>
//                         </View>
                            
                          
                           
//                         <TouchableOpacity style={{  height:40,width:110,backgroundColor:'#dc143c',marginTop:10,alignItems:'center',justifyContent:'center',borderRadius:10,}} onPress={() => this.onClick()}>
//              <Text>View Details</Text>
//              </TouchableOpacity>        
           
//                      </View>
            
//                  )
//                 }
   
//         onClick()
//         {
//             this.setState({
//                 submitDisabled:false

//             })
           
//         }
//         onclose()
//         {
//             this.setState({
//                 close1:false

//             })
           
//         }
  
//     render() {
//         const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//         return (

//             <ScrollView
      
//       style={style.container}
//     >
               

//                <View style={style.container1}>
//                {this.state.submitDisabled == true?
//              <View style={{width:'95%',margin:10,flexDirection:'row',height:150,backgroundColor:'white',justifyContent:'space-between'}}>
//              <Image source={require('../Assets/cource1.png')} style={style.img}/>
//              <View style={{width:'50%',margin:10}}>
//                 <Text style={{fontSize:18,fontWeight:'500',color:'gray'}}>Earn up 50 MLHcoins for each friend you refer</Text>
//                 <Text style={{fontSize:14,color:'gray'}}>For Further information about referal please check under my profile</Text>

//              </View>
             
//              <TouchableOpacity onPress={() => this.onClick()}>
//              <Icon name="close"
//             color="gray" size={20} />
//              </TouchableOpacity>

//              </View>:null}
//                <ScrollView
//                horizontal={true}
//               showsHorizontalScrollIndicator={false}
//                >
//                 <View style={{flexDirection:'row'}}>
//              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', height:60,width:150,backgroundColor:this.state.focused1?'#8a2be2':'white',margin:9,borderRadius:5}}
//                    onPress={() => this.onClick2()}
//                    >
                      
                      
//                         <Text>My Dashboard</Text>
                      
                       
                                   
       
//                  </TouchableOpacity>
//                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', height:60,width:150,backgroundColor:this.state.focused2?'#8a2be2':'white',margin:9,borderRadius:5}}
//                    onPress={() => this.onClick3()}
//                    >
                      
                      
//                         <Text>My cource</Text>
                      
//                  </TouchableOpacity>
//                    <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', height:60,width:150,backgroundColor:this.state.focused3?'#8a2be2':'white',margin:9,borderRadius:5}}
//                    onPress={() => this.onClick4()}
//                    >
                      
                      
//                         <Text>Track</Text>
                      
                       
                                   
       
//                  </TouchableOpacity>
//                  </View>
//                  </ScrollView>
               
//                </View> 
//                <View style={{width:'95%',margin:10,height:200,backgroundColor:'white',justifyContent:'center',}}>
            
//                <ImageBackground source={image} resizeMode="cover">
//                 <Text style={{fontSize:18,fontWeight:'500',color:'white',margin:10,}}>Your Feedbcak is important to us</Text>
//                 <Text style={{fontSize:14,color:'white',margin:10}}>Ther are 9 courses where you can leave a feedback and help us improve user experience. we look forward to your comments & suggestions</Text>

             
             
//              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center', height:60,width:150,margin:9,borderRadius:10,borderWidth:1,borderColor:'white'}} onPress={() => this.onClick()}>
//              <Text style={{color:'white',fontSize:16}}>feedback</Text>
//              </TouchableOpacity>
// </ImageBackground>
//              </View>

//              <View style={{justifyContent:'space-around',
//         marginTop:0 }}>

//           <SelectDropdown
// 	data={this.state.array2}
// 	onSelect={(selectedItem, index) => {
    
   
// 		console.log('myitem',selectedItem)

//     this.state.selectedItem1 = selectedItem
//     //this.getData()
    

// 	}}
// /*buttonTextAfterSelection={(selectedItem, index) => {
// 		// text represented after item is selected
// 		// if data array is an array of objects then return selectedItem.property to render after item is selected
// 		return selectedItem
// 	}}
// 	rowTextForSelection={(item, index) => {
// 		// text represented for each item in dropdown
// 		// if data array is an array of objects then return item.property to represent item in dropdown
// 		return item
// 	}}*/

//   defaultButtonText={'My Course Overview'}
//   buttonStyle={style.dropdown1BtnStyle}
//   renderDropdownIcon={isOpened => {
//     return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
//   }}
//   dropdownIconPosition={'right'}

//   dropdownStyle={style.dropdown1DropdownStyle}
//             rowStyle={style.dropdown1RowStyle}
//             rowTextStyle={style.dropdown1RowTxtStyle}
// />

// <View>
//     {
//         this.state.selectedItem1!=''?
//         <View style={{flexDirection:row,height:30,width:60}}>
// <Text>{this.state.selectedItem1}</Text>
// <TouchableOpacity onPress={() => this.onClose()}>
//              <Icon name="close"
//             color="gray" size={20} />
//              </TouchableOpacity>


//         </View>:null
      
//     }
// </View>
// <View style={{width:'95%',margin:10,flexDirection:'row',height:160,backgroundColor:'white',justifyContent:'space-between',}}>
//            <View style={{width:120,height:160,backgroundColor:'#9932cc',borderRadius:5}}>
//             <Text style={{margin:10,color:'white',fontSize:16}}>My Upcomming Cource</Text>
//             <Text style={{margin:10,color:'white',fontSize:29,fontWeight:'bold'}}>1</Text>
//            </View>
//              <View style={{margin:10,width:'65%'}}>
//                 <Text style={{fontSize:16,fontWeight:'500',color:'gray'}}>College of Nigerian pathologists 17 th Annual Scientific Conference And General Metting 2022</Text>
//                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                <TouchableOpacity style={{  height:40,width:110,backgroundColor:'white',marginTop:10,alignItems:'center',justifyContent:'center',borderRadius:10,borderWidth:1}} onPress={() => this.onClick()}>
//              <Text>View Detailes</Text>
//              </TouchableOpacity>
//              <TouchableOpacity style={{  height:40,width:110,backgroundColor:'#dc143c',margin:10,alignItems:'center',justifyContent:'center',borderRadius:10}} onPress={() => this.onClick()}>
//              <Text style={{color:'white'}}>Pay Now</Text>
//              </TouchableOpacity>
//                </View>

//              </View>
             
             

//              </View>
//              <View style={{width:'95%',marginHorizontal:10,flexDirection:'row',height:160,backgroundColor:'white',justifyContent:'space-between',}}>
//            <View style={{width:120,height:160,backgroundColor:'#ff69b4',borderRadius:5}}>
//             <Text style={{margin:10,color:'white',fontSize:16}}>My Finished Cource</Text>
//             <View style={{alignItems:'flex-end',margin:10}}>
//             <Text style={{margin:10,color:'white',fontSize:29,fontWeight:'bold',alignItems:'flex-end'}}>7</Text>
//            </View>
//            </View>
//              <View style={{marginHorizontal:10,width:'60%',alignItems:'center',marginTop:5}}>
//                 <Text style={{fontSize:16,fontWeight:'500',color:'gray'}}>Rewatched Finished</Text>
//                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',height:'85%'}}>
//                <TouchableOpacity style={{  height:100,width:60,backgroundColor:'#4b0082',marginTop:10,alignItems:'center',justifyContent:'center',}} onPress={() => this.onClick()}>
//              <Text style={{color:'white'}}>View Detailes</Text>
//              </TouchableOpacity>
//              <TouchableOpacity style={{ marginLeft:30, height:80,width:90,backgroundColor:'#4b0082',alignItems:'center',justifyContent:'center',}} onPress={() => this.onClick()}>
//              <Text style={{color:'white'}}>Pay Now</Text>
//              </TouchableOpacity>
//                </View>

//              </View>
             
             

//              </View>

//              <Text>Recomended Courses</Text>
          
//              <FlatList 


// //  renderItem={({item,index})=>(
// //     console.log("item>>",item),
// //     <Text>{item.name}</Text>
// //  )}
// data={this.state.array3}
// renderItem={this.renderList}
// keyExtractor={item => item.id}


//  />

//              </View>
//             </ScrollView>


//         )
//     }
// }

// const style = StyleSheet.create({
//     input: {
//         height: 40,
//         margin: 20,
//         color: 'black',
//         padding: 10,
//         width: '90%',
//         borderWidth: 1,
//         borderColor: '#e4e1ed',
//         borderRadius:10

//     },
//     mytext3:{
//         marginLeft:20,width: '90%',marginTop:20
//     },
//     container4:{
//         flex:1,alignItems: 'center', width: "100%",
//     },
//     mytext:{
//         fontSize: 20,  color: '#663399',marginTop:40
//     },
//     mytext1:{
//         fontSize: 16, fontWeight: '400', color: 'gray',
//     },
//     mytext2:{
//         fontSize: 16, fontWeight: '400', color: 'gray',marginBottom:15
//     },
//     img:{
//         height:120,width:120,alignItems:'center',margin:10
//     },
//     container1:
//     {
//         flex:1,
   
//         alignItems:'center',
//         justifyContent:'center',
       

//     },
//     container2:{
//         alignItems: 'center',  marginTop: 20,justifyContent:'center'
//     },
//     container: {
//         flexGrow: 1
//       },
//     input1: {
//         flexDirection: 'row',
//         height: 50,
//         justifyContent: 'space-between',
//         padding:2,
//         width: '90%',
//         borderWidth: 2,
//         borderColor: '#e4e1ed',
//         borderRadius:10
//     },
//     img3:
//     {
//         width: 30,
//         height: 30,
//     },
//     checkbox: {
//         alignSelf: "center",
//     },
//     mybutton: {

//         marginTop: 20,
//         backgroundColor: '#dc143c',
//         height: 50,
//         width: '90%',
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center'

//     },
//     textvalid: {
//         backgroundColor: '#dc143c',
//     },
//     textinvalid: {
//         backgroundColor: 'white',
//     },
//     mybutton1: {

//         marginTop: 40,
//         backgroundColor: '#ff00ff',
//         height: 40,
//         width: '40%',
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center'

//     },
//     container3: {
//        marginTop:Platform.OS === "ios" ? 140 :70,
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//         justifyContent: 'center',
       

//     },
//     forgot_button:
//     {

//         color: 'white'

//     },
//     forgot_button2:
//     {

//         alignItems: 'center'

//     },
//     forgot_button1:
//     {
//         height: 30,
//         marginTop: 10,
//         color: 'gray',
//     },
//     forgot_button3:
//     {
//         marginBottom: 40,

//         marginTop: 30,
//         color: 'gray'

//     },
//     forgot_button4:
//     {
//         textDecorationLine: 'underline',
//         fontWeight:'bold',

//         marginTop: 30,
//         marginBottom: 40,
//         color: 'gray'

//     },
//     textbutton: {
//         fontSize: 16,
//         color: 'white'
//     },
//     dropdown1BtnStyle: {
//         width: '50%',
//         height: 40,
        
       
//       },
//       textstyle:{
    
//         fontSize:20,
//         padding:10
    
//       },
    
//       dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
//       dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
//       dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
// });
