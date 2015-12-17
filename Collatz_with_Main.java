import java.util.ArrayList;

/**
 * Class to simulate the Collatz sequence for any given `long` argument
 *
 * @author F. Braatz
 */
public class Collatz
{
    /**
     * Default constructor
     */
    public Collatz()
    {
    }

    /**
     * Calculate the sequence for any input greater than 1
     * Long is used to ensure upwards compatibility -- this program will still run in 2149
     * 
     * @param   start           Value to start the sequence at
     * @param   loggingEnabled  Decide whether or not to log each iteration
     * @return                  List containing the sequence
     */
    public ArrayList<Long> sequence(long start, boolean loggingEnabled)
    {
        if(start < 1)
        {
            throw new IllegalArgumentException("Argument must be greater than 1!");
        }
        ArrayList<Long> seq = new ArrayList<Long>();
        int count = 0;
        while(start != 1)
        {
            if(loggingEnabled)
            {
                System.out.println((++count) + " " + start);
            }
            seq.add(start);
            start = (start % 2 != 0) ? (((start << 1) + start) + 1) : (start >> 1);
        }
        if(loggingEnabled)
        {
            System.out.println((++count) + " " + start);
        }
        seq.add(start);
        return seq;
    }

    /**
     * Calculate longest Collatz sequence for a specified interval 1 < x < maximum
     * 
     * @param   maximum Upper limit for interval to iterate over
     * @retun   Starting value of the longest sequence
     */
    public long longestSequence(long maximum)
    {
        long max = 0;
        long previousMax;
        ArrayList<Long> maxList = new ArrayList<Long>();
        ArrayList<Long> tempSeq = new ArrayList<Long>();
        for(long count = 2; count < maximum; count++)
        {
            tempSeq = sequence(count, false);
            previousMax = max;
            max = Math.max(previousMax, tempSeq.size());
            if(previousMax != max)
            {
                maxList = tempSeq;
            }
        }
        return maxList.get(0);
    }
    
    /**
     * Main
     */
    public static void main(String[] args)
    {
        Collatz coll = new Collatz();
        long start = Long.parseLong(args[0]);
        coll.sequence(start, true);
    }
}
