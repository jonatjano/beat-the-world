package models

import (
	"bytes"
	"encoding/json"

	"github.com/hashicorp/go-version"
	"github.com/liip/sheriff"
)

type Champion struct {
	// generic
	Name string `json:"name" groups:"shop,game"`

	// for shop
	Title string   `json:"title" groups:"shop"`
	Types []string `json:"types" groups:"shop"`

	// for game
	MaxLife int `json:"maxLife" groups:"game"`
	Life    int `json:"life" groups:"game"`
	MaxMana int `json:"maxMana" groups:"game"`
	Mana    int `json:"mana" groups:"game"`
}

func MarshalChampions(groups []string) ([]byte, error) {
	version, err := version.NewVersion("4.2")
	if err != nil {
		return nil, err
	}

	o := &sheriff.Options{
		Groups:     groups,
		ApiVersion: version,
	}

	data, err := sheriff.Marshal(o, Champions)
	if err != nil {
		return nil, err
	}

	finalData, err := json.MarshalIndent(data, "", "")
	if err != nil {
		return nil, err
	}
	finalData = bytes.Replace(finalData, []byte("\n"), []byte(""), -1)
	return finalData, nil
}

func createChampion(name, title string, types []string, maxLife, maxMana int) Champion {
	champ := &Champion{}

	// ChampionBase
	champ.Name = name

	// ChampionShop
	champ.Title = title
	champ.Types = types

	// ChampionGame
	champ.Life = maxLife
	champ.MaxLife = maxLife
	champ.Mana = maxMana
	champ.MaxMana = maxMana

	return *champ
}

var Champions = make([]Champion, 0)

func init() {
	Champions = append(Champions, createChampion("Hikaze", "fire", []string{"ranged"}, 666, 42))
	Champions = append(Champions, createChampion("tank", "tank", []string{"cac", "minion master"}, 666, 42))
	Champions = append(Champions, createChampion("arc", "arc", []string{"ranged", "alone"}, 666, 42))
}
