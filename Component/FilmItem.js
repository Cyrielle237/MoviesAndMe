import React from 'react'
import {StyleSheet, View,Text,Image } from 'react-native'
import {getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component{
    render(){
        //console.log(this.props)  //récuperer les props
        const film=this.props.film
        return(
            <View style={StyleSheet.main_container}>
                
                <Image style={styles.image} source={{uri:getImageFromApi(film.poster_path)}}/>
                
                <View style={styles.content} >
                    <View style={styles.header}>
                        <Text style={styles.title_text}>{film.title} </Text>
                        <Text style={styles.vote_text}> {film.vote_average}</Text>
            
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.description_text} numberOfLines={3}> {film.overview}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>  
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
main_container:{
    flex:1,
    flexDirection:"column",
    
},
text:{
    fontFamily:"calibri",
    fontSize:20,
    fontStyle:'normal'
},
title_text:{
    fontWeight:"bold",
    fontSize:20,
    flex:1,
    flexWrap:"wrap",
    paddingRight:7
},
vote_text:{
    fontWeight:"100",
    fontSize:16,
    color:"red"

},
date_text:{
    fontStyle:"normal",
    textAlign:"right",
    fontSize:14,
},
description_text:{
    fontStyle:"italic",
    fontSize:14,

},

image:{
    width:160,
    height:160,
    margin:2,
    
},
content:{
    flex:1,
    margin:5,
    backgroundColor:"rgba(100,35,255,0.3)",

},
header:{
    flex:3,
    flexDirection:"row"
},
date:{
    flex:1   
},
description:{
    flex:7
}
})

export default FilmItem