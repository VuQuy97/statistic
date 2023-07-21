//React bootstrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//component

import ProductsStatitic from '../Components/ProductsStatitic';
import CartsStatistic from '../Components/CartsStatistic';
import UsersStatitic from '../Components/UsersStatitic';

export default function StatisticBoard() {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Products">
          <ProductsStatitic />
        </Tab>
        <Tab eventKey="profile" title="Carts">
          <CartsStatistic />
        </Tab>
        <Tab eventKey="contact" title="Users">
          <UsersStatitic />
        </Tab>
      </Tabs>
    </div>
  )
}
