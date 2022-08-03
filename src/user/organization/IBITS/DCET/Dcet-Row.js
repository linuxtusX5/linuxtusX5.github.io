import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Dcet from "./Dcet";
import Dcet2 from "./Dcet2";
import Dcet3 from "./Dcet3";
function DcetRow() {
  return (
    <Tabs
      defaultActiveKey="Dcet1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Dcet1" title="DCET 1">
        <Dcet />
      </Tab>
      <Tab eventKey="Dict2" title="DCET 2">
        <Dcet2 />
      </Tab>
      <Tab eventKey="Dict3" title="DCET 3">
        <Dcet3 />
      </Tab>
    </Tabs>
  );
}

export default DcetRow;
