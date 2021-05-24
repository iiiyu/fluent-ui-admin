import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Test from '../Test';
function BasicLayout() {
  const {path, url} = useRouteMatch();
  console.log(path);
  return (
    <div className="">
      <Header></Header>
      <nav className="border-r border-gray-100 h-full top-12 fixed w-60 overflow-y-auto">
        <SideMenu></SideMenu>
      </nav>
      <main className="mt-12 ml-60 h-full fixed">
        <div className="fixed w-full h-auto">
          <Breadcrumb></Breadcrumb>
        </div>

        <div className="p-6 overflow-y-auto mt-12 h-full">
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/test`} component={Test}></Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default BasicLayout;
