int a = 5;
int b = 10;
int c;

c = a;
a = b;    //Prohazování proměných
b = c;




int.Parse("String co to má transformovat do čísla"); //Když tam je něco jiného než číslo tak to spadne!







string example1 = "Příklad";
string example2 = "Příklad";



if (example1 == example2){ //Pokud je example1 stejný jako example2
    //Sem dej kód
}






int A = int.Parse(Console.ReadLine()); //A je první zadaná hodnota
int B = int.Parse(Console.ReadLine()); //B je druhá zadaná hodnota
int C;

if (A == B) //Pokud a je stejná jako b vypiš "Čísla jsou stejná"
{
    Console.WriteLine("Čísla jsou stejná");
}

C = B;
B = A;    //Prohození hodnota A a B
A = C;

Console.WriteLine(A);
Console.WriteLine(B);
