import { Paper } from '@mantine/core';
import MapBasic from '../components/MapBasic';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function Dashboard() {
  return (
    <>
    <Paper shadow="md" p="md" withBorder>
      <MapBasic />
    </Paper>
      <ColorSchemeToggle />
    </>
  );
}
