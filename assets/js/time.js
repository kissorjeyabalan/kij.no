$(function() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    var date = new Date();
    var currDay = days[date.getDay()];
    var currMonth = months[date.getMonth()];

    date.setHours(date.getHours() - 2);
    date.setMinutes(date.getMinutes() - 23);
    

    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();

    if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
    if (currentHours < 10) currentHours = "0" + currentHours;
    
    var lastLogin = currDay + " " + currMonth + " " + currentHours + ":" + currentMinutes + ":" +
        currentSeconds
    
    $('#shell .lastLogin').html(lastLogin);
});