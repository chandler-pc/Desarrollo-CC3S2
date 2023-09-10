import java.util.Arrays;

public class StringCalculator {
    public static int add(String input){
        if(input.isEmpty()){
            return 0;
        }
        Integer[] numbers = Arrays.stream(input.split(",")).map(Integer::parseInt).toArray(Integer[]::new);
        return Arrays.stream(numbers).reduce(0,Integer::sum);
    }
}
