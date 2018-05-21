package main

import (
	"btw/rest"
	"flag"
)

func main() {
	flag.Parse()
	port := flag.Int("p", 8080, "port to use")
	rest.Launch(*port)
}
