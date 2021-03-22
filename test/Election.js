var Election = artifacts.require('./Election.sol')

contract("Election", function() {
  let election
  it("Initializes with two candidates", () => {
    return Election.deployed().then((instance) => {
      return instance.candidatesCount();
    }).then((count) => {
      assert.equal(count, 2);
    });
  });

  it("Initializes the candidates wtih the correct values", () => {
    return Election.deployed().then((instance) => {
      election = instance;
      return election.candidates(1);
    }).then((candidate1) => {
      assert.equal(candidate1.id, 1, 'Correct id for candidate 1')
      assert.equal(candidate1.name, "Candidate 1", "Correct name for candidate 1")
      assert.equal(candidate1.voteCount, 0, "Correct vote counts for candidate 1")
      return election.candidates(2);
    }).then((candidate2) => {
      assert.equal(candidate2.id, 2, 'Correct id for candidate 2')
      assert.equal(candidate2.name, "Candidate 2", "Correct name for candidate 2")
      assert.equal(candidate2.voteCount, 0, "Correct vote counts for candidate 2")
    })
  })
});