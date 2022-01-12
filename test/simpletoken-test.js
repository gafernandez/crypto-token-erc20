const { expect } = require("chai");

describe("SimpleToken", function () {
    
    const totalSupply = 10000;
    
    
    this.beforeEach(async function() {
        [this.owner] = await hre.ethers.getSigners();
        this.SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
        this.simpletoken = await this.SimpleToken.connect(this.owner).deploy(totalSupply);
    });

    it("Contract Owner - Supply OK", async function(){
        expect(await this.simpletoken.balanceOf(this.owner.address)).to.equal(totalSupply)
    })
});