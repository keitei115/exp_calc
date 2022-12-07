const requiredEXP = 142500;
const xlLimit = 3;
const lLimit = 2;
const mLimit = 10;
const sLimit = 3;
const xsLimit = 10;

var xls = 0;
var ls = 0;
var ms = 0;
var ss = 0;
var xss = 0;

for(i=0; i<=xsLimit; i=(i+1)|0){
    if(requiredEXP <= i * 100){
        xss = i;
        break;
    }
    if(i==mLimit){
        xss = i;
    }
}
console.log("xss");
console.log(xss);

for(i=0; i<=sLimit; i=(i+1)|0){
    console.log(i * 800 + xss * 100);
    if(requiredEXP <= i * 800 + xss * 100){
        ss = i;
        break;
    }
    if(i==sLimit){
        ss = i;
    }
}
console.log("ss");
console.log(ss);

for(i=0; i<=mLimit; i=(i+1)|0){
    if(requiredEXP <= i * 3000 + ss * 800 + xss * 100){
        ms = i;
        break;
    }
    if(i==mLimit){
        ms = i;
    }
}
console.log("ms");
console.log(ms);

for(i=0; i<=lLimit; i=(i+1)|0){
    if(requiredEXP <= i * 10000 + ms * 3000 + ss * 800 + xss * 100){
        ls = i;
        break;
    }
    if(i==lLimit){
        ls = i;
    }
}
console.log("ls");
console.log(ls);

for(i=0; i<=xlLimit; i=(i+1)|0){
    if(requiredEXP <= i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100){
        xls = i;
        break;
    }
    if(i==xlLimit){
        xls = i;
    }
}
console.log("xls");
console.log(xls);

if(requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100){
    console.log("faild...");
    console.log(requiredEXP - xls * 30000 - ls * 10000 - ms * 3000 - ss * 800 - xss * 100);
} else {
    console.log("success!");
    console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP);

    for(i=xss; i>0; i=(i-1)|0){
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + (i-1) * 100)
        if(requiredEXP >= xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + (i-1) * 100){
            break;
        }
        xss = i;
    }

    for(i=ss; i>0; i=(i-1)|0){
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + (i-1) * 800 + xss * 100)
        if(requiredEXP >= xls * 30000 + ls * 10000 + ms * 3000 + (i-1) * 800 + xss * 100){
            break;
        }
        ss = i;
    }

    for(i=ms; i>0; i=(i-1)|0){
        console.log(xls * 30000 + ls * 10000 + (i-1) * 3000 + ss * 800 + xss * 100)
        if(requiredEXP >= xls * 30000 + ls * 10000 + (i-1) * 3000 + ss * 800 + xss * 100){
            break;
        }
        ms = i;
    }

    for(i=ls; i>0; i=(i-1)|0){
        console.log(xls * 30000 + (i-1) * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if(requiredEXP >= xls * 30000 + (i-1) * 10000 + ms * 3000 + ss * 800 + xss * 100){
            break;
        }
        ls = i;
    }

    for(i=xls; i>0; i=(i-1)|0){
        console.log((i-1) * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if(requiredEXP >= (i-1) * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100){
            break;
        }
        xls = i;
    }

    console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP);
}