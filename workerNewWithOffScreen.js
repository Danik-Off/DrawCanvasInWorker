onmessage = (e) => {

  const canvas = e.data.canvas;
 
  let x = 0;
  let speed = 1;

    draw(canvas);

  function draw(canvas) {

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height =canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    if (x < 0 || x > width - 10) {
      speed = -speed;
    }

    x += speed;
    ctx.fillRect(x, 0, 10, 100);
  setTimeout(draw,10,canvas);

   
  }


};


