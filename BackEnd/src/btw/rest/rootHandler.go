package rest

import (
	"btw/websocket"
	// "encoding/json"
	"fmt"
	"log"
	"net/http"
)

func Launch(port int) {
	http.Handle("/", http.FileServer(http.Dir("../../FrontEnd")))
	// http.Handle("/user", http.HandlerFunc(userHandler))

	// websocket route
	http.Handle("/websocket", http.HandlerFunc(websocket.WebSocketHandler))

	log.Println("Listening on port: ", port)

	err := http.ListenAndServe(fmt.Sprint(":", port), nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

var corsOrigin = "null"

func createHeader(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", corsOrigin)
	(*w).Header().Set("Content-Type", "application/json")
}
