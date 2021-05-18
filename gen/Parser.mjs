// Generated from Parser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ParserVisitor from './ParserVisitor.mjs';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003+\u00c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u00040\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006<\n\u0006\u0003\u0007\u0006",
    "\u0007?\n\u0007\r\u0007\u000e\u0007@\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bJ\n\b\f\b\u000e\bM\u000b\b\u0005",
    "\bO\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\fq\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\ry\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e~\n\u000e",
    "\f\u000e\u000e\u000e\u0081\u000b\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u008d\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00a1\n",
    "\u000f\f\u000f\u000e\u000f\u00a4\u000b\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00a9\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00b0\n\u0011\u0003\u0011",
    "\u0006\u0011\u00b3\n\u0011\r\u0011\u000e\u0011\u00b4\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00ba\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00bf\n\u0012\f\u0012\u000e\u0012\u00c2\u000b",
    "\u0012\u0003\u0012\u0003/\u0003\u001c\u0013\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0007",
    "\u0003\u0002\u0010\u0012\u0003\u0002#%\u0003\u0002!\"\u0004\u0002\u0018",
    "\u0019\u001c\u001d\u0004\u0002\u001b\u001b\u001e\u001e\u0002\u00d3\u0002",
    "$\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u0006(\u0003",
    "\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n;\u0003\u0002\u0002\u0002",
    "\f>\u0003\u0002\u0002\u0002\u000eD\u0003\u0002\u0002\u0002\u0010T\u0003",
    "\u0002\u0002\u0002\u0012[\u0003\u0002\u0002\u0002\u0014d\u0003\u0002",
    "\u0002\u0002\u0016k\u0003\u0002\u0002\u0002\u0018r\u0003\u0002\u0002",
    "\u0002\u001az\u0003\u0002\u0002\u0002\u001c\u008c\u0003\u0002\u0002",
    "\u0002\u001e\u00a5\u0003\u0002\u0002\u0002 \u00b2\u0003\u0002\u0002",
    "\u0002\"\u00c0\u0003\u0002\u0002\u0002$%\t\u0002\u0002\u0002%\u0003",
    "\u0003\u0002\u0002\u0002&\'\u0005\u001c\u000f\u0002\'\u0005\u0003\u0002",
    "\u0002\u0002()\u0007\u0004\u0002\u0002)*\u0005\u0004\u0003\u0002*+\u0007",
    "\u000e\u0002\u0002+/\u0005\f\u0007\u0002,-\u0007\u0003\u0002\u0002-",
    ".\u0007\u000e\u0002\u0002.0\u0005\n\u0006\u0002/0\u0003\u0002\u0002",
    "\u0002/,\u0003\u0002\u0002\u00020\u0007\u0003\u0002\u0002\u000212\u0007",
    "\u0005\u0002\u000223\u0005\u0004\u0003\u000234\u0007\u000e\u0002\u0002",
    "45\u0005\f\u0007\u00025\t\u0003\u0002\u0002\u00026<\u0005\u0006\u0004",
    "\u00027<\u0005\b\u0005\u00028<\u0005\u0016\f\u00029<\u0005\u001c\u000f",
    "\u0002:<\u0005 \u0011\u0002;6\u0003\u0002\u0002\u0002;7\u0003\u0002",
    "\u0002\u0002;8\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;:\u0003",
    "\u0002\u0002\u0002<\u000b\u0003\u0002\u0002\u0002=?\u0005\n\u0006\u0002",
    ">=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0007\r",
    "\u0002\u0002C\r\u0003\u0002\u0002\u0002DE\u0007\u0006\u0002\u0002EN",
    "\u0007\u0013\u0002\u0002FK\u0007+\u0002\u0002GH\u0007\u0015\u0002\u0002",
    "HJ\u0007+\u0002\u0002IG\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LO\u0003\u0002",
    "\u0002\u0002MK\u0003\u0002\u0002\u0002NF\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\u0007\u0014\u0002\u0002",
    "QR\u0007\u000e\u0002\u0002RS\u0005\f\u0007\u0002S\u000f\u0003\u0002",
    "\u0002\u0002TU\u0007\u0007\u0002\u0002UV\u0007+\u0002\u0002VW\u0007",
    "\f\u0002\u0002WX\u0007+\u0002\u0002XY\u0007\u000e\u0002\u0002YZ\u0005",
    "\f\u0007\u0002Z\u0011\u0003\u0002\u0002\u0002[\\\u0007\b\u0002\u0002",
    "\\]\u0007+\u0002\u0002]^\u0007\f\u0002\u0002^_\u0007+\u0002\u0002_`",
    "\u0007\t\u0002\u0002`a\u0007+\u0002\u0002ab\u0007\u000e\u0002\u0002",
    "bc\u0005\f\u0007\u0002c\u0013\u0003\u0002\u0002\u0002de\u0007\n\u0002",
    "\u0002ef\u0007+\u0002\u0002fg\u0007\f\u0002\u0002gh\u0007+\u0002\u0002",
    "hi\u0007\u000b\u0002\u0002ij\u0005\u0004\u0003\u0002j\u0015\u0003\u0002",
    "\u0002\u0002kl\u0007+\u0002\u0002lp\u0007\u0016\u0002\u0002mq\u0005",
    "\u0002\u0002\u0002nq\u0007+\u0002\u0002oq\u0005\u001c\u000f\u0002pm",
    "\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002po\u0003\u0002\u0002",
    "\u0002q\u0017\u0003\u0002\u0002\u0002rs\u0007+\u0002\u0002sx\u0007\u0016",
    "\u0002\u0002ty\u0005\u000e\b\u0002uy\u0005\u0010\t\u0002vy\u0005\u0012",
    "\n\u0002wy\u0005\u0014\u000b\u0002xt\u0003\u0002\u0002\u0002xu\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xw\u0003\u0002\u0002\u0002",
    "y\u0019\u0003\u0002\u0002\u0002z\u007f\u0005\u001c\u000f\u0002{|\u0007",
    "\u0015\u0002\u0002|~\u0005\u001c\u000f\u0002}{\u0003\u0002\u0002\u0002",
    "~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0003\u0002\u0002\u0002\u0080\u001b\u0003\u0002\u0002\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0082\u0083\b\u000f\u0001\u0002\u0083",
    "\u008d\u0005\u0002\u0002\u0002\u0084\u008d\u0007+\u0002\u0002\u0085",
    "\u0086\u0007\u0013\u0002\u0002\u0086\u0087\u0005\u001c\u000f\u0002\u0087",
    "\u0088\u0007\u0014\u0002\u0002\u0088\u008d\u0003\u0002\u0002\u0002\u0089",
    "\u008d\u0005\u001e\u0010\u0002\u008a\u008b\u0007\u001a\u0002\u0002\u008b",
    "\u008d\u0005\u001c\u000f\t\u008c\u0082\u0003\u0002\u0002\u0002\u008c",
    "\u0084\u0003\u0002\u0002\u0002\u008c\u0085\u0003\u0002\u0002\u0002\u008c",
    "\u0089\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d",
    "\u00a2\u0003\u0002\u0002\u0002\u008e\u008f\f\b\u0002\u0002\u008f\u0090",
    "\t\u0003\u0002\u0002\u0090\u00a1\u0005\u001c\u000f\t\u0091\u0092\f\u0007",
    "\u0002\u0002\u0092\u0093\t\u0004\u0002\u0002\u0093\u00a1\u0005\u001c",
    "\u000f\b\u0094\u0095\f\u0006\u0002\u0002\u0095\u0096\t\u0005\u0002\u0002",
    "\u0096\u00a1\u0005\u001c\u000f\u0007\u0097\u0098\f\u0005\u0002\u0002",
    "\u0098\u0099\t\u0006\u0002\u0002\u0099\u00a1\u0005\u001c\u000f\u0006",
    "\u009a\u009b\f\u0004\u0002\u0002\u009b\u009c\u0007\u001f\u0002\u0002",
    "\u009c\u00a1\u0005\u001c\u000f\u0005\u009d\u009e\f\u0003\u0002\u0002",
    "\u009e\u009f\u0007 \u0002\u0002\u009f\u00a1\u0005\u001c\u000f\u0004",
    "\u00a0\u008e\u0003\u0002\u0002\u0002\u00a0\u0091\u0003\u0002\u0002\u0002",
    "\u00a0\u0094\u0003\u0002\u0002\u0002\u00a0\u0097\u0003\u0002\u0002\u0002",
    "\u00a0\u009a\u0003\u0002\u0002\u0002\u00a0\u009d\u0003\u0002\u0002\u0002",
    "\u00a1\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u001d\u0003\u0002\u0002\u0002",
    "\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007+\u0002\u0002",
    "\u00a6\u00a8\u0007\u0013\u0002\u0002\u00a7\u00a9\u0005\u001a\u000e\u0002",
    "\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007\u0014\u0002\u0002",
    "\u00ab\u001f\u0003\u0002\u0002\u0002\u00ac\u00b0\u0007+\u0002\u0002",
    "\u00ad\u00b0\u0005\u0002\u0002\u0002\u00ae\u00b0\u0005\u001e\u0010\u0002",
    "\u00af\u00ac\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002",
    "\u00af\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002",
    "\u00b1\u00b3\u0007&\u0002\u0002\u00b2\u00af\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b9\u0003\u0002\u0002\u0002",
    "\u00b6\u00ba\u0007+\u0002\u0002\u00b7\u00ba\u0005\u0002\u0002\u0002",
    "\u00b8\u00ba\u0005\u001e\u0010\u0002\u00b9\u00b6\u0003\u0002\u0002\u0002",
    "\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002",
    "\u00ba!\u0003\u0002\u0002\u0002\u00bb\u00bf\u0005\u0016\f\u0002\u00bc",
    "\u00bf\u0005\u0018\r\u0002\u00bd\u00bf\u0005\n\u0006\u0002\u00be\u00bb",
    "\u0003\u0002\u0002\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bd",
    "\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1#",
    "\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u0013/",
    ";@KNpx\u007f\u008c\u00a0\u00a2\u00a8\u00af\u00b4\u00b9\u00be\u00c0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Parser extends antlr4.Parser {

    static grammarFileName = "Parser.g4";
    static literalNames = [ null, "'else'", "'if'", "'while'", "'fn'", "'map'", 
                            "'reduce'", "'to'", "'filter'", "'by'", "'in'", 
                            "'end'", "'->'", "'exec'", null, null, null, 
                            "'('", "')'", "','", "'='", "'..'", "'>'", "'<'", 
                            "'!'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
                            "'||'", "'+'", "'-'", "'*'", "'/'", "'%'", "'|>'", 
                            null, null, "'#'" ];
    static symbolicNames = [ null, "ELSE", "IF", "WHILE", "FN", "MAP", "REDUCE", 
                             "TO", "FILTER", "BY", "IN", "END", "ARROW", 
                             "EXEC", "DECIMAL_LITERAL", "FLOAT_LITERAL", 
                             "BOOL_LITERAL", "LPAREN", "RPAREN", "COMMA", 
                             "ASSIGN", "RANGE", "GT", "LT", "NOT", "EQUAL", 
                             "LE", "GE", "NOTEQUAL", "AND", "OR", "ADD", 
                             "SUB", "MUL", "DIV", "MOD", "PIPE", "WS", "EOL", 
                             "HASH", "COMMENT", "IDENTIFIER" ];
    static ruleNames = [ "literal", "predicate", "if_statement", "while_statement", 
                         "statement", "task_body", "fn_task", "map_task", 
                         "reduce_task", "filter_task", "variable_defenition", 
                         "task_defenition", "expressionList", "expression", 
                         "task_call", "pipeline", "file" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Parser.ruleNames;
        this.literalNames = Parser.literalNames;
        this.symbolicNames = Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Parser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser.DECIMAL_LITERAL) | (1 << Parser.FLOAT_LITERAL) | (1 << Parser.BOOL_LITERAL))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Parser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Parser.RULE_if_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(Parser.IF);
	        this.state = 39;
	        this.predicate();
	        this.state = 40;
	        this.match(Parser.ARROW);
	        this.state = 41;
	        this.task_body();
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1+1) {
	            this.state = 42;
	            this.match(Parser.ELSE);
	            this.state = 43;
	            this.match(Parser.ARROW);
	            this.state = 44;
	            this.statement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_statement() {
	    let localctx = new While_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Parser.RULE_while_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(Parser.WHILE);
	        this.state = 48;
	        this.predicate();
	        this.state = 49;
	        this.match(Parser.ARROW);
	        this.state = 50;
	        this.task_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Parser.RULE_statement);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.if_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.while_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.variable_defenition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.expression(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.pipeline();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	task_body() {
	    let localctx = new Task_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Parser.RULE_task_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 59;
	            this.statement();
	            this.state = 62; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser.IF) | (1 << Parser.WHILE) | (1 << Parser.DECIMAL_LITERAL) | (1 << Parser.FLOAT_LITERAL) | (1 << Parser.BOOL_LITERAL) | (1 << Parser.LPAREN) | (1 << Parser.NOT))) !== 0) || _la===Parser.IDENTIFIER);
	        this.state = 64;
	        this.match(Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fn_task() {
	    let localctx = new Fn_taskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Parser.RULE_fn_task);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(Parser.FN);
	        this.state = 67;
	        this.match(Parser.LPAREN);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Parser.IDENTIFIER) {
	            this.state = 68;
	            this.match(Parser.IDENTIFIER);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===Parser.COMMA) {
	                this.state = 69;
	                this.match(Parser.COMMA);
	                this.state = 70;
	                this.match(Parser.IDENTIFIER);
	                this.state = 75;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 78;
	        this.match(Parser.RPAREN);
	        this.state = 79;
	        this.match(Parser.ARROW);
	        this.state = 80;
	        this.task_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	map_task() {
	    let localctx = new Map_taskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Parser.RULE_map_task);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(Parser.MAP);
	        this.state = 83;
	        this.match(Parser.IDENTIFIER);
	        this.state = 84;
	        this.match(Parser.IN);
	        this.state = 85;
	        this.match(Parser.IDENTIFIER);
	        this.state = 86;
	        this.match(Parser.ARROW);
	        this.state = 87;
	        this.task_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reduce_task() {
	    let localctx = new Reduce_taskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Parser.RULE_reduce_task);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(Parser.REDUCE);
	        this.state = 90;
	        this.match(Parser.IDENTIFIER);
	        this.state = 91;
	        this.match(Parser.IN);
	        this.state = 92;
	        this.match(Parser.IDENTIFIER);
	        this.state = 93;
	        this.match(Parser.TO);
	        this.state = 94;
	        this.match(Parser.IDENTIFIER);
	        this.state = 95;
	        this.match(Parser.ARROW);
	        this.state = 96;
	        this.task_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filter_task() {
	    let localctx = new Filter_taskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Parser.RULE_filter_task);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(Parser.FILTER);
	        this.state = 99;
	        this.match(Parser.IDENTIFIER);
	        this.state = 100;
	        this.match(Parser.IN);
	        this.state = 101;
	        this.match(Parser.IDENTIFIER);
	        this.state = 102;
	        this.match(Parser.BY);
	        this.state = 103;
	        this.predicate();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_defenition() {
	    let localctx = new Variable_defenitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Parser.RULE_variable_defenition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(Parser.IDENTIFIER);
	        this.state = 106;
	        this.match(Parser.ASSIGN);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 107;
	            this.literal();
	            break;

	        case 2:
	            this.state = 108;
	            this.match(Parser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 109;
	            this.expression(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	task_defenition() {
	    let localctx = new Task_defenitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Parser.RULE_task_defenition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(Parser.IDENTIFIER);
	        this.state = 113;
	        this.match(Parser.ASSIGN);
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Parser.FN:
	            this.state = 114;
	            this.fn_task();
	            break;
	        case Parser.MAP:
	            this.state = 115;
	            this.map_task();
	            break;
	        case Parser.REDUCE:
	            this.state = 116;
	            this.reduce_task();
	            break;
	        case Parser.FILTER:
	            this.state = 117;
	            this.filter_task();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Parser.RULE_expressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.expression(0);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Parser.COMMA) {
	            this.state = 121;
	            this.match(Parser.COMMA);
	            this.state = 122;
	            this.expression(0);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, Parser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 129;
	            this.literal();
	            break;

	        case 2:
	            this.state = 130;
	            this.match(Parser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 131;
	            this.match(Parser.LPAREN);
	            this.state = 132;
	            this.expression(0);
	            this.state = 133;
	            this.match(Parser.RPAREN);
	            break;

	        case 4:
	            this.state = 135;
	            this.task_call();
	            break;

	        case 5:
	            this.state = 136;
	            localctx.prefix = this.match(Parser.NOT);
	            this.state = 137;
	            this.expression(7);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 158;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 140;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 141;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (Parser.MUL - 33)) | (1 << (Parser.DIV - 33)) | (1 << (Parser.MOD - 33)))) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 142;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 143;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 144;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===Parser.ADD || _la===Parser.SUB)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 145;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 146;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 147;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser.GT) | (1 << Parser.LT) | (1 << Parser.LE) | (1 << Parser.GE))) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 148;
	                    this.expression(5);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 149;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 150;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===Parser.EQUAL || _la===Parser.NOTEQUAL)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 151;
	                    this.expression(4);
	                    break;

	                case 5:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 152;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 153;
	                    localctx.bop = this.match(Parser.AND);
	                    this.state = 154;
	                    this.expression(3);
	                    break;

	                case 6:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Parser.RULE_expression);
	                    this.state = 155;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 156;
	                    localctx.bop = this.match(Parser.OR);
	                    this.state = 157;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 162;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	task_call() {
	    let localctx = new Task_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Parser.RULE_task_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(Parser.IDENTIFIER);
	        this.state = 164;
	        this.match(Parser.LPAREN);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (Parser.DECIMAL_LITERAL - 14)) | (1 << (Parser.FLOAT_LITERAL - 14)) | (1 << (Parser.BOOL_LITERAL - 14)) | (1 << (Parser.LPAREN - 14)) | (1 << (Parser.NOT - 14)) | (1 << (Parser.IDENTIFIER - 14)))) !== 0)) {
	            this.state = 165;
	            this.expressionList();
	        }

	        this.state = 168;
	        this.match(Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pipeline() {
	    let localctx = new PipelineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Parser.RULE_pipeline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 173;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 170;
	        		    this.match(Parser.IDENTIFIER);
	        		    break;

	        		case 2:
	        		    this.state = 171;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 172;
	        		    this.task_call();
	        		    break;

	        		}
	        		this.state = 175;
	        		this.match(Parser.PIPE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 178; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 183;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 180;
	            this.match(Parser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 181;
	            this.literal();
	            break;

	        case 3:
	            this.state = 182;
	            this.task_call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, Parser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Parser.IF) | (1 << Parser.WHILE) | (1 << Parser.DECIMAL_LITERAL) | (1 << Parser.FLOAT_LITERAL) | (1 << Parser.BOOL_LITERAL) | (1 << Parser.LPAREN) | (1 << Parser.NOT))) !== 0) || _la===Parser.IDENTIFIER) {
	            this.state = 188;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 185;
	                this.variable_defenition();
	                break;

	            case 2:
	                this.state = 186;
	                this.task_defenition();
	                break;

	            case 3:
	                this.state = 187;
	                this.statement();
	                break;

	            }
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Parser.EOF = antlr4.Token.EOF;
Parser.ELSE = 1;
Parser.IF = 2;
Parser.WHILE = 3;
Parser.FN = 4;
Parser.MAP = 5;
Parser.REDUCE = 6;
Parser.TO = 7;
Parser.FILTER = 8;
Parser.BY = 9;
Parser.IN = 10;
Parser.END = 11;
Parser.ARROW = 12;
Parser.EXEC = 13;
Parser.DECIMAL_LITERAL = 14;
Parser.FLOAT_LITERAL = 15;
Parser.BOOL_LITERAL = 16;
Parser.LPAREN = 17;
Parser.RPAREN = 18;
Parser.COMMA = 19;
Parser.ASSIGN = 20;
Parser.RANGE = 21;
Parser.GT = 22;
Parser.LT = 23;
Parser.NOT = 24;
Parser.EQUAL = 25;
Parser.LE = 26;
Parser.GE = 27;
Parser.NOTEQUAL = 28;
Parser.AND = 29;
Parser.OR = 30;
Parser.ADD = 31;
Parser.SUB = 32;
Parser.MUL = 33;
Parser.DIV = 34;
Parser.MOD = 35;
Parser.PIPE = 36;
Parser.WS = 37;
Parser.EOL = 38;
Parser.HASH = 39;
Parser.COMMENT = 40;
Parser.IDENTIFIER = 41;

Parser.RULE_literal = 0;
Parser.RULE_predicate = 1;
Parser.RULE_if_statement = 2;
Parser.RULE_while_statement = 3;
Parser.RULE_statement = 4;
Parser.RULE_task_body = 5;
Parser.RULE_fn_task = 6;
Parser.RULE_map_task = 7;
Parser.RULE_reduce_task = 8;
Parser.RULE_filter_task = 9;
Parser.RULE_variable_defenition = 10;
Parser.RULE_task_defenition = 11;
Parser.RULE_expressionList = 12;
Parser.RULE_expression = 13;
Parser.RULE_task_call = 14;
Parser.RULE_pipeline = 15;
Parser.RULE_file = 16;

class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_literal;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(Parser.DECIMAL_LITERAL, 0);
	};

	FLOAT_LITERAL() {
	    return this.getToken(Parser.FLOAT_LITERAL, 0);
	};

	BOOL_LITERAL() {
	    return this.getToken(Parser.BOOL_LITERAL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_predicate;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_if_statement;
    }

	IF() {
	    return this.getToken(Parser.IF, 0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.ARROW);
	    } else {
	        return this.getToken(Parser.ARROW, i);
	    }
	};


	task_body() {
	    return this.getTypedRuleContext(Task_bodyContext,0);
	};

	ELSE() {
	    return this.getToken(Parser.ELSE, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitIf_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class While_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_while_statement;
    }

	WHILE() {
	    return this.getToken(Parser.WHILE, 0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	ARROW() {
	    return this.getToken(Parser.ARROW, 0);
	};

	task_body() {
	    return this.getTypedRuleContext(Task_bodyContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitWhile_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_statement;
    }

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	while_statement() {
	    return this.getTypedRuleContext(While_statementContext,0);
	};

	variable_defenition() {
	    return this.getTypedRuleContext(Variable_defenitionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	pipeline() {
	    return this.getTypedRuleContext(PipelineContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Task_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_task_body;
    }

	END() {
	    return this.getToken(Parser.END, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitTask_body(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Fn_taskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_fn_task;
    }

	FN() {
	    return this.getToken(Parser.FN, 0);
	};

	LPAREN() {
	    return this.getToken(Parser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(Parser.RPAREN, 0);
	};

	ARROW() {
	    return this.getToken(Parser.ARROW, 0);
	};

	task_body() {
	    return this.getTypedRuleContext(Task_bodyContext,0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.COMMA);
	    } else {
	        return this.getToken(Parser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitFn_task(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Map_taskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_map_task;
    }

	MAP() {
	    return this.getToken(Parser.MAP, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	IN() {
	    return this.getToken(Parser.IN, 0);
	};

	ARROW() {
	    return this.getToken(Parser.ARROW, 0);
	};

	task_body() {
	    return this.getTypedRuleContext(Task_bodyContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitMap_task(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Reduce_taskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_reduce_task;
    }

	REDUCE() {
	    return this.getToken(Parser.REDUCE, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	IN() {
	    return this.getToken(Parser.IN, 0);
	};

	TO() {
	    return this.getToken(Parser.TO, 0);
	};

	ARROW() {
	    return this.getToken(Parser.ARROW, 0);
	};

	task_body() {
	    return this.getTypedRuleContext(Task_bodyContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitReduce_task(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Filter_taskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_filter_task;
    }

	FILTER() {
	    return this.getToken(Parser.FILTER, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	IN() {
	    return this.getToken(Parser.IN, 0);
	};

	BY() {
	    return this.getToken(Parser.BY, 0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitFilter_task(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Variable_defenitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_variable_defenition;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	ASSIGN() {
	    return this.getToken(Parser.ASSIGN, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitVariable_defenition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Task_defenitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_task_defenition;
    }

	IDENTIFIER() {
	    return this.getToken(Parser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(Parser.ASSIGN, 0);
	};

	fn_task() {
	    return this.getTypedRuleContext(Fn_taskContext,0);
	};

	map_task() {
	    return this.getTypedRuleContext(Map_taskContext,0);
	};

	reduce_task() {
	    return this.getTypedRuleContext(Reduce_taskContext,0);
	};

	filter_task() {
	    return this.getTypedRuleContext(Filter_taskContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitTask_defenition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.COMMA);
	    } else {
	        return this.getToken(Parser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_expression;
        this.prefix = null; // Token
        this.bop = null; // Token
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(Parser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(Parser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(Parser.RPAREN, 0);
	};

	task_call() {
	    return this.getTypedRuleContext(Task_callContext,0);
	};

	NOT() {
	    return this.getToken(Parser.NOT, 0);
	};

	MUL() {
	    return this.getToken(Parser.MUL, 0);
	};

	DIV() {
	    return this.getToken(Parser.DIV, 0);
	};

	MOD() {
	    return this.getToken(Parser.MOD, 0);
	};

	ADD() {
	    return this.getToken(Parser.ADD, 0);
	};

	SUB() {
	    return this.getToken(Parser.SUB, 0);
	};

	LE() {
	    return this.getToken(Parser.LE, 0);
	};

	GE() {
	    return this.getToken(Parser.GE, 0);
	};

	GT() {
	    return this.getToken(Parser.GT, 0);
	};

	LT() {
	    return this.getToken(Parser.LT, 0);
	};

	EQUAL() {
	    return this.getToken(Parser.EQUAL, 0);
	};

	NOTEQUAL() {
	    return this.getToken(Parser.NOTEQUAL, 0);
	};

	AND() {
	    return this.getToken(Parser.AND, 0);
	};

	OR() {
	    return this.getToken(Parser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Task_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_task_call;
    }

	IDENTIFIER() {
	    return this.getToken(Parser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(Parser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(Parser.RPAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitTask_call(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PipelineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_pipeline;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.IDENTIFIER);
	    } else {
	        return this.getToken(Parser.IDENTIFIER, i);
	    }
	};


	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	task_call = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Task_callContext);
	    } else {
	        return this.getTypedRuleContext(Task_callContext,i);
	    }
	};

	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.PIPE);
	    } else {
	        return this.getToken(Parser.PIPE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitPipeline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_file;
    }

	variable_defenition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_defenitionContext);
	    } else {
	        return this.getTypedRuleContext(Variable_defenitionContext,i);
	    }
	};

	task_defenition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Task_defenitionContext);
	    } else {
	        return this.getTypedRuleContext(Task_defenitionContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ParserVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Parser.LiteralContext = LiteralContext; 
Parser.PredicateContext = PredicateContext; 
Parser.If_statementContext = If_statementContext; 
Parser.While_statementContext = While_statementContext; 
Parser.StatementContext = StatementContext; 
Parser.Task_bodyContext = Task_bodyContext; 
Parser.Fn_taskContext = Fn_taskContext; 
Parser.Map_taskContext = Map_taskContext; 
Parser.Reduce_taskContext = Reduce_taskContext; 
Parser.Filter_taskContext = Filter_taskContext; 
Parser.Variable_defenitionContext = Variable_defenitionContext; 
Parser.Task_defenitionContext = Task_defenitionContext; 
Parser.ExpressionListContext = ExpressionListContext; 
Parser.ExpressionContext = ExpressionContext; 
Parser.Task_callContext = Task_callContext; 
Parser.PipelineContext = PipelineContext; 
Parser.FileContext = FileContext; 
