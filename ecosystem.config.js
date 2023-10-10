module.exports = {
    apps: [
        {
            name: 'Shift DAO',
            script: 'yarn',
            args: 'start',
            watch: true,
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
