//        Logická hodnota                      Pokud program nevyhodí žádnou chybu při parse tak je hodnota true.
//          |                                       |
//         \|/                                     \|/
            bool jeCislo = int.TryParse(Console.ReadLine(), out int sudeCislo);

if (jeCislo) //Pokud jeCislo je true
{
    if (jeCislo && sudeCislo % 2 == 0) //Pokud jeCislo je true a sudeCislo dělené 2 nemá zbytek
    {
        Console.WriteLine("je to sude cislo"); //Vypiš je to sude cislo
    }
}
else //Jinak
{
    Console.WriteLine("Musite zadat cislo");  //Vypiš Musite zadat cislo
}