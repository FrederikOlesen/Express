/**
 * Created by frederikolesen on 21/10/14.
 */

onload = function dateToday(){
    var date = new Date();
    var day = date.getDay();
    weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var x = weekdays[day]

    if(x === 'Friday'){
        document.write('Holy moly shitballs. Its fucking friday' + x)
        document.write("<img src='../images/happySmiley.jpg' />")
    }

    else{
        document.write('Today its ' + x + ' and sadly not friday :(')
        document.write("<img src='../images/sadSmiley.png' />")
    }
}