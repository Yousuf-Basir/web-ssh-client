package main

import (
	"fmt"
	"syscall/js"
)

func add(this js.Value, args []js.Value) interface{} {
	a := args[0].Int()
	b := args[1].Int()

	return js.ValueOf(a + b)
}

func main() {
	fmt.Println("Go wasm is active")

	js.Global().Set("add", js.FuncOf(add))

	select {} // keep the program running
}
