var door = false;
var air = false;
var light = false;
$(document).ready(function () {
    var link = "158.108.165.223/data/suckceed/";

    var plug = function () {
        var n;
        if (light) {
            n = 1;
            light = false;
        } else {
            n = 0;
            light = true;
        }
        $.ajax({
            url: link + "set/light/" + n
        }).done(function () {

        })
    };
    $('#door').click(function () {
        var n;
        if (door) {
            n = 30;
            door = false;
        } else {
            n = 120;
            door = true;
        }
        $.ajax({
            url: link + "set/door/" + n
        }).done(function () {

        })
    });

    $('#air').click(function () {
        var n;
        if (air) {
            n = 1;
            air = false;
        } else {
            n = 0;
            air = true;
        }
        $.ajax({
            url: link + "set/air/" + n
        }).done(function () {

        })
    });

    $('#light').click(plug);

    let oldTemp = 0;

    setInterval(() => {
        $.ajax({
            url: link + "temperature"
        }).done(function (data) {
            if (oldTemp != data) {
                $('#progress').val(data);
            }
        })
    }, 1000)

    setInterval(() => {
        $.ajax({
            url: link + "LDT"
        }).done(function (data) {
            if (data > 150) {
                light = false;
            } else {
                light = true;
            }
            plug();
        })
    }, 1000)

});