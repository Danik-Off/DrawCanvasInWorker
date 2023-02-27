var speed =1;
onmessage = (evt) => {
    const canvas = evt.data.canvas;
    const count = evt.data.count;
    
    let X =new Array(count).fill(1);
    let dX =   new Array(count).fill(1);
    let Y =  new Array(count).fill(1);
    let dY = new Array(count).fill(1);
    let Style =[...new Array(count)].map(()=>"rgb("+~~(Math.random()*256)+","+~~(Math.random()*256)+","+~~(Math.random()*256)+")");
    draw(canvas,count); 
    function draw(canvas,count)
    {   var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        
       
        for (let i = 0; i < count; i++) {
            
        if(X[i]<0)
        {
          
           dX[i] = 1;
           
        }
        if(X[i]>canvas.width-10)
        {
            dX[i] = -1;
        }
        if(Y[i]<0)
        {
            dY[i] =1;
        }
        if(Y[i]>canvas.height-10)
        {
            dY[i] =-1;
        }
            ctx.fillStyle = Style[i];
            //
            ctx.fillRect(X[i],i * 20,10,10);  
            X[i]+= dX[i];
            Y[i]+=dY[i];
        }
        
       
        setTimeout(draw,evt.data.timeForUpdate,canvas,count);
    }
    

  };