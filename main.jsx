function App() {
    //const [podate, setPodate] = React.useState([50, 10, 10, 100, 100, 100, "true", 10, 10, 100, 100, 100, 0]);
    const [podate, setPodate] = React.useState({
        frontLV: 1,
        rearLV: 50,
        enterFrontLV: 1,
        enterRearLV: 50,

        enteredXL: 10,
        enteredL: 10,
        enteredM: 10,
        enteredS: 10,
        enteredXS: 10,

        requierdXL: 10,
        requierdL: 10,
        requierdM: 10,
        requierdS: 10,
        requierdXS: 10,

        excessEXP: 0,

        result: "true"
    });

    const xlCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, target, podate.enteredL, podate.enteredM, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, enteredXL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const lCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, target, podate.enteredM, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, enteredL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const mCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, podate.enteredL, target, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, enteredM: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const sCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, podate.enteredL, podate.enteredM, target, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, enteredS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const xsCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, podate.enteredL, podate.enteredM, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, enteredXS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const frontLVChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate.rearLV] - POKEMON_EXPTYPE["ニャオハ"][target];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, podate.enteredL, podate.enteredM, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, startLV: target, enterFrontLV: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    const rearLVChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][target] - POKEMON_EXPTYPE["ニャオハ"][podate.frontLV];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate.enteredXL, podate.enteredL, podate.enteredM, podate.enteredS, podate.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate(state => ({ ...state, rearLV: target, enterRearLV: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6]}));
        console.log(podate);
    }

    return (
        <div>
            <h1>{podate.result}, XL{podate.requierdXL}, L{podate.requierdL}, M{podate.requierdM}, S{podate.requierdS}, XS{podate.requierdXS}, 残り{podate.excessEXP}</h1>
            start<input value={podate.enterFrontLV} onChange={frontLVChange}/><br></br>
            end<input value={podate.enterRearLV} onChange={rearLVChange}/><br></br>
            xl<input value={podate.enteredXL} onChange={xlCanChange}/><br></br>
            l<input value={podate.enteredL} onChange={lCanChange}/><br></br>
            m<input value={podate.enteredM} onChange={mCanChange}/><br></br>
            s<input value={podate.enteredS} onChange={sCanChange}/><br></br>
            xs<input value={podate.enteredXS} onChange={xsCanChange}/><br></br>
        </div>
    );
}
const target = document.querySelector('#app');
ReactDOM.render(<App />, target);

let calcRequirdCandy = function (requiredEXP, xlLimit, lLimit, mLimit, sLimit, xsLimit) {
    var xls = 0;
    var ls = 0;
    var ms = 0;
    var ss = 0;
    var xss = 0;

    for (let i = 0; i <= xsLimit; i = (i + 1) | 0) {
        xss = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 100) { break; }
    }

    for (let i = 0; i <= sLimit; i = (i + 1) | 0) {
        ss = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= mLimit; i = (i + 1) | 0) {
        ms = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= lLimit; i = (i + 1) | 0) {
        ls = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= xlLimit; i = (i + 1) | 0) {
        xls = i;
        //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
    }

    if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) {
        console.log("faild...");
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(requiredEXP - xls * 30000 - ls * 10000 - ms * 3000 - ss * 800 - xss * 100);
        var remainingEXP = requiredEXP - xls * 30000 - ls * 10000 - ms * 3000 - ss * 800 - xss * 100 ;
        return [false, 0, 0, 0, 0, 0, 0, remainingEXP];
    } else {
        console.log("success!");
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP);

        for (let i = xls; i > 0; i = (i - 1) | 0) {
            //console.log(i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            xls = i;
        }

        for (let i = ls; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            ls = i;
        }

        for (let i = ms; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100) { break; }
            ms = i;
        }

        for (let i = ss; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100) { break; }
            ss = i;
        }

        for (let i = xss; i > 0; i = (i - 1) | 0) {
            //console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100) { break; }
            xss = i;
        }

        var excessEXP = xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP;
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(excessEXP);
        return [true, xls, ls, ms, ss, xss, excessEXP];
    }
}