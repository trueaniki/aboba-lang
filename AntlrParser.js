// Generated from Antlr.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AntlrListener from './AntlrListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001c\u00f9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0007\u00044\n\u0004\f\u0004\u000e\u00047\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005=\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0005\u0006C\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tN\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nX\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000bd\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000bj\n\u000b\f\u000b\u000e\u000bm\u000b\u000b\u0003\f\u0003\f\u0006",
    "\fq\n\f\r\f\u000e\fr\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0005\r}\n\r\u0003\u000e\u0003\u000e\u0005\u000e\u0081",
    "\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u0087\n\u000e\u0005\u000e\u0089\n\u000e\u0003\u000f\u0005\u000f\u008c",
    "\n\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0090\n\u000f\f\u000f\u000e",
    "\u000f\u0093\u000b\u000f\u0003\u000f\u0005\u000f\u0096\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u009d",
    "\n\u0010\u0005\u0010\u009f\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u00ae\n",
    "\u0012\r\u0012\u000e\u0012\u00af\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0006\u0014\u00bc\n\u0014\r\u0014\u000e\u0014\u00bd\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u00c9\n\u0015\r\u0015\u000e",
    "\u0015\u00ca\u0003\u0015\u0003\u0015\u0005\u0015\u00cf\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0006\u0016\u00d4\n\u0016\r\u0016\u000e",
    "\u0016\u00d5\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00e0\n\u0017\f\u0017",
    "\u000e\u0017\u00e3\u000b\u0017\u0005\u0017\u00e5\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00eb\n\u0017\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u00ef\n\u0017\f\u0017\u000e\u0017\u00f2",
    "\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0002\u0003\u0014\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,\u0002\u0004\u0005",
    "\u0002\u0004\u0007\t\t\r\r\u0004\u0002\u0003\u0003\u000b\u000b\u0002",
    "\u0102\u0002.\u0003\u0002\u0002\u0002\u00040\u0003\u0002\u0002\u0002",
    "\u00065\u0003\u0002\u0002\u0002\b<\u0003\u0002\u0002\u0002\nB\u0003",
    "\u0002\u0002\u0002\fD\u0003\u0002\u0002\u0002\u000eF\u0003\u0002\u0002",
    "\u0002\u0010I\u0003\u0002\u0002\u0002\u0012W\u0003\u0002\u0002\u0002",
    "\u0014c\u0003\u0002\u0002\u0002\u0016n\u0003\u0002\u0002\u0002\u0018",
    "t\u0003\u0002\u0002\u0002\u001a\u0088\u0003\u0002\u0002\u0002\u001c",
    "\u008b\u0003\u0002\u0002\u0002\u001e\u009e\u0003\u0002\u0002\u0002 ",
    "\u00a0\u0003\u0002\u0002\u0002\"\u00aa\u0003\u0002\u0002\u0002$\u00b3",
    "\u0003\u0002\u0002\u0002&\u00b8\u0003\u0002\u0002\u0002(\u00c1\u0003",
    "\u0002\u0002\u0002*\u00d0\u0003\u0002\u0002\u0002,\u00d9\u0003\u0002",
    "\u0002\u0002./\t\u0002\u0002\u0002/\u0003\u0003\u0002\u0002\u000201",
    "\t\u0003\u0002\u00021\u0005\u0003\u0002\u0002\u000224\u0005\b\u0005",
    "\u000232\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u00026\u0007\u0003\u0002\u0002\u0002",
    "75\u0003\u0002\u0002\u00028=\u0005\u0014\u000b\u00029=\u0005\n\u0006",
    "\u0002:=\u0005\f\u0007\u0002;=\u0005,\u0017\u0002<8\u0003\u0002\u0002",
    "\u0002<9\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<;\u0003\u0002",
    "\u0002\u0002=>\u0003\u0002\u0002\u0002>?\u0007\u000e\u0002\u0002?\t",
    "\u0003\u0002\u0002\u0002@C\u0005&\u0014\u0002AC\u0005\"\u0012\u0002",
    "B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002C\u000b\u0003\u0002",
    "\u0002\u0002DE\u0005(\u0015\u0002E\r\u0003\u0002\u0002\u0002FG\u0007",
    "\f\u0002\u0002GH\u0007\u000b\u0002\u0002H\u000f\u0003\u0002\u0002\u0002",
    "IJ\u0005\u000e\b\u0002JM\u0007\r\u0002\u0002KN\u0005\u0004\u0003\u0002",
    "LN\u0005\u0014\u000b\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002",
    "\u0002N\u0011\u0003\u0002\u0002\u0002OP\u0007\u000b\u0002\u0002PQ\u0007",
    "\r\u0002\u0002QR\u0007\u000b\u0002\u0002RS\u0005\u0002\u0002\u0002S",
    "T\u0005\u0004\u0003\u0002TX\u0003\u0002\u0002\u0002UV\u0007\u000b\u0002",
    "\u0002VX\u0007\n\u0002\u0002WO\u0003\u0002\u0002\u0002WU\u0003\u0002",
    "\u0002\u0002X\u0013\u0003\u0002\u0002\u0002YZ\b\u000b\u0001\u0002Z[",
    "\u0007\u000f\u0002\u0002[\\\u0005\u0014\u000b\u0002\\]\u0007\u0010\u0002",
    "\u0002]d\u0003\u0002\u0002\u0002^d\u0005\u0016\f\u0002_d\u0005\u0004",
    "\u0003\u0002`d\u0005\u001a\u000e\u0002ad\u0005\u0010\t\u0002bd\u0005",
    "\u000e\b\u0002cY\u0003\u0002\u0002\u0002c^\u0003\u0002\u0002\u0002c",
    "_\u0003\u0002\u0002\u0002c`\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002",
    "\u0002cb\u0003\u0002\u0002\u0002dk\u0003\u0002\u0002\u0002ef\f\u0007",
    "\u0002\u0002fg\u0005\u0002\u0002\u0002gh\u0005\u0014\u000b\bhj\u0003",
    "\u0002\u0002\u0002ie\u0003\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002",
    "ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u0015\u0003\u0002",
    "\u0002\u0002mk\u0003\u0002\u0002\u0002np\u0005\u0004\u0003\u0002oq\u0005",
    "\u0018\r\u0002po\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r",
    "p\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\u0017\u0003\u0002",
    "\u0002\u0002t|\u0005\u0002\u0002\u0002u}\u0005\u0004\u0003\u0002vw\u0007",
    "\u000f\u0002\u0002wx\u0005\u0004\u0003\u0002xy\u0005\u0002\u0002\u0002",
    "yz\u0005\u0004\u0003\u0002z{\u0007\u0010\u0002\u0002{}\u0003\u0002\u0002",
    "\u0002|u\u0003\u0002\u0002\u0002|v\u0003\u0002\u0002\u0002}\u0019\u0003",
    "\u0002\u0002\u0002~\u0089\u0005\u001c\u000f\u0002\u007f\u0081\u0007",
    "\u000f\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0005",
    "\u001c\u000f\u0002\u0083\u0084\u0007\b\u0002\u0002\u0084\u0086\u0005",
    "\u001c\u000f\u0002\u0085\u0087\u0007\u0010\u0002\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089\u0003",
    "\u0002\u0002\u0002\u0088~\u0003\u0002\u0002\u0002\u0088\u0080\u0003",
    "\u0002\u0002\u0002\u0089\u001b\u0003\u0002\u0002\u0002\u008a\u008c\u0007",
    "\u000f\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0091\u0007",
    "\u000b\u0002\u0002\u008e\u0090\u0005\u001e\u0010\u0002\u008f\u008e\u0003",
    "\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0095\u0003",
    "\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0096\u0007",
    "\u0010\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003",
    "\u0002\u0002\u0002\u0096\u001d\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "\b\u0002\u0002\u0098\u009f\u0005\u0004\u0003\u0002\u0099\u009c\u0007",
    "\t\u0002\u0002\u009a\u009d\u0005\u0004\u0003\u0002\u009b\u009d\u0005",
    "\u0016\f\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u0097\u0003",
    "\u0002\u0002\u0002\u009e\u0099\u0003\u0002\u0002\u0002\u009f\u001f\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0007\u0014\u0002\u0002\u00a1\u00a2\u0007",
    "\u000f\u0002\u0002\u00a2\u00a3\u0005\u0010\t\u0002\u00a3\u00a4\u0007",
    "\u000e\u0002\u0002\u00a4\u00a5\u0005\u001a\u000e\u0002\u00a5\u00a6\u0007",
    "\u000e\u0002\u0002\u00a6\u00a7\u0005\u0012\n\u0002\u00a7\u00a8\u0007",
    "\u000e\u0002\u0002\u00a8\u00a9\u0007\u0010\u0002\u0002\u00a9!\u0003",
    "\u0002\u0002\u0002\u00aa\u00ab\u0005 \u0011\u0002\u00ab\u00ad\u0007",
    "\u0011\u0002\u0002\u00ac\u00ae\u0005\b\u0005\u0002\u00ad\u00ac\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00ad\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1\u00b2\u0007\u0012\u0002\u0002\u00b2#\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u0007\u0016\u0002\u0002\u00b4\u00b5\u0007",
    "\u000f\u0002\u0002\u00b5\u00b6\u0005\u001a\u000e\u0002\u00b6\u00b7\u0007",
    "\u0010\u0002\u0002\u00b7%\u0003\u0002\u0002\u0002\u00b8\u00b9\u0005",
    "$\u0013\u0002\u00b9\u00bb\u0007\u0011\u0002\u0002\u00ba\u00bc\u0005",
    "\b\u0005\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007",
    "\u0012\u0002\u0002\u00c0\'\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007",
    "\u0017\u0002\u0002\u00c2\u00c3\u0007\u000f\u0002\u0002\u00c3\u00c4\u0005",
    "\u001a\u000e\u0002\u00c4\u00c5\u0007\u0010\u0002\u0002\u00c5\u00c6\u0007",
    "\u001c\u0002\u0002\u00c6\u00c8\u0007\u0011\u0002\u0002\u00c7\u00c9\u0005",
    "\b\u0005\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003",
    "\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003",
    "\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0007",
    "\u0012\u0002\u0002\u00cd\u00cf\u0005*\u0016\u0002\u00ce\u00cd\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf)\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0007\u0018\u0002\u0002\u00d1\u00d3\u0007",
    "\u0011\u0002\u0002\u00d2\u00d4\u0005\b\u0005\u0002\u00d3\u00d2\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003",
    "\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003",
    "\u0002\u0002\u0002\u00d7\u00d8\u0007\u0012\u0002\u0002\u00d8+\u0003",
    "\u0002\u0002\u0002\u00d9\u00da\u0007\u0019\u0002\u0002\u00da\u00db\u0007",
    "\u000b\u0002\u0002\u00db\u00e4\u0007\u000f\u0002\u0002\u00dc\u00e1\u0007",
    "\u000b\u0002\u0002\u00dd\u00de\u0007\u001a\u0002\u0002\u00de\u00e0\u0007",
    "\u000b\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e3\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003",
    "\u0002\u0002\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003",
    "\u0002\u0002\u0002\u00e4\u00dc\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00ea\u0007",
    "\u0010\u0002\u0002\u00e7\u00e8\u0007\u000f\u0002\u0002\u00e8\u00e9\u0007",
    "\f\u0002\u0002\u00e9\u00eb\u0007\u0010\u0002\u0002\u00ea\u00e7\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003",
    "\u0002\u0002\u0002\u00ec\u00f0\u0007\u0011\u0002\u0002\u00ed\u00ef\u0005",
    "\b\u0005\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003",
    "\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0007\u001b\u0002\u0002\u00f4\u00f5\u0005",
    "\u0014\u000b\u0002\u00f5\u00f6\u0007\u000e\u0002\u0002\u00f6\u00f7\u0007",
    "\u0012\u0002\u0002\u00f7-\u0003\u0002\u0002\u0002\u001c5<BMWckr|\u0080",
    "\u0086\u0088\u008b\u0091\u0095\u009c\u009e\u00af\u00bd\u00ca\u00ce\u00d5",
    "\u00e1\u00e4\u00ea\u00f0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class AntlrParser extends antlr4.Parser {

    static grammarFileName = "Antlr.g4";
    static literalNames = [ null, null, "'*'", "'/'", "'+'", "'-'", null, 
                            null, null, null, null, "'='", "';'", "'('", 
                            "')'", "'{'", "'}'", null, "'For'", null, "'While'", 
                            "'If'", "'Else'", "'Function'", "','", "'Return'", 
                            "'Then'" ];
    static symbolicNames = [ null, "NUM", "MULTIPLICATION", "DIV", "PLUS", 
                             "MINUS", "LOGIC", "COMPARE", "UNARY_OPERATOR", 
                             "IDENT", "VAR", "ASSIGN", "SEPARATOR", "LPAREN", 
                             "RPAREN", "LCURLY", "RCURLY", "WS", "FOR", 
                             "NEWLINE", "WHILE", "IF", "ELSE", "FUNCTION", 
                             "COMMA", "RETURN", "THEN" ];
    static ruleNames = [ "operation", "value", "test", "line", "cycle", 
                         "condition", "variable_declaration", "variable_def", 
                         "variable_change_expression", "expression", "primitive_math_operation", 
                         "primitive_math_operation_right", "logic_expression", 
                         "single_logic_exp", "logic_exp_right", "for_head", 
                         "for_cycle", "while_head", "while_cycle", "if_condition", 
                         "else_condition", "fn" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AntlrParser.ruleNames;
        this.literalNames = AntlrParser.literalNames;
        this.symbolicNames = AntlrParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	operation() {
	    let localctx = new OperationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AntlrParser.RULE_operation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.MULTIPLICATION) | (1 << AntlrParser.DIV) | (1 << AntlrParser.PLUS) | (1 << AntlrParser.MINUS) | (1 << AntlrParser.COMPARE) | (1 << AntlrParser.ASSIGN))) !== 0))) {
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AntlrParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!(_la===AntlrParser.NUM || _la===AntlrParser.IDENT)) {
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AntlrParser.RULE_test);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0)) {
	            this.state = 48;
	            this.line();
	            this.state = 53;
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AntlrParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AntlrParser.NUM:
	        case AntlrParser.IDENT:
	        case AntlrParser.VAR:
	        case AntlrParser.LPAREN:
	            this.state = 54;
	            this.expression(0);
	            break;
	        case AntlrParser.FOR:
	        case AntlrParser.WHILE:
	            this.state = 55;
	            this.cycle();
	            break;
	        case AntlrParser.IF:
	            this.state = 56;
	            this.condition();
	            break;
	        case AntlrParser.FUNCTION:
	            this.state = 57;
	            this.fn();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 60;
	        this.match(AntlrParser.SEPARATOR);
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



	cycle() {
	    let localctx = new CycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AntlrParser.RULE_cycle);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AntlrParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.while_cycle();
	            break;
	        case AntlrParser.FOR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.for_cycle();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AntlrParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.if_condition();
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



	variable_declaration() {
	    let localctx = new Variable_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AntlrParser.RULE_variable_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(AntlrParser.VAR);
	        this.state = 69;
	        this.match(AntlrParser.IDENT);
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



	variable_def() {
	    let localctx = new Variable_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AntlrParser.RULE_variable_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.variable_declaration();
	        this.state = 72;
	        this.match(AntlrParser.ASSIGN);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 73;
	            this.value();
	            break;

	        case 2:
	            this.state = 74;
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



	variable_change_expression() {
	    let localctx = new Variable_change_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AntlrParser.RULE_variable_change_expression);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(AntlrParser.IDENT);
	            this.state = 78;
	            this.match(AntlrParser.ASSIGN);
	            this.state = 79;
	            this.match(AntlrParser.IDENT);
	            this.state = 80;
	            this.operation();
	            this.state = 81;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.match(AntlrParser.IDENT);
	            this.state = 84;
	            this.match(AntlrParser.UNARY_OPERATOR);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, AntlrParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 88;
	            this.match(AntlrParser.LPAREN);
	            this.state = 89;
	            this.expression(0);
	            this.state = 90;
	            this.match(AntlrParser.RPAREN);
	            break;

	        case 2:
	            this.state = 92;
	            this.primitive_math_operation();
	            break;

	        case 3:
	            this.state = 93;
	            this.value();
	            break;

	        case 4:
	            this.state = 94;
	            this.logic_expression();
	            break;

	        case 5:
	            this.state = 95;
	            this.variable_def();
	            break;

	        case 6:
	            this.state = 96;
	            this.variable_declaration();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, AntlrParser.RULE_expression);
	                this.state = 99;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 100;
	                this.operation();
	                this.state = 101;
	                this.expression(6); 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	primitive_math_operation() {
	    let localctx = new Primitive_math_operationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AntlrParser.RULE_primitive_math_operation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.value();
	        this.state = 110; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 109;
	        		this.primitive_math_operation_right();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 112; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	primitive_math_operation_right() {
	    let localctx = new Primitive_math_operation_rightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AntlrParser.RULE_primitive_math_operation_right);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.operation();
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AntlrParser.NUM:
	        case AntlrParser.IDENT:
	            this.state = 115;
	            this.value();
	            break;
	        case AntlrParser.LPAREN:
	            this.state = 116;
	            this.match(AntlrParser.LPAREN);
	            this.state = 117;
	            this.value();
	            this.state = 118;
	            this.operation();
	            this.state = 119;
	            this.value();
	            this.state = 120;
	            this.match(AntlrParser.RPAREN);
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



	logic_expression() {
	    let localctx = new Logic_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AntlrParser.RULE_logic_expression);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.single_logic_exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 125;
	                this.match(AntlrParser.LPAREN);

	            }
	            this.state = 128;
	            this.single_logic_exp();
	            this.state = 129;
	            this.match(AntlrParser.LOGIC);
	            this.state = 130;
	            this.single_logic_exp();
	            this.state = 132;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 131;
	                this.match(AntlrParser.RPAREN);

	            }
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



	single_logic_exp() {
	    let localctx = new Single_logic_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, AntlrParser.RULE_single_logic_exp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AntlrParser.LPAREN) {
	            this.state = 136;
	            this.match(AntlrParser.LPAREN);
	        }

	        this.state = 139;
	        this.match(AntlrParser.IDENT);
	        this.state = 143;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 140;
	                this.logic_exp_right(); 
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 146;
	            this.match(AntlrParser.RPAREN);

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



	logic_exp_right() {
	    let localctx = new Logic_exp_rightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, AntlrParser.RULE_logic_exp_right);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AntlrParser.LOGIC:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.match(AntlrParser.LOGIC);
	            this.state = 150;
	            this.value();
	            break;
	        case AntlrParser.COMPARE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            this.match(AntlrParser.COMPARE);
	            this.state = 154;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 152;
	                this.value();
	                break;

	            case 2:
	                this.state = 153;
	                this.primitive_math_operation();
	                break;

	            }
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



	for_head() {
	    let localctx = new For_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, AntlrParser.RULE_for_head);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(AntlrParser.FOR);
	        this.state = 159;
	        this.match(AntlrParser.LPAREN);
	        this.state = 160;
	        this.variable_def();
	        this.state = 161;
	        this.match(AntlrParser.SEPARATOR);
	        this.state = 162;
	        this.logic_expression();
	        this.state = 163;
	        this.match(AntlrParser.SEPARATOR);
	        this.state = 164;
	        this.variable_change_expression();
	        this.state = 165;
	        this.match(AntlrParser.SEPARATOR);
	        this.state = 166;
	        this.match(AntlrParser.RPAREN);
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



	for_cycle() {
	    let localctx = new For_cycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, AntlrParser.RULE_for_cycle);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.for_head();
	        this.state = 169;
	        this.match(AntlrParser.LCURLY);
	        this.state = 171; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 170;
	            this.line();
	            this.state = 173; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0));
	        this.state = 175;
	        this.match(AntlrParser.RCURLY);
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



	while_head() {
	    let localctx = new While_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, AntlrParser.RULE_while_head);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(AntlrParser.WHILE);
	        this.state = 178;
	        this.match(AntlrParser.LPAREN);
	        this.state = 179;
	        this.logic_expression();
	        this.state = 180;
	        this.match(AntlrParser.RPAREN);
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



	while_cycle() {
	    let localctx = new While_cycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, AntlrParser.RULE_while_cycle);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.while_head();
	        this.state = 183;
	        this.match(AntlrParser.LCURLY);
	        this.state = 185; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 184;
	            this.line();
	            this.state = 187; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0));
	        this.state = 189;
	        this.match(AntlrParser.RCURLY);
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



	if_condition() {
	    let localctx = new If_conditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, AntlrParser.RULE_if_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(AntlrParser.IF);
	        this.state = 192;
	        this.match(AntlrParser.LPAREN);
	        this.state = 193;
	        this.logic_expression();
	        this.state = 194;
	        this.match(AntlrParser.RPAREN);
	        this.state = 195;
	        this.match(AntlrParser.THEN);
	        this.state = 196;
	        this.match(AntlrParser.LCURLY);
	        this.state = 198; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 197;
	            this.line();
	            this.state = 200; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0));
	        this.state = 202;
	        this.match(AntlrParser.RCURLY);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AntlrParser.ELSE) {
	            this.state = 203;
	            this.else_condition();
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



	else_condition() {
	    let localctx = new Else_conditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, AntlrParser.RULE_else_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(AntlrParser.ELSE);
	        this.state = 207;
	        this.match(AntlrParser.LCURLY);
	        this.state = 209; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 208;
	            this.line();
	            this.state = 211; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0));
	        this.state = 213;
	        this.match(AntlrParser.RCURLY);
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



	fn() {
	    let localctx = new FnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, AntlrParser.RULE_fn);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(AntlrParser.FUNCTION);
	        this.state = 216;
	        this.match(AntlrParser.IDENT);
	        this.state = 217;
	        this.match(AntlrParser.LPAREN);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AntlrParser.IDENT) {
	            this.state = 218;
	            this.match(AntlrParser.IDENT);
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===AntlrParser.COMMA) {
	                this.state = 219;
	                this.match(AntlrParser.COMMA);
	                this.state = 220;
	                this.match(AntlrParser.IDENT);
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 228;
	        this.match(AntlrParser.RPAREN);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AntlrParser.LPAREN) {
	            this.state = 229;
	            this.match(AntlrParser.LPAREN);
	            this.state = 230;
	            this.match(AntlrParser.VAR);
	            this.state = 231;
	            this.match(AntlrParser.RPAREN);
	        }

	        this.state = 234;
	        this.match(AntlrParser.LCURLY);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AntlrParser.NUM) | (1 << AntlrParser.IDENT) | (1 << AntlrParser.VAR) | (1 << AntlrParser.LPAREN) | (1 << AntlrParser.FOR) | (1 << AntlrParser.WHILE) | (1 << AntlrParser.IF) | (1 << AntlrParser.FUNCTION))) !== 0)) {
	            this.state = 235;
	            this.line();
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 241;
	        this.match(AntlrParser.RETURN);
	        this.state = 242;
	        this.expression(0);
	        this.state = 243;
	        this.match(AntlrParser.SEPARATOR);
	        this.state = 244;
	        this.match(AntlrParser.RCURLY);
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

AntlrParser.EOF = antlr4.Token.EOF;
AntlrParser.NUM = 1;
AntlrParser.MULTIPLICATION = 2;
AntlrParser.DIV = 3;
AntlrParser.PLUS = 4;
AntlrParser.MINUS = 5;
AntlrParser.LOGIC = 6;
AntlrParser.COMPARE = 7;
AntlrParser.UNARY_OPERATOR = 8;
AntlrParser.IDENT = 9;
AntlrParser.VAR = 10;
AntlrParser.ASSIGN = 11;
AntlrParser.SEPARATOR = 12;
AntlrParser.LPAREN = 13;
AntlrParser.RPAREN = 14;
AntlrParser.LCURLY = 15;
AntlrParser.RCURLY = 16;
AntlrParser.WS = 17;
AntlrParser.FOR = 18;
AntlrParser.NEWLINE = 19;
AntlrParser.WHILE = 20;
AntlrParser.IF = 21;
AntlrParser.ELSE = 22;
AntlrParser.FUNCTION = 23;
AntlrParser.COMMA = 24;
AntlrParser.RETURN = 25;
AntlrParser.THEN = 26;

AntlrParser.RULE_operation = 0;
AntlrParser.RULE_value = 1;
AntlrParser.RULE_test = 2;
AntlrParser.RULE_line = 3;
AntlrParser.RULE_cycle = 4;
AntlrParser.RULE_condition = 5;
AntlrParser.RULE_variable_declaration = 6;
AntlrParser.RULE_variable_def = 7;
AntlrParser.RULE_variable_change_expression = 8;
AntlrParser.RULE_expression = 9;
AntlrParser.RULE_primitive_math_operation = 10;
AntlrParser.RULE_primitive_math_operation_right = 11;
AntlrParser.RULE_logic_expression = 12;
AntlrParser.RULE_single_logic_exp = 13;
AntlrParser.RULE_logic_exp_right = 14;
AntlrParser.RULE_for_head = 15;
AntlrParser.RULE_for_cycle = 16;
AntlrParser.RULE_while_head = 17;
AntlrParser.RULE_while_cycle = 18;
AntlrParser.RULE_if_condition = 19;
AntlrParser.RULE_else_condition = 20;
AntlrParser.RULE_fn = 21;

class OperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_operation;
    }

	ASSIGN() {
	    return this.getToken(AntlrParser.ASSIGN, 0);
	};

	PLUS() {
	    return this.getToken(AntlrParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(AntlrParser.MINUS, 0);
	};

	MULTIPLICATION() {
	    return this.getToken(AntlrParser.MULTIPLICATION, 0);
	};

	DIV() {
	    return this.getToken(AntlrParser.DIV, 0);
	};

	COMPARE() {
	    return this.getToken(AntlrParser.COMPARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitOperation(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_value;
    }

	NUM() {
	    return this.getToken(AntlrParser.NUM, 0);
	};

	IDENT() {
	    return this.getToken(AntlrParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitValue(this);
		}
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_test;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitTest(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_line;
    }

	SEPARATOR() {
	    return this.getToken(AntlrParser.SEPARATOR, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	cycle() {
	    return this.getTypedRuleContext(CycleContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitLine(this);
		}
	}


}



class CycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_cycle;
    }

	while_cycle() {
	    return this.getTypedRuleContext(While_cycleContext,0);
	};

	for_cycle() {
	    return this.getTypedRuleContext(For_cycleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterCycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitCycle(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_condition;
    }

	if_condition() {
	    return this.getTypedRuleContext(If_conditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitCondition(this);
		}
	}


}



class Variable_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_variable_declaration;
    }

	VAR() {
	    return this.getToken(AntlrParser.VAR, 0);
	};

	IDENT() {
	    return this.getToken(AntlrParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterVariable_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitVariable_declaration(this);
		}
	}


}



class Variable_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_variable_def;
    }

	variable_declaration() {
	    return this.getTypedRuleContext(Variable_declarationContext,0);
	};

	ASSIGN() {
	    return this.getToken(AntlrParser.ASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterVariable_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitVariable_def(this);
		}
	}


}



class Variable_change_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_variable_change_expression;
    }

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.IDENT);
	    } else {
	        return this.getToken(AntlrParser.IDENT, i);
	    }
	};


	ASSIGN() {
	    return this.getToken(AntlrParser.ASSIGN, 0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	UNARY_OPERATOR() {
	    return this.getToken(AntlrParser.UNARY_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterVariable_change_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitVariable_change_expression(this);
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
        this.ruleIndex = AntlrParser.RULE_expression;
    }

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
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
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	primitive_math_operation() {
	    return this.getTypedRuleContext(Primitive_math_operationContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	logic_expression() {
	    return this.getTypedRuleContext(Logic_expressionContext,0);
	};

	variable_def() {
	    return this.getTypedRuleContext(Variable_defContext,0);
	};

	variable_declaration() {
	    return this.getTypedRuleContext(Variable_declarationContext,0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Primitive_math_operationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_primitive_math_operation;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	primitive_math_operation_right = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Primitive_math_operation_rightContext);
	    } else {
	        return this.getTypedRuleContext(Primitive_math_operation_rightContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterPrimitive_math_operation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitPrimitive_math_operation(this);
		}
	}


}



class Primitive_math_operation_rightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_primitive_math_operation_right;
    }

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterPrimitive_math_operation_right(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitPrimitive_math_operation_right(this);
		}
	}


}



class Logic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_logic_expression;
    }

	single_logic_exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Single_logic_expContext);
	    } else {
	        return this.getTypedRuleContext(Single_logic_expContext,i);
	    }
	};

	LOGIC() {
	    return this.getToken(AntlrParser.LOGIC, 0);
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterLogic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitLogic_expression(this);
		}
	}


}



class Single_logic_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_single_logic_exp;
    }

	IDENT() {
	    return this.getToken(AntlrParser.IDENT, 0);
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	logic_exp_right = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Logic_exp_rightContext);
	    } else {
	        return this.getTypedRuleContext(Logic_exp_rightContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterSingle_logic_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitSingle_logic_exp(this);
		}
	}


}



class Logic_exp_rightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_logic_exp_right;
    }

	LOGIC() {
	    return this.getToken(AntlrParser.LOGIC, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	COMPARE() {
	    return this.getToken(AntlrParser.COMPARE, 0);
	};

	primitive_math_operation() {
	    return this.getTypedRuleContext(Primitive_math_operationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterLogic_exp_right(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitLogic_exp_right(this);
		}
	}


}



class For_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_for_head;
    }

	FOR() {
	    return this.getToken(AntlrParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	variable_def() {
	    return this.getTypedRuleContext(Variable_defContext,0);
	};

	SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.SEPARATOR);
	    } else {
	        return this.getToken(AntlrParser.SEPARATOR, i);
	    }
	};


	logic_expression() {
	    return this.getTypedRuleContext(Logic_expressionContext,0);
	};

	variable_change_expression() {
	    return this.getTypedRuleContext(Variable_change_expressionContext,0);
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterFor_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitFor_head(this);
		}
	}


}



class For_cycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_for_cycle;
    }

	for_head() {
	    return this.getTypedRuleContext(For_headContext,0);
	};

	LCURLY() {
	    return this.getToken(AntlrParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AntlrParser.RCURLY, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterFor_cycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitFor_cycle(this);
		}
	}


}



class While_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_while_head;
    }

	WHILE() {
	    return this.getToken(AntlrParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	logic_expression() {
	    return this.getTypedRuleContext(Logic_expressionContext,0);
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterWhile_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitWhile_head(this);
		}
	}


}



class While_cycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_while_cycle;
    }

	while_head() {
	    return this.getTypedRuleContext(While_headContext,0);
	};

	LCURLY() {
	    return this.getToken(AntlrParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AntlrParser.RCURLY, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterWhile_cycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitWhile_cycle(this);
		}
	}


}



class If_conditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_if_condition;
    }

	IF() {
	    return this.getToken(AntlrParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(AntlrParser.LPAREN, 0);
	};

	logic_expression() {
	    return this.getTypedRuleContext(Logic_expressionContext,0);
	};

	RPAREN() {
	    return this.getToken(AntlrParser.RPAREN, 0);
	};

	THEN() {
	    return this.getToken(AntlrParser.THEN, 0);
	};

	LCURLY() {
	    return this.getToken(AntlrParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AntlrParser.RCURLY, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	else_condition() {
	    return this.getTypedRuleContext(Else_conditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterIf_condition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitIf_condition(this);
		}
	}


}



class Else_conditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_else_condition;
    }

	ELSE() {
	    return this.getToken(AntlrParser.ELSE, 0);
	};

	LCURLY() {
	    return this.getToken(AntlrParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AntlrParser.RCURLY, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterElse_condition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitElse_condition(this);
		}
	}


}



class FnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AntlrParser.RULE_fn;
    }

	FUNCTION() {
	    return this.getToken(AntlrParser.FUNCTION, 0);
	};

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.IDENT);
	    } else {
	        return this.getToken(AntlrParser.IDENT, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.LPAREN);
	    } else {
	        return this.getToken(AntlrParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.RPAREN);
	    } else {
	        return this.getToken(AntlrParser.RPAREN, i);
	    }
	};


	LCURLY() {
	    return this.getToken(AntlrParser.LCURLY, 0);
	};

	RETURN() {
	    return this.getToken(AntlrParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEPARATOR() {
	    return this.getToken(AntlrParser.SEPARATOR, 0);
	};

	RCURLY() {
	    return this.getToken(AntlrParser.RCURLY, 0);
	};

	VAR() {
	    return this.getToken(AntlrParser.VAR, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AntlrParser.COMMA);
	    } else {
	        return this.getToken(AntlrParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.enterFn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AntlrListener ) {
	        listener.exitFn(this);
		}
	}


}




AntlrParser.OperationContext = OperationContext; 
AntlrParser.ValueContext = ValueContext; 
AntlrParser.TestContext = TestContext; 
AntlrParser.LineContext = LineContext; 
AntlrParser.CycleContext = CycleContext; 
AntlrParser.ConditionContext = ConditionContext; 
AntlrParser.Variable_declarationContext = Variable_declarationContext; 
AntlrParser.Variable_defContext = Variable_defContext; 
AntlrParser.Variable_change_expressionContext = Variable_change_expressionContext; 
AntlrParser.ExpressionContext = ExpressionContext; 
AntlrParser.Primitive_math_operationContext = Primitive_math_operationContext; 
AntlrParser.Primitive_math_operation_rightContext = Primitive_math_operation_rightContext; 
AntlrParser.Logic_expressionContext = Logic_expressionContext; 
AntlrParser.Single_logic_expContext = Single_logic_expContext; 
AntlrParser.Logic_exp_rightContext = Logic_exp_rightContext; 
AntlrParser.For_headContext = For_headContext; 
AntlrParser.For_cycleContext = For_cycleContext; 
AntlrParser.While_headContext = While_headContext; 
AntlrParser.While_cycleContext = While_cycleContext; 
AntlrParser.If_conditionContext = If_conditionContext; 
AntlrParser.Else_conditionContext = Else_conditionContext; 
AntlrParser.FnContext = FnContext; 
