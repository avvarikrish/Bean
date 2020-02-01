import React, { Component } from "react";

class App extends Component {
  render() {
    return (

      <div
      	style={{
      		backgroundColor: '#282c34',

      	}}
      	>

      	
      	<div
      	
      		style = {{
      			display: "flex",
      			justifyContent: "center",
      			alignItems: "center",
      			height: 100
      		}}
      	>
      	
      		<h1
      		style = {{
      			paddingTop: 300,
      			paddingBottom: 0,
      		    fontFamily: 'Helvetica-Light',
      		    fontSize: 80,
      		    color: "white",
      		    height: 200,
			}}
			>
			"BEAN"</h1>
      	</div>
      		
      		
      	<div
      	    style={{
	          display: "flex",
	          justifyContent: "center",
	          alignItems: "center",
	          paddingTop: 320,
	          height: 100
        	}}
        >
       		<input 
       			style = {{
       			width: 350,
       			height: 20
       			}}
      			placeholder = "Username" 
      		/>
      	
      	</div>
      	<div
      	    style={{
	          display: "flex",
	          justifyContent: "center",
	          alignItems: "center",
	          height: 10
        	}}
        >
      		<input 
      			style = {{
      			width: 350,
      			height: 20
      			}}
      			type = "password"
      			placeholder = "Password" 
      		/>
      	
      	</div>
      	<div
      	      style={{
	          	display: "flex",
	          	justifyContent: "center",
	          	alignItems: "center",
	          	height: 100
        	}}
        >
        	<button 
        	style = {{
        		width: 250
        		}}
        	onClick={() => alert("Logged In")}>
        	Login</button>

        </div>
      <div
      	style = {{
      		height: 420
      	}}
      >
      <h1></h1>
      </div>
      </div>

    );
  }
}

export default App;
