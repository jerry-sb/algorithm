class Queue<T> {
    storage: Record<number, T>;
    front: number;
    rear: number;

    constructor() {
        this.storage = {}
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.rear - this.front;
    }

    enqueue(element: T) {
        this.storage[this.rear] = element;
        this.rear++;
    }

    isEmpty() {
        return this.size() === 0;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removed = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        return removed;
    }
}
