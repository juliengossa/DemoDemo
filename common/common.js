
formatNumber = function(n, suffix='', scale=1, accuracy=1, style="decimal") {
    n = n/scale;
    return n.toLocaleString(undefined,{style:style,
        minimumFractionDigits:accuracy, maximumFractionDigits:accuracy})
        + suffix;
}