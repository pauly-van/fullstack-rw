import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.repos.map((repo)=>{
            return (
              <tr key={repo._id}>
                <td>{repo.id}</td>
                <td>{repo.owner}</td>
                <td>{repo.url}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
)

export default RepoList;