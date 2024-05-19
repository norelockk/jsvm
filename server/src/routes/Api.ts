import express from 'express';
import * as Babel from "@babel/standalone";
import terser from "terser";
import Compiler from "../Compiler/Compiler";

function transpileToEs5(code: string): string {
  return Babel.transform(code, { presets: ['env'] }).code;
}

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({
    x: 'Hello world!'
  });
});

apiRouter.post('/compile/', async (req, res) => {
  const { code } = req.body;
  if (!code) return res.sendStatus(401);

  try {
    const es5Code = transpileToEs5(code);

    const minifiedCode = await terser.minify(es5Code, {
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

    const compiler = new Compiler(finalCode, { compress: true });
    compiler.compile().then(code => {
      //console.log(code[1]);
      return res.json({ code: code[0] });
    })

  } catch (err) {
    return res.json({ code: ("" + err).slice(0, 200) });
  }
});

export default apiRouter;
