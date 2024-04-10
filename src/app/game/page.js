'use client';
import { useState, useEffect } from 'react';

import gameCSS from './game.css';

export default function GamePage() {

    const [ canvasElement, setCanvasElement ] = useState();
    const [ canvas, setCanvas ] = useState();

    // Initialize Canvas
    async function initializeCanvas(){
        var init_canvasElement = document.querySelector('canvas');
        var init_canvas = init_canvasElement.getContext('2d');

        init_canvasElement.width = 1024;
        init_canvasElement.height = 576;

        init_canvas.fillRect(0, 0, init_canvasElement.width, init_canvasElement.height);

        await setCanvasElement(init_canvasElement);
        await setCanvas(init_canvas);

    }

    // Class
    class Sprite {
        
        constructor(position){
            this.position = position;

        }

        draw(){

            if(canvas){
                canvas.fillStyle = 'red';
                canvas.fillRect(this.position.x, this.position.y, 50, 50);
            
            }

        }

    }

    // Initialize Player & Enemy
    function initializePlayers(){
        const player = new Sprite({
            x: 0,
            y: 0
        });
        player.draw();

        const enemy = new Sprite({
            x: 1024 - 50,
            y: 0
        })
        enemy.draw();
    }

    // Use Effect
    useEffect(()=>{
        initializeCanvas();
        initializePlayers();

        // Initialize Player & Enemy

    }, []);


    // Return
    return (

        <main>

            <h2>Game</h2>

            <canvas></canvas>

        </main>

    );

}
