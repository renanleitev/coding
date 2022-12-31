package Pessoa_Principal;

public class Pessoa {
        // Deixando os atributos públicos 
        // public String nomePessoa;
        // public int idadePessoa;

        // Deixando os atributos privados
        private String nomePessoa;
        private int idadePessoa;

        // Criando um método (exibir usando println)
        // public void MostrarDados (String nomePessoa, int idadePessoa){
        //     System.out.println("Nome Pessoa: " + nomePessoa);
        //     System.out.println("Idade Pessoa: " + idadePessoa);

        // Criando um método (exibir usando return)
        public String toString() {
            return "Nome Pessoa: " + nomePessoa + "\n" + "Idade Pessoa: " + idadePessoa;
        }

        // Usando get e set
        // get = public [tipo da variável] getNomeVariavel(){return nomeVariavel;}
        public String getNomePessoa(){
            return nomePessoa;
        }

        // set = public void setNomeVariavel([tipo da variável] nomeVariavel){
        // this.nomeVariavel = nomeVariavel;}
        public void setNomePessoa(String nomePessoa) {
            this.nomePessoa = nomePessoa;
        }

        public int getIdadePessoa(){
            return idadePessoa;
        }

        public void setIdadePessoa(int idadePessoa) {
            this.idadePessoa = idadePessoa;
        }

    }
