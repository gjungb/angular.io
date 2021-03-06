var Package = require('dgeni').Package;

module.exports = new Package('links', [])

.factory(require('./inline-tag-defs/link'))
.factory(require('./inline-tag-defs/example'))
.factory(require('dgeni-packages/ngdoc/services/getAliases'))
.factory(require('dgeni-packages/ngdoc/services/getDocFromAlias'))
.factory(require('./services/getLinkInfo'))

.config(function(inlineTagProcessor, linkInlineTagDef, exampleInlineTagDef) {
  inlineTagProcessor.inlineTagDefinitions.push(linkInlineTagDef);
  inlineTagProcessor.inlineTagDefinitions.push(exampleInlineTagDef);
});
