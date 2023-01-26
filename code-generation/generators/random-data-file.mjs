import fs from "fs";
import crypto from "crypto";
import { fileSize } from '../consts.mjs'
import { wrapInFunction, wrapInConst } from '../utils.mjs'

export const generateRandomJsDataFile = ({ fileName, jsonSize = fileSize, keySize = 8, valueSize = 16, functionize = false }) => {
    const entriesCount = jsonSize / (keySize + valueSize);
    const json = {};
    for (let i = 0; i < entriesCount; i++) {
        const key = crypto.randomBytes(keySize).toString('hex');
        const value = crypto.randomBytes(valueSize).toString('hex');
        json[key] = value;
    }

    const data = JSON.stringify(json, null, 2);
    let content = functionize ? wrapInFunction(data) : wrapInConst(data);
    fs.writeFileSync(fileName, content);
}