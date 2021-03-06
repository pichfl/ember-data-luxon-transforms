import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";
import { DateTime } from "ember-luxon";

module("Unit | Transform | luxon DateTime local", function(hooks) {
  setupTest(hooks);

  const dateTime = DateTime.fromISO("1970-01-01T12:00:00.000Z");
  const isoString = dateTime.toISO();

  test("it exists", function(assert) {
    const transform = this.owner.lookup("transform:luxon-date-time-local");

    assert.ok(transform);
  });

  test("it deserializes valid data", function(assert) {
    const transform = this.owner.lookup("transform:luxon-date-time-local");
    const result = transform.deserialize(isoString);

    assert.ok(result);
    assert.equal(result.constructor, DateTime);
    assert.ok(result.isValid);
    assert.ok(dateTime.equals(result));
  });

  test("it skips deserializing null values", function(assert) {
    const transform = this.owner.lookup("transform:luxon-date-time-local");
    const result = transform.deserialize(null);

    assert.equal(result, null);
  });

  test("it serializes valid data", function(assert) {
    const transform = this.owner.lookup("transform:luxon-date-time-local");
    const result = transform.serialize(dateTime);

    assert.ok(transform);
    assert.equal(typeof result, "string");
    assert.equal(result, isoString);
  });
});
