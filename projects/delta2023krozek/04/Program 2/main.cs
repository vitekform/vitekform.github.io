string input = Console.ReadLine();
int cislo = int.Parse(input);
Console.WriteLine($"Uživatel zadal : {cislo}");    //            /
Console.WriteLine("Uživatel zadal : " + cislo);    //           |------- 3 způsoby jak napsat string a int
Console.WriteLine("Uživatel zadal : {0}", cislo);  //            \