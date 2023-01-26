function App() {
    const [podata, setPodata] = React.useState({
        frontLv: 1,
        rearLv: 50,
        enterFrontLv: 1,
        enterRearLv: 50,

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

    const xlCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredXL: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredXL: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, target, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredXL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const lCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredL: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredL: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, target, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredL: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const mCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredM: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredM: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, target, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredM: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const sCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredXS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredS: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredS: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, target, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const xsCanChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enterFrontLv) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enteredXS: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, enteredXS: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, enteredXS: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const frontLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enterFrontLv: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][podata.rearLv] - POKEMON_EXPTYPE["ニャオハ"][target];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            console.log(target);
            setPodata(state => ({ ...state, frontLv: target, enterFrontLv: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, frontLv: target, enterFrontLv: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    const rearLvChange = function (e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 100 ? 100 : target;
        if (isNaN(target) || isNaN(podata.enteredXL) || isNaN(podata.enteredL) || isNaN(podata.enteredM) || isNaN(podata.enteredS) || isNaN(podata.enteredXS) || isNaN(podata.enterRearLv) || target < 0) {
            setPodata(state => ({ ...state, enterRearLv: target }));
            console.log(podata);
            return;
        }
        var requiredEXP = POKEMON_EXPTYPE["ニャオハ"][target] - POKEMON_EXPTYPE["ニャオハ"][podata.frontLv];
        console.log(requiredEXP);
        if (requiredEXP < 0) {
            setPodata(state => ({ ...state, rearLv: target, enterRearLv: target, result: "error", requierdXL: 0, requierdL: 0, requierdM: 0, requierdS: 0, requierdXS: 0, excessEXP: 0 }));
            console.log(podata);
            return;
        }
        var tmp = calcRequirdCandy(requiredEXP, podata.enteredXL, podata.enteredL, podata.enteredM, podata.enteredS, podata.enteredXS);
        tmp[0] = tmp[0] ? "true" : "false";
        setPodata(state => ({ ...state, rearLv: target, enterRearLv: target, result: tmp[0], requierdXL: tmp[1], requierdL: tmp[2], requierdM: tmp[3], requierdS: tmp[4], requierdXS: tmp[5], excessEXP: tmp[6] }));
        console.log(podata);
    }

    return (
        <div>
            <h1>{podata.result}, XL{podata.requierdXL}, L{podata.requierdL}, M{podata.requierdM}, S{podata.requierdS}, XS{podata.requierdXS}, 残り{podata.excessEXP}</h1>
            start<input value={podata.enterFrontLv} onChange={frontLvChange} /><br></br>
            end<input value={podata.enterRearLv} onChange={rearLvChange} /><br></br>
            xl<input value={podata.enteredXL} onChange={xlCanChange} /><br></br>
            l<input value={podata.enteredL} onChange={lCanChange} /><br></br>
            m<input value={podata.enteredM} onChange={mCanChange} /><br></br>
            s<input value={podata.enteredS} onChange={sCanChange} /><br></br>
            xs<input value={podata.enteredXS} onChange={xsCanChange} /><br></br>
        </div>
    );
}
const target = document.querySelector('#app');
ReactDOM.render(<App />, target);