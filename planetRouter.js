"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Joi = require("joi");
var app = (0, express_1.default)();
var port = 3000;
var planetRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use(planetRouter);
var planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
];
var planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
});
planetRouter.get('/api/planets', function (req, res) {
    res.status(200).json({ msg: "The planet was created", planet: planets });
});
planetRouter.get('/api/planets/:id', function (req, res) {
    var id = req.params.id;
    var planet = planets.find(function (p) { return p.id === Number(id); });
    res.status(200).json(planet);
});
planetRouter.post('/api/planets', function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var newPlanet = { id: id, name: name };
    planets = __spreadArray(__spreadArray([], planets, true), [newPlanet], false);
    res.status(201).json({ msg: "Theplanet was created" });
});
planetRouter.put('/api/planets/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    planets = planets.map(function (p) { return p.id === Number(id) ? (__assign(__assign({}, p), { name: name })) : p; });
    console.log(planets);
    res.status(200).json({ msg: "The planet was updated." });
});
planetRouter.delete('/api/planets/:id', function (req, res) {
    var id = req.params.id;
    planets = planets.filter(function (p) { return p.id !== Number(id); });
    res.status(200).json({ msg: "The planet was deleted." });
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
