package main

import (
	"fmt"
	"log"
	"strings"
	"encoding/json"

	"github.com/valyala/fasthttp"
)

type apiType string


// Constants
//
// apiType enums
const (
	Chain 	apiType = "Chain"
	History apiType = "History"
	Quote 	apiType = "Quote"
)
// 	ADDR: TCP port
// 	Rest: TDA API URLs
const (
	ADDR string = ":8000"
	QUOTES string = "https://api.tdameritrade.com/v1/marketdata/quotes"
	HISTORY string = "https://api.tdameritrade.com/v1/marketdata/{}/pricehistory"
	CHAIN string = "https://developer.tdameritrade.com/option-chains/apis/get/marketdata/chains"
)

func main() {
	
	h := requestHandler
	
	if err := fasthttp.ListenAndServe(ADDR, h); err != nil {
		log.Fatalf("Error in ListenAndServe: %s", err)
	}
}

func requestHandler(ctx *fasthttp.RequestCtx) {
	//var url string = "https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000&client_id=ZG024GVJNDEIRRMCWGIKMK439PLR19WA%40AMER.OAUTHAP"
	ctx.Response.Header.SetCanonical([]byte("Content-Type"), []byte("application/json; charset=UTF-8"))

	t := apiType(string(ctx.QueryArgs().Peek("Type")))
	switch t {
		case Chain:
		case History:
		case Quote:
			b := tdaCall(QUOTES, ctx.QueryArgs().Peek("Symbols"))
			json.NewEncoder(ctx).Encode(&b)
		default:
			fmt.Fprintf(ctx, "{ \"error\": \"Invalid 'Type' in URI's query parameters.\" }")
	}
}

func tdaCall(url string, symbs []byte) interface{} {
	var strAuthID = []byte("ZG024GVJNDEIRRMCWGIKMK439PLR19WA")
	req := fasthttp.AcquireRequest()
	resp := fasthttp.AcquireResponse()
	defer fasthttp.ReleaseRequest(req)   
	defer fasthttp.ReleaseResponse(resp)

	req.Header.SetCanonical([]byte("Authorization"), []byte(""))
	url = url + "?apikey=" + string(strAuthID) + "&symbol=" + string(symbs)
	fmt.Printf("%s\n", url)
	fmt.Printf("%s", string(req.Header.Header()))

	req.SetRequestURI(url)
	fasthttp.Do(req, resp)
	
	var body interface{}
	json.Unmarshal(resp.Body(), &body)
	
	return body
}

func makeHistoryURL(symbol []byte) string {
	return strings.Replace(HISTORY, "{}", string(symbol), 1)
}

