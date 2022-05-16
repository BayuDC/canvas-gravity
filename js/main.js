let canvas, canvasCtx;

let balls;

const gravity = 1.2;
const friction = 0.98;

function draw() {
    requestAnimationFrame(draw);

    canvasCtx.fillStyle = 'black';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => ball.render());
}
function setup() {
    canvas = document.getElementById('canvas');
    canvasCtx = canvas.getContext('2d');

    canvas.width = 1280;
    canvas.height = 720;

    balls = [];

    for (let i = 0; i < 100; i++) {
        const r = 25;
        const x = randomNumber(20, canvas.width - 20);
        const y = randomNumber(20, canvas.height / 2);
        const dx = randomNumber(-2, 2);
        const dy = randomNumber(2, 5);
        const color = randomColor();

        balls.push(new Ball(x, y, dx, dy, r, color));
    }
}

addEventListener('click', () => {
    setup();
});

setup();
draw();
