var lib = process.env.BEARCAT_DAO_COV ? 'lib-cov' : 'lib';

var RedisConnectionManager = require('../../../' + lib + '/connection/cache/redisConnectionManager');
var should = require('should');

describe('bearcat-dao', function() {
	describe('redisConnectionManager', function() {
		it('should getConnection right', function(done) {
			var redisConnectionManager = new RedisConnectionManager();

			var connection = redisConnectionManager.getConnection();

			should.exist(connection);
			redisConnectionManager.on('ready', function() {
				done();
			});
		});
	})
});