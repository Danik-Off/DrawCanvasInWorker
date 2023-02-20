onmessage = (e) => {
    let x = e.data.x;
    let y = e.data.y;

    setInterval(draw, 10);

    function draw() {
        onmessage({ x: x, y: y });
        
    }
}