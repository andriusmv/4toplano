import { AppShell, Burger, Header, MediaQuery, Navbar, Title, useMantineTheme, Grid } from '@mantine/core';
import { useState } from 'react';
import MapCanvas from '../components/MapCanvas';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Opciones from '../components/Opciones';

export default function Dashboard() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
    <AppShell
      padding="xs"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 275, lg: 300 }}>
          <Opciones />
          <ColorSchemeToggle />
              </Navbar>}
      header={<Header height={70} p="xs">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Grid grow align="center">
            <Grid.Col span={1} style={{ minHeight: 30 }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={theme.colors.gray[6]}
                mr="xs"
              />
            </Grid.Col>
            <Grid.Col span={6} style={{ minHeight: 30 }}>
              <Title order={6} weight={800} align="left" variant="gradient">4ºP – Location Intelligence</Title>
            </Grid.Col>
          </Grid>

        </MediaQuery><MediaQuery smallerThan="sm" styles={{ display: 'none' }}>

          <Grid justify="space-around" align="left">
            <Grid.Col span={12} style={{ minHeight: 70 }}>
              <Title order={2} weight={800} align="left" variant="gradient">4ºP – Location Intelligence</Title>
            </Grid.Col>
          </Grid>
                     </MediaQuery>

              </Header>}
          // eslint-disable-next-line @typescript-eslint/no-shadow
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >

      <MapCanvas />
    </AppShell>
    </>
  );
}
