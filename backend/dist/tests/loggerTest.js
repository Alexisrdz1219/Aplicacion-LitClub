"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
logger_1.default.info("🔹 Log de prueba INFO en PostgreSQL");
logger_1.default.warn("⚠ Log de prueba WARN en PostgreSQL");
logger_1.default.error("❌ Log de prueba ERROR en PostgreSQL");
