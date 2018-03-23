/**
  Hanoi discs
*/

var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc-1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc-1, aux, src, dst);
    }
};

hanoi(3, 'Src', 'Aux', 'Dst');
