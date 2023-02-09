let calcRequirdCandy = function (requiredEXP, xlLimit, lLimit, mLimit, sLimit, xsLimit) {
    let [xlCount, lCount, mCount, sCount, xsCount] = [0, 0, 0, 0, 0];
    let remainingEXP = requiredEXP;

    //目標経験値に到達するまで、XLアメから順に使っていく
    for (xlCount = 0; xlCount <= xlLimit && remainingEXP >= xlCount * 30000; xlCount++) {
        calcNowEXP(xlCount, lCount, mCount, sCount, xsCount);
        remainingEXP -= xlCount * 30000;
    }

    for (lCount = 0; lCount <= lLimit && remainingEXP >= lCount * 10000; lCount++) {
        calcNowEXP(xlCount, lCount, mCount, sCount, xsCount);
        remainingEXP -= lCount * 10000;
    }

    for (mCount = 0; mCount <= mLimit && remainingEXP >= mCount * 3000; mCount++) {
        calcNowEXP(xlCount, lCount, mCount, sCount, xsCount);
        remainingEXP -= mCount * 3000;
    }

    for (sCount = 0; sCount <= sLimit && remainingEXP >= sCount * 800; sCount++) {
        calcNowEXP(xlCount, lCount, mCount, sCount, xsCount);
        remainingEXP -= sCount * 800;
    }

    for (xsCount = 0; xsCount <= xsLimit && remainingEXP >= xsCount * 100; xsCount++) {
        console.log(calcNowEXP(xlCount, lCount, mCount, sCount, xsCount));
        remainingEXP -= xsCount * 100;
    }

    if (remainingEXP > 0) {
        return [false, xlCount, lCount, mCount, sCount, xsCount, remainingEXP];
    } else {
        return [true, xlCount, lCount, mCount, sCount, xsCount, -remainingEXP];
    }
}

let calcNowEXP = function (xl, l, m, s, xs) {
    let exp = xl * 30000 + l * 10000 + m * 3000 + s * 800 + xs * 100;
    return exp;
}