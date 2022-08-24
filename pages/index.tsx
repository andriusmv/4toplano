import { Anchor, Paper } from '@mantine/core';
import Link from 'next/link';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Paper>
      <Link href="/dashboard" passHref>
      <Anchor component="a" align="center">Ir al dashboard</Anchor>
      </Link>
      <ColorSchemeToggle />
      </Paper>
    </>
  );
}
