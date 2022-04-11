import { useState } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
import { COLORS ,images,FONTS,SIZES} from '../constants';





const Home = () => {


    // Dummy Data


    const [trending,setTrending] = useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
]);



   const rendTrendingShoes = (item,index) => (


    <TouchableOpacity
       style={{height:240, width:180, justifyContent:'center',marginHorizontal:SIZES.base}}
    
    >
        <Text style={{color:COLORS.gray, ...FONTS.h5}}>{item.type}</Text>


        <View
        style={{
            flex:1,
            justifyContent:'flex-end',
            marginTop:SIZES.base,
            borderRadius:10,
            marginRight:SIZES.padding,
            paddingLeft:SIZES.radius,
            paddingRight:SIZES.padding,
            paddingBottom:SIZES.radius,
            backgroundColor:item.bgColor
        }}>

            <View style={{height:'35%',justifyContent:'space-between'}}>
                <Text style={{color:COLORS.white, ...FONTS.body4}}>{item.name}</Text>
                <Text style={{color:COLORS.white, ...FONTS.h3}}>{item.price}</Text>
            </View>


           <Image 
           source={item.img}
           resizeMode="cover"
           style={{
               position:'absolute',
               top:50,
               right:0,
               width:'98%',
               height:80,
               transform:[
                   {rotate:'-15'}
               ]
           }}
           
           
           />
        </View>
    </TouchableOpacity>

   )




    return (
        <View style={styles.container}>
            <Text style={{marginTop:SIZES.radius, marginHorizontal:SIZES.padding, ...FONTS.large, color:'black'}}>TRENDING</Text>

            {/* {Trending} */}

            <View style={{height:260,marginTop:SIZES.radius}}>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={trending}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item,index})=> rendTrendingShoes(item,index)}
                
                
                
                
                />

             

            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:COLORS.white
    }


})


export default Home