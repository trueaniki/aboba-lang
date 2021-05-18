export class Program {
    constructor() {
        this.taskDefinitions = []
    }
    addTaskDefinition(taskDefinition) {
        this.taskDefinitions.push(taskDefinition)
    }
}

export class VariableDeclaration {
    constructor(ident, value) {
        this.ident = ident
        this.value = value
    }
}

export class TaskDefinition {
    constructor(args, taskBody) {
        this.args = args
        this.taskBody = taskBody
    }
}

export class FunctionDefinition {
    constructor(args, taskBody) {
        this.args = args
        this.taskType = 'function'
        this.taskBody = taskBody
    }
}

export class MapDefinition {
    constructor(args, taskBody) {
        this.iterator = args.args[0]
        this.iterable = args.args[1]
        this.taskType = 'map'
        this.taskBody = taskBody
    }
}

export class ReduceDefinition {
    constructor(args, taskBody) {
        this.iterator = args.args[0]
        this.iterable = args.args[1]
        this.taskType = 'reduce'
        this.taskBody = taskBody
    }
}

export class FilterDefinition {
    constructor(args, predicate) {
        this.iterator = args.args[0]
        this.iterable = args.args[1]
        this.taskType = 'filter'
        this.predicate = predicate
    }
}

export class Condition {
    constructor(predicate, ifBody, elseBody) {
        this.predicate = predicate
        this.ifBody = ifBody
        this.elseBody = elseBody
    }
}

export class Loop {
    constructor(predicate, loopBody) {
        this.predicate = predicate
        this.loopBody = loopBody
    }
}

export class Expression {
    constructor() {
    }
}

export class Predicate {
    constructor() {
    }
}