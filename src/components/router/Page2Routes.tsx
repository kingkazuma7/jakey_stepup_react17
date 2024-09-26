import { Page2 } from './Page2';
import { Page2DetailA } from './Page2DetailA';
import { UrlParameter } from './UrlParameter';

export const Page2Routes = [
  {
    path: '/',
    exact: true,
    children: <Page2 />,
  },
  {
    path: '/detailA',
    exact: false,
    children: <Page2DetailA />,
  },
  {
    path: '/:id',
    exact: false,
    children: <UrlParameter />,
  },
];
