var OUTER_ENUM;
(function (OUTER_ENUM) {
    OUTER_ENUM[OUTER_ENUM["O1"] = 1] = "O1";
    OUTER_ENUM[OUTER_ENUM["O2"] = 1] = "O2";
})(OUTER_ENUM || (OUTER_ENUM = {}));
var XXX = [INNER_ENUM.A1, INNER_ENUM.A2];

export { OUTER_ENUM, XXX };
