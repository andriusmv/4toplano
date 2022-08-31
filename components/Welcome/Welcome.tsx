import { Title, Text, Space, Button } from '@mantine/core';
import Link from 'next/link';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Location<Space h="xs" />
        <Text inherit variant="gradient" component="span">
          Intelligence
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Link href="./dashboard" passHref>
      <Button component="a">Ir al dashboard</Button>
        </Link>
      </Text>
    </>
  );
}
