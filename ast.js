import antlr4 from 'antlr4'
import Lexer from './gen/Lexer.mjs'
import Parser from './gen/Parser.mjs'
import Visitor from './Visitor.mjs'

const input = `add =
    fn(a,b) ->
        a + b
    end`
const chars = new antlr4.InputStream(input);
const lexer = new Lexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.file();
const visitor = new Visitor()
visitor.start(tree)
// console.log(tree)
