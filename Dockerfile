# Dockerfile

FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Системні залежності
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev netcat-openbsd gcc && \
    pip install --upgrade pip

# Копіюємо залежності
COPY backend/requirements.txt .
RUN pip install -r requirements.txt

# Копіюємо код
COPY backend /app

# Команда за замовчуванням
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
