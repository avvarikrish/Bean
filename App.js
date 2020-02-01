import React, { Component } from "react";

class App extends Component {
  render() {
    return (

      <div
      	style={{
      		backgroundColor: 'skyblue',

      	}}
      	>
      	<div
      	
      		style = {{
      			display: "flex",
      			alignItems: "center",
      			height: 50,
      			
      		}}
      	>
      		<h1>
      		BEAN </h1>

      	</div>
      	
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
      		    height: 200,
			}}
			>
			LOGO</h1>
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
      		backgroundColor: "skyblue",
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
