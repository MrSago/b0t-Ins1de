
MINBUILD=/tmp/b0t-Ins1de_minbuild.js
BOTTIME=/tmp/b0t-Ins1de_bottime.js


build: min bot-time
	cat $(MINBUILD) once.js message.js $(BOTTIME) > main.js
	rm $(MINBUILD) $(BOTTIME)

start: build
	pm2 restart b0t-Ins1de

test: build
	pm2 stop b0t-Ins1de
	node main.js

min:
	cat discord-auth.js settings.js tools.js > $(MINBUILD)

bot-time:
	cat bot-phrases.js bot-time.js > $(BOTTIME)

