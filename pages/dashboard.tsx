import { AppShell, Burger, Header, MediaQuery, Navbar, Title, Code, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';
import MapBasic from '../components/MapBasic';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Opciones from '../components/Opciones';

export default function Dashboard() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Opciones />
              </Navbar>}
      header={<Header height={100} p="xl">
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="xl"
                color={theme.colors.gray[6]}
                mr="xl"
              />
          </MediaQuery>
            <Title order={2} weight={800} align="left" color="cyan">Location Intelligence</Title>
            <Link href="https://www.cuartoplano.com/" passHref>
            <Code color="teal">by Cuarto Plano</Code>
            </Link>

              </Header>}
          // eslint-disable-next-line @typescript-eslint/no-shadow
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >

      <MapBasic />
      <ColorSchemeToggle />
    </AppShell>
    </>
  );
}
