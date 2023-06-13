import { ErrorMessages } from "./errorMessage.enum"

class matemagica {
    x:number
    y:number

    private setSum() {
        return this.x + this.y
    }

    private setSub(){
        return this.x - this.y
    }

    private setDiv(){
        return this.x / this.y
    }

    private setMult(){
        return this.x * this.y
    }

    public setX(x: number) {
        if(typeof x !== 'number'){
            return ErrorMessages.INVALID_TYPE
        }
        this.x = x
    }

    public setY(y: number){
        if(typeof y !== 'number'){
            return ErrorMessages.INVALID_TYPE
        }
        this.y = y
    }

    public getX(){
        return this.x
    }

    public getY(){
        return this.y
    }

    public getSum(){
        return this.setSum()
    }

    public getSub(){
        return this.setSub()
    }
    
    public getDiv(){
        return this.setDiv()
    }

    public getMult(){
        return this.setMult()
    }

}

export default new matemagica