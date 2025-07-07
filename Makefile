# Makefile for P4.1 Horizon

.PHONY: help dev build migrate createsuper lint test clean

help:
	@echo "Available commands:"
	@echo "  make dev           - Run Django in development mode (localhost:8000)"
	@echo "  make build         - Build Docker containers"
	@echo "  make migrate       - Apply database migrations"
	@echo "  make createsuper   - Create a Django superuser"
	@echo "  make lint          - Run code formatters and linters"
	@echo "  make test          - Run tests with coverage"
	@echo "  make clean         - Remove __pycache__ and *.pyc files"

dev:
	docker-compose up

build:
	docker-compose build

migrate:
	docker-compose exec web python manage.py migrate

createsuper:
	docker-compose exec web python manage.py createsuperuser

lint:
	black ./src && isort ./src && flake8 ./src

test:
	docker-compose exec web pytest --cov=apps

clean:
	find . -type d -name "__pycache__" -exec rm -r {} + && find . -name "*.pyc" -delete
