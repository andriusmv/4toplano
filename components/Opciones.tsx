import { IconTableShortcut, IconTableOptions, IconLogout, IconBabyCarriagelabel } from '@tabler/icons';
import { Box, NavLink } from '@mantine/core';
import Link from 'next/link';

export default function Opciones() {
  return <Box sx={{ width: 240 }}>
  <NavLink
    label="Filtrar por área"
    icon={<IconTableOptions size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Pequeños (hasta 1 Ha)" />
    <NavLink label="Medianos (hasta 10 Ha)" />
    <NavLink label="Grandes (hasta 100 Ha)" />
    <NavLink label="Muy Grandes (hasta 500 Ha)" />
  </NavLink>
  <NavLink
    label="Filtrar por tipo"
    icon={<IconTableShortcut size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Lotes Urbanos" />
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
