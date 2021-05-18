// Generated from Parser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by Parser.

export default class ParserVisitor extends antlr4.tree.ParseTreeVisitor {
    // Visit a parse tree produced by Parser#literal.
    visitLiteral(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#predicate.
    visitPredicate(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#if_statement.
    visitIf_statement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#while_statement.
    visitWhile_statement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#statement.
    visitStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#task_body.
    visitTask_body(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#fn_task.
    visitFn_task(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#map_task.
    visitMap_task(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#reduce_task.
    visitReduce_task(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#filter_task.
    visitFilter_task(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#variable_defenition.
    visitVariable_defenition(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#task_defenition.
    visitTask_defenition(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#expressionList.
    visitExpressionList(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#expression.
    visitExpression(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#task_call.
    visitTask_call(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#pipeline.
    visitPipeline(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by Parser#file.
    visitFile(ctx) {
        return this.visitChildren(ctx);
    }
}