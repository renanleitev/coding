package main
import("fmt")
func main(){
	fmt.Println("Qual o seu nome? ")
	var name string
	fmt.Scanln(&name)
	fmt.Printf("Oi, %s! Bem-vindo!", name)
}