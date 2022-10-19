import { IconTableShortcut, IconTableOptions, IconLogout } from '@tabler/icons';
import { Box, Button, NavLink } from '@mantine/core';
import Link from 'next/link';

export default function Opciones() {
  return <Box sx={{ width: 240 }}>
  <NavLink
    label="Filtrar por municipio"
    icon={<IconTableOptions size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink
      label="El Carmen"
      icon={<Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        styles={(theme) => ({
        root: {
          backgroundColor: '#aadbea',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#aadbea', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      />}
    />
    <NavLink
      label="El Retiro"
      icon={<Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        styles={(theme) => ({
        root: {
          backgroundColor: '#f4ae7f',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#f4ae7f', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      />}
    />
    <NavLink
      label="El Santuario"
      icon={<Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        styles={(theme) => ({
        root: {
          backgroundColor: '#f4d1b9',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#f4d1b9', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      />}
    />
    <NavLink
      label="Guarne"
      icon={<Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        styles={(theme) => ({
        root: {
          backgroundColor: '#f4d9ed',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#f4d9ed', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
      />}
    />
<NavLink
  label="Marinilla"
  icon={<Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    styles={(theme) => ({
        root: {
          backgroundColor: '#cbdd9f',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#cbdd9f', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
  />}
/>
<NavLink
  label="Rionegro"
  icon={<Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    styles={(theme) => ({
        root: {
          backgroundColor: '#c0e859',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#c0e859', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
  />}
/>
  </NavLink>
  <NavLink
    label="Filtrar por tipo"
    icon={<IconTableShortcut size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Lotes Urbanos •" />
    <NavLink label="Lotes Rurales" />
  </NavLink>
  <Link href="./" passHref>
  <NavLink
    label="Volver al inicio"
    icon={<IconLogout size={16} stroke={1.5} />}
    childrenOffset={28}
  />
  </Link>
         </Box>;
}
