export class Example {
    /**
     * method used to create the object
     * let object = new Example("value")
     * @param {any} value the value of the object
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * method used to get the value of the object
     * let value = object.value();
     * @return {any} the object's value
     */
    get value() {
        return this.value;
    }

    /**
     * method used to change the value of the object
     * object.value("newValue")
     * @param  {any} newValue the new value of the object
     */
    value(newValue) {
        this.value = newValue;
    }

    /**
     * tell if a and b are equals
     * @param  {Example} a value to compare
     * @param  {Example} b value to compare
     * @return {boolean}   if a and b are equals
     */
    static areEquals(a, b) {
        return a === b;
    }
}
