package rest

import (
	. "btw/models"
	"net/http"
)

func championsHandler(w http.ResponseWriter, req *http.Request) {
	genericChampionsHandler(w, req, []string{})
}

func championsShopHandler(w http.ResponseWriter, req *http.Request) {
	genericChampionsHandler(w, req, []string{"shop"})
}

func championsGameHandler(w http.ResponseWriter, req *http.Request) {
	genericChampionsHandler(w, req, []string{"game"})
}

func genericChampionsHandler(w http.ResponseWriter, req *http.Request, groups []string) {
	if req.Method == "GET" {
		createHeader(&w)

		bytes, err := MarshalChampions(groups)
		if err != nil {
			w.Write([]byte("failed to marshal"))
			return
		}

		w.Write(bytes)
	}
}
