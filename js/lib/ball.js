class Ball {
    constructor(x, y, dx, dy, r, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.r = r;
        this.color = color;
    }

    render() {
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        canvasCtx.fillStyle = this.color;
        canvasCtx.fill();

        this.update();
    }
    update() {
        if (this.y + this.r + this.dy > canvas.height) {
            this.dy = -(this.dy * friction);
        } else {
            this.dy += gravity;
        }

        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }

        this.y += this.dy;
        this.x += this.dx;
    }
}
