class ListNode<T> {
    next: ListNode<T> | null;
    element: T;

    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}

export class Linked<T> {
    head: ListNode<T> | null;
    size: number;

    constructor(element?: T) {
        if (element) {
            this.head = new ListNode(element);
            this.size = 1;
        } else {
            this.head = null;
            this.size = 0;
        }
    }

    add(element: T) {
        const newNode = new ListNode(element);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insertAt(element: T, index: number) {
        if (index > this.size || index < 0) return;

        const newNode = new ListNode(element);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous: ListNode<T> | null = null;
            let count = 0;

            // current가 null이 아닐 때만 루프를 계속 진행
            while (count < index && current !== null) {
                previous = current;
                current = current.next;
                count++;
            }

            // previous가 null이 아닐 경우에만 next 설정
            if (previous) {
                newNode.next = current;
                previous.next = newNode;
            }
        }
        this.size++;
    }

    deleteAt(index: number): T | null {
        if (index >= this.size || index < 0 || this.head === null) return null;

        let deletedElement: T;

        if (index === 0) {
            // 첫 번째 요소 삭제
            deletedElement = this.head.element;
            this.head = this.head.next;
        } else {
            let current: ListNode<T> | null = this.head;
            let previous: ListNode<T> | null = null;
            let count = 0;

            // 인덱스 위치까지 이동
            while (count < index && current !== null) {
                previous = current;
                current = current.next;
                count++;
            }

            // 노드 삭제
            if (current && previous) {
                deletedElement = current.element;
                previous.next = current.next;
            } else {
                return null;
            }
        }

        this.size--;
        return deletedElement;
    }

}

