module.exports = {
  	apps: [{
      name: 'server',
          script: './index.js'
	    }],
	deploy: {
	    production: {
		    user: 'ubuntu',
			host: 'ec2-54-149-199-30.us-west-2.compute.amazonaws.com',
			key: '/c/aws/home.pem',
			ref: 'origin/master',
			repo: 'git@github.com:BarneyStaddon/server.git',
			path: '/home/ubuntu/server',
					'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
			}
	}
}
