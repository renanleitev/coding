package RepeticaoFor;

public class RepeticaoFor {
    public static void main(String[] args) {
        for (int cc=0; cc<=3; cc++){
            System.out.println("Cambalhota nº " + cc);
        }
        for (int i=0; i<=15; i+=2){
            if(i%3==0) continue;
            System.out.println(i);
        }
    }
}
