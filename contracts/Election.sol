// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Election {
  // Candidate structure
  struct Candidate {
    uint id;
    string name;
    uint voteCount;
  }

  // Instantiate Candidates
  constructor () public {
    addCandidate("Candidate 1");
    addCandidate("Candidate 2");
  }

  // Iterator to track number of candidates
  uint public candidatesCount;

  // Maps a candidate to an interger key. With it being public this functions as a getter
  mapping(uint => Candidate) public candidates;

  // Maps voter hash to boolean. Will use this to keep track of if a wallet has voted
  mapping(address => bool) public voters;

  // Function that increments candidate count, and creates a new candidate mapped to the id in candidates.
  // This newly created candidate is instantiated with an ID of the candidateCount iterator, name passed to function,
  // and 0 voteCount
  function addCandidate (string memory _name) private {
    candidatesCount ++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }

  function vote (uint _candidateId) public {
    require(!voters[msg.sender], "User already voted"); // Make sure message sender hasnt voted before

    require(0 < _candidateId && _candidateId <= candidatesCount, "Not a valid Candidate ID"); // Make sure _candidiateId is a valid ID

    candidates[_candidateId].voteCount++; // Increment candidates voteCount

    voters[msg.sender] = true; // Mark address as voted
  }
}