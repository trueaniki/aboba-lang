lexer grammar Lexer;

// Keywords

ELSE:               'else';
IF:                 'if';
FN:                 'fn';
MAP:                'map';
REDUCE:             'reduce';
TO:                 'to';
FILTER:             'filter';
BY:                 'by';
IN:                 'in';
END:                'end';
ARROW:              '->';
EXEC:               'exec';

// Literals

DECIMAL_LITERAL:    ('0' | [1-9] (Digits? | '_'+ Digits)) [lL]?;

FLOAT_LITERAL:      (Digits '.' Digits? | '.' Digits) ExponentPart? [fFdD]?
             |       Digits (ExponentPart [fFdD]? | [fFdD])
             ;

BOOL_LITERAL:       'true'
            |       'false'
            ;
// Separators
LPAREN:             '(';
RPAREN:             ')';
COMMA:              ',';
// Operators
ASSIGN:             '=';
RANGE:              '..';
GT:                 '>';
LT:                 '<';
NOT:               '!';
EQUAL:              '==';
LE:                 '<=';
GE:                 '>=';
NOTEQUAL:           '!=';
AND:                '&&';
OR:                 '||';
ADD:                '+';
SUB:                '-';
MUL:                '*';
DIV:                '/';
MOD:                '%';

WS:                 [ \t\r\n\u000C]+ -> channel(HIDDEN);

IDENTIFIER:         Letter LetterOrDigit*;

// Fragment rules

fragment ExponentPart
    : [eE] [+-]? Digits
    ;
fragment Digits
    : [0-9] ([0-9_]* [0-9])?
    ;
fragment LetterOrDigit
    : Letter
    | [0-9]
    ;
fragment Letter
    : [a-zA-Z$_]
    | ~[\u0000-\u007F\uD800-\uDBFF]
    | [\uD800-\uDBFF] [\uDC00-\uDFFF]
    ;