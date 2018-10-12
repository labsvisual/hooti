const isEmpty = value => {
    return (
        /*
         * One way to check for a value to be both undefined OR null in just
         * one line of code is to use the '==' operator as it doesn't check the
         * type and "null" and "undefined" both return "undefined" when prefixed
         * with the "typeof" operator.
         *
         * P.S.: That's how !varName works (look up coersion in javascript)
         */
        // value == null
        /*
         * However, a better practice is to ALWAYS use the 'typeof' operator
         * to check for value-constants (undefined, to be precise) because
         * that keyword is not always a constant.
         */
        ( typeof value === 'undefined' ) // takes care of null and undefined
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

// There is a mix of ES6 and ES5.
// It's always better to use export
// when in ES6; use module... whenever
// you need something with backwards
// compatibility.
export default isEmpty;
