import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
import { IconBrandGoogle, IconUserCheck } from '@tabler/icons';
  import { GoogleLoginButton  } from 'react-social-login-buttons';
  
  export function Autenticacion() {
    return (
      <Container size={420} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="paula.mesa@cuartoplano.com" required />
          <Button fullWidth mt="xl" rightIcon={<IconUserCheck size={18} />}>
            Login con usuario
          </Button>
          <Button fullWidth mt="xl" rightIcon={<IconBrandGoogle size={18} />}>
            Login con Google
          </Button>
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" required mt="md" />
          <Group position="apart" mt="md">
            <Checkbox label="Recuérdame" />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
              Olvidaste contraseña?
            </Anchor>
          </Group>
        </Paper>
      </Container>
    );
  }