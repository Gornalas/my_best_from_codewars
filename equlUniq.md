Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);

function findUniq(arr){
    let template = 0
    for (i = 0; i < arr.length; ++i){
        if (arr[i] == arr[i + 1]){
            template = arr[i];
            break;
        }
    }
    for (i = 0; i < arr.length; ++i){
        if (arr[i] != template) return arr[i];
    }
};
