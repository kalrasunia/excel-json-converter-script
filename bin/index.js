#!/usr/bin/env node
const xlsx = require('xlsx');

const workbook = xlsx.readFile(__dirname + '/myFile.xls');
const sheet_name_list = workbook.SheetNames;
const json_output = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(json_output);
