.PHONY: run stop start down db

run:
	docker-compose up
stop:
	docker-compose stop
start:
	docker-compose up -d
down:
	docker-compose down

import:
	logstash -f import.conf
