
// Sticky menu
console.log('haha lol')
$(document).ready(function() {
                                 
    $('#js--section-bother').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            console.log('Hoooray!')
        } else {
            console.log('lol x2')
            $('nav').removeClass('sticky');
        }
        console.log('sorry bro')
    }, {
      offset: '60px;'
    });
});


// Create a class CompanyValue

let CompanyValue = function(cf1, cf2, cf3, cf4, cf5, ptgr, capm, wacc, shares) {

    this.cf1 = cf1;
    this.cf2 = cf2;
    this.cf3 = cf3;
    this.cf4 = cf4;
    this.cf5 = cf5;
    this.ptgr = ptgr;
    this.ptgr20 = this.ptgr * 1.2;
    this.ptgr80 = this.ptgr * .8;
    this.capm = capm;
    this.wacc = wacc;
    this.dr = (this.capm + this.wacc) / 2;;
    this.dr20 = this.dr * 1.2;
    this.dr80 = this.dr * .8;
    this.shares = shares;
    this.calcCell1 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr20/100), 1) + (this.cf2 / Math.pow((1 + this.dr20/100), 2) + this.cf3 / Math.pow((1 + this.dr20/100), 3) + this.cf4 / Math.pow((1 + this.dr20/100), 4) + this.cf5 / Math.pow((1 + this.dr20/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr80/100)) / (this.dr20/100 - this.ptgr80/100)) / Math.pow((1 + this.dr20/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell2 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr20/100), 1) + (this.cf2 / Math.pow((1 + this.dr20/100), 2) + this.cf3 / Math.pow((1 + this.dr20/100), 3) + this.cf4 / Math.pow((1 + this.dr20/100), 4) + this.cf5 / Math.pow((1 + this.dr20/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr/100)) / (this.dr20/100 - this.ptgr/100)) / Math.pow((1 + this.dr20/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell3 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr20/100), 1) + (this.cf2 / Math.pow((1 + this.dr20/100), 2) + this.cf3 / Math.pow((1 + this.dr20/100), 3) + this.cf4 / Math.pow((1 + this.dr20/100), 4) + this.cf5 / Math.pow((1 + this.dr20/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr20/100)) / (this.dr20/100 - this.ptgr20/100)) / Math.pow((1 + this.dr20/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell4 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr/100), 1) + (this.cf2 / Math.pow((1 + this.dr/100), 2) + this.cf3 / Math.pow((1 + this.dr/100), 3) + this.cf4 / Math.pow((1 + this.dr/100), 4) + this.cf5 / Math.pow((1 + this.dr/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr80/100)) / (this.dr/100 - this.ptgr80/100)) / Math.pow((1 + this.dr/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell5 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr/100), 1) + (this.cf2 / Math.pow((1 + this.dr/100), 2) + this.cf3 / Math.pow((1 + this.dr/100), 3) + this.cf4 / Math.pow((1 + this.dr/100), 4) + this.cf5 / Math.pow((1 + this.dr/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr/100)) / (this.dr/100 - this.ptgr/100)) / Math.pow((1 + this.dr/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell6 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr/100), 1) + (this.cf2 / Math.pow((1 + this.dr/100), 2) + this.cf3 / Math.pow((1 + this.dr/100), 3) + this.cf4 / Math.pow((1 + this.dr/100), 4) + this.cf5 / Math.pow((1 + this.dr/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr20/100)) / (this.dr/100 - this.ptgr20/100)) / Math.pow((1 + this.dr/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell7 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr80/100), 1) + (this.cf2 / Math.pow((1 + this.dr80/100), 2) + this.cf3 / Math.pow((1 + this.dr80/100), 3) + this.cf4 / Math.pow((1 + this.dr80/100), 4) + this.cf5 / Math.pow((1 + this.dr80/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr80/100)) / (this.dr80/100 - this.ptgr80/100)) / Math.pow((1 + this.dr80/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell8 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr80/100), 1) + (this.cf2 / Math.pow((1 + this.dr80/100), 2) + this.cf3 / Math.pow((1 + this.dr80/100), 3) + this.cf4 / Math.pow((1 + this.dr80/100), 4) + this.cf5 / Math.pow((1 + this.dr80/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr/100)) / (this.dr80/100 - this.ptgr/100)) / Math.pow((1 + this.dr80/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell9 = function() {
        let beforeTermValue = (this.cf1 / Math.pow((1 + this.dr80/100), 1) + (this.cf2 / Math.pow((1 + this.dr80/100), 2) + this.cf3 / Math.pow((1 + this.dr80/100), 3) + this.cf4 / Math.pow((1 + this.dr80/100), 4) + this.cf5 / Math.pow((1 + this.dr80/100), 5)));
        let terminalValue = ((this.cf5 * (1 + this.ptgr20/100)) / (this.dr80/100 - this.ptgr/100)) / Math.pow((1 + this.dr80/100), 5);
        console.log(beforeTermValue, terminalValue);
        return (beforeTermValue + terminalValue).toFixed(0);
    }
    this.calcCell10 = () => { return (this.calcCell1() / this.shares).toFixed(0) }
    this.calcCell20 = () => { return (this.calcCell2() / this.shares).toFixed(0) }
    this.calcCell30 = () => { return (this.calcCell3() / this.shares).toFixed(0) }
    this.calcCell40 = () => { return (this.calcCell4() / this.shares).toFixed(0) }
    this.calcCell50 = () => { return (this.calcCell5() / this.shares).toFixed(0) }
    this.calcCell60 = () => { return (this.calcCell6() / this.shares).toFixed(0) }
    this.calcCell70 = () => { return (this.calcCell7() / this.shares).toFixed(0) }
    this.calcCell80 = () => { return (this.calcCell8() / this.shares).toFixed(0) }
    this.calcCell90 = () => { return (this.calcCell9() / this.shares).toFixed(0) }
}
// Connect the necessary DOM strings

let domStrings = {
    cf1: '.cf1',
    cf2: '.cf2',
    cf3: '.cf3',
    cf4: '.cf4',
    cf5: '.cf5',
    gr: '.gr',
    capm: '.capm',
    wacc: '.wacc',
    shares: '.shares',
    submit: '.submit-btn',
    ptgr80: '.ptgr80',
    ptgr: '.ptgr',
    ptgr20: '.ptgr20',
    dr80: '.dr80',
    dr: '.dr',
    dr20: '.dr20',
    ptgr80sh: '.ptgr80sh',
    ptgrsh: '.ptgrsh',
    ptgr20sh: '.ptgr20sh',
    dr80sh: '.dr80sh',
    drsh: '.drsh',
    dr20sh: '.dr20sh',
    cell1: '.cell-1',
    cell2: '.cell-2',
    cell3: '.cell-3',
    cell4: '.cell-4',
    cell5: '.cell-5',
    cell6: '.cell-6',
    cell7: '.cell-7',
    cell8: '.cell-8',
    cell9: '.cell-9',
    cell10: '.cell-10',
    cell20: '.cell-20',
    cell30: '.cell-30',
    cell40: '.cell-40',
    cell50: '.cell-50',
    cell60: '.cell-60',
    cell70: '.cell-70',
    cell80: '.cell-80',
    cell90: '.cell-90'
};

let cashFlow1, cashFlow2, cashFlow3, cashFlow4, cashFlow5, growthRate, capapm, waccost, stocks, company;
let gameOn = true;

// function that gets input
getInput = function() {
    cashFlow1 = parseInt(document.querySelector(domStrings.cf1).value);
    cashFlow2 = parseInt(document.querySelector(domStrings.cf2).value);
    cashFlow3 = parseInt(document.querySelector(domStrings.cf3).value);
    cashFlow4 = parseInt(document.querySelector(domStrings.cf4).value);
    cashFlow5 = parseInt(document.querySelector(domStrings.cf5).value);
    growthRate = parseInt(document.querySelector(domStrings.gr).value);
    capapm = parseInt(document.querySelector(domStrings.capm).value);
    waccost = parseInt(document.querySelector(domStrings.wacc).value);
    stocks = parseInt(document.querySelector(domStrings.shares).value);

    company = new CompanyValue(cashFlow1, cashFlow2, cashFlow3, cashFlow4, cashFlow5, growthRate, capapm, waccost, stocks);
    updateValuation();
    gameOn = false;
    return company;
};


//Setting up the event listener
if (gameOn) { document.querySelector(domStrings.submit).addEventListener('click', getInput) };

// Format number
function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Update the UI
updateValuation = function() {

    let c1, c2, c3, c4, c5, c6, c7, c8, c9;

    document.querySelector(domStrings.ptgr80).textContent = (company.ptgr80.toFixed(1) + '%');
    document.querySelector(domStrings.ptgr).textContent = (company.ptgr.toFixed(1) + '%');
    document.querySelector(domStrings.ptgr20).textContent = (company.ptgr20.toFixed(1) + '%');
    document.querySelector(domStrings.dr80).textContent = (company.dr80.toFixed(1) + '%');
    document.querySelector(domStrings.dr).textContent = (company.dr.toFixed(1) + '%');
    document.querySelector(domStrings.dr20).textContent = (company.dr20.toFixed(1) + '%');

    document.querySelector(domStrings.ptgr80sh).textContent = (company.ptgr80.toFixed(1) + '%');
    document.querySelector(domStrings.ptgrsh).textContent = (company.ptgr.toFixed(1) + '%');
    document.querySelector(domStrings.ptgr20sh).textContent = (company.ptgr20.toFixed(1) + '%');
    document.querySelector(domStrings.dr80sh).textContent = (company.dr80.toFixed(1) + '%');
    document.querySelector(domStrings.drsh).textContent = (company.dr.toFixed(1) + '%');
    document.querySelector(domStrings.dr20sh).textContent = (company.dr20.toFixed(1) + '%');

    c1 = company.calcCell1();
    c2 = company.calcCell2();
    c3 = company.calcCell3();
    c4 = company.calcCell4();
    c5 = company.calcCell5();
    c6 = company.calcCell6();
    c7 = company.calcCell7();
    c8 = company.calcCell8();
    c9 = company.calcCell9();

    document.querySelector(domStrings.cell1).textContent = formatNumber(c1);
    document.querySelector(domStrings.cell2).textContent = formatNumber(c2);
    document.querySelector(domStrings.cell3).textContent = formatNumber(c3);
    document.querySelector(domStrings.cell4).textContent = formatNumber(c4);
    document.querySelector(domStrings.cell5).textContent = formatNumber(c5);
    document.querySelector(domStrings.cell6).textContent = formatNumber(c6);
    document.querySelector(domStrings.cell7).textContent = formatNumber(c7);
    document.querySelector(domStrings.cell8).textContent = formatNumber(c8);
    document.querySelector(domStrings.cell9).textContent = formatNumber(c9);

    document.querySelector(domStrings.cell10).textContent = formatNumber(company.calcCell10());
    document.querySelector(domStrings.cell20).textContent = formatNumber(company.calcCell20());
    document.querySelector(domStrings.cell30).textContent = formatNumber(company.calcCell30());
    document.querySelector(domStrings.cell40).textContent = formatNumber(company.calcCell40());
    document.querySelector(domStrings.cell50).textContent = formatNumber(company.calcCell50());
    document.querySelector(domStrings.cell60).textContent = formatNumber(company.calcCell60());
    document.querySelector(domStrings.cell70).textContent = formatNumber(company.calcCell70());
    document.querySelector(domStrings.cell80).textContent = formatNumber(company.calcCell80());
    document.querySelector(domStrings.cell90).textContent = formatNumber(company.calcCell90());

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Valuation dynamics',
                backgroundColor: '#87BCFD',
                borderColor: '#87BCFD',
                data: [c1, c2, c3, c4, c5, c6, c7, c8, c9]
            }]
        },

        // Configuration options go here
        options: {}
    });

}









