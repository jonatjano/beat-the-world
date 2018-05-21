package websocket

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var corsOrigin = "null"

func allowCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", corsOrigin)
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

var connected = make([]*websocket.Conn, 0)

func WebSocketHandler(w http.ResponseWriter, req *http.Request) {
	head := w.Header()
	head.Set("Access-Control-Allow-Origin", corsOrigin)

	conn, err := upgrader.Upgrade(w, req, head)
	if err != nil {
		log.Println(err)
		return
	}

	log.Println("Client connected")
	connected = append(connected, conn)

	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println("read", err)
			break
		}

		if err := conn.WriteMessage(messageType, process(p)); err != nil {
			log.Println("write", err)
			for i, connect := range connected {
				if connect == conn {
					connected = append(connected[:i], connected[i+1:]...)
				}
			}
			break
		}
	}

	for i, connect := range connected {
		if connect == conn {
			connected = append(connected[:i], connected[i+1:]...)
		}
	}

	broadcast("Client exited")
}

func broadcast(message interface{}) {
	mess, err := json.Marshal(message)
	if err != nil {
		return
	}

	for _, conn := range connected {
		conn.WriteMessage(websocket.TextMessage, mess)
	}
}

func process(message []byte) []byte {
	jsonObjectp := make(map[string]interface{})
	jsonObject := &jsonObjectp

	err := json.Unmarshal(message, jsonObject)
	if err != nil {
		log.Println(err)
		return make([]byte, 0)
	}
	log.Println(jsonObject)

	return message
}
