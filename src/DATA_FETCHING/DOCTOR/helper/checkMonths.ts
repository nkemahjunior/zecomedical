

export enum Months {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12,
  }


//   const monthsWith30Days = {
//     [Months.April]: true,
//     [Months.June]: true,
//     [Months.September]: true,
//     [Months.November]: true,
//   };
  
//   const monthsWith31Days = {
//     [Months.January]: true,
//     [Months.March]: true,
//     [Months.May]: true,
//     [Months.July]: true,
//     [Months.August]: true,
//     [Months.October]: true,
//     [Months.December]: true,
//   };

//   const monthsWith28Or29Days = {
//     [Months.February] : true
//   }


  const monthsWith30Days = [Months.April,Months.June,Months.September,Months.November]

  const monthsWith31Days = [Months.January,Months.March,Months.May,Months.July, Months.August, Months.October, Months.December] 

  

    export function isFebuary(month :number){

        if( month == Months.February  ){
            return true
        }else{
            return false
        }
    }

    export function isAThirtyDayMonth(month:number){

        if( monthsWith30Days.includes(month)  ){
            return true
        }else{
            return false
        }
    }



    export function isAThirtyOneDayMonth(month:number){


        if(monthsWith31Days.includes(month)){
            return true
        }else{
            return false
        }

        // if(month in monthsWith31Days){
        //     return true
        // }else{
        //     return false
        // }
    }

 