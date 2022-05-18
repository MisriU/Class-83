 var last_position_of_x, last_position_of_y;
 color = "black";
 width = 2;
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 var width = screen.width;
 new_width = screen.width - 70;
 new_height = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_of_x = e.touches[0].clientX - canvas.offserLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offserTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offserLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offserTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
}

