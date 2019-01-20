# ember-data-luxon-transforms

Ember Data transforms which use Luxon for Date and Time primitives based on [ember-luxon.](https://github.com/willrax/ember-luxon)

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above

## Installation

```
ember install ember-data-luxon-transforms
```

## Usage

```js
import DS from "ember-data";

export default DS.Model.extend({
  createdAt: DS.attr("luxon-date-time"),
  updatedAt: DS.attr("luxon-date-time"),
  duration: DS.attr("luxon-duration"),
  next: DS.attr("luxon-interval"),
});
```

## License

This project is licensed under the [MIT License](LICENSE.md).
