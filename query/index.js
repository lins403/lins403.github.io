module.exports = `
  {
    github {
      repositoryOwner(login: "lins403") {
        repositories(
          first: 8
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          edges {
            node {
              id
              name
              url
              description
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
    }
  }
`;
