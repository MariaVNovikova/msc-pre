class IsLeapYear {

    check(year){
        if (year % 4 == 0){
        console.log (year + " is leap year");
        }else{
        console.log (year + " is NOT leap year");
        }
    }
}
new IsLeapYear().check(2019)
