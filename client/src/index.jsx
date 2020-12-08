import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const url = 'http://localhost:1128';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount(){
    $.get('/repos', (repoArr)=>{
      console.log('success');
    })
    .done((repoArr)=>{
      this.setState({
        repos: repoArr
      });
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: url+'/repos',
      dataType: 'text',
      data: {"gitHandle": term}
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));