let X;
let Y;
onmessage = (e) => {
     X = e.data.x;
     Y = e.data.y;
    let speed = e.data.speed;
    const width= e.data.width;
    setInterval(draw,100)
    function draw()
    {  
         X+=speed;
        if(X>=width||X<=0)
        {
            speed =-speed;
        }
        //console.log(X,Y);
        postMessage({x:X,y:Y,speed:speed});
    }
  
}