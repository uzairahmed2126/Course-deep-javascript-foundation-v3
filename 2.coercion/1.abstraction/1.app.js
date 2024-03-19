class implementAbstraction {
    set(x, y) {
        this.a = x;
        this.b = y;
    };
    display() {
        console.log(`a = ${this.a}`);
        console.log(`b = ${this.b}`);
        console.log(`sum = ${this.a + this.b}`);
    };
};
const obj = new implementAbstraction();
obj.set(10, 30);
obj.display();