const array = ["pepe", "juan", "oscar"];

// Vamos a construir un array desde cero con JS

class MyArray
{
    constructor() {
        this.length = 0;
        this.data = {};        
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // Elimina el último elemento del array
    pop() {
        for (let i = 0; i <= this.length; i++) {
            if(i == this.length - 1) {
                // Eliminamos
                this.length--;
                delete this.data[this.length];
                return this.length;
            }
        }
    }

    delete(index) {

    }


    // Método para reordenar
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        return this.length--;
    }
}


const myArray = new MyArray();