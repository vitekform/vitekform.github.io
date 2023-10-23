using System;

public class main {

	static public void Main()
	{
		string input = Console.ReadLine();
int cislo = int.Parse(input);

int zbytek = cislo % 2;

if(zbytek != 0){
    Console.WriteLine("Číslo: " + cislo + " je liché");
}
else {
    Console.WriteLine("Číslo: " + cislo + " je sudé");
}
	
	}
}


