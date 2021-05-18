import ParserVisitor from './gen/ParserVisitor.mjs'
import Parser from './gen/Parser.mjs'
import {
    Program,
    VariableDeclaration,
    TaskDefinition,
    Condition,
    Expression,
    Loop,
    FilterDefinition,
    FunctionDefinition,
    MapDefinition,
    Predicate,
    ReduceDefinition,
} from './Nodes.mjs'

const taskRulesIndecies = [
    Parser.RULE_fn_task,
    Parser.RULE_map_task,
    Parser.RULE_reduce_task,
    Parser.RULE_filter_task,
]

const getIdent = (identCtx) => identCtx.symbol.source[1].strdata.slice(identCtx.symbol.start, identCtx.symbol.stop+1)

export default class Visitor extends ParserVisitor {
    visitFile(ctx) {
        const program = new Program()
        ctx.task_defenition()
           .map(task => this.visitTask_defenition(task))
           .forEach(task => program.addTaskDefinition(task))
        // console.log(program)
        return super.visitFile(ctx);
    }

    visitTask_defenition(ctx) {
        const taskName = getIdent(ctx.IDENTIFIER())
        let task
        const concreteTask = ctx.children[2]
        switch (concreteTask.ruleIndex) {
            case Parser.RULE_fn_task:
                task = this.visitFn_task(concreteTask)
                break
            case Parser.RULE_map_task:
                task = this.visitMap_task(concreteTask)
                break
            case Parser.RULE_reduce_task:
                task = this.visitReduce_task(concreteTask)
                break
            case Parser.RULE_filter_task:
                task = this.visitFilter_task(concreteTask)
                break
        }
        task.taskName = taskName
        return task;
    }

    visitFn_task(ctx) {
        const args = ctx.IDENTIFIER().map(identCtx => getIdent(identCtx))
        return new FunctionDefinition(args, this.visitTask_body(ctx.task_body()))
    }

    visitMap_task(ctx) {
        const args = ctx.IDENTIFIER().map(identCtx => getIdent(identCtx))
        return new MapDefinition(args, this.visitTask_body(ctx.task_body()))
    }

    visitReduce_task(ctx) {
        const args = ctx.IDENTIFIER().map(identCtx => getIdent(identCtx))
        return new ReduceDefinition(args, this.visitTask_body(ctx.task_body()))
    }

    visitFilter_task(ctx) {
        const args = ctx.IDENTIFIER().map(identCtx => getIdent(identCtx))
        return new FilterDefinition(args, this.visitPredicate(ctx.predicate()))
    }

    visitTask_body(ctx) {
        const statements = ctx.statement()
        
    }

    start(ctx) {
        return this.visitFile(ctx)
    }
}