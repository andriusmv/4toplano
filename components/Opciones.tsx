import { IconTableShortcut, IconTableOptions, IconLogout, IconPoint, IconBrandTwitter } from '@tabler/icons';
import { Avatar, Badge, Box, Button, NavLink } from '@mantine/core';
import Link from 'next/link';

export default function Opciones() {
  return <Box sx={{ width: 240 }}>
  <NavLink
    label="Filtrar por área"
    icon={<IconTableOptions size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Pequeños (hasta 1 Ha)" icon={<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      styles={(theme) => ({
        root: {
          backgroundColor: '#e85c90',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#e85c90', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    />} />
    <NavLink label="Medianos (hasta 10 Ha)" icon={<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      styles={(theme) => ({
        root: {
          backgroundColor: '#b88daf',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#b88daf', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    />}/>
    <NavLink label="Grandes (hasta 100 Ha)" icon={<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      styles={(theme) => ({
        root: {
          backgroundColor: '#88becd',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#88becd', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    />}/>
    <NavLink label="Muy Grandes (hasta 500 Ha)" icon={<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      styles={(theme) => ({
        root: {
          backgroundColor: '#58efec',
          border: 0,
          height: 20,
          width: 20,
          paddingLeft: 5,
          paddingRight: 5,

          '&:hover': {
            backgroundColor: theme.fn.darken('#58efec', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    />}/>
    
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
