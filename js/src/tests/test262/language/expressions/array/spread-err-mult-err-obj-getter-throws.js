// This file was procedurally generated from the following sources:
// - src/spread/mult-err-obj-getter-throws.case
// - src/spread/error/array.template
/*---
description: Object Spread operator results in error when there is an getter that throws an exception (Array initializer)
esid: sec-runtime-semantics-arrayaccumulation
es6id: 12.2.5.2
features: [object-spread]
flags: [generated]
info: |
    SpreadElement : ...AssignmentExpression

    1. Let spreadRef be the result of evaluating AssignmentExpression.
    2. Let spreadObj be ? GetValue(spreadRef).
    3. Let iterator be ? GetIterator(spreadObj).
    4. Repeat
       a. Let next be ? IteratorStep(iterator).
       b. If next is false, return nextIndex.
       c. Let nextValue be ? IteratorValue(next).
       d. Let status be CreateDataProperty(array, ToString(ToUint32(nextIndex)),
          nextValue).
       e. Assert: status is true.
       f. Let nextIndex be nextIndex + 1.

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/

assert.throws(Test262Error, function() {
  [{a: 1, ...{ get foo() { throw new Test262Error(); } }}];
});

reportCompare(0, 0);