var img1 = true;
$(document).ready(function(){
    $('#wifi').on({
        'click' : function(){
            if(img1 === true){
                $('#wifi').attr('src','./off-wifi.jpg');
                img1 = false;
            }
            else{
                $('#wifi').attr('src','./on-wifi.jpg');
                img1 = true;
            }
        }
    })
});