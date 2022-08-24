import { IconGauge, IconFingerprint, IconLogout, IconFileSpreadsheet, IconMap } from '@tabler/icons';
import { Box, NavLink, Slider, RangeSlider } from '@mantine/core';
import Link from 'next/link';

export default function Opciones() {
  return <Box sx={{ width: 240 }}>
  <NavLink
    label="Filtrar por área"
    icon={<IconGauge size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Lotes < 5 Ha" />
    <NavLink label="Lotes > 100 Ha" />
    <NavLink label="Filtrar por tipo" childrenOffset={28}>
      <NavLink label="Lote rural" />
      <NavLink label="Lote urbano" />
    </NavLink>
  </NavLink>

  <NavLink
    label="Realizar búsqueda"
    icon={<IconFingerprint size={16} stroke={1.5} />}
    childrenOffset={28}
  >
    <NavLink label="Por tamaño" />
    <NavLink label="Por tipo" />
    <NavLink label="Por cercanía" />
  </NavLink>
  <NavLink
    label="Exportar a Excel"
    icon={<IconFileSpreadsheet size={16} stroke={1.5} />}
    childrenOffset={28}
  />
    <NavLink
      label="Generar ruta al lote"
      icon={<IconMap size={16} stroke={1.5} />}
      childrenOffset={28}
    />
  <Link href="./" passHref>
  <NavLink
    label="Volver al inicio"
    icon={<IconLogout size={16} stroke={1.5} />}
    childrenOffset={28}
    />
    </Link>
  <Slider defaultValue={60} color="cyan" />
      <RangeSlider
        color="cyan"
        mt="xl"
        mb="xl"
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
         </Box>;
}
