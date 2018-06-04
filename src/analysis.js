// Initialize variables
var yearSet = new Set();
var dataArray = new Array();
var filterElement = {
    year: "",
    gender: "",
    sherpa: "",
    nation: "",
    reason: ""
};


// Loading data
function loadData() {
    d3.csv("data/Fatalities_Climbers_union.csv").then(function (unionData) {
        console.log(unionData[0]);
        addYears(unionData);

        for (var i = 0; i < unionData.length; i++) {
            dataArray[i] = unionData[i];
        }
        showData(dataArray, filterElement);
    });
    console.log(yearSet);
}


// Create set with all years
function addYears(data) {
    for (var i = 0; i < data.length; i++) {
        yearSet.add(data[i].Year);
    }
    yearSet.forEach(addButton);
}


// Create filter buttons for each year
function addButton(value1, value2, set) {
    // Create new button with id and value
    var newbutton = document.createElement("a");
    newbutton.href = "#Scrollmenu";
    var textnode = document.createTextNode(value2);
    newbutton.id = value2;

    // Add new button to the HTML
    document.getElementById("Scrollmenu").appendChild(newbutton).appendChild(textnode);


    // Add function to the new button
    document.getElementById(value2).addEventListener("click", function () {
        filterYear(value2);
        var current = document.getElementsByClassName("active");
        current[0].className = "";
        this.className += " active";
    }, false);
}


// Filter function for each year
function filterYear(year) {
    filterElement.year = year;
    showData(dataArray, filterElement);
}

// Filter function for showing only sherpas
function filterSherpa() {
    if (filterElement.sherpa === "") {
        filterElement.sherpa = "Sherpa";
    } else {
        filterElement.sherpa = "";
    }
    showData(dataArray, filterElement);
}

// Filter function for showing only people of one gender
function filterGender(g) {
    if (filterElement.gender !== g) {
        filterElement.gender = g;
    } else {
        filterElement.gender = "";
    }
    showData(dataArray, filterElement);
}

// Filter function for showing only people from Switzerland
function filterNation(n) {
    if (filterElement.nation !== n) {
        filterElement.nation = n;
    } else {
        filterElement.nation = "";
    }
    showData(dataArray, filterElement);
}

// Filter function for showing people according to the reason of death
function filterReason(r) {
    filterElement.reason = r;
    showData(dataArray, filterElement);
}


// Delete all existing subfilters (leaving year)
function deleteSubfilters() {
    filterElement.gender = "";
    filterElement.sherpa = "";
    filterElement.nation = "";
    // filterElement.reason = "";
    showData(dataArray, filterElement);
}


// Delete all existing filters
function deleteFilters() {
    filterElement.year = "";
    filterElement.gender = "";
    filterElement.sherpa = "";
    filterElement.nation = "";
    filterElement.reason = "";
    showData(dataArray, filterElement);
}



// Show each fatality / successful climber according to applied filters
function showData(data, givenFilter) {

    // Function to filter the data according to the given filter
    function filterData(d) {
        var toReturn = true;
        if ((givenFilter.year !== "" && d.Year !== givenFilter.year) ||
            (givenFilter.gender !== "" && d.Gender !== givenFilter.gender) ||
            (givenFilter.sherpa !== "" && d.Sherpa !== givenFilter.sherpa) ||
            (givenFilter.nation !== "" && d.Nation !== givenFilter.nation) ||
            (givenFilter.reason !== "" && d.Reason !== givenFilter.reason)
        ) {
            toReturn = false;
        }
        return toReturn;
    }

    // Fatalities: Add new needed divs
    var selFatal = d3.select("#fatal")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason !== "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }));
    selFatal.enter()
        .append("div")
        .attr("class", "tooltip")
        .append("span")
        .select(function () {
            return this.parentNode;
        })
        .append("svg")
        .attr("width", 50)
        .attr("height", 50)
        .append("svg:image");

    // Fatalities: Set right text
    d3.select("#fatal")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason !== "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .select("span")
        .attr("class", "tooltiptext")
        .text(function (d) {
            return d.Lastname + " | " + d.Sherpa + " " + d.Nation + " | " + d.Reason + " | " + d.Year;
        });

    // Fatalities: Add right images
    d3.select("#fatal")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason !== "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .select("svg")
        .select("image")
        .attr("xlink:href", function (d) {
            if (d.Gender === "f") {
                return "images/stickwoman.svg";
            } else {
                return "images/stickman.svg";
            }
        });

    // Fatalities: Remove unnecessary divs
    d3.select("#fatal")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason !== "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .exit().remove();


    // Climbers: Add new needed divs
    var selClimbers = d3.select("#climbers")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason === "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }));
    selClimbers.enter()
        .append("div")
        .attr("class", "tooltip")
        .append("span")
        .select(function () {
            return this.parentNode;
        })
        .append("svg")
        .attr("width", 50)
        .attr("height", 50)
        .append("svg:image");

    // Climbers: Set right text
    d3.select("#climbers")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason === "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .select("span")
        .attr("class", "tooltiptext")
        .text(function (d) {
            return d.Lastname + " | " + d.Sherpa + " " + d.Nation + " | " + d.Year;
        });

    // Climbers: Add right images
    d3.select("#climbers")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason === "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .select("svg")
        .select("image")
        .attr("xlink:href", function (d) {
            if (d.Gender === "f") {
                return "images/stickwoman.svg";
            } else {
                return "images/stickman.svg";
            }
        });

    // Climbers: Remove unnecessary divs
    d3.select("#climbers")
        .select("td")
        .selectAll("div")
        .data(data.filter(function (d) {
            if (d.Reason === "") {
                var toReturn = filterData(d);
                if (toReturn) {
                    return d;
                }
            }
        }))
        .exit().remove();

    // Show active buttons
    showActiveButtons();
}



// Show which buttons are active
function showActiveButtons() {

    // First part for filter layer 2), where multiple buttons can be active
    var onlyfilters = document.getElementById("onlyfilters");
    var obtns = onlyfilters.getElementsByClassName("btn");
    for (var i = 0; i < obtns.length; i++) {
        obtns[i].addEventListener("click", function () {
            var nofilter = true;

            if (filterElement.sherpa === "Sherpa") {
                obtns[1].className += " active";
                nofilter = false;
            } else {
                obtns[1].className = "btn";
            }

            if (filterElement.gender === "m") {
                obtns[2].className += " active";
                obtns[3].className = "btn";
                nofilter = false;
            } else if (filterElement.gender === "f") {
                obtns[2].className = "btn";
                obtns[3].className += " active";
                nofilter = false;
            } else {
                obtns[2].className = "btn";
                obtns[3].className = "btn";
            }

            if (filterElement.nation === "CH") {
                obtns[4].className += " active";
                nofilter = false;
            } else {
                obtns[4].className = "btn";
            }

            if (nofilter) {
                obtns[0].className += " active";
            } else {
                obtns[0].className = "btn";
            }
        }, false);
    }

    // Second part for filter layer 3), where only one button can be active
    var fatalfilters = document.getElementById("fatalfilters");
    var fbtns = fatalfilters.getElementsByClassName("btn");
    for (var x = 0; x < fbtns.length; x++) {
        fbtns[x].addEventListener("click", function () {
            var current = fatalfilters.getElementsByClassName("active");
            current[0].className = "";
            this.className += " active";
        }, false);
    }
}
