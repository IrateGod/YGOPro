function pileShuffle (deck) {
    if (!deck || !deck.length) {
        return deck;
    }
    var minHeaps = deck.length % 5,
        heaps = Math.floor(deck.length / 5),
        i = 0,
        j = 0,
        len = deck.length,
        outputArray = [],
        heapArray = [];
    heaps = (minHeaps > heaps && minHeaps) || (minHeaps = heaps);
    for (j; j < heaps; j++) {
        heapArray.push([]);
    }
    for (i; i < len; /* empty */) {
        heapArray[(i + 1) % minHeaps].push(deck[i++]);
    }
    heapArray.forEach(function (heap) {
        outputArray = outputArray.concat(heap);
    });
    return outputArray;
}
