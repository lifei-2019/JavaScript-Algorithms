var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    const hashmap = new Map();

    let pA = headA;
    while (pA) {
        hashmap.set(pA, 1);
        pA = pA.next;
    }

    let pB = headB;
    while (pB) {
        if (hashmap.has(pB)) return pB;
        pB = pB.next;
    }
};