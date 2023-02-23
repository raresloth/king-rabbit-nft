const KingRabbit = artifacts.require("./KingRabbit.sol");

module.exports = function(deployer) {
	deployer.deploy(KingRabbit);
};
