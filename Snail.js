function snail(arr){
    var src = arr.map(a => a.slice());
    var result = [];
    var pushAll = e => result.push(e);
    var fase = 0;
    while (src.filter(a => a.length > 0).length > 0){
        switch (fase++ % 4){
            case 0:
                src.splice(0, 1)[0].forEach(pushAll);
                break;
            case 1:
                src.map(a => a.splice(-1)[0]).forEach(pushAll);
                break;
            case 2:
                src.splice(-1)[0].reverse().forEach(pushAll);
                break;
            case 3:
                src.map(a => a.splice(0, 1)[0]).reverse().forEach(pushAll);
                break;
        }
    }
    return result;
}
