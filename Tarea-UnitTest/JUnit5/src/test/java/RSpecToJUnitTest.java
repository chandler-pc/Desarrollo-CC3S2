import org.junit.jupiter.api.*;
public class RSpecToJUnitTest {
    @AfterEach
    void afterEach() {
    System.out.println("**--- Executed after each test method in this class ---**");
}

    @Test
    void testEmptyString(){
        Assertions.assertEquals(0,StringCalculator.add(""));
    }

    @Test
    void testSingleNumber(){
        Assertions.assertEquals(4, StringCalculator.add("4"));
        Assertions.assertEquals(10, StringCalculator.add("10"));
    }

    @Test
    void testTwoNumbers(){
        Assertions.assertEquals(6, StringCalculator.add("2,4"));
        Assertions.assertEquals(117, StringCalculator.add("17,100"));
    }
}
