/**
 * Created by frederikolesen on 21/10/14.
 */

function dateToday(){
    var date = new Date();
    var day = date.getDay();
    weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    alert(weekdays[day]);
}