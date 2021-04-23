grammar Antlr;

NUM: [0-9]+;
MULTIPLICATION : '*';
DIV: '/';
PLUS: '+';
MINUS: '-';
LOGIC: '&&'|'||';
COMPARE:'!='|'=='|'<'|'>'|'>='|'<=';
UNARY_OPERATOR: '--'|'++';
VAR: 'Int'|'Double';
ASSIGN: '=';
SEPARATOR: '\n';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';
WS: [ \t\r\n]+ -> skip;
FOR: 'For';
NEWLINE: ('\r'? '\n' | '\r' | '\n')+;
WHILE: 'While';
IF: 'If';
ELSE: 'Else';
FUNCTION: 'Function';
COMMA: ',';
RETURN: 'Return';
THEN: 'Then';
IDENT : [a-z0-9_]+|[A-Z0-9_]+;

//const
operation
: ASSIGN
| PLUS
| MINUS
| MULTIPLICATION
| DIV
| COMPARE
;

value:
    NUM | IDENT
;

//test
test: line*;

line: (expression | cycle | condition | fn) SEPARATOR
;

cycle: while_cycle | for_cycle;

condition: if_condition;

// variables
variable_declaration:
    VAR IDENT
;

variable_def:
    variable_declaration ASSIGN (value | expression)
;

variable_change_expression:
    IDENT ASSIGN IDENT operation value
    | IDENT UNARY_OPERATOR
;

// expression

expression
    : LPAREN expression  RPAREN
    | primitive_math_operation
    | expression operation expression
    | value
    | logic_expression
    | variable_def
    | variable_declaration
;

primitive_math_operation:
    value primitive_math_operation_right+
;

primitive_math_operation_right:
    operation (value | LPAREN value operation value RPAREN)
;

logic_expression:
    single_logic_exp
    | LPAREN? single_logic_exp LOGIC single_logic_exp RPAREN?
;

single_logic_exp:
    LPAREN? IDENT logic_exp_right* RPAREN?
;

logic_exp_right:
    LOGIC value | COMPARE (value | primitive_math_operation)
;

// for cycle

for_head:
    FOR LPAREN variable_def SEPARATOR logic_expression SEPARATOR variable_change_expression SEPARATOR RPAREN
;

for_cycle
: for_head LCURLY
    line+
    RCURLY
;

// while cycle

while_head:
    WHILE LPAREN logic_expression RPAREN
;

while_cycle:
    while_head LCURLY
    line+
    RCURLY
;

// if condition
if_condition:
    IF LPAREN logic_expression RPAREN THEN LCURLY
    line+
    RCURLY
    else_condition?
;

else_condition:
    ELSE LCURLY
    line+
    RCURLY
;

// function
fn:
    FUNCTION IDENT LPAREN (IDENT (COMMA IDENT)*)? RPAREN (LPAREN VAR RPAREN)? LCURLY
        line*
        RETURN expression SEPARATOR
    RCURLY
;
