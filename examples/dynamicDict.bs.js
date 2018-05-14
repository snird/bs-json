'use strict';

var Json = require("../src/Json.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Json_decode = require("../src/Json_decode.bs.js");
var Json_encode = require("../src/Json_encode.bs.js");

function obj(json) {
  return /* record */[
          /* static */Json_decode.field("static", Json_decode.string, json),
          /* dynamics */Json_decode.field("dynamics", (function (param) {
                  return Json_decode.dict(Json_decode.$$int, param);
                }), json)
        ];
}

var Decode = /* module */[/* obj */obj];

function obj$1(c) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "static",
                c[/* static */0]
              ],
              /* :: */[
                /* tuple */[
                  "dynamics",
                  Js_dict.map((function (value) {
                          return value;
                        }), c[/* dynamics */1])
                ],
                /* [] */0
              ]
            ]);
}

var Encode = /* module */[/* obj */obj$1];

var data = " {\n  \"static\": \"hi\",\n  \"dynamics\": { \"hello\": 5, \"random\": 8 }\n} ";

var decodedData = obj(Json.parseOrRaise(data));

console.log(decodedData);

console.log(obj$1(decodedData));

var encodedDataBack = /* () */0;

exports.Decode = Decode;
exports.Encode = Encode;
exports.data = data;
exports.decodedData = decodedData;
exports.encodedDataBack = encodedDataBack;
/* decodedData Not a pure module */
