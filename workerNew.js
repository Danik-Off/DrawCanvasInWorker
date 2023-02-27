
onmessage = (e) => {
    let x = e.data.x;
    let speed = e.data.speed;
    const width= e.data.width;
    x+=speed;
    if(x>=width||x<=0)
    {
        speed =-speed;
    }
   
        postMessage({x,speed,width});

   
  
}