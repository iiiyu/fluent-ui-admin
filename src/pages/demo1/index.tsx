import {Switch, Route, RouteComponentProps} from 'react-router-dom';

import Page1 from './page1';
import Page2 from './page2';

interface RouteParams {
  id: string;
}

function Demo1(props: RouteComponentProps<RouteParams>) {
  return (
    <Switch>
      <Route path={`${props.match.path}`} exact component={Page1} />
      <Route path={`${props.match.path}/page1`} component={Page1} />
      <Route path={`${props.match.path}/page2`} component={Page2} />
    </Switch>
  );
}

export default Demo1;
