function App() {
    const [podate, setPodate] = React.useState([50, 10, 10, 100, 100, 100, "true", 10, 10, 100, 100, 100, 0]);

    const xlCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate[0]];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(podate[0], target, podate[2], podate[3], podate[4], podate[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([podate[0], target, podate[2], podate[3], podate[4], podate[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const lCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate[0]];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(podate[0], podate[1], target, podate[3], podate[4], podate[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([podate[0], podate[1], target, podate[3], podate[4], podate[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const mCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate[0]];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(podate[0], podate[1], podate[2], target, podate[4], podate[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([podate[0], podate[1], podate[2], target, podate[4], podate[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const sCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate[0]];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(podate[0], podate[1], podate[2], podate[3], target, podate[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([podate[0], podate[1], podate[2], podate[3], target, podate[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const xsCanChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podate[0]];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(podate[0], podate[1], podate[2], podate[3], podate[4], target);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([podate[0], podate[1], podate[2], podate[3], podate[4], target, tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const pokemonChange = function(e) {
        console.log(e.target.value);
        console.log(TYPE100[1]);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][target];
        console.log(requiredEXP);
        var tmp = calcRequirdCandy(requiredEXP, podate[1], podate[2], podate[3], podate[4], podate[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodate([target, podate[1], podate[2], podate[3], podate[4], podate[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    return (
        <div>
            <h1>{podate[6]}, {podate[12]}</h1>
            start<input value={podate[0]} onChange={pokemonChange}/><br></br>
            xl<input value={podate[1]} onChange={xlCanChange}/><br></br>
            l<input value={podate[2]} onChange={lCanChange}/><br></br>
            m<input value={podate[3]} onChange={mCanChange}/><br></br>
            s<input value={podate[4]} onChange={sCanChange}/><br></br>
            xs<input value={podate[5]} onChange={xsCanChange}/><br></br>
        </div>
    );
}
//end作らなケラバならぬ　end - start = 必要経験値
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