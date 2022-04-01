var my_score_display = document.getElementById("my-score-display")
var computer_score_display = document.getElementById("computer-score-display")
var me = document.getElementById("me")
var computer = document.getElementById("computer")
var start = document.getElementById("start")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var index = ""
var interval = ""
var my_score = 0;
var computer_score = 0;


// var random = Math.random() * 5;
// console.log(Math.floor(random))

// setInterval(function(){
//     console.log("hello")
// }, 100)

// setTimeout(function(){
//     console.log("i just ran")
// }, 3000)



// me.style.visibility = "hidden"
function hideBtns(){
    rock.style.display="none"
    paper.style.display="none"
    scissors.style.display="none"
}
hideBtns()



function showBtns(){
    rock.style.display="block"
    paper.style.display="block"
    scissors.style.display="block"
}

function draw(){
    setTimeout(function(){
        alert("It's a draw")
    }, 1000)
    hideBtns();
    start.style.display = "block";

}
function youWin(){
    setTimeout(function(){
        alert("You Win")
    }, 1000)
    
    my_score++;
    my_score_display.innerHTML = my_score;
    hideBtns();
    start.style.display = "block";

}
function computerWin(){
    setTimeout(function(){
        alert("Computer Win")
    }, 1000)
   
    computer_score++;
    computer_score_display.innerHTML = computer_score;
    hideBtns();
    start.style.display = "block";

}
computer.setAttribute("src", "rps/rock.png" );
var images = [
    "rps/rock.png",
    "rps/paper.png",
    "rps/scissors.png"
];

start.addEventListener("click", function(){
    showBtns();
    start.style.display = "none";
   interval = setInterval(function(){
        var random = Math.random() * 3;
        index = Math.floor(random);
        computer.setAttribute("src", images[index]);
        console.log("change");
    }, 100);
})
rock.addEventListener("click", function(){
    me.setAttribute("src", "rps/rock.png")
    clearInterval(interval);
    if(images[index] == "rps/rock.png"){
        draw();
    }else if(images[index] == "rps/paper.png"){
        computerWin();
    }else if(images[index] == "rps/scissors.png"){
        youWin();
    }
})
paper.addEventListener("click", function(){
    me.setAttribute("src", "rps/paper.png")
    clearInterval(interval);
    if(images[index] == "rps/rock.png"){
        youWin();
    }else if(images[index] == "rps/paper.png"){
        draw();
    }else if(images[index] == "rps/scissors.png"){
        computerWin();
    }
})
scissors.addEventListener("click", function(){
    me.setAttribute("src", "rps/scissors.png")
    clearInterval(interval);
    if(images[index] == "rps/rock.png"){
        computerWin();
    }else if(images[index] == "rps/paper.png"){
        youWin();
    }else if(images[index] == "rps/scissors.png"){
        draw();
    }
})