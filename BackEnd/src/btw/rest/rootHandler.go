package rest

import (
	. "btw/websocket"
	"fmt"
	"log"
	"net/http"
)

func Launch(port int) {
	http.Handle("/", http.FileServer(http.Dir("../../FrontEnd")))
	http.Handle("/BackEnd/champions/shop", http.HandlerFunc(championsShopHandler))
	http.Handle("/BackEnd/champions/game", http.HandlerFunc(championsGameHandler))
	http.Handle("/BackEnd/champions", http.HandlerFunc(championsHandler))
	// http.Handle("/user", http.HandlerFunc(userHandler))

	// websocket route
	http.Handle("/websocket", http.HandlerFunc(WebSocketHandler))

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
