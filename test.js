import AntlrLexer from './AntlrLexer.js'
import AntlrParser from './AntlrParser.js'
import antlr from 'antlr4'

const input = new antlr.InputStream('Int a = 1 + 2;')

const lexer = new AntlrLexer(input)
const tokens = new antlr.CommonTokenStream(lexer)
const parser = new AntlrParser(tokens)
parser.buildParseTrees = true
const tree = parser.line()

console.log(tree.children[0].children)
