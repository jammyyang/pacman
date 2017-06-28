document.addEventListener("DOMContentLoaded", function() {
    var el = document.getElementById('world');

    function drawWorld () {
        el.innerHTML= '';
        for(var y=0; y<map.length; y++){
            for(var x=0; x<map[y].length; x++) {
                if (map[y][x] === 1) {
                    el.innerHTML += "<div class='wall'></div>";
                }
                else if (map[y][x] === 2) {
                    el.innerHTML += "<div class='coin'></div>";
                }
                else if (map[y][x] === 3) {
                    el.innerHTML += "<div class='ground'></div>";
                }
                else if (map[y][x] === 4){
                    el.innerHTML += "<div class='ghost'></div>";
                }
                else if (map[y][x] === 5){
                    el.innerHTML += "<div class='pacman'></div>";
                }
            }
            el.innerHTML += "<br>";
        }
    }



    drawWorld();
    document.onkeydown = function (event) {
        if (event.keyCode === 37 ) {
            if(map[pacman.y][pacman.x-1] !==1) {
                map[pacman.y][pacman.x] = 3;
                pacman.x = pacman.x-1;
                map[pacman.y][pacman.x] = 5;
                drawWorld();
            }
        }
        else if (event.keyCode === 38) {
            if (map[pacman.y-1][pacman.x] !==1){
                map[pacman.y][pacman.x] = 3;
                pacman.y = pacman.y-1;
                map[pacman.y][pacman.x] = 5;
                drawWorld();
            }
        }
        else if (event.keyCode === 39){
            if(map[pacman.y][pacman.x+1] !==1){
                map[pacman.y][pacman.x] = 3;
                pacman.x = pacman.x+1;
                map[pacman.y][pacman.x] = 5;
                drawWorld();
            }
        }
        else if (event.keyCode === 40 ) {
            if (map[pacman.y+1][pacman.x] !==1){
                map[pacman.y][pacman.x] = 3;
                pacman.y = pacman.y+1;
                map[pacman.y][pacman.x] = 5;
                drawWorld();
            }

        }
    }
});

pacman = {
    x:6,
    y:4
};

map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,5,1,1,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,2,2,1,2,2,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// var el = document.getElementById('world');
//
// function drawWorld () {
//     el.innerHTML= '';
//     for(var y=0; y<map.length; y++){
//         for(var x=0; x<map[y].length; x++) {
//             if (map[y][x] === 1) {
//                 el.innerHTML += "<div class='wall'></div>";
//             }
//             else if (map[y][x] === 2) {
//                 el.innerHTML += "<div class='coin'></div>";
//             }
//             else if (map[y][x] === 3) {
//                 el.innerHTML += "<div class='ground'></div>";
//             }
//             else if (map[y][x] === 4){
//                 el.innerHTML += "<div class='ghost'></div>";
//             }
//             else if (map[y][x] === 5){
//                 el.innerHTML += "<div class='pacman'></div>";
//             }
//         }
//         el.innerHTML += "<br>";
//     }
// }
//
// drawWorld();

