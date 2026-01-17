import React, { useRef, useEffect, useState } from 'react';
import '../styles/PongGame.css';

const PongGame = () => {
    // In JSX, we don't need <HTMLCanvasElement> or <boolean>
    const canvasRef = useRef(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [winner, setWinner] = useState(null);
    
    const animationFrameId = useRef(0);

    // Standard JS object
    const gameState = useRef({
        ball: { x: 400, y: 300, dx: 5, dy: 5, size: 10, speed: 5 },
        paddleLeft: { y: 250, score: 0 },
        paddleRight: { y: 250, score: 0 },
        paddleHeight: 100,
        paddleWidth: 10,
        canvasWidth: 800,
        canvasHeight: 600
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!canvasRef.current) return;
            
            const rect = canvasRef.current.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            
            const paddleHalf = gameState.current.paddleHeight / 2;
            let newY = mouseY - paddleHalf;
            
            if (newY < 0) newY = 0;
            if (newY > gameState.current.canvasHeight - gameState.current.paddleHeight) {
                newY = gameState.current.canvasHeight - gameState.current.paddleHeight;
            }
            
            gameState.current.paddleLeft.y = newY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const resetBall = () => {
        const state = gameState.current;
        state.ball.x = state.canvasWidth / 2;
        state.ball.y = state.canvasHeight / 2;
        state.ball.speed = 5;
        state.ball.dx = (Math.random() > 0.5 ? 1 : -1) * state.ball.speed;
        state.ball.dy = (Math.random() > 0.5 ? 1 : -1) * state.ball.speed;
    };

    const update = () => {
        const state = gameState.current;
        
        state.ball.x += state.ball.dx;
        state.ball.y += state.ball.dy;

        if (state.ball.y + state.ball.size > state.canvasHeight || state.ball.y - state.ball.size < 0) {
            state.ball.dy *= -1;
        }

        const aiCenter = state.paddleRight.y + state.paddleHeight / 2;
        const diff = state.ball.y - aiCenter;
        const aiSpeed = 4.5;
        
        if (diff > 0) state.paddleRight.y += aiSpeed;
        else state.paddleRight.y -= aiSpeed;

        if (state.paddleRight.y < 0) state.paddleRight.y = 0;
        if (state.paddleRight.y > state.canvasHeight - state.paddleHeight) 
            state.paddleRight.y = state.canvasHeight - state.paddleHeight;

        const paddleCollision = (paddleX, paddleY) => {
            return (
                state.ball.x < paddleX + state.paddleWidth &&
                state.ball.x + state.ball.size > paddleX &&
                state.ball.y < paddleY + state.paddleHeight &&
                state.ball.y + state.ball.size > paddleY
            );
        };

        if (paddleCollision(0, state.paddleLeft.y)) {
            state.ball.dx = Math.abs(state.ball.dx) + 0.5;
            state.ball.dx *= 1;
        }

        if (paddleCollision(state.canvasWidth - state.paddleWidth, state.paddleRight.y)) {
            state.ball.dx = Math.abs(state.ball.dx) + 0.5;
            state.ball.dx *= -1;
        }

        if (state.ball.x < 0) {
            state.paddleRight.score++;
            resetBall();
        } else if (state.ball.x > state.canvasWidth) {
            state.paddleLeft.score++;
            resetBall();
        }

        if (state.paddleLeft.score >= 5) {
            setWinner('YOU WIN');
            setGameStarted(false);
        } else if (state.paddleRight.score >= 5) {
            setWinner('SYSTEM WINS');
            setGameStarted(false);
        }
    };

    const draw = (ctx) => {
        const state = gameState.current;
        ctx.fillStyle = '#0b0f1a';
        ctx.fillRect(0, 0, state.canvasWidth, state.canvasHeight);

        ctx.fillStyle = '#39ffca';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#39ffca';

        ctx.strokeStyle = '#39ffca';
        ctx.setLineDash([10, 15]);
        ctx.beginPath();
        ctx.moveTo(state.canvasWidth / 2, 0);
        ctx.lineTo(state.canvasWidth / 2, state.canvasHeight);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(state.ball.x, state.ball.y, state.ball.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillRect(0, state.paddleLeft.y, state.paddleWidth, state.paddleHeight);
        ctx.fillRect(state.canvasWidth - state.paddleWidth, state.paddleRight.y, state.paddleWidth, state.paddleHeight);

        ctx.font = '30px "Segoe UI Mono", monospace';
        ctx.fillText(state.paddleLeft.score.toString(), state.canvasWidth / 4, 50);
        ctx.fillText(state.paddleRight.score.toString(), (state.canvasWidth / 4) * 3, 50);
    };

    const loop = () => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
            update();
            draw(ctx);
            animationFrameId.current = requestAnimationFrame(loop);
        }
    };

    const startGame = () => {
        gameState.current.paddleLeft.score = 0;
        gameState.current.paddleRight.score = 0;
        resetBall();
        setWinner(null);
        setGameStarted(true);
        loop();
    };

    useEffect(() => {
        return () => cancelAnimationFrame(animationFrameId.current);
    }, []);

    return (
        <div className="pong-container">
            <div className="pong-header">
                <h2>// PROTOCOL_PONG</h2>
                <p>Use your mouse to control the left paddle.</p>
            </div>
            
            <div className="canvas-wrapper">
                <canvas 
                    ref={canvasRef} 
                    width={800} 
                    height={600}
                />
                
                {!gameStarted && (
                    <div className="overlay">
                        {winner && <h1 className="winner-text">{winner}</h1>}
                        <button className="tech-btn" onClick={startGame}>
                            {winner ? 'RESTART_SYSTEM' : 'INITIATE_GAME'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PongGame;