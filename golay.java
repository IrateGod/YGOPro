import java.io.*;

class Main
{
        public int hammingDistance(int a, int b)
        {
            int xor = a ^ b;
            int count = 0;
            while(xor != 0)
            {
                if((xor & 1) == 1)
                {
                    count++;
                }
                xor = xor >>> 1;
            }
            return count;
        }
        
        public int[] golay()
		{
			int[] codeWords = new int[4096];
			codeWords[0] = 0; // set first code word at 0000 0000
			int count = 1;
			int index;
			int codeIndex;
			boolean isCodeWord = false;
			for(index = 0; index <= 0xFFFFFF; index++)
			{
				for(codeIndex = 0; codeIndex < 4096; codeIndex++)
				{
					if(hammingDistance(index, codeWords[codeIndex]) < 8)
					{
						isCodeWord = false;
						break;
					}
					isCodeWord = true;
				}
				if(isCodeWord)
				{
					codeWords[count++] = index;
					isCodeWord = false;
				}
			}
			return codeWords;
		}
        
        public static void main(String[] args)
        {
            try {
                PrintWriter writer = new PrintWriter("C:/Users/IrateGod/Documents/GolayOutput.txt", "UTF-8");
                Main m = new Main();
                int[] array = m.golay();
                for(int index = 0; index < 4096; index++)
                {
                    writer.println(index + ": " + array[index] + " (" + Integer.toBinaryString(array[index]) + ")");
                }
                writer.close();
            }
            catch(Exception e)
            {
                // ignore
            }
        }
}