// basic functionalities

var broker = "wss://test.mosquitto.org:8081/mqtt";
client = mqtt.connect(broker);

var topic = "toper/aircon/status";
var payload = "The aircon is currently off";

// connect callback function
client.on("connect", function () {
    console.log("success");
});
client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
    var row = $("<tr>");
    $("<td>").text(topic).appendTo($(row));
    $("<td>").text(payload).appendTo($(row));
    $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
    $("#tbl-body").append($(row));

})

$(".btnOff").click(function () {
    payload = "The aircon is currently off";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'An error occurs!',
            });
        } else {
            console.log("published")
            Swal.fire('Turn off successfully!')
            $('.status').html(payload);
        }
    });

});
$(".btn1").click(function () {
    payload = "The aircon is turned on LOW COOL";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'An error occurs!',
            });
        } else {
            console.log("published")
            $('.status').html(payload);
        }
    });

});
$(".btn2").click(function () {
    payload = "The aircon is turned on HIGH COOL";
    client.publish(topic, payload, function (err) {
        if (err) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'An error occurs!',
            });
        } else {
            console.log("published")
            $('.status').html(payload);
        }
    });

});