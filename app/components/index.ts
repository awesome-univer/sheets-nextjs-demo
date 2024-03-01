
import dynamic from 'next/dynamic';

export const Univer = dynamic(
  () => import('./Univer').then(module => module.default) as any,
  { ssr: false },
) as any;
