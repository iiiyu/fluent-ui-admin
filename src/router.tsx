import {Switch, Route} from 'react-router-dom';

// 一级菜单
import Demo1 from './pages/demo1';
// import demo2 from './pages/demo2';

function RouteChildren() {
  return (
    <Route
      render={() => {
        return (
          <Switch>
            <Route path="/demo1" component={Demo1}></Route>
            {/* <Route path="/demo2" component={demo2}></Route> */}
          </Switch>
        );
      }}
    ></Route>
  );
}

export default RouteChildren;
