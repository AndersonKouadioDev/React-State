import React from "react";
import{ Component } from "react/cjs/react.production.min";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import img from "./profil.jpg";

class App extends Component {

  state = {
    Person : {
      "fullName" : "Anderson Kouadio",
      "profession" : "Etudiant",
      "bio" : "Développeur Fullstrack depuis 3 ans, Développeur MERN",
    },
    show : true,
};

  constructor(props){
    super(props);
  }

   handleClick = (e)=>{
    e.preventDefault();
    this.setState({show : this.state.show === true ? false  : true})
    console.log( this.state.show);
  }
  render() {
    return (
      <div>
            <button onClick={this.handleClick} style={{position:"absolute",top:10,right:10,boxShadow:"0px 0px 2px  rgba(0,0,0,.2)", borderRadius:5, padding:2, background:"#EB3333",color:"white"}}>Show</button>
            { this.state.show ?
                <div className="container" style={{position:"relative",margin:20,boxShadow:"0px 0px 20px  rgba(0,0,0,.2)", borderRadius:5, padding:20}}>
                    <h2>{this.state.Person.fullName}</h2>
                    <img src={img} alt="photoprofl" width={70}/>
                    <b style={{color:"red",fontSize:20, marginLeft:50}}>{this.state.Person.profession}</b>
                    <p style={{fontStyle:'italic', fontWeight:300}}>{this.state.Person.bio}</p>
              </div> : null
          }
      </div>
    );
  }
}

export default App;
