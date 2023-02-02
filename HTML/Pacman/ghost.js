class Ghost{
    constructor(
        x,
        y,
        width,
        height,
        speed,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        range,
    ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.imageX = imageX;
        this.imageY = imageY;
        this.imageHeight = imageHeight;
        this.imageWidth = imageWidth;
        this.range = range;
        this.rangeTargetIndex = parseInt(Math.random()*4);
        this.target = randomTargetsForGhosts[this.rangeTargetIndex];
        setInterval(()=> {
            this.changeRandomDirection();
        },1000);
    }


    isInRange(){ /*Está dentro do alcance*/
        let xDistance = Math.abs(pacman.getMapX() - this.getMapX);
        let yDistance = Math.abs(pacman.getMapY() - this.getMapY);
        if(
            Math.sqrt((xDistance * xDistance) + (yDistance * yDistance))<=this.range
        ){
            return true;
        }
        return false;
    }

    changeRandomDirection(){ /*Mudar a direção alatória*/
        let addition  = 1;
        this.randomTargetIndex += addition;
        this.randomTargetIndex = this.rangeTargetIndex % 4;
    }

    moveBackwards(){ /*Andar para atrás*/ 
        switch (this.direction){
            case 4: //Direita
                this.x -= this.speed;
                break;
            case 3: //Pra cima
                this.y += this.speed;
                break;
            case 2: //Esquerda
                this.x +=  this.speed;
                break;
            case 1:
                this. y -= this.speed;
                break;
        }
    }

    moveForwards(){ /*Andar para a frente*/
        switch(this.direction){
            case 4: //Direita
                this.x += this.speed;
                break;
            case 3: //Pra cima
                this.y -= this.speed;
                break;
            case 2:
                this.x -= this.speed;
                break
            case 1:
                this.y = this.speed;
                break;
        }
    }

    ckeckCollisions(){/*Verificar colisões*/
        let isCollided = false;
        if(
            map[parseInt(this.y/oneBlockSize)]
            [
                parseInt(this.x/oneBlockSize)
            ] == 1 || 
            map[parseInt(this.y/oneBlockSize + 0.9999)]
            [
                parseInt(this.x/oneBlockSize)
            ] == 1 || 
            map[parseInt(this.y/oneBlockSize)]
            [
                parseInt(this.x/oneBlockSize+0.9999)
            ] == 1 ||
            map[parseInt(this.y/oneBlockSize+0.9999)]
            [
                parseInt(this.x/oneBlockSize+0.9999)
            ] == 1
        ){
            isCollided = true;
        }
        return isCollided;

    }

    changeDirectionIfPossible(){
        let tempDirection = this.direction;
        this.direction = this.calculateNewDirection(
            map,
            parseInt(this.target.x/oneBlockSize),
            parseInt(this.target.y/oneBlockSize)
        );
        if(typeof this.direction == "undefined"){
            this.direction = tempDirection;
            return;
        }

        if(
            this.getMapY() != this.getMapYRightSide() && (
                this.direction == DIRECTION_LEFT || this.direction == DIRECTION_RIGHT
            ))
        {
            
        }
    }

}