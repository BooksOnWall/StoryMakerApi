module.exports = {
  apps : [{
    name: 'StoryMakerApi'
    script: 'server.js',
    watch: '.'
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    error_file: '/var/booksonwall/api/logs/server_error.log',
    out_file: '/var/booksonwall/api/logs/server_access.log',
    log_file: 'combined.log',
    time: true
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
