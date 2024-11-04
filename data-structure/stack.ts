class Stack<T> {
    storage: Record<number, T>;
    rear: number;

    constructor() {
        this.storage = {};
        this.rear = 0;
    }

    size() {
        return this.rear;
    }

    isEmpty() {
        return this.rear === 0;
    }

    push(element: T) {
        this.storage[this.rear] = element;
        this.rear++;
    }

    pop() {
        if (this.isEmpty()) return null
        this.rear--;
        const removed = this.storage[this.rear];
        delete this.storage[this.rear];
        return removed;
    }
}
