// https://leetcode.com/problems/roman-to-integer/

class Solution {
    private int answer = 0;    
    private HashMap<Character, Integer> hm = new HashMap<Character, Integer>();

    public int romanToInt(String s) {
        setHashmap();
        int strLength = s.length() - 1;
        char prevChar = s.charAt(strLength);

        for(int i = strLength; i > -1; i--) {
            if (i != strLength) prevChar = s.charAt(i+1);
            char currentChar = s.charAt(i);
            this.answer = calcValue(i, prevChar, currentChar);               
        }
        
        return this.answer;
    }
    
    private int calcValue(int idx, char prevChar, char currentChar) {
        int prevCharVal = this.hm.get(prevChar);
        int currentCharVal = this.hm.get(currentChar);
        if(prevCharVal > currentCharVal) {
            return this.answer - currentCharVal;
        }
        return this.answer + currentCharVal;
    }
    
        private void setHashmap() {
        this.hm.put('I', 1);
        this.hm.put('V', 5);
        this.hm.put('X', 10);
        this.hm.put('L', 50);
        this.hm.put('C', 100);
        this.hm.put('D', 500);
        this.hm.put('M', 1000);
    }
}

