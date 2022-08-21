import { Title, Text } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Cuarto Plano{' '}
        <Text inherit variant="gradient" component="span">
          Maps
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Comienza aquí.
      </Text>
    </>
  );
}
