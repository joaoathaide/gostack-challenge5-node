"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TransactionsRepository_1 = __importDefault(require("../repositories/TransactionsRepository"));
// import CreateTransactionService from '../services/CreateTransactionService';
var transactionRouter = express_1.Router();
var transactionsRepository = new TransactionsRepository_1.default();
transactionRouter.get('/', function (request, response) {
    try {
        var transactions = transactionsRepository.all();
        return transactions;
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
transactionRouter.post('/', function (request, response) {
    try {
        // TODO
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = transactionRouter;
