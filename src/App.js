import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/screens/Home';
import CreateBrief from './components/screens/CreateBrief';
import AmplificationForm from './components/forms/Amplification/MainForm';
import ContentCreativeForm from './components/forms/ContentAndCreative/MainForm';
import IntegratedForm from './components/forms/Integrated/MainForm';
import ResearchInsightsForm from './components/forms/ResearchAndInsights/MainForm';

function App() {
  return (
      <div>
        <Switch>
          <Route path="/createbrief">
            <CreateBrief/>
          </Route>
          <Route path="/amplification">
            <AmplificationForm/>
          </Route>
          <Route path="/content-creative">
            <ContentCreativeForm/>
          </Route>
          <Route path="/integrated">
            <IntegratedForm/>
          </Route>
          <Route path="/research-insights">
            <ResearchInsightsForm/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
