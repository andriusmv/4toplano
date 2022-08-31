import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        // subscribe to color scheme changes right in your styles
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        width: 1000,
        height: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: theme.radius.sm,
    },
}));
