let day = "   tuesday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1, day.length);
switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        document.write("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        document.write("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        document.write("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        document.write("From 10:00 AM To 7:00 PM");
        break;
    case "World":
        document.write("Its Not A Valid Day");
        break;
    default:
        document.write("Its Not A Valid Day");
}
