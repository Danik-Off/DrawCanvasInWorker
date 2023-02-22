onmessage = (e) => {
    let x = e.data.x;
    let y = e.data.y;
    let speed = e.data.speed;
    const width= e.data.width;
    setInterval(draw,10)
    function draw()
    {
        if(x>=width||x<=0)
        {
            speed =-speed;
        }
        x+=speed;
        postMessage({x:x,y:y,speed:speed});
    }
  
}