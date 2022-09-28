const axios = require("axios");

//not an async function
const contributorCount = (repositories, contributorsList) => {
  let repositoryContributorCount = [];
  for (let i = 0; i < repositories.length; i++) {
    repositoryContributorCount.push({
      name: repositories[i].name,
      numberOfContributors: contributorsList[i].length,
    });
  }
  return repositoryContributorCount;
};


//async

async function getRepoContributors(repo) {
    const contributorsReponse = await axios.get(repo.contributors_url);
    return await contributorsReponse.data;
}
// const getRepoContributors = async (repo) => {
//   const contributorsReponse = await axios.get(repo.contributors_url);
//   return await contributorsReponse.data;
// };


//async

// async function getAllRepos(repos){
//     const newRepos = repos.slice(0, 5);
//     const res = await newRepos.map((getRepoContributors()))
//     await (contributors) => {
//         return contributorCount(newRepos, contributors);
// }

const getAllRepos = (repos) => {
    console.log("b")
  const newRepos = repos.slice(0, 5);
  return Promise.all(newRepos.map(getRepoContributors)).then((contributors) => {
    return contributorCount(newRepos, contributors);
  });
};

// 19.5 
//async
async function listRepoContributorCounts() {
    console.log("a")
  const response = await axios.get("https://api.github.com/orgs/wesabe/repos")
//   console.log(response.data.repos)
    //.then((response) => console.log(response.data))
  await getAllRepos(response.data)
    // .then(getAllRepos)
    .then((repositoryContributorCounts) => {
      return repositoryContributorCounts;
    })
    .catch((error) => {
      return error;
    });
}




// clear

module.exports = { listRepoContributorCounts };
