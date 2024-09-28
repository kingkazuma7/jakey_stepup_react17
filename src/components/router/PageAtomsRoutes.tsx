import { Atoms } from '../atoms/Atoms';

export const PageAtomsRoutes = [
  {
    path: '/',
    exact: true,
    children: <Atoms />,
  },
];
