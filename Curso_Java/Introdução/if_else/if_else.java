package if_else;

public class if_else {
    public static void main(String[] args) {
        int letraA = 3, letraB = 2, letraC = 8, letraD = 7, letraX;
        if (letraA > 3 & !(letraB < 5)){
            letraX = 10;
            System.out.println(letraX);
        }
        else{ if (letraA >= 2 || letraC <=1){
            letraX = (letraA + letraD) / 2;
            System.out.println(letraX);
        }
            else{ if (letraA == 2 || letraB < 7){
                letraX = (letraA + 2)*(letraB-2);
                System.out.println(letraX);
            } else{
                letraX = ((letraA + letraC) / letraB * (letraC + letraD));
                System.out.println(letraX);
            }
            }
        }

        }
    }
