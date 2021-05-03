parser grammar Parser;

options { tokenVocab=Lexer; }

literal: DECIMAL_LITERAL | FLOAT_LITERAL | BOOL_LITERAL;

if_statement:
    IF expression ARROW
    task_body
    (ELSE ARROW statement)??
;

statement:
    if_statement |
    expression
    ;

task_body: statement+ END;

fn_task: FN LPAREN (IDENTIFIER (COMMA IDENTIFIER)*)? RPAREN ARROW
    task_body
    ;

map_task: MAP IDENTIFIER IN IDENTIFIER ARROW
    task_body
    ;

reduce_task: REDUCE IDENTIFIER IN IDENTIFIER TO IDENTIFIER ARROW
    task_body
    ;

filter_task: FILTER IDENTIFIER IN IDENTIFIER ARROW
    task_body
    ;

task_call: IDENTIFIER '(' expressionList? ')';

expressionList: expression (',' expression)*;

expression:
    literal |
    LPAREN expression RPAREN |
    task_call |
    prefix='!' expression |
    expression bop=('*'|'/'|'%') expression |
    expression bop=('+'|'-') expression |
    expression bop=('<=' | '>=' | '>' | '<') expression |
    expression bop=('==' | '!=') expression |
    expression bop='&&' expression |
    expression bop='||' expression
    ;


file: (
    fn_task | map_task | reduce_task | filter_task | statement
)*;