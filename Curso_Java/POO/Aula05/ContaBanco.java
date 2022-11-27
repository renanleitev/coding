package Aula05;

public class ContaBanco {
    // Atributos
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;

    // Método Construtor
    public ContaBanco() {
        this.saldo = 0;
        this.status = false;
    }

    // Métodos getters e setters
    public void setNumConta(int numeroConta){
        this.numConta = numeroConta;
    }
    public int getNumConta(){
        return numConta;
    }
    public void setTipo(String tipoConta){
        this.tipo = tipoConta;
    }
    public String getTipo(){
        return tipo;
    }
    public void setDono(String donoConta){
        this.dono = donoConta;
    }
    public String getDono(){
        return dono;
    }
    public void setSaldo(float s){
        this.saldo = s;
    }
    public float getSaldo(){
        return saldo;
    }
    public void setStatus(boolean s){
        this.status = s;
    }
    public boolean getStatus(){
        return status;
    }
    
    // Métodos comuns
    public void abrirConta(String tipoConta){
        setTipo(tipoConta);
        setStatus(true);
        if (tipoConta == "CC"){this.saldo = 50;}
        else if (tipoConta == "CP"){this.saldo = 150;}
        System.out.println("Conta de " + this.dono + " criada com sucesso.");
    }
    public void fecharConta(){
        if (this.saldo > 0){
            System.out.println("Erro. Conta não pode ser fechada, pois ainda possui dinheiro.");
        }
        else if (this.saldo < 0){
            System.out.println("Erro. Conta não pode ser fechada, pois está em débito.");
        }
        else {
            this.setStatus(false);
            System.out.println("Conta de " + this.dono + " fechada com sucesso.");
        }
    }
    public void depositar(float deposito){
        if (this.status == true){
            if (deposito >= 0){
                // this.saldo += v;
                this.setSaldo(this.getSaldo() + deposito);
                System.out.println("Depósito realizado com sucesso.");
            }
            else{System.out.println("Erro. Por favor, informe um número válido.");}
        }
        else{System.out.println("Impossível depositar em uma conta fechada.");}
    }
    public void sacar(float saque){
        if (this.status == true){
            if (saque >= 0){
                if (saque <= this.saldo){
                    // this.saldo -= s;
                    this.setSaldo(this.getSaldo() - saque);
                    System.out.println("Saque realizado com sucesso.");
                }
                else{System.out.println("Saldo insuficiente para saque.");}
            }
            else{System.out.println("Erro. Por favor, informe um número válido.");}
        }
        else{System.out.println("Impossível sacar em uma conta fechada.");}
    }
    public void pagarMensal(){
        float mensalidade = 0;
        if (this.tipo == "CC"){
            mensalidade = 12;
        }
        else if (this.tipo == "CP"){
            mensalidade = 20;
        }
        if (this.status == true){
            if (this.saldo > mensalidade){
                this.saldo -= mensalidade;
                System.out.println("Mensalidade paga com sucesso.");
            }
            else {System.out.println("Saldo insuficiente.");}
        }
        else{System.out.println("Impossível pagar.");}
    }
    public void status(){
        System.out.println("Informações da Conta Bancária:");
        System.out.println("Número da Conta: " + this.numConta);
        System.out.println("Tipo da Conta: " + this.tipo);
        System.out.println("Proprietário: " + this.dono);
        System.out.println("Saldo: R$ " + this.saldo);
        if (status == true){
            System.out.println("Status: Ativo");
        }
        else{
            System.out.println("Status: Inativo");
        }
    }
}
