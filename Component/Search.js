import React from 'react'

//importons les components
import {StyleSheet,View, Button, TextInput,FlatList,ActivityIndicator,Text} from 'react-native'

import FilmItem from './FilmItem'
import {getFilms} from "../API/TMDBApi" 

class Search extends React.Component {
    constructor(props){
        super(props)
        this.page=0
        this.totalPages=0
        this.state={films:[],
           searchedText:"", 
           isLoading: false
          }
    }
    _searchTextInputChanged(text){
      this.setState({searchedText:text})
    }
    _loadFilms(){
      console.log(this.state.searchedText)
      if(this.state.searchedText.length>0){
        this.setState({isLoading:true})
        getFilms(this.state.searchedText, this.page+1).then(data =>{
          this.page=data.page
          this.totalPages=data.total_pages
          this.setState({
            films:this.state.films.concat(data.results),
            isLoading: false
          })
        })

      }
    }
    _searchFilms(){
      this._loadFilms()
    }

  /*   _displayLoading(){
      if(this.state.isLoading){
        return(
          <View style={styles.loading_container}>
            <ActivityIndicator size='large'/>
          </View>
        )
      }
    } */




    render() {
        console.log(this.state.isLoading)
      return (
        <View style={styles.main_container}>
         <TextInput style={styles.textinput} 
                  placeholder='Titre du film'
                  onChangeText={(text) => this._searchTextInputChanged(text)}
                  onSubmitEditing={() => this._loadFilms()}
                    />
                  
          <Button title='Rechercher' onPress={() => this._searchFilms()}/>
          <FlatList
            data={this.state.films}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={ ({item}) => <FilmItem film={item} />}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if(this.page<this.totalPages){
                this._loadFilms()}
            }}
            />
            { this.state.isLoading?
             <View style={styles.loading_container}>
             <ActivityIndicator size='large'/>
           </View>
           :null
    }
        </View>
      )
    }
  }

//externalisation de style
const styles=StyleSheet.create({
    main_container:{
        marginTop:20, 
        flex:1,
        flexDirection:"column",
          },
    loading_container:{
      position:'absolute',
      left:0,
      right:0,
      top:100,
      bottom:0,
      alignItems:'center',
      justifyContent:'center',
    },
    TextInput: {     
        marginLeft: 10,
        marginRight: 10, 
        height: 40,
       borderStyle: 'solid',
        borderColor:'#110001', 
       borderWidth: 2,
       borderBottomEndRadius:0,
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
       paddingLeft:7
    }
})


//on exporte le component

export default Search 