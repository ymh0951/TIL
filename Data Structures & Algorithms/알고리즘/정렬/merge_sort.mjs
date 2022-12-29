function MergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        let midIndex = parseInt(leftIndex + rightIndex / 2);
        MergeSort(arr, leftIndex, rightIndex);
        MergeSort(arr, midIndex + 1, rightIndex);
        MErge (leftIndex, midIndex, rightIndex);
    }
}