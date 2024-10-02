import Overlay from '../components/Overlay';
import { Logo } from '@pmndrs/branding';

export default function Over() {
  return (
    <>
      <Overlay />
      <Logo className="absolute bottom-10 left-10 w-8" />
    </>
  );
}