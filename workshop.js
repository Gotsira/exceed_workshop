var door = false;
var air = false;
var num = 0;
var light = false;
$(document).ready(function () {
    var link = "158.108.165.223/data/suckceed/";

    var plug = function () {
        console.log(light); 
        var n = 1;
        if (light) {
            n = 1;
            $('#light').attr('src','icon/lamp-off.png');
            light = false;
        } else {
            n = 0;
            $('#light').attr('src','icon/lamp-on.png');
            light = true;
        }
        $.ajax({
            url: link + "set/light/" + n
        }).done(function () {
            console.log("successful");
        }).fail(function() {
            console.log("hahahhaahahhah");
        })
    };

    $('.doorbtn').click(function () {
        var n;
        if (door) {
            n = 30;
            $('#door').attr('src','icon/door-off.png');
            door = false;
        } else {
            n = 120;
           $('#door').attr('src','icon/door-on.png');
            door = true;
        }
        $.ajax({
            url: link + "set/door/" + n
        }).done(function () {
            console.log("successful");
        })
    });

    $('.airbtn').click(function () {
        var n;
        if (air) {
            n = 1;
            $('#air').src = "icon/air-off.png";
            air = false;
        } else {
            n = 0;
            $('#air').src = "icon/air-on.png";
            air = true;
        }
        $.ajax({
            url: link + "set/air/" + n
        }).done(function () {
            console.log("successful");
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
            plug();
        })
    }, 1000)

});