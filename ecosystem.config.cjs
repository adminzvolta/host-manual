// pm2 startup config for host-manual.zvolta.com
// Usage:
//   pm2 start ecosystem.config.cjs
//   pm2 save
//   pm2 startup   (follow the printed instructions to enable boot persistence)

module.exports = {
  apps: [
    {
      name: 'host-manual',
      cwd: __dirname,
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      out_file: '/var/log/pm2/host-manual.out.log',
      error_file: '/var/log/pm2/host-manual.error.log',
      time: true,
    },
  ],
};
