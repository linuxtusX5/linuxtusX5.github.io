import React from 'react';
import { Tab, Tabs } from "react-bootstrap";
import CustomIBITS from '../custom_Tabs_IBITS/CUSTOMBSIT';
import '../organization/org.css';
import CUSTOMDICT from '../custom_Tabs_IBITS/CUSTOMDICT';
import CUSTOMDCET from '../custom_Tabs_IBITS/CUSTOMDCET';

const IBITSTABS = () => {
    return (
      <div class="wtf">
        <h2
          className="d-flex justify-content-center mt-3"
          style={{ color: "#ff0", padding: "10px" }}
        >
          INSTITUTE OF BRILLIANT INFORMATION TECHNOLOGY STUDENT (IBITS)
        </h2>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          style={{ backgroundColor: "#800" }}
        >
          <Tab
            style={{ backgroundColor: "#1B1811" }}
            eventKey="home"
            title="BSIT"
          >
            <CustomIBITS />
          </Tab>
          <Tab eventKey="profile" title="DICT">
            <CUSTOMDICT />
          </Tab>
          <Tab eventKey="contact" title="DCET">
            <CUSTOMDCET/>
          </Tab>
        </Tabs>
      </div>
    );
}
export default IBITSTABS;