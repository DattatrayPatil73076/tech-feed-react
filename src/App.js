import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  CssBaseline,
  Container,
  Typography,
} from "@material-ui/core";

//pages
import Articles from "./pages/Articles";

import Form from "./pages/Form";
function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const changeTab = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Typography variant="h3" align="center" style={{ margin: 20 }}>
          Tech-Feed{" "}
          <span role="img" arial-label="tech-feed">
            {" "}
            👨‍💻{" "}
          </span>
        </Typography>

        <AppBar style={{ marginBottom: 20 }} position="sticky">
          <Tabs value={currentTab} onChange={changeTab} centered>
            <Tab label="All " id="login-tab" aria-controls="login-panel" />
            <Tab label="Beginners" id="about-tab" aria-controls="abou-panel" />
            <Tab label="FullStack" id="about-tab" aria-controls="abou-panel" />
            <Tab label="Dev-Ops" id="about-tab" aria-controls="abou-panel" />
          </Tabs>
        </AppBar>

        <div role="tabpanel" hidden={currentTab !== 0}>
          <Form />
        </div>

        <div role="tabpanel" hidden={currentTab !== 1}>
          <Articles str1={"beginner"} />
        </div>

        <div role="tabpanel" hidden={currentTab !== 2}>
          <Articles str1={"fullstack"} />
        </div>

        <div role="tabpanel" hidden={currentTab !== 3}>
          <Articles str1={"devops"} />
        </div>
      </Container>
    </div>
  );
}

export default App;
