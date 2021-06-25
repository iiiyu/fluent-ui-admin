import Test from '../components/Test';



interface RouteBase {
  name: string;
  path: string;
  component: React.FC;
  subs?: RouteBase[];
}

export const routes: RouteBase[] = [
  {
    name: 'Test',
    path: '/test',
    component: Test,
  },
  {
    name: 'Test',
    path: '/tacos',
    component: Test,
    subs: [
      {
        name: 'Test',
        path: '/tacos/bus',
        component: Test,
      },
      {
        path: '/tacos/cart',
        name: 'Test',
        component: Test,
      },
    ],
  },
];
