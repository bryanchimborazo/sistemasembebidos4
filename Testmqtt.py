import paho.mqtt.client as mqtt
import time
import random
def conectado(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    client.subscribe("bryan.chimborazo@unach.edu.ec/Topico2")

def nuevoMensaje(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

    mensaje=msg.payload.decode('utf-8')
    if mensaje=='ON':
        print('ACTIVADO')

    if mensaje=='OFF':
        print('DESACTIVADO')
client= mqtt.Client()  
client.username_pw_set('bryan.chimborazo@unach.edu.ec', password='miryanLEOVINA1')
client.on_connect = conectado
client.on_message = nuevoMensaje

client.connect("maqiatto.com", 1883, 60)

n=0
while 1:
    time.sleep(1)
    valor1=random.randint(1,10)
    valor2=random.randint(10,20)
    client.publish('bryan.chimborazo@unach.edu.ec/Topico2',str(n)+';'+str(valor1)+';'+str(valor2))
    client.loop()
    n=n+1
