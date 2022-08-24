import { Paper } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Autenticacion } from '../components/Autenticacion';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Paper>
        <Autenticacion />
      <ColorSchemeToggle />
      </Paper>
    </>
  );
}
