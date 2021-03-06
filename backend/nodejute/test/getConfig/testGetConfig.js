YUI({
    logInclude: { TestRunner: true },
}).use('jute', function(Y) {

    var suite     = new Y.Test.Suite('getConfig'),
        getConfig = require('./getConfig', true), // 'true' here means do code coverae on it!
        fs         = require('fs');

    suite.add(new Y.Test.Case({
        setUp: function() {
            this.expectedKeys = { 
                uid: 12139982,
                gid: 295949,
                port: '8080',
                docRoot: '/home/trostler/JUTE/backend/nodejute',
                testDir: '/home/trostler/JUTE/backend/nodejute/test',
                outputDir: '/home/trostler/JUTE/backend/nodejute/tmp',
                java: '/usr/bin/java',
                logFile: '/tmp/FF.log',
                logFormat: '',
                testRegex: '*.htm*',
                outputDirWeb: '/tmp',
                testDirWeb: 'test'
            };
        },
        testIsFunction : function () {
            Y.Assert.isFunction(getConfig);
        },
        testGetObject : function () {
            Y.Assert.isObject(getConfig());
        },
        testKeyNum : function () {
            Y.Assert.areEqual(Object.keys(this.expectedKeys).length, Object.keys(getConfig()).length);
        },
        testKeys : function () {
            var config = getConfig();
            for (var key in config) {
                Y.Assert.isNotNull(this.expectedKeys[key]);
            }
        }
    }));

    Y.Test.Runner.add(suite);
    Y.UnitTest.go();
});

