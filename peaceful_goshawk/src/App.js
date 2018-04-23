import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Peaceful Goshawk',
    }
  }
  render() {

    const { title } = this.state;

    return <div>
      <AppBar
        title={title}
        iconClassNameLeft="material-icons mi-memory"
        iconClassNameRight="material-icons mi-memory"
        zDepth={2}
      />
      <p>This website uses React and Material UI</p>
      <h2>Integrations of Bootstrap and Foundation with React, Angular and Vue</h2>
      <p>This article <a href="https://www.supinfo.com/articles/single/2694-comparatif-10-frameworks-utilises-front-end">Comparatif de 10 des frameworks utilisés en Front-end.</a> compares Bootstrap, Foundation, Skeleton, Semantic UI, Materialize CSS, Material UI, uikit, Pure CSS, Milligram, and Susy </p>
      <p>One problem with bootstrap is that it uses JQuery.There are ports for <a href="https://react-bootstrap.github.io/">React</a>, <a href="https://ng-bootstrap.github.io/#/home">Angular</a>, and <a href="https://bootstrap-vue.js.org/">Vue</a> </p>
      <p>Foundation also uses JQuery, and there are also ports for <a href="https://react.foundation/">React</a>, <a href="https://circlingthesun.github.io/angular-foundation-6/">Angular</a> and <a href="https://github.com/vue-foundation/vue-foundation">Vue</a></p>
      <p>The problem is, Bootstrap and Foundation evolves, and React, Angular and Vue evolves, and nothing says any of these framework will keep up with the evolutions.</p>
      <p>It is actually more likely that they will remain lock on some specific versions.</p>
      <p>Furthermore, the coverage will probably be partial, with some bugs that will never be fixed.</p>
      <p>Some of them have the goal to completely remove the dependency on JQuery, which may be quite interesting to do, but is difficult to maintain.</p>
    </div>

  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
