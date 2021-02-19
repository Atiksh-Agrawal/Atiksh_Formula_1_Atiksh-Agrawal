canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

background_image = "racing_track_canvas.jpg";

width_car1 = 100;
height_car1 = 90;

car1_image = "car1.png";

car1_x = 70;
car1_y = 10;

width_car2 = 100;
height_car2 = 90;

car2_image = "car2.png";

car2_x = 10;
car2_y = 10;

function ADD() {

    bg_tag = new Image();
    bg_tag.onload = uploadBG();
    bg_tag.src = background_image;

    car1_tag = new Image();
    car1_tag.onload = uploadcar1();
    car1_tag.src = car1_image;

    car2_tag = new Image();
    car2_tag.onload = uploadcar2();
    car2_tag.src = car2_image;

}

function uploadBG() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_tag, car1_x, car1_y, width_car1, height_car1);
}

function uploadcar2() {
    ctx.drawImage(car2_tag, car2_x, car2_y, width_car2, height_car2);
}

window.addEventListener("keydown", keydown_my_car1);

function keydown_my_car1(e) {

    key_press = e.keyCode;

    if (key_press == 87) {
        up_car1();
    }

    if (key_press == 83) {
        down_car1();
    }

    if (key_press == 65) {
        left_car1();
    }

    if (key_press == 68) {
        right_car1();
    }

}

//all moving functions car1

function up_car1() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBG();
        uploadcar1();
    }
}

function down_car1() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBG();
        uploadcar1();
    }
}

function right_car1() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBG();
        uploadcar1();
    }
}

function left_car1() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBG();
        uploadcar1();
    }
}

window.addEventListener("keydown", keydown_my_car2);

function keydown_my_car2(e) {

    key_press = e.keyCode;

    if (key_press == 38) {
        up_car2();
    }

    if (key_press == 40) {
        down_car2();
    }

    if (key_press == 37) {
        left_car2();
    }

    if (key_press == 39) {
        right_car2();
    }

}

//all moving functions car2

function up_car2() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBG();
        uploadcar2();
    }
}

function down_car2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBG();
        uploadcar2();
    }
}

function right_car2() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBG();
        uploadcar2();
    }
}

function left_car2() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBG();
        uploadcar2();
    }
}