import { IconTableShortcut, IconTableOptions, IconLogout, IconPoint } from '@tabler/icons';
import { Avatar, Badge, Box, NavLink } from '@mantine/core';
import Link from 'next/link';

export default function Opciones() {
  return <Box sx={{ width: 240 }}>
  <NavLink
    label="Filtrar por área"
    icon={<IconTableOptions size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Pequeños (hasta 1 Ha)" icon={<Avatar src="../E85C90.jpg" alt="pequeños" size="xs" />}/>
    <NavLink label="Medianos (hasta 10 Ha)" icon={<Avatar src="../B88DAF.jpg" alt="medianos" size="xs" />}/>
    <NavLink label="Grandes (hasta 100 Ha)" icon={<Avatar src="../88BECD.jpg" alt="grandes" size="xs" />}/>
    <NavLink label="Muy Grandes (hasta 500 Ha)" icon={<Avatar src="../58EFEC.jpg" alt="muy grandes" size="xs" />}/>
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
