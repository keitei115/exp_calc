function App() {
    const [name, setName] = React.useState([1640000, 10, 10, 100, 100, 100, "false", 10, 10, 100, 100, 100, 0]);

    const handleChange = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var tmp = calcRequirdCandy(name[0], target, name[2], name[3], name[4], name[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setName([name[0], target, name[2], name[3], name[4], name[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const handleChange2 = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var tmp = calcRequirdCandy(name[0], name[1], e.target.value, name[3], name[4], name[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setName([name[0], name[1], target, name[3], name[4], name[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const handleChange3 = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var tmp = calcRequirdCandy(name[0], name[1], name[2], e.target.value, name[4], name[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setName([name[0], name[1], name[2], target, name[4], name[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const handleChange4 = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var tmp = calcRequirdCandy(name[0], name[1], name[2], name[3], e.target.value, name[5]);
        tmp[0] = tmp[0] ? "true" : "false";
        setName([name[0], name[1], name[2], name[3], target, name[5], tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const handleChange5 = function(e) {
        console.log(e.target.value);
        var target = e.target.value;
        target = target > 999 ? 999 : target;
        var tmp = calcRequirdCandy(name[0], name[1], name[2], name[3], name[4], e.target.value);
        tmp[0] = tmp[0] ? "true" : "false";
        setName([name[0], name[1], name[2], name[3], name[4], target, tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5], tmp[6]]);
    }

    const handleChange0 = function(e) {
        console.log(e.target.value);
        var tmp = e.target.value | 0;
        setName([tmp, name[1], name[2], name[3], name[4], name[5]]);
    }

    //e => setName(TestFunc(e.target.value | 0,1) | 0);
    const handleClick = _ => setName([5,10,15]);

    return (
        <div>
            <h1>{name[6]}, {name[12]}</h1>
            re<input value={name[0]} onChange={handleChange0}/><br></br>
            xl<input value={name[1]} onChange={handleChange}/><br></br>
            l<input value={name[2]} onChange={handleChange2}/><br></br>
            m<input value={name[3]} onChange={handleChange3}/><br></br>
            s<input value={name[4]} onChange={handleChange4}/><br></br>
            xs<input value={name[5]} onChange={handleChange5}/><br></br>
            <input type="button" onClick={handleClick}/>
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);

let TestFunc = function(i,j){
    return (i | 0) + (j | 0);
}

let calcRequirdCandy = function (requiredEXP, xlLimit, lLimit, mLimit, sLimit, xsLimit) {
    var xls = 0;
    var ls = 0;
    var ms = 0;
    var ss = 0;
    var xss = 0;

    for (let i = 0; i <= xsLimit; i = (i + 1) | 0) {
        console.log(1);
        xss = i;
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 100) { break; }
    }

    for (let i = 0; i <= sLimit; i = (i + 1) | 0) {
        ss = i;
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= mLimit; i = (i + 1) | 0) {
        ms = i;
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= lLimit; i = (i + 1) | 0) {
        ls = i;
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
        if (requiredEXP <= i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
    }

    for (let i = 0; i <= xlLimit; i = (i + 1) | 0) {
        xls = i;
        console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
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
            console.log(i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > i * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            xls = i;
        }

        for (let i = ls; i > 0; i = (i - 1) | 0) {
            console.log(xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + i * 10000 + ms * 3000 + ss * 800 + xss * 100) { break; }
            ls = i;
        }

        for (let i = ms; i > 0; i = (i - 1) | 0) {
            console.log(xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + i * 3000 + ss * 800 + xss * 100) { break; }
            ms = i;
        }

        for (let i = ss; i > 0; i = (i - 1) | 0) {
            console.log(xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + i * 800 + xss * 100) { break; }
            ss = i;
        }

        for (let i = xss; i > 0; i = (i - 1) | 0) {
            console.log(xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100)
            if (requiredEXP > xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + i * 100) { break; }
            xss = i;
        }

        var excessEXP = xls * 30000 + ls * 10000 + ms * 3000 + ss * 800 + xss * 100 - requiredEXP;
        console.log(xls + " " + ls + " " + ms + " " + ss + " " + xss);
        console.log(excessEXP);
        return [true, xls, ls, ms, ss, xss, excessEXP];
    }
}