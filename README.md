# Find By Primary Key

This is a plugin for the simple ORM library that allows you to easily add in support for using just the primary key with the repository's `find()` method.  This plugin only works with repository referencing a model that has a single primary key value.

# Documentation

Generally, if you want to find a model by the primary key with the simple ORM library, you should have to do this:

```javascript
var model = yield dataLayer.user.find({
  where: {
    id: 123
  }
});
```

First issue that that it is a bit to type.  Also if the primary key changes, you have you change your code besides in your model definition.  This plugin allows you to do this:

```javascript
var model = yield dataLayer.user.find(123);
```

This code is much more concise and wil automatically use the correct field based on the model configuration.

To enable this plugin for a repository, all you have to do is after creating the repository model, add this line:

```javascript
userRepository.plugin(require('simple-orm-find-by-primary-key'));
```

# License

MIT