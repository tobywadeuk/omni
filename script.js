let hello = document.getElementById("hello")
let ltv = document.getElementById("ltv")
let price = document.getElementById("price")
let retention = document.getElementById("retention")
let adspend = document.getElementById("adspend")
let closing = document.getElementById("closing")
let tc = document.getElementById("trionumber1")
let nr = document.getElementById("trionumber2")
let roi = document.getElementById("trionumber3")
let profit = document.getElementById("trionumber4")
let calc1 = document.getElementById("triocalc1")
let calc2 = document.getElementById("triocalc2")
let calc3 = document.getElementById("triocalc3")
let calc4 = document.getElementById("triocalc4")
let bottomintro = document.getElementById("bottomintro")
let bottomintro2 = document.getElementById("bottomintro2")


closing.addEventListener("input", calc)
adspend.addEventListener("input", calc)
price.addEventListener("input", calc)
retention.addEventListener("input", calc)

function calc(){
    console.log("calc")

    let ltvcalc = price.value * retention.value
    ltv.textContent = "Member LTV = $"+ltvcalc

    let shows = adspend.value / 25
    news.textContent = shows+" new member show-ups per month"

    let mems = Math.trunc(shows * (closing.value/100))
    newm.textContent = mems +" new members per month"

    let totalcost = (parseInt(adspend.value) + (shows*40))*3
    tc.textContent = "$" + totalcost.toLocaleString()

    let newrev = ltvcalc * mems * 3
    nr.textContent = "$" + newrev.toLocaleString()

    let roicalc = newrev/totalcost

    let profitcalc = newrev - totalcost
    profit.textContent = "$" + profitcalc.toLocaleString()
    profit.style.color = "#69B578"

    roi.textContent = Math.round(roicalc) + "x"
    roi.style.color = "#FAF3DD"

    calc1.textContent = "(" + adspend.value + " + " + shows*40 + ") * 3="

    calc2.textContent = ltvcalc + "x" + mems + "x" + 3

    calc3.textContent = "$" + newrev + "/" + "$" + totalcost

    calc4.textContent = "$" + newrev + "-" + "$" + totalcost

    bottomintro2.textContent = "For everyone $1 you spend, you'll receive $" + Math.round(roicalc * 100) / 100

    bottomintro.style.display = "block"
    bottomintro2.style.display = "block"
}
