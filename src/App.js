import React from "react";
import "./App.css";

import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";


function App() {
  return (
    //     <div className="demo-big-content">
    //     <Layout>
    //         <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Protfolio</Link>}  scroll>
    //             <Navigation>

    //                 <Link to="/resume">Resume</Link>
    //                 <Link to="/aboutme">About Me</Link>
    //                 <Link to="/projects">Projects</Link>
    //                 <Link to="/contact">Contact</Link>
    //             </Navigation>
    //         </Header>
    //         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Protfolio</Link>}>
    //             <Navigation>
    //                 <Link to="/resume">Resume</Link>
    //                 <Link to="/aboutme">About Me</Link>
    //                 <Link to="/projects">Projects</Link>
    //                 <Link to="/contact">Contact</Link>
    //             </Navigation>
    //         </Drawer>
    //         <Content>
    //             <div className="page-content" />
    //             <Main />
    //         </Content>
    //     </Layout>
    // style={{ height: "300px", position: "relative" }}
    // </div>

    <div  className="demo-big-content">
      <Layout fixedHeader>
        <Header
        className="header-color"
        title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Protfolio</Link>}
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

  );
}

export default App;
