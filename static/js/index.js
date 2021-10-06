//https://www.eclipse.org/paho/clients/js/

function PULSA_1() {
	//alert("PULSA1");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="PULSA1";
	message = new Paho.MQTT.Message("6/10/2021");
    	message.destinationName = "bryan.chimborazo@unach.edu.ec/Topico1";
    	client.send(message);
  
}
function PULSA_2(){	
	//alert("PULSA2");
	console.log("led off");
	message = new Paho.MQTT.Message("1");
    	message.destinationName = "bryan.chimborazo@unach.edu.ec/Topico1";
    	client.send(message);
	//document.getElementById("sensor1").innerHTML="PULSA2";
}


  


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "bryan.chimborazo@unach.edu.ec",
    password: "miryanLEOVINA1",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("bryan.chimborazo@unach.edu.ec/Topico1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "bryan.chimborazo@unach.edu.ec/Topico2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
//document.getElementById("sensor").innerHTML=message.payloadString;	
var hola = message.payloadString.split("-");

document.getElementById("sensor").innerHTML=hola[0];
document.getElementById("sensor1").innerHTML=hola[1];
	  
	  
  }

