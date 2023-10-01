package cz.vitekform.pcehacker_proj;

import java.util.Scanner;
class Main {
    public static void main(String[] args){
        Scanner inputscan = new Scanner(System.in);
        boolean isfirstnumber = true;
        int firstnum = 999;
        int secondnum;
        while (inputscan.hasNextInt()){
            if (isfirstnumber){
                firstnum = inputscan.nextInt();
                isfirstnumber = false;
            }
            else {
                secondnum = inputscan.nextInt();

                if (firstnum >= 6 && secondnum == 0 && firstnum <= 21){
                    if (firstnum == 6 || firstnum == 9 || firstnum == 12 || firstnum == 15 || firstnum == 18 || firstnum == 21){
                        System.out.println("white");
                    }
                }
                if (firstnum >= 8 && secondnum == 0 && firstnum <= 22){
                    if (firstnum == 8 || firstnum == 10 || firstnum == 12 || firstnum == 14 || firstnum == 16 || firstnum == 18 || firstnum == 20 || firstnum == 22){
                        System.out.println("red");
                    }
                }
                if (firstnum >= 12 && firstnum <= 22){
                    if (secondnum == 0 || secondnum == 15 || secondnum == 30 || secondnum == 45){
                        if (secondnum == 15){
                            if (firstnum == 14 || firstnum == 18 || firstnum == 22){
                                System.out.println("yellow");
                            }
                        }
                        else if (secondnum == 30){
                            if (firstnum == 13 || firstnum == 17 || firstnum == 21){
                                System.out.println("yellow");
                            }
                        }
                        else if (secondnum == 45){
                            if (firstnum == 12 || firstnum == 16 || firstnum == 20){
                                System.out.println("yellow");
                            }
                        }
                        else {
                            if (firstnum == 15 || firstnum == 19){
                                System.out.println("yellow");
                            }
                        }
                    }
                }
                isfirstnumber = true;
            }
        }
    }
    }
