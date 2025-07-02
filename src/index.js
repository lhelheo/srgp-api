"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const projectRoutes_1 = __importDefault(require("./api/routes/projectRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", projectRoutes_1.default);
app.get("/test", (req, res) => {
    res.status(200).json({
        message: "Test endpoint is working!",
    });
    return;
});
app.listen(5000, () => {
    console.log("Servidor rodando em http://localhost:5000");
});
