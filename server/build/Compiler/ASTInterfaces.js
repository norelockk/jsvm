"use strict";
// BEGIN InterpretLang
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSVM_AssignPropertyPowerOf = exports.JSVM_AssignPropertyBitShiftRight = exports.JSVM_AssignPropertyBitShiftLeft = exports.JSVM_AssignPropertyBitwiseAnd = exports.JSVM_AssignPropertyXor = exports.JSVM_AssignPropertyPipe = exports.JSVM_AssignPropertyZeroRightShiftFill = exports.JSVM_AssignPropertyDiv = exports.JSVM_AssignPropertyMul = exports.JSVM_AssignPropertyMinus = exports.JSVM_AssignPropertyPlus = exports.JSVM_Global = exports.JSVM_AssignProperty = exports.JSVM_AssignVariableBitwiseAnd = exports.JSVM_AssignVariableRaisePower = exports.JSVM_AssignVariableBitShiftRight = exports.JSVM_AssignVariableBitShiftLeft = exports.JSVM_AssignVariableXor = exports.JSVM_AssignVariableZeroRightShiftFill = exports.JSVM_AssignVariableMinus = exports.JSVM_AssignVariableRemainder = exports.JSVM_AssignVariablePlus = exports.JSVM_AssignVariableDiv = exports.JSVM_AssignVariableMul = exports.JSVM_AssignVariablePipe = exports.JSVM_AssignVariable = exports.JSVM_Collection = exports.JSVM_MemberExpression = exports.JSVM_PropertyFuncCall = exports.JSVM_FuncCall = exports.JSVM_NewCall = exports.JSVM_ConditionalIfStatement = exports.JSVM_DoWhileLoop = exports.JSVM_Property = exports.JSVM_Sequence = exports.JSVM_Object = exports.JSVM_LogicalOr = exports.JSVM_LogicalAnd = exports.JSVM_Array = exports.JSVM_WhileLoop = exports.JSVM_Throw = exports.JSVM_ForLoop = exports.JSVM_SwitchStatement = exports.JSVM_SwitchCase = exports.JSVM_Catch = exports.JSVM_TryStatement = exports.JSVM_IfStatement = exports.JSVM_GotoScope = exports.JSVM_DefaultNode = exports.JSVM_Node = void 0;
exports.JSVM_ContinueStatement = exports.JSVM_Break = exports.JSVM_This = exports.JSVM_ArgumentsRef = exports.JSVM_SelfFnRef = exports.JSVM_Identifier = exports.JSVM_LoadUndefined = exports.JSVM_LoadNull = exports.JSVM_LoadInt = exports.JSVM_Declare = exports.JSVM_MinusMinus = exports.JSVM_PlusPlus = exports.JSVM_ObjectMinusMinus = exports.JSVM_ObjectPlusPlus = exports.JSVM_MoveArgToVar = exports.JSVM_CreateFunc = exports.JSVM_UnaryDeleteMemberExpression = exports.JSVM_UnaryDelete = exports.JSVM_UnaryVoid = exports.JSVM_UnaryInvert = exports.JSVM_UnaryNegate = exports.JSVM_UnaryTypeof = exports.JSVM_UnaryPlus = exports.JSVM_UnaryNot = exports.JSVM_Return = exports.JSVM_Declaration = exports.JSVM_Boolean = exports.JSVM_Regex = exports.JSVM_StringLiteral = exports.JSVM_Literal = exports.JSVM_BinaryExpression = exports.JSVM_ExpressionStatement = exports.JSVM_AssignPropertyRemainder = void 0;
class JSVM_Node {
    constructor(type) {
        this.type = type;
    }
}
exports.JSVM_Node = JSVM_Node;
class JSVM_DefaultNode extends JSVM_Node {
    constructor() {
        super("Node");
    }
}
exports.JSVM_DefaultNode = JSVM_DefaultNode;
class JSVM_GotoScope extends JSVM_Node {
    constructor(scope_id) {
        super(JSVM_GotoScope.type);
        this.scope_id = scope_id;
    }
}
exports.JSVM_GotoScope = JSVM_GotoScope;
JSVM_GotoScope.type = "GotoScope";
class JSVM_IfStatement extends JSVM_Node {
    constructor() {
        super(JSVM_IfStatement.type);
        this.test = null;
        this.consequent = null;
        this.alternate = null;
    }
}
exports.JSVM_IfStatement = JSVM_IfStatement;
JSVM_IfStatement.type = "IfStatement";
class JSVM_TryStatement extends JSVM_Node {
    constructor() {
        super(JSVM_TryStatement.type);
        this.body = null;
        this.catch = null;
        this.finially = null;
    }
}
exports.JSVM_TryStatement = JSVM_TryStatement;
JSVM_TryStatement.type = "TryStatement";
class JSVM_Catch extends JSVM_Node {
    constructor() {
        super(JSVM_Catch.type);
        this.body = null;
        this.param = null;
    }
}
exports.JSVM_Catch = JSVM_Catch;
JSVM_Catch.type = "Catch";
class JSVM_SwitchCase extends JSVM_Node {
    constructor() {
        super(JSVM_SwitchCase.type);
        this.test = null;
        this.consequent = [];
    }
}
exports.JSVM_SwitchCase = JSVM_SwitchCase;
JSVM_SwitchCase.type = "SwitchCase";
class JSVM_SwitchStatement extends JSVM_Node {
    constructor() {
        super(JSVM_SwitchStatement.type);
        this.discriminant = null;
        this.cases = [];
    }
}
exports.JSVM_SwitchStatement = JSVM_SwitchStatement;
JSVM_SwitchStatement.type = "SwitchStatement";
class JSVM_ForLoop extends JSVM_Node {
    constructor() {
        super(JSVM_ForLoop.type);
        this.init = null;
        this.test = null;
        this.update = null;
        this.body = null;
    }
}
exports.JSVM_ForLoop = JSVM_ForLoop;
JSVM_ForLoop.type = "ForLoop";
class JSVM_Throw extends JSVM_Node {
    constructor(argument) {
        super(JSVM_Throw.type);
        this.argument = argument;
    }
}
exports.JSVM_Throw = JSVM_Throw;
JSVM_Throw.type = "Throw";
class JSVM_WhileLoop extends JSVM_Node {
    constructor() {
        super(JSVM_WhileLoop.type);
        this.test = null;
        this.body = null;
    }
}
exports.JSVM_WhileLoop = JSVM_WhileLoop;
JSVM_WhileLoop.type = "WhileLoop";
class JSVM_Array extends JSVM_Node {
    constructor() {
        super(JSVM_Array.type);
        this.elements = [];
    }
}
exports.JSVM_Array = JSVM_Array;
JSVM_Array.type = "Array";
class JSVM_LogicalAnd extends JSVM_Node {
    constructor(left, right) {
        super(JSVM_LogicalAnd.type);
        this.left = left;
        this.right = right;
    }
}
exports.JSVM_LogicalAnd = JSVM_LogicalAnd;
JSVM_LogicalAnd.type = "LogicalAnd";
class JSVM_LogicalOr extends JSVM_Node {
    constructor(left, right) {
        super(JSVM_LogicalOr.type);
        this.left = left;
        this.right = right;
    }
}
exports.JSVM_LogicalOr = JSVM_LogicalOr;
JSVM_LogicalOr.type = "LogicalOr";
class JSVM_Object extends JSVM_Node {
    constructor() {
        super(JSVM_Object.type);
        this.properties = [];
    }
}
exports.JSVM_Object = JSVM_Object;
JSVM_Object.type = "Object";
class JSVM_Sequence extends JSVM_Node {
    constructor() {
        super(JSVM_Sequence.type);
        this.sequence = [];
    }
}
exports.JSVM_Sequence = JSVM_Sequence;
JSVM_Sequence.type = "Sequence";
class JSVM_Property extends JSVM_Node {
    constructor(kind, keyStringId, value) {
        super(JSVM_Property.type);
        this.kind = kind;
        this.keyStringId = keyStringId;
        this.value = value;
    }
}
exports.JSVM_Property = JSVM_Property;
JSVM_Property.type = "Property";
class JSVM_DoWhileLoop extends JSVM_Node {
    constructor() {
        super(JSVM_DoWhileLoop.type);
        this.test = null;
        this.body = null;
    }
}
exports.JSVM_DoWhileLoop = JSVM_DoWhileLoop;
JSVM_DoWhileLoop.type = "DoWhileLoop";
class JSVM_ConditionalIfStatement extends JSVM_Node {
    constructor() {
        super(JSVM_ConditionalIfStatement.type);
        this.test = null;
        this.consequent = null;
        this.alternate = null;
    }
}
exports.JSVM_ConditionalIfStatement = JSVM_ConditionalIfStatement;
JSVM_ConditionalIfStatement.type = "ConditionalIfStatement";
class JSVM_NewCall extends JSVM_Node {
    constructor(callee) {
        super(JSVM_NewCall.type);
        this.arguments = [];
        this.callee = callee;
    }
}
exports.JSVM_NewCall = JSVM_NewCall;
JSVM_NewCall.type = "NewCall";
class JSVM_FuncCall extends JSVM_Node {
    constructor(callee) {
        super(JSVM_FuncCall.type);
        this.arguments = [];
        this.callee = callee;
    }
}
exports.JSVM_FuncCall = JSVM_FuncCall;
JSVM_FuncCall.type = "FuncCall";
class JSVM_PropertyFuncCall extends JSVM_Node {
    constructor(callee) {
        super(JSVM_PropertyFuncCall.type);
        this.arguments = [];
        this.callee = callee;
    }
}
exports.JSVM_PropertyFuncCall = JSVM_PropertyFuncCall;
JSVM_PropertyFuncCall.type = "PropertyFuncCall";
class JSVM_MemberExpression extends JSVM_Node {
    constructor(object, property) {
        super(JSVM_MemberExpression.type);
        this.object = object;
        this.property = property;
    }
}
exports.JSVM_MemberExpression = JSVM_MemberExpression;
JSVM_MemberExpression.type = "MemberExpression";
class JSVM_Collection extends JSVM_Node {
    constructor() {
        super(JSVM_Collection.type);
        this.nodes = [];
    }
}
exports.JSVM_Collection = JSVM_Collection;
JSVM_Collection.type = "Collection";
class JSVM_AssignVariable extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariable.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariable = JSVM_AssignVariable;
JSVM_AssignVariable.type = "AssignVariable";
class JSVM_AssignVariablePipe extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariablePipe.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariablePipe = JSVM_AssignVariablePipe;
JSVM_AssignVariablePipe.type = "AssignVariablePipe";
class JSVM_AssignVariableMul extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableMul.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableMul = JSVM_AssignVariableMul;
JSVM_AssignVariableMul.type = "AssignVariableMul";
class JSVM_AssignVariableDiv extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableDiv.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableDiv = JSVM_AssignVariableDiv;
JSVM_AssignVariableDiv.type = "AssignVariableDiv";
class JSVM_AssignVariablePlus extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariablePlus.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariablePlus = JSVM_AssignVariablePlus;
JSVM_AssignVariablePlus.type = "AssignVariablePlus";
class JSVM_AssignVariableRemainder extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableRemainder.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableRemainder = JSVM_AssignVariableRemainder;
JSVM_AssignVariableRemainder.type = "AssignVariableRemainder";
class JSVM_AssignVariableMinus extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableMinus.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableMinus = JSVM_AssignVariableMinus;
JSVM_AssignVariableMinus.type = "AssignVariableMinus";
class JSVM_AssignVariableZeroRightShiftFill extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableZeroRightShiftFill.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableZeroRightShiftFill = JSVM_AssignVariableZeroRightShiftFill;
JSVM_AssignVariableZeroRightShiftFill.type = "AssignVariableZeroRightShiftFill";
class JSVM_AssignVariableXor extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableXor.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableXor = JSVM_AssignVariableXor;
JSVM_AssignVariableXor.type = "AssignVariableXor";
class JSVM_AssignVariableBitShiftLeft extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableBitShiftLeft.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableBitShiftLeft = JSVM_AssignVariableBitShiftLeft;
JSVM_AssignVariableBitShiftLeft.type = "AssignVariableBitShiftLeft";
class JSVM_AssignVariableBitShiftRight extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableBitShiftRight.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableBitShiftRight = JSVM_AssignVariableBitShiftRight;
JSVM_AssignVariableBitShiftRight.type = "AssignVariableBitShiftRight";
class JSVM_AssignVariableRaisePower extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableRaisePower.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableRaisePower = JSVM_AssignVariableRaisePower;
JSVM_AssignVariableRaisePower.type = "AssignVariableRaisePower";
class JSVM_AssignVariableBitwiseAnd extends JSVM_Node {
    constructor(variable, value) {
        super(JSVM_AssignVariableBitwiseAnd.type);
        this.variable = variable;
        this.value = value;
    }
}
exports.JSVM_AssignVariableBitwiseAnd = JSVM_AssignVariableBitwiseAnd;
JSVM_AssignVariableBitwiseAnd.type = "AssignVariableBitwiseAnd";
class JSVM_AssignProperty extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignProperty.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignProperty = JSVM_AssignProperty;
JSVM_AssignProperty.type = "AssignProperty";
class JSVM_Global extends JSVM_Node {
    constructor() {
        super(JSVM_Global.type);
    }
}
exports.JSVM_Global = JSVM_Global;
JSVM_Global.type = "Global";
class JSVM_AssignPropertyPlus extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyPlus.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyPlus = JSVM_AssignPropertyPlus;
JSVM_AssignPropertyPlus.type = "AssignPropertyPlus";
class JSVM_AssignPropertyMinus extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyMinus.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyMinus = JSVM_AssignPropertyMinus;
JSVM_AssignPropertyMinus.type = "AssignPropertyMinus";
class JSVM_AssignPropertyMul extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyMul.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyMul = JSVM_AssignPropertyMul;
JSVM_AssignPropertyMul.type = "AssignPropertyMul";
class JSVM_AssignPropertyDiv extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyDiv.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyDiv = JSVM_AssignPropertyDiv;
JSVM_AssignPropertyDiv.type = "AssignPropertyDiv";
class JSVM_AssignPropertyZeroRightShiftFill extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyZeroRightShiftFill.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyZeroRightShiftFill = JSVM_AssignPropertyZeroRightShiftFill;
JSVM_AssignPropertyZeroRightShiftFill.type = "AssignPropertyZeroRightShiftFill";
class JSVM_AssignPropertyPipe extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyPipe.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyPipe = JSVM_AssignPropertyPipe;
JSVM_AssignPropertyPipe.type = "AssignPropertyPipe";
class JSVM_AssignPropertyXor extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyXor.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyXor = JSVM_AssignPropertyXor;
JSVM_AssignPropertyXor.type = "AssignPropertyXor";
class JSVM_AssignPropertyBitwiseAnd extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyBitwiseAnd.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyBitwiseAnd = JSVM_AssignPropertyBitwiseAnd;
JSVM_AssignPropertyBitwiseAnd.type = "AssignPropertyBitwiseAnd";
class JSVM_AssignPropertyBitShiftLeft extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyBitShiftLeft.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyBitShiftLeft = JSVM_AssignPropertyBitShiftLeft;
JSVM_AssignPropertyBitShiftLeft.type = "AssignPropertyBitShiftLeft";
class JSVM_AssignPropertyBitShiftRight extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyBitShiftRight.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyBitShiftRight = JSVM_AssignPropertyBitShiftRight;
JSVM_AssignPropertyBitShiftRight.type = "AssignPropertyBitShiftRight";
class JSVM_AssignPropertyPowerOf extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyPowerOf.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyPowerOf = JSVM_AssignPropertyPowerOf;
JSVM_AssignPropertyPowerOf.type = "AssignPropertyPowerOf";
class JSVM_AssignPropertyRemainder extends JSVM_Node {
    constructor(obj, prop, value) {
        super(JSVM_AssignPropertyRemainder.type);
        this.obj = obj;
        this.prop = prop;
        this.value = value;
    }
}
exports.JSVM_AssignPropertyRemainder = JSVM_AssignPropertyRemainder;
JSVM_AssignPropertyRemainder.type = "AssignPropertyRemainder";
class JSVM_ExpressionStatement extends JSVM_Node {
    constructor(expression) {
        super(JSVM_ExpressionStatement.type);
        this.expression = expression;
    }
}
exports.JSVM_ExpressionStatement = JSVM_ExpressionStatement;
JSVM_ExpressionStatement.type = "ExpressionStatement";
class JSVM_BinaryExpression extends JSVM_Node {
    constructor(left, right, operator) {
        super(JSVM_BinaryExpression.type);
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}
exports.JSVM_BinaryExpression = JSVM_BinaryExpression;
JSVM_BinaryExpression.type = "BinaryExpression";
class JSVM_Literal extends JSVM_Node {
    constructor(raw, value, string_id = -1) {
        super(JSVM_Literal.type);
        this.string_id = string_id;
        this.raw = raw;
        this.value = value;
    }
}
exports.JSVM_Literal = JSVM_Literal;
JSVM_Literal.type = "Literal";
class JSVM_StringLiteral extends JSVM_Node {
    constructor(string_id = -1) {
        super(JSVM_StringLiteral.type);
        this.string_id = string_id;
    }
}
exports.JSVM_StringLiteral = JSVM_StringLiteral;
JSVM_StringLiteral.type = "StringLiteral";
class JSVM_Regex extends JSVM_Node {
    constructor(patternId = -1, flagsId = -1) {
        super(JSVM_Regex.type);
        this.patternId = patternId;
        this.flagsId = flagsId;
    }
}
exports.JSVM_Regex = JSVM_Regex;
JSVM_Regex.type = "Regex";
class JSVM_Boolean extends JSVM_Node {
    constructor(val) {
        super(JSVM_Boolean.type);
        this.val = val;
    }
}
exports.JSVM_Boolean = JSVM_Boolean;
JSVM_Boolean.type = "Boolean";
class JSVM_Declaration extends JSVM_Node {
    constructor() {
        super(JSVM_Declaration.type);
        this.declarations = [];
    }
}
exports.JSVM_Declaration = JSVM_Declaration;
JSVM_Declaration.type = "VariableDeclaration";
class JSVM_Return extends JSVM_Node {
    constructor(arg) {
        super(JSVM_Return.type);
        this.arg = arg;
    }
}
exports.JSVM_Return = JSVM_Return;
JSVM_Return.type = "Return";
class JSVM_UnaryNot extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryNot.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryNot = JSVM_UnaryNot;
JSVM_UnaryNot.type = "UnaryNot";
class JSVM_UnaryPlus extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryPlus.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryPlus = JSVM_UnaryPlus;
JSVM_UnaryPlus.type = "UnaryPlus";
class JSVM_UnaryTypeof extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryTypeof.type);
        // dont throw a reference error when loading a global variable from typeof(varName)
        if (argument.type === JSVM_Identifier.type) {
            const arg = argument;
            if (arg.global) {
                arg.throwReferenceError = false;
            }
        }
        this.argument = argument;
    }
}
exports.JSVM_UnaryTypeof = JSVM_UnaryTypeof;
JSVM_UnaryTypeof.type = "UnaryTypeof";
class JSVM_UnaryNegate extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryNegate.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryNegate = JSVM_UnaryNegate;
JSVM_UnaryNegate.type = "UnaryNegate";
class JSVM_UnaryInvert extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryInvert.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryInvert = JSVM_UnaryInvert;
JSVM_UnaryInvert.type = "UnaryInvert";
class JSVM_UnaryVoid extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryVoid.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryVoid = JSVM_UnaryVoid;
JSVM_UnaryVoid.type = "UnaryVoid";
class JSVM_UnaryDelete extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryDelete.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryDelete = JSVM_UnaryDelete;
JSVM_UnaryDelete.type = "UnaryDelete";
class JSVM_UnaryDeleteMemberExpression extends JSVM_Node {
    constructor(argument) {
        super(JSVM_UnaryDeleteMemberExpression.type);
        this.argument = argument;
    }
}
exports.JSVM_UnaryDeleteMemberExpression = JSVM_UnaryDeleteMemberExpression;
JSVM_UnaryDeleteMemberExpression.type = "UnaryDeleteMemberExpression";
class JSVM_CreateFunc extends JSVM_Node {
    constructor(scope_id) {
        super(JSVM_CreateFunc.type);
        this.scope_id = scope_id;
    }
}
exports.JSVM_CreateFunc = JSVM_CreateFunc;
JSVM_CreateFunc.type = "CreateFunc";
class JSVM_MoveArgToVar extends JSVM_Node {
    constructor(arg_index, var_id) {
        super(JSVM_MoveArgToVar.type);
        this.arg_index = -1;
        this.var_id = -1;
        this.arg_index = arg_index;
        this.var_id = var_id;
    }
}
exports.JSVM_MoveArgToVar = JSVM_MoveArgToVar;
JSVM_MoveArgToVar.type = "MoveArgToVar";
class JSVM_ObjectPlusPlus extends JSVM_Node {
    constructor(prefix, object, property) {
        super(JSVM_ObjectPlusPlus.type);
        this.prefix = prefix;
        this.object = object;
        this.property = property;
    }
}
exports.JSVM_ObjectPlusPlus = JSVM_ObjectPlusPlus;
JSVM_ObjectPlusPlus.type = "ObjectPlusPlus";
class JSVM_ObjectMinusMinus extends JSVM_Node {
    constructor(prefix, object, property) {
        super(JSVM_ObjectMinusMinus.type);
        this.prefix = prefix;
        this.object = object;
        this.property = property;
    }
}
exports.JSVM_ObjectMinusMinus = JSVM_ObjectMinusMinus;
JSVM_ObjectMinusMinus.type = "ObjectMinusMinus";
class JSVM_PlusPlus extends JSVM_Node {
    constructor(prefix, varId, funcScopeId) {
        super(JSVM_PlusPlus.type);
        this.prefix = prefix;
        this.varId = varId;
        this.funcScopeId = funcScopeId;
    }
}
exports.JSVM_PlusPlus = JSVM_PlusPlus;
JSVM_PlusPlus.type = "PlusPlus";
class JSVM_MinusMinus extends JSVM_Node {
    constructor(prefix, varId, funcScopeId) {
        super(JSVM_MinusMinus.type);
        this.prefix = prefix;
        this.varId = varId;
        this.funcScopeId = funcScopeId;
    }
}
exports.JSVM_MinusMinus = JSVM_MinusMinus;
JSVM_MinusMinus.type = "MinusMinus";
class JSVM_Declare extends JSVM_Node {
    constructor(varId, funcScopeId, init) {
        super(JSVM_Declare.type);
        this.varId = varId;
        this.funcScopeId = funcScopeId;
        this.init = init;
    }
}
exports.JSVM_Declare = JSVM_Declare;
JSVM_Declare.type = "Declare";
class JSVM_LoadInt extends JSVM_Node {
    constructor(value) {
        if (value === undefined)
            throw "Needs defined int!";
        super(JSVM_LoadInt.type);
        this.value = value;
    }
}
exports.JSVM_LoadInt = JSVM_LoadInt;
JSVM_LoadInt.type = "LoadInt";
class JSVM_LoadNull extends JSVM_Node {
    constructor() {
        super(JSVM_LoadNull.type);
    }
}
exports.JSVM_LoadNull = JSVM_LoadNull;
JSVM_LoadNull.type = "LoadNull";
class JSVM_LoadUndefined extends JSVM_Node {
    constructor() {
        super(JSVM_LoadUndefined.type);
    }
}
exports.JSVM_LoadUndefined = JSVM_LoadUndefined;
JSVM_LoadUndefined.type = "LoadUndefined";
class JSVM_Identifier extends JSVM_Node {
    constructor(global, scope_id, var_id, string_id) {
        super(JSVM_Identifier.type);
        this.throwReferenceError = true;
        this.global = global;
        this.scope_id = scope_id;
        this.var_id = var_id;
        this.string_id = string_id;
    }
}
exports.JSVM_Identifier = JSVM_Identifier;
JSVM_Identifier.type = "Identifier";
class JSVM_SelfFnRef extends JSVM_Node {
    constructor(varId, scopeId) {
        super(JSVM_SelfFnRef.type);
        this.varId = varId;
        this.scopeId = scopeId;
    }
}
exports.JSVM_SelfFnRef = JSVM_SelfFnRef;
JSVM_SelfFnRef.type = "SelfFnRef";
class JSVM_ArgumentsRef extends JSVM_Node {
    constructor(varId) {
        super(JSVM_ArgumentsRef.type);
        this.varId = varId;
    }
}
exports.JSVM_ArgumentsRef = JSVM_ArgumentsRef;
JSVM_ArgumentsRef.type = "ArgumentsRef";
class JSVM_This extends JSVM_Node {
    constructor() {
        super(JSVM_This.type);
    }
}
exports.JSVM_This = JSVM_This;
JSVM_This.type = "This";
class JSVM_Break extends JSVM_Node {
    constructor() {
        super(JSVM_Break.type);
    }
}
exports.JSVM_Break = JSVM_Break;
JSVM_Break.type = "Break";
class JSVM_ContinueStatement extends JSVM_Node {
    constructor() {
        super(JSVM_ContinueStatement.type);
    }
}
exports.JSVM_ContinueStatement = JSVM_ContinueStatement;
JSVM_ContinueStatement.type = "Continue";
