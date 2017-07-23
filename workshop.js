var door = false;
var air = false;
var num = 0;
var light = false;
$(document).ready(function () {
    var link = "http://158.108.165.223/data/suckceed/";

    var plug = function () {
        var n = "0";
        if (light) {
            n = "0";
            $('#light').attr('src', 'icon/lamp-off.png');
            light = false;
        } else {
            n = "1";
            $('#light').attr('src', 'icon/lamp-on.png');
            light = true;
        }
        $.ajax({
            url: link + "light/set/" + n
        }).done(function () {
            console.log("successful");
        }).fail(function () {
            console.log("hahahhaahahhah");
        })
    };

    $('.doorbtn').click(function () {
        var n = "120";
        if (door) {
            n = "120";
            $('#door').attr('src', 'icon/door-close.png');
            door = false;
        } else {
            n = "30";
            $('#door').attr('src', 'icon/door-open.png');
            door = true;
        }
        $.ajax({
            url: link + "door/set/" + n
        }).done(function () {
            console.log("successful");
        }).fail(function () {
            console.log("hahahhaahahhah");
        })
    });

    $('.airbtn').click(function () {
        var n = "0";
        if (air) {
            n = "0";
            $('#air').attr('src', 'icon/air-off.png');
            air = false;
        } else {
            n = "1";
            $('#air').attr('src', 'icon/air-on.png');
            air = true;
        }
        $.ajax({
            url: link + "air/set/" + n
        }).done(function () {
            console.log("successful");
        }).fail(function () {
            console.log("hahahhaahahhah");
        })
    });

    $('.lightbtn').click(plug);

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
            url: link + "temperature"
        }).done(function(data) {
            document.getElementById('pg').style.width = parseInt(data) + "%";
            console.log(data);
        }).fail(function() {
            console.log("wefghjk");
        })
    }, 1000)

    // setInterval(() => {
    //     $.ajax({
    //         url: link + "LDT"
    //     }).done(function (data) {
    //         if (data > 150) {
    //             light = false;
    //         } else {
    //             light = true;
    //         }
    //         plug();
    //     })
    // }, 1000)

    setInterval(() => {
        $.ajax({
            url: link + "people"
        }).done(function (data) {
            if (data == 1) {
                num++;
            } else {
                num--;
            }
        })
    }, 1000)

});