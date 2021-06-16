var canvas=new fabric.Canvas("my_canvas");
player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
    );
} 


function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }
    );
}   

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("shift and p are pressed");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keypressed=='77')
    {
        console.log("shift and m are pressed");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypressed=='38')
    {
        up();
        console.log("up key pressed");
    }

    
    if(keypressed=='40')
    {
        down();
        console.log("down key pressed");
    }

    
    if(keypressed=='37')
    {
        left();
        console.log("left key pressed");
    }

    
    if(keypressed=='39')
    {
        right();
        console.log("right key pressed");
    }

    if(keypressed=='87')
    {
        new_image('ironman_face.png');
        console.log("w pressed");
    }

    if(keypressed=='71')
    {
        new_image('hulkd_body.png');
        console.log("g pressed");
    }

    if(keypressed=='76')
    {
        new_image('spiderman_legs.png');
        console.log("l pressed");
    }

    if(keypressed=='82')
    {
        new_image('thor_left_hand.png');
        console.log("r pressed");
    }

    if(keypressed=='89')
    {
        new_image('ironman_right_hand.png');
        console.log("y pressed");
    }

    
}

function up() 
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when up arraow is pressed,x= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }
}


function down() 
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when down arrow is pressed,x= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }
}


function left() 
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when left arraow is pressed,x= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }
}


function right() 
{
    if(player_x<=850)
    {
        player_x=player_x+block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when right arraow is pressed,x= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }
}
