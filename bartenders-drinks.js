// https://www.codewars.com/kata/568dc014440f03b13900001d

function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}
console.log(
    getDrinkByProfession("jabrOni"),
    "Patron Tequila",
    "'Jabroni' should map to 'Patron Tequila'"
);
console.log(
    getDrinkByProfession("scHOOl counselor"),
    "Anything with Alcohol",
    "'School Counselor' should map to 'Anything with alcohol'"
);
console.log(
    getDrinkByProfession("prOgramMer"),
    "Hipster Craft Beer",
    "'Programmer' should map to 'Hipster Craft Beer'"
);
console.log(
    getDrinkByProfession("bike ganG member"),
    "Moonshine",
    "'Bike Gang Member' should map to 'Moonshine'"
);
console.log(
    getDrinkByProfession("poLiTiCian"),
    "Your tax dollars",
    "'Politician' should map to 'Your tax dollars'"
);
console.log(
    getDrinkByProfession("rapper"),
    "Cristal",
    "'Rapper' should map to 'Cristal'"
);
console.log(
    getDrinkByProfession("pundit"),
    "Beer",
    "'Pundit' should map to 'Beer'"
);
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
