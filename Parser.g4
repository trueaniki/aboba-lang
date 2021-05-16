parser grammar Parser;

options { tokenVocab=Lexer; }

literal: DECIMAL_LITERAL | FLOAT_LITERAL | BOOL_LITERAL;

predicate: expression;

if_statement:
    IF predicate ARROW
    task_body
    (ELSE ARROW statement)??
;

while_statement:
    WHILE predicate ARROW
    task_body
    ;

statement:
    if_statement |
    while_statement |
    variable_defenition |
    expression |
    pipeline
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

filter_task: FILTER IDENTIFIER IN IDENTIFIER BY predicate
    ;

variable_defenition: IDENTIFIER ASSIGN (literal | IDENTIFIER | expression);
task_defenition: IDENTIFIER ASSIGN (fn_task | map_task | reduce_task | filter_task);


expressionList: expression (',' expression)*;

expression:
    literal |
    IDENTIFIER |
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

task_call: IDENTIFIER '(' expressionList? ')';

pipeline: ((IDENTIFIER | literal | task_call) PIPE)+ (IDENTIFIER | literal | task_call);

file: (
    variable_defenition | task_defenition | statement
)*;