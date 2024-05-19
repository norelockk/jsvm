"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Babel = __importStar(require("@babel/standalone"));
const terser_1 = __importDefault(require("terser"));
const Compiler_1 = __importDefault(require("../Compiler/Compiler"));
function transpileToEs5(code) {
    return Babel.transform(code, { presets: ['env'] }).code;
}
const apiRouter = express_1.default.Router();
apiRouter.get('/', (req, res) => {
    res.json({
        x: 'Hello world!'
    });
});
apiRouter.post('/compile/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    if (!code)
        return res.sendStatus(401);
    try {
        const es5Code = transpileToEs5(code);
        const minifiedCode = yield terser_1.default.minify(es5Code, {
            compress: {
                defaults: true,
                reduce_funcs: false,
                passes: 10,
            }
        });
        //TODO: in production, make this automatically minify code!
        const isProduction = true;
        const finalCode = isProduction ? minifiedCode.code : es5Code;
        //console.log(finalCode);
        const compiler = new Compiler_1.default(finalCode, { compress: true });
        compiler.compile().then(code => {
            //console.log(code[1]);
            return res.json({ code: code[0] });
        });
    }
    catch (err) {
        return res.json({ code: ("" + err).slice(0, 200) });
    }
}));
exports.default = apiRouter;
