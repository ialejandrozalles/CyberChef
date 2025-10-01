/**
 * @author Izai Alejandro Zalles Merino <zallesrene@gmail.com> (ialejandrozalles)
 * @copyright © 2025 Izai Alejandro Zalles Merino
 * @license Apache-2.0
 */

import { decodeBase91 } from "../lib/Base91.mjs";
import Operation from "../Operation.mjs";

/**
 * From Base91 operation
 */
class FromBase91 extends Operation {
    /**
     * FromBase91 constructor
     */
    constructor() {
        super();

        this.name = "From Base91";
        this.module = "Default";
        this.description = "Base91 is a binary-to-text encoding scheme that uses 91 printable ASCII characters. It provides better space efficiency than Base64 while maintaining readability. This operation decodes Base91-encoded text back to its original binary data.";
        this.infoURL = "https://en.wikipedia.org/wiki/Binary-to-text_encoding#Encoding_standards";
        this.inputType = "string";
        this.outputType = "ArrayBuffer";
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {ArrayBuffer}
     */
    run(input, args) {
        const decoded = decodeBase91(input);
        return decoded.buffer.slice(decoded.byteOffset, decoded.byteOffset + decoded.byteLength);
    }
}

export default FromBase91;
