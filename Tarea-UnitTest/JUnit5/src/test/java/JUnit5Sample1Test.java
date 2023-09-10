import org.junit.jupiter.api.*;
import java.time.LocalDateTime;

public class JUnit5Sample1Test {

    @BeforeAll
    static void beforeAll() {
        System.out.println("**--- Executed once before all test methods in this class ---**");
    }

    @BeforeEach
    void beforeEach() {
        System.out.println("**--- Executed before each test method in this class ---**");
    }

    @Test
    void testMethod1() {
        System.out.println("**--- Test method1 executed ---**");
    }

    @DisplayName("Test method2 with condition")
    @Test
    void testMethod2() {
        System.out.println("**--- Test method2 executed ---**");
    }

    @Test
    @Disabled("implementation pending")
    void testMethod3() {
        System.out.println("**--- Test method3 executed ---**");
    }

    @AfterEach
    void afterEach() {
        System.out.println("**--- Executed after each test method in this class ---**");
    }

    @AfterAll
    static void afterAll() {
        System.out.println("**--- Executed once after all test methods in this class ---**");
    }

    @Test
    void testAssertEqual() {
        Assertions.assertEquals("ABC", "ABC");
        Assertions.assertEquals(20, 20, "optional assertion message");
        Assertions.assertEquals(2 + 2, 4);
    }

    @Test
    void testAssertFalse() {
        Assertions.assertFalse("FirstName".length() == 10);
        Assertions.assertFalse(10 > 20, "assertion message");
    }

    @Test
    void testAssertNull() {
        String str1 = null;
        String str2 = "abc";
        Assertions.assertNull(str1);
        Assertions.assertNotNull(str2);
    }

    @Test
    void testAssertAll() {
        String str1 = "abc";
        String str2 = "pqr";
        String str3 = "xyz";
        Assertions.assertAll("numbers",
                () -> Assertions.assertEquals(str1,"abc"),
                () -> Assertions.assertEquals(str2,"pqr"),
                () -> Assertions.assertEquals(str3,"xyz")
        );
        //uncomment below code and understand each assert execution
        Assertions.assertAll("numbers",
		  () -> Assertions.assertEquals(str1,"abc"),
		  () -> Assertions.assertEquals(str2,"pqr1"),
		  () -> Assertions.assertEquals(str3,"xyz1")
	 );
    }

    @Test
    void testAssertTrue() {
        Assertions.assertTrue("FirstName".startsWith("F"));
        Assertions.assertTrue(10 == 10);
        try{
            throw new IllegalArgumentException("Illegal Argument Exception occured");
        }catch (IllegalArgumentException exception){
            Assertions.assertEquals("Illegal Argument Exception occured", exception.getMessage());
        }
    }

    @Test
    void testAssumeTrue() {
        boolean b = 'A' == 'A';
        Assumptions.assumeTrue(b);
        Assertions.assertEquals("Hello", "Hello");
    }

    @Test
    @DisplayName("test executes only on Saturday")
    public void testAssumeTrueSaturday() {
        LocalDateTime dt = LocalDateTime.now();
        Assumptions.assumeTrue(dt.getDayOfWeek().getValue() == 6);
        System.out.println("further code will execute only if above assumption holds true");
    }

    @Test
    void testAssumeFalse() {
        boolean b = 'A' != 'A';
        Assumptions.assumeFalse(b);
        Assertions.assertEquals("Hello", "Hello");
    }

    @Test
    void testAssumeFalseEnvProp() {
        System.setProperty("env", "prod");
        Assumptions.assumeFalse("dev".equals(System.getProperty("env")));
        System.out.println("further code will execute only if above assumption hold");
    }

    @Test
    void testAssumingThat() {
        System.setProperty("env", "test");
        Assumptions.assumingThat("test".equals(System.getProperty("env")),
                () -> {
                    Assertions.assertEquals(10, 10);
                    System.out.println("perform below assertions only on the test env");
                });

        Assertions.assertEquals(20, 20);
        System.out.println("perform below assertions on all env");
    }

    @Test
    void testException(){
        Throwable exception = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            throw new IllegalArgumentException("Illegal Argument Exception occured");
        });
        Assertions.assertEquals("Illegal Argument Exception occured", exception.getMessage());
    }

}