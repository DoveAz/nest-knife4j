"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knife4jSetup = void 0;
const express = require("express");
const path_1 = require("path");
function knife4jSetup(app, services) {
    app.use('/', express.static(path_1.resolve(__dirname, '../public/')));
    app.use('/services.json', function (req, res) {
        res.send(services);
    });
}
exports.knife4jSetup = knife4jSetup;
//# sourceMappingURL=index.js.map