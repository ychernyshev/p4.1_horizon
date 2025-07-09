# backend/Dockerfile

FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /backend/gunicorn/

# 🔧 Системні залежності
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    netcat-openbsd \
    gcc && \
    pip install --upgrade pip

# 🔧 Встановлення Python-залежностей
COPY requirements.txt .
RUN pip install -r requirements.txt

# 🔧 Копіюємо весь код
COPY . .

# 🔧 Копіюємо Gunicorn-конфіг (якщо він окремий)
COPY gunicorn/gunicorn.conf.py /app/gunicorn/gunicorn.conf.py

# 🔧 Запуск через Gunicorn
CMD ["gunicorn", "--config", "gunicorn/gunicorn.conf.py", "config.wsgi:application"]
