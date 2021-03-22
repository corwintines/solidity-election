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

  // Function that increments candidate count, and creates a new candidate mapped to the id in candidates.
  // This newly created candidate is instantiated with an ID of the candidateCount iterator, name passed to function,
  // and 0 voteCount
  function addCandidate (string memory _name) private {
    candidatesCount ++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }
}