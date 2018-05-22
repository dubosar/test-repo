export default class {
    constructor (message){
        this.message = message;
    }

    asAlert(){
        console.log(this.message);
    }
}