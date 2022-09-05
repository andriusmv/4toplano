import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    body: {
        height: '100%',
        marginLeft: '0',
        marginRight: '0',
        padding: '0',
    },

    html: {
        height: '100%',
        marginLeft: '0',
        marginRight: '0',
        padding: '0',
    },

    wrapper: {
        // subscribe to color scheme changes right in your styles
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
        height: 'auto',
        minHeight: '100%',
        overflow: 'hidden',
    },
}));
