# === Makefile для P4.1 Horizon ===

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
	docker compose up

# 🐳 Docker-команди

build:
	docker compose build

up:
	docker compose up --build
	$(MAKE) nginx-reload

upd:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose down && docker-compose up

logs:
	docker compose logs -f

# Nginx-команди

nginx-reload:
	docker compose exec nginx nginx -s reload


# ⚙️ Django-команди

run-dev:
	docker compose exec backend python manage.py runserver 0.0.0.0:8000 --settings=config.settings.dev

migrate:
	docker compose exec backend python manage.py migrate --settings=config.settings.dev


createsuper:
	docker compose exec web python manage.py createsuperuser

# === Frontend: Vite-команди ===

dev-frontend:
	docker compose exec frontend yarn dev

build-frontend:
	docker compose exec frontend yarn build

lint-frontend:
	docker compose exec frontend yarn lint

preview-frontend:
	docker compose exec frontend yarn preview

# 🧪 Тести (опціонально)

test:
	docker compose exec backend python manage.py test

pytest:
	docker compose exec web pytest --cov=apps

shell:
	docker compose exec backend python manage.py shell

# 🧹 Форматування (black/isort)
format:
	docker compose exec backend black .
	docker compose exec backend isort .

# 🧾 Лінтинг (flake8)
lint:
	black ./src && isort ./src && flake8 ./src


clean:
	find . -type d -name "__pycache__" -exec rm -r {} + && find . -name "*.pyc" -delete

# Deploy

deploy:
	$(MAKE) collectstatic
	$(MAKE) migrate
	$(MAKE) up

