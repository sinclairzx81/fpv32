"use strict";
var memorycache = require("./memory-cache");
var memory = require("./memory");
var iterations = 50000;
memorycache.run(iterations);
memory.run(iterations);
